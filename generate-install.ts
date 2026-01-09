import { readdir, readFile, writeFile } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';

const COMPONENTS_DIR = 'components/selia';
const DOCS_DIR = 'app/routes';
const USAGE_HEADING = '## Usage';

function kebabCase(input: string) {
  return input
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/\s+/g, '-')
    .toLowerCase();
}

const componentFiles = await readdir(COMPONENTS_DIR);

for (const file of componentFiles) {
  if (!file.endsWith('.tsx') && !file.endsWith('.jsx')) continue;

  const component = path.parse(file).name;
  const componentName = kebabCase(component);
  const docPath = path.join(DOCS_DIR, `docs.${componentName}.mdx`);

  if (!existsSync(docPath)) {
    console.log(`⚠️  Docs not found: ${docPath}`);
    continue;
  }

  let content = await readFile(docPath, 'utf8');

  const installationTag = `## Installation
<Installation name="${componentName}" />`;

  // idempotent
  if (content.includes(installationTag)) {
    console.log(`⏭️  Skip (already injected): ${componentName}`);
    continue;
  }

  const usageIndex = content.indexOf(USAGE_HEADING);
  if (usageIndex === -1) {
    console.log(`❌  Missing "## Usage" in ${docPath}`);
    continue;
  }

  const injected =
    content.slice(0, usageIndex) +
    `\n${installationTag}\n\n` +
    content.slice(usageIndex);

  await writeFile(docPath, injected);
  console.log(`✅ Injected: ${componentName}`);
}

console.log('🔥 All done.');
