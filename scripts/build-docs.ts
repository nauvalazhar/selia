/**
 * Selia-specific script to convert MDX documentation files into plain markdown.
 * This runs before `selia build` to produce docs/*.md files that the generic
 * CLI build step can package into the registry.
 *
 * Usage: npx tsx scripts/build-docs.ts
 */

import fs from 'fs/promises';
import path from 'path';
import { glob } from 'glob';

const PROJECT_ROOT = path.resolve(import.meta.dirname, '..');
const DOCS_SOURCE = path.join(PROJECT_ROOT, 'app/routes');
const DOCS_OUTPUT = path.join(PROJECT_ROOT, 'docs');

interface StripOptions {
  componentName: string;
  projectRoot: string;
}

async function main() {
  const mdxFiles = await glob('docs.*.mdx', { cwd: DOCS_SOURCE });

  if (mdxFiles.length === 0) {
    console.log('No MDX docs found.');
    return;
  }

  await fs.mkdir(DOCS_OUTPUT, { recursive: true });

  let count = 0;
  for (const file of mdxFiles.sort()) {
    const name = file.replace(/^docs\./, '').replace(/\.mdx$/, '');
    if (name.startsWith('_')) continue;

    const content = await fs.readFile(path.join(DOCS_SOURCE, file), 'utf-8');
    const componentName = name.split('.')[0];

    const markdown = await stripMdxJsx(content, {
      componentName,
      projectRoot: PROJECT_ROOT,
    });

    const outputPath = path.join(DOCS_OUTPUT, `${name}.md`);
    await fs.writeFile(outputPath, markdown, 'utf-8');
    count++;
  }

  console.log(`Built ${count} documentation file(s) to docs/`);
}

// --- MDX to Markdown conversion ---

async function stripMdxJsx(
  content: string,
  options: StripOptions,
): Promise<string> {
  content = await resolveIncludes(content, options.projectRoot);

  const lines = content.split('\n');
  const output: string[] = [];
  let i = 0;

  const examplePaths = await loadExamplePaths(
    options.componentName,
    options.projectRoot,
  );

  while (i < lines.length) {
    const line = lines[i];

    if (isCodeFenceStart(line)) {
      output.push(stripCodeFenceAttrs(line));
      i++;
      while (i < lines.length && !isCodeFenceEnd(lines[i], line)) {
        output.push(lines[i]);
        i++;
      }
      if (i < lines.length) {
        output.push(lines[i]);
        i++;
      }
      continue;
    }

    const trimmed = line.trim();

    if (trimmed === '') {
      output.push(line);
      i++;
      continue;
    }

    if (trimmed.startsWith('<DocsButtons')) {
      const block = collectJsxBlock(lines, i);
      const externalDoc = extractProp(block.content, 'externalDoc');
      if (externalDoc) {
        output.push(`> **Reference:** [Base UI Docs](${externalDoc})`);
      }
      i = block.endIndex + 1;
      continue;
    }

    if (trimmed.startsWith('<Preview')) {
      const block = collectJsxBlock(lines, i);
      const name = extractProp(block.content, 'name');
      if (name && examplePaths[name]) {
        try {
          const source = await fs.readFile(
            path.join(options.projectRoot, examplePaths[name]),
            'utf-8',
          );
          output.push('```tsx');
          output.push(source.trim());
          output.push('```');
        } catch {
          // Example file not found, skip
        }
      }
      i = block.endIndex + 1;
      continue;
    }

    if (trimmed.startsWith('<InstallationGuides')) {
      const block = collectJsxBlock(lines, i);
      const type = extractProp(block.content, 'type');
      output.push(...renderInstallationGuides(type));
      i = block.endIndex + 1;
      continue;
    }

    if (trimmed.startsWith('<Installation')) {
      const block = collectJsxBlock(lines, i);
      const name = extractProp(block.content, 'name');
      const deps = extractArrayProp(block.content, 'dependencies');
      if (name) {
        output.push('```bash');
        output.push(`bunx selia@latest add ${name}`);
        output.push('```');
        if (deps.length > 0) {
          output.push('');
          output.push(`**Dependencies:** ${deps.join(', ')}`);
        }
      }
      i = block.endIndex + 1;
      continue;
    }

    if (trimmed.startsWith('<ComponentTable')) {
      const block = collectJsxBlock(lines, i);
      const tables = parseComponentTable(block.content);
      output.push(...tables);
      i = block.endIndex + 1;
      continue;
    }

    if (trimmed.startsWith('<CodeTabs')) {
      const block = collectJsxBlock(lines, i);
      const codeBlocks = parseCodeTabs(block.content);
      output.push(...codeBlocks);
      i = block.endIndex + 1;
      continue;
    }

    if (isJsxComponentLine(trimmed)) {
      const block = collectJsxBlock(lines, i);
      i = block.endIndex + 1;
      continue;
    }

    output.push(line);
    i++;
  }

  return cleanBlankLines(output.join('\n'));
}

function isCodeFenceStart(line: string): boolean {
  const trimmed = line.trim();
  return trimmed.startsWith('```') || trimmed.startsWith('~~~');
}

function isCodeFenceEnd(line: string, openingLine: string): boolean {
  const trimmed = line.trim();
  const fence = openingLine.trim().startsWith('~~~') ? '~~~' : '```';
  return trimmed === fence;
}

function stripCodeFenceAttrs(line: string): string {
  const match = line.match(/^(\s*)(```|~~~)(\w*)/);
  if (!match) return line;
  return `${match[1]}${match[2]}${match[3]}`;
}

function isJsxComponentLine(trimmed: string): boolean {
  return /^<[A-Z]/.test(trimmed);
}

interface JsxBlock {
  content: string;
  endIndex: number;
}

function collectJsxBlock(lines: string[], startIndex: number): JsxBlock {
  const firstLine = lines[startIndex].trim();

  if (firstLine.endsWith('/>')) {
    return { content: firstLine, endIndex: startIndex };
  }

  let braceDepth = 0;
  let collected: string[] = [];
  let i = startIndex;

  const tagMatch = firstLine.match(/^<([A-Za-z]+)/);
  const tagName = tagMatch ? tagMatch[1] : '';

  const hasOpeningClose =
    firstLine.includes('>') && !firstLine.includes('/>');

  if (hasOpeningClose) {
    while (i < lines.length) {
      collected.push(lines[i]);
      if (
        lines[i].trim() === `</${tagName}>` ||
        lines[i].includes(`</${tagName}>`)
      ) {
        return { content: collected.join('\n'), endIndex: i };
      }
      i++;
    }
    return { content: collected.join('\n'), endIndex: i - 1 };
  }

  for (i = startIndex; i < lines.length; i++) {
    const line = lines[i];
    collected.push(line);

    for (const ch of line) {
      if (ch === '{') braceDepth++;
      if (ch === '}') braceDepth--;
    }

    if (braceDepth <= 0 && line.trim().endsWith('/>')) {
      return { content: collected.join('\n'), endIndex: i };
    }
  }

  return { content: collected.join('\n'), endIndex: lines.length - 1 };
}

function extractProp(jsx: string, propName: string): string | null {
  const regex = new RegExp(`${propName}=["']([^"']+)["']`);
  const match = jsx.match(regex);
  return match ? match[1] : null;
}

function extractArrayProp(jsx: string, propName: string): string[] {
  const regex = new RegExp(`${propName}=\\{\\[([^\\]]+)\\]\\}`);
  const match = jsx.match(regex);
  if (!match) return [];
  return match[1]
    .split(',')
    .map((s) => s.trim().replace(/["']/g, ''))
    .filter(Boolean);
}

function parseComponentTable(jsx: string): string[] {
  const output: string[] = [];

  const componentsMatch = jsx.match(/components=\{\{([\s\S]*)\}\}\s*\/?>/);
  if (!componentsMatch) return output;

  const objectContent = componentsMatch[1];

  const componentRegex = /(\w+)\s*:\s*\{/g;
  let match;
  const componentStarts: Array<{ name: string; index: number }> = [];

  while ((match = componentRegex.exec(objectContent)) !== null) {
    const beforeMatch = objectContent.slice(0, match.index);
    const braceCount =
      (beforeMatch.match(/\{/g) || []).length -
      (beforeMatch.match(/\}/g) || []).length;
    if (braceCount === 0) {
      componentStarts.push({ name: match[1], index: match.index });
    }
  }

  for (let ci = 0; ci < componentStarts.length; ci++) {
    const comp = componentStarts[ci];
    const startIdx = objectContent.indexOf('{', comp.index + comp.name.length);
    const endIdx =
      ci < componentStarts.length - 1
        ? componentStarts[ci + 1].index
        : objectContent.length;
    const compContent = objectContent.slice(startIdx, endIdx);

    const isRequired = /required\s*:\s*true/.test(compContent);
    const requiredTag = isRequired ? ' *(required)*' : '';

    output.push(`#### \`<${comp.name}>\`${requiredTag}`);
    output.push('');

    const sourceLabel = extractNestedProp(compContent, 'label');
    const sourceHref = extractNestedProp(compContent, 'href');
    if (sourceLabel && sourceHref) {
      output.push(`> Source: [${sourceLabel}](${sourceHref})`);
      output.push('');
    }

    const propsMatch = compContent.match(/props\s*:\s*\{/);
    if (propsMatch) {
      const propsStart = compContent.indexOf('{', propsMatch.index! + 5);
      const propsContent = extractBalancedBraces(compContent, propsStart);

      const props = parseProps(propsContent);
      if (props.length > 0) {
        output.push('| Prop | Options | Default |');
        output.push('|------|---------|---------|');
        for (const prop of props) {
          const options = prop.options.map((o) => `\`${o}\``).join(', ');
          const defaultVal = prop.default ? `\`${prop.default}\`` : '-';
          output.push(`| ${prop.name} | ${options} | ${defaultVal} |`);
        }
        output.push('');
      }
    }
  }

  return output;
}

function extractNestedProp(content: string, propName: string): string | null {
  const regex = new RegExp(`${propName}\\s*:\\s*['"]([^'"]+)['"]`);
  const match = content.match(regex);
  return match ? match[1] : null;
}

function extractBalancedBraces(content: string, startIndex: number): string {
  let depth = 0;
  let i = startIndex;
  const start = i;
  for (; i < content.length; i++) {
    if (content[i] === '{') depth++;
    if (content[i] === '}') {
      depth--;
      if (depth === 0) return content.slice(start + 1, i);
    }
  }
  return content.slice(start + 1);
}

interface ParsedProp {
  name: string;
  options: string[];
  default?: string;
}

function parseProps(propsContent: string): ParsedProp[] {
  const props: ParsedProp[] = [];

  const propRegex = /(\w+)\s*:\s*\{/g;
  let match;
  const propStarts: Array<{ name: string; index: number }> = [];

  while ((match = propRegex.exec(propsContent)) !== null) {
    const beforeMatch = propsContent.slice(0, match.index);
    const braceCount =
      (beforeMatch.match(/\{/g) || []).length -
      (beforeMatch.match(/\}/g) || []).length;
    if (braceCount === 0) {
      propStarts.push({ name: match[1], index: match.index });
    }
  }

  for (let pi = 0; pi < propStarts.length; pi++) {
    const prop = propStarts[pi];
    const startIdx = propsContent.indexOf('{', prop.index + prop.name.length);
    const propContent = extractBalancedBraces(propsContent, startIdx);

    const optionsMatch = propContent.match(/options\s*:\s*\[([\s\S]*?)\]/);
    const options = optionsMatch
      ? optionsMatch[1]
          .split(',')
          .map((s) => s.trim().replace(/["']/g, ''))
          .filter(Boolean)
      : [];

    const defaultMatch = propContent.match(/default\s*:\s*["']([^"']+)["']/);
    const defaultVal = defaultMatch ? defaultMatch[1] : undefined;

    const nameMatch = propContent.match(/name\s*:\s*["']([^"']+)["']/);
    const displayName = nameMatch ? nameMatch[1] : prop.name;

    props.push({
      name: displayName.toLowerCase(),
      options,
      default: defaultVal,
    });
  }

  return props;
}

async function loadExamplePaths(
  componentName: string,
  projectRoot: string,
): Promise<Record<string, string>> {
  const examplesDir = path.join(
    projectRoot,
    'components/examples',
    componentName,
  );

  try {
    const indexPath = path.join(examplesDir, 'index.ts');
    const indexContent = await fs.readFile(indexPath, 'utf-8');

    const paths: Record<string, string> = {};
    const entryRegex = /(\w+)\s*:\s*\{[^}]*path\s*:\s*['"]([^'"]+)['"]/g;
    let match;
    while ((match = entryRegex.exec(indexContent)) !== null) {
      paths[match[1]] = match[2];
    }
    return paths;
  } catch {
    return {};
  }
}

async function resolveIncludes(
  content: string,
  projectRoot: string,
): Promise<string> {
  const includeRegex = /^@include\s+"([^"]+)"\s*$/gm;
  const matches = [...content.matchAll(includeRegex)];

  for (const match of matches.reverse()) {
    const filePath = match[1];
    const fullPath = path.join(projectRoot, 'app/routes', filePath);
    try {
      const included = await fs.readFile(fullPath, 'utf-8');
      content =
        content.slice(0, match.index!) +
        included.trim() +
        content.slice(match.index! + match[0].length);
    } catch {
      content =
        content.slice(0, match.index!) +
        content.slice(match.index! + match[0].length);
    }
  }

  return content;
}

function parseCodeTabs(jsx: string): string[] {
  const output: string[] = [];

  const panelRegex =
    /<CodeTabsPanel\s+value=["']([^"']+)["']\s+language=["']([^"']+)["']\s*>\s*([\s\S]*?)\s*<\/CodeTabsPanel>/g;
  let match;
  const panels: Array<{ label: string; language: string; content: string }> =
    [];

  while ((match = panelRegex.exec(jsx)) !== null) {
    panels.push({
      label: match[1],
      language: match[2],
      content: match[3].trim(),
    });
  }

  if (panels.length === 0) return output;

  if (
    panels.length > 1 &&
    panels.every((p) => p.language === panels[0].language)
  ) {
    output.push(`\`\`\`${panels[0].language}`);
    for (let i = 0; i < panels.length; i++) {
      if (i > 0) output.push('');
      output.push(`# ${panels[i].label}`);
      output.push(panels[i].content);
    }
    output.push('```');
  } else {
    for (const panel of panels) {
      output.push(`\`\`\`${panel.language}`);
      output.push(panel.content);
      output.push('```');
      output.push('');
    }
  }

  return output;
}

const INSTALLATION_GUIDES = [
  {
    name: 'Vite',
    slug: 'installation.vite',
    description: 'Lightning-fast frontend tooling for modern web development',
    community: false,
  },
  {
    name: 'React Router',
    slug: 'installation.react-router',
    description:
      'User-focused, standards-based fullstack router deployable anywhere',
    community: false,
  },
  {
    name: 'TanStack Start',
    slug: 'installation.tanstack-start',
    description:
      'Type-safe fullstack React framework built on TanStack foundations',
    community: false,
  },
  {
    name: 'TanStack Router',
    slug: 'installation.tanstack-router',
    description:
      'A powerful React router for client-side and full-stack react applications',
    community: false,
  },
  {
    name: 'Next.js',
    slug: 'installation.next',
    description:
      'Fullstack React framework with routing, SSR, and built-in optimizations',
    community: false,
  },
  {
    name: 'Laravel',
    slug: 'installation.laravel',
    description:
      'Laravel Starter Kit built on top Laravel Breeze and Selia UI Library',
    community: true,
    author: '@yuisa-scarlet',
  },
];

function renderInstallationGuides(type: string | null): string[] {
  const output: string[] = [];

  if (type === 'manual') {
    output.push(
      '- **Manual Guide** — Manual instructions for installing Selia in your React application. See `bunx selia@latest docs installation.manual`',
    );
    return output;
  }

  const isCommunity = type === 'community';
  const guides = INSTALLATION_GUIDES.filter((g) => g.community === isCommunity);

  for (const guide of guides) {
    const author =
      'author' in guide ? ` (by ${guide.author})` : '';
    output.push(
      `- **${guide.name}**${author} — ${guide.description}. See \`bunx selia@latest docs ${guide.slug}\``,
    );
  }

  return output;
}

function cleanBlankLines(content: string): string {
  return content.replace(/\n{3,}/g, '\n\n').trim();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
