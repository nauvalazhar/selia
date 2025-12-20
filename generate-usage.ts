#!/usr/bin/env bun
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join } from 'path';

const componentName = process.argv[2];

if (!componentName) {
  console.error('Component name is required');
  process.exit(1);
}

const componentPath = join(
  process.cwd(),
  'components/selia',
  `${componentName}.tsx`,
);

const docsPath = join(process.cwd(), 'app/routes', `docs.${componentName}.mdx`);

if (!existsSync(componentPath)) {
  console.error(`Component not found: ${componentPath}`);
  process.exit(1);
}

if (!existsSync(docsPath)) {
  console.error(`Docs not found: ${docsPath}`);
  process.exit(1);
}

/* ---------------- utilities ---------------- */

function extractSection(content: string, heading: string): string | null {
  const pattern = new RegExp(`##\\s+${heading}[\\s\\S]*?(?=\\n##\\s+|$)`);
  const match = content.match(pattern);
  return match ? match[0].trim() : null;
}

function transformAnatomyToStructure(section: string) {
  return section
    .replace(/^##\s+Anatomy/, '### Structure')
    .replace(
      'Import the component and assemble its parts:',
      'The expected structure and composition of the component.',
    );
}

function buildUsageSection(importBlock: string, structureSection: string) {
  return `
## Usage

### Import

Import the component and its related parts.

${importBlock}

${structureSection}
`.trim();
}

/* ---------------- read sources ---------------- */

const source = readFileSync(componentPath, 'utf-8');
const docs = readFileSync(docsPath, 'utf-8');

/* ---------------- extract anatomy ---------------- */

const anatomySection = extractSection(docs, 'Anatomy');
if (!anatomySection) {
  console.warn('No Anatomy section found. Skipping.');
  process.exit(0);
}

const structureSection = transformAnatomyToStructure(anatomySection);

/* ---------------- extract old usage ---------------- */

const oldUsage = extractSection(docs, 'Usage');
let examplesSection = '';

if (!oldUsage) {
  console.warn('No Usage section found. Skipping.');
} else {
  examplesSection = oldUsage.replace(/^##\s+Usage/, '## Examples');
}

/* ---------------- generate import block ---------------- */

const exportRegex = /export\s+(?:const|function)\s+([A-Z][A-Za-z0-9_]*)/g;

const components = [...source.matchAll(exportRegex)].map((m) => m[1]);

const importBlock = `\`\`\`ts filename="${componentName} Parts"
import {
  ${components.join(',\n  ')}
} from "components/selia/${componentName}";
\`\`\``;

/* ---------------- build new usage ---------------- */

const newUsage = buildUsageSection(importBlock, structureSection);

/* ---------------- apply changes ---------------- */

let updatedDocs = docs;

// 1. Replace Anatomy → new Usage
updatedDocs = updatedDocs.replace(anatomySection, newUsage);

// 2. Replace old Usage → Examples
updatedDocs = updatedDocs.replace(oldUsage, examplesSection);

/* ---------------- write ---------------- */

writeFileSync(docsPath, updatedDocs);

console.log(`Docs migrated successfully for ${componentName}`);
