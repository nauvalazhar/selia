import fs from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';
import { glob } from 'glob';
import { text, select, confirm, log } from '@clack/prompts';
import { defu } from 'defu';
import type { Setup, SetupStep } from '../schemas/setup-schema';
import { detectFramework } from './detect-framework';
import { installDependencies } from './install-dependencies';
import { abortIfCancel } from '~/lib/utils';
import { detectWorkdir } from '~/lib/detect-workdir';
import picocolors from 'picocolors';
import { detectPackageManager } from './package-manager';

export interface SetupContext {
  [key: string]: any;
}

interface ExecutorOptions {
  cwd?: string;
}

const executable = [
  'prompt',
  'detect-framework',
  'detect-workdir',
  'assert',
  'context-update',
];

export async function executeSetup(
  setup: Setup,
  options: ExecutorOptions = {},
): Promise<SetupContext> {
  const context: SetupContext = {};
  const cwd = options.cwd || process.cwd();

  // Execute steps sequentially, checking condition each time
  for (const step of setup.steps) {
    // Only process setup/context steps (not file operations)
    if (!executable.includes(step.type)) {
      continue; // Skip file operations for phase 2
    }

    // Check condition with CURRENT context
    if (await shouldRunStep(step, context, cwd)) {
      await executeStep(step, context, cwd);
      // Context is updated here, next step will see the new context!
    }
  }

  return context;
}

export async function executeSetupActions(
  setup: Setup,
  context: SetupContext,
  options: ExecutorOptions = {},
): Promise<void> {
  const cwd = options.cwd || process.cwd();

  // Execute action steps sequentially
  for (const step of setup.steps) {
    // Skip setup steps (already done)
    if (executable.includes(step.type)) {
      continue;
    }

    // Evaluate condition with final context
    if (await shouldRunStep(step, context, cwd)) {
      await executeStep(step, context, cwd);
    }
  }
}

export async function previewSetupActions(
  setup: Setup,
  context: SetupContext,
  options: ExecutorOptions = {},
): Promise<string[]> {
  const actions: string[] = [];
  const cwd = options.cwd || process.cwd();

  // Preview action steps only
  for (const step of setup.steps) {
    // Skip setup steps
    if (executable.includes(step.type)) {
      continue;
    }

    // Check if step will run
    if (!(await shouldRunStep(step, context, cwd))) {
      continue;
    }

    // Add to preview
    if (step.type === 'dependencies') {
      const count = Object.keys(step.packages).length;
      const pm = await detectPackageManager(cwd);
      actions.push(`Install ${count} required package${count > 1 ? 's' : ''} with ${picocolors.cyan(pm)}:`);
      actions.push(picocolors.dim(Object.keys(step.packages).join(' ')));
    } else if (step.type === 'file-create') {
      const target = interpolate(step.target, context);
      actions.push(`Create \`${target}\``);
    } else if (step.type === 'file-append') {
      const target = interpolate(step.target, context);
      actions.push(`Append to \`${target}\``);
    } else if (step.type === 'file-update') {
      const target = interpolate(step.target, context);
      actions.push(`Update \`${target}\``);
    } else if (step.type === 'file-update-json') {
      const target = interpolate(step.target, context);
      actions.push(`Update \`${target}\``);
    }
  }

  return actions;
}

async function executeStep(
  step: SetupStep,
  context: SetupContext,
  cwd: string,
): Promise<void> {
  switch (step.type) {
    case 'assert':
      await executeAssert(step, context, cwd);
      break;
    case 'dependencies':
      await executeDependencies(step, cwd);
      break;
    case 'detect-framework':
      await executeDetectFramework(step, context, cwd);
      break;
    case 'detect-workdir':
      await executeDetectWorkdir(step, context, cwd);
      break;
    case 'prompt':
      await executePrompt(step, context, cwd);
      break;
    case 'file-append':
      await executeFileAppend(step, context, cwd);
      break;
    case 'file-create':
      await executeFileCreate(step, context, cwd);
      break;
    case 'file-update':
      await executeFileUpdate(step, context, cwd);
      break;
    case 'file-update-json':
      await executeFileUpdateJson(step, context, cwd);
      break;
    case 'context-update':
      await executeContextUpdate(step, context, cwd);
      break;
  }
}

async function executeContextUpdate(
  step: Extract<SetupStep, { type: 'context-update' }>,
  context: SetupContext,
  cwd: string,
): Promise<void> {
  for (const [key, value] of Object.entries(step.data)) {
    const interpolatedValue =
      typeof value === 'string' ? interpolate(value, context) : value;

    setNestedValue(context, key, interpolatedValue);
  }
}

async function executeAssert(
  step: Extract<SetupStep, { type: 'assert' }>,
  context: SetupContext,
  cwd: string,
): Promise<void> {
  const ok = await runAssertCheck(step.check, context, cwd);

  if (!ok) {
    const message = Array.isArray(step.onFail.message)
      ? step.onFail.message.join('\n')
      : step.onFail.message;

    if (step.onFail?.exit !== false) {
      throw new Error(message);
    }

    // console.warn(message);
  }
}

async function runAssertCheck(
  check: any,
  context: SetupContext,
  cwd: string,
): Promise<boolean> {
  switch (check.type) {
    case 'dependency':
      return checkDependencies(check.packages, cwd);

    case 'file-exists':
      return existsSync(path.join(cwd, check.path));

    case 'framework':
      return check.value.includes(context.framework);

    case 'env':
      return process.env[check.key] !== undefined;

    default:
      throw new Error(`Unknown assert check type: ${check.type}`);
  }
}

async function checkDependencies(
  packages: string[],
  cwd: string,
): Promise<boolean> {
  try {
    const pkgPath = path.join(cwd, 'package.json');
    const pkg = JSON.parse(await fs.readFile(pkgPath, 'utf-8'));

    const deps = {
      ...pkg.dependencies,
      ...pkg.devDependencies,
    };

    return packages.every((name) => deps[name]);
  } catch {
    return false;
  }
}

async function executeDependencies(
  step: Extract<SetupStep, { type: 'dependencies' }>,
  cwd: string,
): Promise<void> {
  await installDependencies(step.packages, cwd);
}

async function executeDetectWorkdir(
  step: Extract<SetupStep, { type: 'detect-workdir' }>,
  context: SetupContext,
  cwd: string,
): Promise<void> {
  const workdir = await detectWorkdir(cwd);
  const saveAs = step.saveAs || step.name;
  setNestedValue(context, saveAs, workdir);
}

async function executeDetectFramework(
  step: Extract<SetupStep, { type: 'detect-framework' }>,
  context: SetupContext,
  cwd: string,
): Promise<void> {
  const [framework, frameworkLabel] = await detectFramework(cwd);

  log.info(
    `Framework: ${picocolors.bgWhiteBright(picocolors.black(` ${frameworkLabel} `))}`,
  );

  const saveAs = step.saveAs || step.name;
  setNestedValue(context, saveAs, framework);
}

async function executePrompt(
  step: Extract<SetupStep, { type: 'prompt' }>,
  context: SetupContext,
  cwd: string,
): Promise<void> {
  let answer: any;

  if (step.promptType === 'text') {
    const input = await text({
      message: step.message,
      placeholder: step.default as string,
      validate: (value) => {
        const actualValue = value || (step.default as string);

        if (step.validate?.required && !actualValue) {
          return 'This field is required';
        }
        if (step.validate?.pattern && actualValue) {
          const regex = new RegExp(step.validate.pattern);
          if (!regex.test(actualValue)) {
            return `Must match pattern: ${step.validate.pattern}`;
          }
        }
      },
    });

    abortIfCancel(input);

    answer = input || step.default;
  } else if (step.promptType === 'select' && step.options) {
    answer = await select({
      message: step.message,
      options: step.options,
    });

    abortIfCancel(answer);
  } else if (step.promptType === 'confirm') {
    answer = await confirm({
      message: step.message,
    });
    abortIfCancel(answer);
  } else if (step.promptType === 'file-search') {
    const pattern = step.pattern || '**/*';
    const exclude = step.exclude || ['node_modules', 'dist', '.git'];

    const files = await glob(pattern, {
      cwd,
      ignore: exclude,
      dot: false,
      absolute: false,
    });

    if (files.length === 0) {
      answer = await text({
        message: step.message,
        defaultValue: step.default as string,
      });
    } else {
      // Sort & limit results (biar gak overwhelming)
      const sortedFiles = files.sort((a, b) => a.localeCompare(b)).slice(0, 20); // ← max 20 files

      const options = sortedFiles.map((f) => ({
        value: f,
        label: f,
      }));

      options.push({
        value: '__custom__',
        label: 'Enter custom path...',
      });

      const selected = await select({
        message: step.message,
        options,
      });

      abortIfCancel(selected);

      if (selected === '__custom__') {
        answer = await text({
          message: 'Enter file path:',
          defaultValue: step.default as string,
        });

        abortIfCancel(answer);
      } else {
        answer = selected;
      }
    }
  }

  if (answer !== undefined) {
    setNestedValue(context, step.saveAs || step.name, answer);
  }
}

async function executeFileAppend(
  step: Extract<SetupStep, { type: 'file-append' }>,
  context: SetupContext,
  cwd: string,
): Promise<void> {
  const target = interpolate(step.target, context);
  const targetPath = path.join(cwd, target);

  if (!existsSync(targetPath)) {
    throw new Error(`File not found: ${target}`);
  }

  const content = step.content || (await getContent(step.contentPath!));
  const existing = await fs.readFile(targetPath, 'utf-8');

  const newContent = existing + '\n' + content;

  await fs.writeFile(targetPath, newContent, 'utf-8');

  if (step.saveTargetAs) {
    saveTargetAs(context, step.saveTargetAs, target);
  }
}

async function executeFileCreate(
  step: Extract<SetupStep, { type: 'file-create' }>,
  context: SetupContext,
  cwd: string,
): Promise<void> {
  const target = interpolate(step.target, context);
  const targetPath = path.join(cwd, target);

  if (existsSync(targetPath) && !step.overwrite) {
    const shouldOverwrite = await confirm({
      message: `File \`${target}\` already exists. Overwrite?`,
      initialValue: false,
    });

    if (!shouldOverwrite) {
      return;
    }
  }

  const content = step.content || (await getContent(step.contentPath!));

  await fs.mkdir(path.dirname(targetPath), { recursive: true });
  await fs.writeFile(targetPath, content, 'utf-8');

  if (step.saveTargetAs) {
    saveTargetAs(context, step.saveTargetAs, target);
  }
}

async function executeFileUpdate(
  step: Extract<SetupStep, { type: 'file-update' }>,
  context: SetupContext,
  cwd: string,
): Promise<void> {
  const target = interpolate(step.target, context);
  const targetPath = path.join(cwd, target);

  if (!existsSync(targetPath)) {
    throw new Error(`File not found: ${target}`);
  }

  let content = await fs.readFile(targetPath, 'utf-8');

  // Apply replacement
  const searchRegex = new RegExp(step.search, 'gms');

  if (!searchRegex.test(content)) {
    // log.warn(`Pattern not found in ${target}, skipping...`);
    return;
  }

  const newContent = content.replace(searchRegex, step.replace);

  await fs.writeFile(targetPath, newContent, 'utf-8');
  log.success(`Updated ${target}`);

  if (step.saveTargetAs) {
    saveTargetAs(context, step.saveTargetAs, target);
  }
}

async function executeFileUpdateJson(
  step: Extract<SetupStep, { type: 'file-update-json' }>,
  context: SetupContext,
  cwd: string,
): Promise<void> {
  const target = interpolate(step.target, context);
  const targetPath = path.join(cwd, target);

  let existing = {};

  if (existsSync(targetPath)) {
    const content = await fs.readFile(targetPath, 'utf-8');
    existing = JSON.parse(content);
  }

  const merged =
    step.merge === 'deep'
      ? defu(step.content, existing)
      : { ...existing, ...step.content };

  await fs.writeFile(targetPath, JSON.stringify(merged, null, 2), 'utf-8');

  if (step.saveTargetAs) {
    saveTargetAs(context, step.saveTargetAs, target);
  }
}

function interpolate(str: string, context: SetupContext): string {
  return str.replace(/\{\{([^}]+)\}\}/g, (match, key) => {
    const trimmedKey = key.trim();

    // Try direct access first
    let value = getNestedValue(context, trimmedKey);

    // If not found and key doesn't have dots, try inside 'paths'
    if (value === undefined && !trimmedKey.includes('.')) {
      value = getNestedValue(context, `paths.${trimmedKey}`);
    }

    return value !== undefined ? value : match;
  });
}

async function getContent(contentPath: string): Promise<string> {
  const filePath = path.join(process.cwd(), contentPath);

  try {
    return await fs.readFile(filePath, 'utf-8');
  } catch (error) {
    throw new Error(
      `Failed to read content from ${filePath}: ${error instanceof Error ? error.message : 'Unknown error'}`,
    );
  }
}

function getNestedValue(obj: any, path: string): any {
  return path.split('.').reduce((current, key) => current?.[key], obj);
}

function setNestedValue(obj: any, path: string, value: any): void {
  const keys = path.split('.');
  let current = obj;

  for (let i = 0; i < keys.length - 1; i++) {
    if (!current[keys[i]]) {
      current[keys[i]] = {};
    }
    current = current[keys[i]];
  }

  current[keys[keys.length - 1]] = value;
}

async function evaluateCondition(
  condition: any,
  context: any,
  cwd: string,
): Promise<boolean> {
  // logical operators
  if ('all' in condition) {
    for (const c of condition.all) {
      if (!(await evaluateCondition(c, context, cwd))) return false;
    }
    return true;
  }

  if ('any' in condition) {
    for (const c of condition.any) {
      if (await evaluateCondition(c, context, cwd)) return true;
    }
    return false;
  }

  if ('not' in condition) {
    return !(await evaluateCondition(condition.not, context, cwd));
  }

  // atoms
  switch (condition.type) {
    case 'file-exists': {
      return existsSync(path.join(cwd, interpolate(condition.path, context)));
    }

    case 'file-contains': {
      const fullPath = path.join(cwd, interpolate(condition.path, context));
      if (!existsSync(fullPath)) return false;

      const content = await fs.readFile(fullPath, 'utf-8');
      const regex = new RegExp(condition.pattern, 'm');
      return regex.test(content);
    }

    case 'dependency': {
      try {
        const pkg = JSON.parse(
          await fs.readFile(path.join(cwd, 'package.json'), 'utf-8'),
        );
        return (
          pkg.dependencies?.[condition.name] ||
          pkg.devDependencies?.[condition.name]
        );
      } catch {
        return false;
      }
    }

    case 'env':
      return process.env[condition.key] !== undefined;

    case 'framework':
      return context.framework === condition.value;

    default:
      throw new Error(`Unknown condition type: ${condition.type}`);
  }
}

async function shouldRunStep(
  step: SetupStep,
  context: SetupContext,
  cwd: string,
): Promise<boolean> {
  if (!step.condition) return true;

  if (step.condition.if) {
    const ok = await evaluateCondition(step.condition.if, context, cwd);
    if (!ok) return false;
  }

  if (step.condition.unless) {
    const blocked = await evaluateCondition(
      step.condition.unless,
      context,
      cwd,
    );
    if (blocked) return false;
  }

  return true;
}

async function resolveRunnableSteps(
  setup: Setup,
  context: SetupContext,
  cwd: string,
) {
  const result: SetupStep[] = [];

  for (const step of setup.steps) {
    if (await shouldRunStep(step, context, cwd)) {
      result.push(step);
    }
  }

  return result;
}

function saveTargetAs(
  context: SetupContext,
  name: string | string[],
  value: string,
) {
  if (Array.isArray(name)) {
    for (const n of name) {
      setNestedValue(context, n, value);
    }
    return;
  }

  setNestedValue(context, name, value);
}
