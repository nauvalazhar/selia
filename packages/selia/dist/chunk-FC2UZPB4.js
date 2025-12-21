import {
  detectFramework
} from "./chunk-DBWDD2V3.js";
import {
  installDependencies
} from "./chunk-6V5LY26W.js";
import {
  abortIfCancel
} from "./chunk-G25NKXZU.js";

// src/lib/setup-executor.ts
import fs from "fs/promises";
import { existsSync } from "fs";
import path from "path";
import { glob } from "glob";
import { text, select, confirm, log } from "@clack/prompts";
import { defu } from "defu";
var executable = ["prompt", "detect-framework", "assert"];
async function executeSetup(setup, options = {}) {
  const context = {};
  const cwd = options.cwd || process.cwd();
  const steps = await resolveRunnableSteps(setup, context, cwd);
  for (const step of steps) {
    if (executable.includes(step.type)) {
      await executeStep(step, context, cwd);
    }
  }
  return context;
}
async function executeSetupActions(setup, context, options = {}) {
  const cwd = options.cwd || process.cwd();
  const steps = await resolveRunnableSteps(setup, context, cwd);
  for (const step of steps) {
    if (executable.includes(step.type)) {
      continue;
    }
    await executeStep(step, context, cwd);
  }
}
async function previewSetupActions(setup, context, options = {}) {
  const actions = [];
  const cwd = options.cwd || process.cwd();
  const steps = await resolveRunnableSteps(setup, context, cwd);
  for (const step of steps) {
    if (step.type === "dependencies") {
      const count = Object.keys(step.packages).length;
      actions.push(
        `Install ${count} required npm package${count > 1 ? "s" : ""}`
      );
    } else if (step.type === "file-create") {
      const target = interpolate(step.target, context);
      actions.push(`Create \`${target}\``);
    } else if (step.type === "file-append") {
      const target = interpolate(step.target, context);
      actions.push(`Append to \`${target}\``);
    } else if (step.type === "file-update") {
      const target = interpolate(step.target, context);
      actions.push(`Update \`${target}\``);
    } else if (step.type === "file-update-json") {
      const target = interpolate(step.target, context);
      actions.push(`Update \`${target}\``);
    }
  }
  return actions;
}
async function executeStep(step, context, cwd) {
  switch (step.type) {
    case "assert":
      await executeAssert(step, context, cwd);
      break;
    case "dependencies":
      await executeDependencies(step, cwd);
      break;
    case "detect-framework":
      await executeDetectFramework(step, context, cwd);
      break;
    case "prompt":
      await executePrompt(step, context, cwd);
      break;
    case "file-append":
      await executeFileAppend(step, context, cwd);
      break;
    case "file-create":
      await executeFileCreate(step, context, cwd);
      break;
    case "file-update":
      await executeFileUpdate(step, context, cwd);
      break;
    case "file-update-json":
      await executeFileUpdateJson(step, context, cwd);
      break;
  }
}
async function executeAssert(step, context, cwd) {
  const ok = await runAssertCheck(step.check, context, cwd);
  if (!ok) {
    const message = Array.isArray(step.onFail.message) ? step.onFail.message.join("\n") : step.onFail.message;
    if (step.onFail?.exit !== false) {
      throw new Error(message);
    }
  }
}
async function runAssertCheck(check, context, cwd) {
  switch (check.type) {
    case "dependency":
      return checkDependencies(check.packages, cwd);
    case "file-exists":
      return existsSync(path.join(cwd, check.path));
    case "framework":
      return check.value.includes(context.framework);
    case "env":
      return process.env[check.key] !== void 0;
    default:
      throw new Error(`Unknown assert check type: ${check.type}`);
  }
}
async function checkDependencies(packages, cwd) {
  try {
    const pkgPath = path.join(cwd, "package.json");
    const pkg = JSON.parse(await fs.readFile(pkgPath, "utf-8"));
    const deps = {
      ...pkg.dependencies,
      ...pkg.devDependencies
    };
    return packages.every((name) => deps[name]);
  } catch {
    return false;
  }
}
async function executeDependencies(step, cwd) {
  await installDependencies(step.packages, cwd);
}
async function executeDetectFramework(step, context, cwd) {
  const framework = await detectFramework(cwd);
  const saveAs = step.saveAs || step.name;
  setNestedValue(context, saveAs, framework);
}
async function executePrompt(step, context, cwd) {
  let answer;
  if (step.promptType === "text") {
    const input = await text({
      message: step.message,
      placeholder: step.default,
      validate: (value) => {
        const actualValue = value || step.default;
        if (step.validate?.required && !actualValue) {
          return "This field is required";
        }
        if (step.validate?.pattern && actualValue) {
          const regex = new RegExp(step.validate.pattern);
          if (!regex.test(actualValue)) {
            return `Must match pattern: ${step.validate.pattern}`;
          }
        }
      }
    });
    abortIfCancel(input);
    answer = input || step.default;
  } else if (step.promptType === "select" && step.options) {
    answer = await select({
      message: step.message,
      options: step.options
    });
    abortIfCancel(answer);
  } else if (step.promptType === "confirm") {
    answer = await confirm({
      message: step.message
    });
    abortIfCancel(answer);
  } else if (step.promptType === "file-search") {
    const pattern = step.pattern || "**/*";
    const exclude = step.exclude || ["node_modules", "dist", ".git"];
    const files = await glob(pattern, {
      cwd,
      ignore: exclude,
      dot: false,
      absolute: false
    });
    if (files.length === 0) {
      answer = await text({
        message: step.message,
        defaultValue: step.default
      });
    } else {
      const sortedFiles = files.sort((a, b) => a.localeCompare(b)).slice(0, 20);
      const options = sortedFiles.map((f) => ({
        value: f,
        label: f
      }));
      options.push({
        value: "__custom__",
        label: "Enter custom path..."
      });
      const selected = await select({
        message: step.message,
        options
      });
      abortIfCancel(selected);
      if (selected === "__custom__") {
        answer = await text({
          message: "Enter file path:",
          defaultValue: step.default
        });
        abortIfCancel(answer);
      } else {
        answer = selected;
      }
    }
  }
  if (answer !== void 0) {
    setNestedValue(context, step.saveAs || step.name, answer);
  }
}
async function executeFileAppend(step, context, cwd) {
  const target = interpolate(step.target, context);
  const targetPath = path.join(cwd, target);
  if (!existsSync(targetPath)) {
    throw new Error(`File not found: ${target}`);
  }
  const content = step.content || await getContent(step.contentPath);
  const existing = await fs.readFile(targetPath, "utf-8");
  const newContent = existing + "\n" + content;
  await fs.writeFile(targetPath, newContent, "utf-8");
}
async function executeFileCreate(step, context, cwd) {
  const target = interpolate(step.target, context);
  const targetPath = path.join(cwd, target);
  if (existsSync(targetPath) && !step.overwrite) {
    const shouldOverwrite = await confirm({
      message: `File \`${target}\` already exists. Overwrite?`
    });
    if (!shouldOverwrite) {
      return;
    }
  }
  const content = step.content || await getContent(step.contentPath);
  await fs.mkdir(path.dirname(targetPath), { recursive: true });
  await fs.writeFile(targetPath, content, "utf-8");
}
async function executeFileUpdate(step, context, cwd) {
  const target = interpolate(step.target, context);
  const targetPath = path.join(cwd, target);
  if (!existsSync(targetPath)) {
    throw new Error(`File not found: ${target}`);
  }
  let content = await fs.readFile(targetPath, "utf-8");
  const searchRegex = new RegExp(step.search, "gms");
  if (!searchRegex.test(content)) {
    return;
  }
  const newContent = content.replace(searchRegex, step.replace);
  await fs.writeFile(targetPath, newContent, "utf-8");
  log.success(`Updated ${target}`);
}
async function executeFileUpdateJson(step, context, cwd) {
  const target = interpolate(step.target, context);
  const targetPath = path.join(cwd, target);
  let existing = {};
  if (existsSync(targetPath)) {
    const content = await fs.readFile(targetPath, "utf-8");
    existing = JSON.parse(content);
  }
  const merged = step.merge === "deep" ? defu(step.content, existing) : { ...existing, ...step.content };
  await fs.writeFile(targetPath, JSON.stringify(merged, null, 2), "utf-8");
}
function interpolate(str, context) {
  return str.replace(/\{\{([^}]+)\}\}/g, (match, key) => {
    const trimmedKey = key.trim();
    let value = getNestedValue(context, trimmedKey);
    if (value === void 0 && !trimmedKey.includes(".")) {
      value = getNestedValue(context, `paths.${trimmedKey}`);
    }
    return value !== void 0 ? value : match;
  });
}
async function getContent(contentPath) {
  const filePath = path.join(process.cwd(), contentPath);
  try {
    return await fs.readFile(filePath, "utf-8");
  } catch (error) {
    throw new Error(
      `Failed to read content from ${filePath}: ${error instanceof Error ? error.message : "Unknown error"}`
    );
  }
}
function getNestedValue(obj, path2) {
  return path2.split(".").reduce((current, key) => current?.[key], obj);
}
function setNestedValue(obj, path2, value) {
  const keys = path2.split(".");
  let current = obj;
  for (let i = 0; i < keys.length - 1; i++) {
    if (!current[keys[i]]) {
      current[keys[i]] = {};
    }
    current = current[keys[i]];
  }
  current[keys[keys.length - 1]] = value;
}
async function evaluateCondition(condition, context, cwd) {
  if ("all" in condition) {
    for (const c of condition.all) {
      if (!await evaluateCondition(c, context, cwd)) return false;
    }
    return true;
  }
  if ("any" in condition) {
    for (const c of condition.any) {
      if (await evaluateCondition(c, context, cwd)) return true;
    }
    return false;
  }
  if ("not" in condition) {
    return !await evaluateCondition(condition.not, context, cwd);
  }
  switch (condition.type) {
    case "file-exists": {
      return existsSync(path.join(cwd, interpolate(condition.path, context)));
    }
    case "file-contains": {
      const fullPath = path.join(cwd, interpolate(condition.path, context));
      if (!existsSync(fullPath)) return false;
      const content = await fs.readFile(fullPath, "utf-8");
      const regex = new RegExp(condition.pattern, "m");
      return regex.test(content);
    }
    case "dependency": {
      try {
        const pkg = JSON.parse(
          await fs.readFile(path.join(cwd, "package.json"), "utf-8")
        );
        return pkg.dependencies?.[condition.name] || pkg.devDependencies?.[condition.name];
      } catch {
        return false;
      }
    }
    case "env":
      return process.env[condition.key] !== void 0;
    case "framework":
      return context.framework === condition.value;
    default:
      throw new Error(`Unknown condition type: ${condition.type}`);
  }
}
async function shouldRunStep(step, context, cwd) {
  if (!step.condition) return true;
  if (step.condition.if) {
    const ok = await evaluateCondition(step.condition.if, context, cwd);
    if (!ok) return false;
  }
  if (step.condition.unless) {
    const blocked = await evaluateCondition(
      step.condition.unless,
      context,
      cwd
    );
    if (blocked) return false;
  }
  return true;
}
async function resolveRunnableSteps(setup, context, cwd) {
  const result = [];
  for (const step of setup.steps) {
    if (await shouldRunStep(step, context, cwd)) {
      result.push(step);
    }
  }
  return result;
}

export {
  executeSetup,
  executeSetupActions,
  previewSetupActions
};
//# sourceMappingURL=chunk-FC2UZPB4.js.map