import { readdir, rename } from 'node:fs/promises';
import path from 'node:path';

function humanName(name: string) {
  // replace - with space and capitalize each first letter of the word
  return name
    .replace(/-/g, ' ')
    .replace('.mdx', '')
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

const componentName = process.argv[2];

if (!componentName) {
  console.error('Component name is required');
  process.exit(1);
}

// current directory structure:
// examples/alert-<name>-example.tsx
// move to
// examples/<component-name>/<name>.tsx
// remove the prefix <component-name>- and -example

const allExamples = await readdir(
  path.join(import.meta.dirname, 'components/examples'),
);

const examples = allExamples.filter(
  (example) => example.includes(componentName) && example.endsWith('.tsx'),
);

if (examples.length === 0) {
  console.error('No examples found');
  process.exit(1);
}

const exampleIndex: Record<string, string> = {};

for (const example of examples) {
  let exampleName = example.replace(`-example`, '').replace('.tsx', '');

  if (exampleName === componentName) {
    exampleName = 'basic';
  }

  exampleName = exampleName.replace(`${componentName}-`, '');
  const exampleFilename = `${exampleName}.tsx`;

  await rename(
    path.join(import.meta.dirname, 'components/examples', example),
    path.join(
      import.meta.dirname,
      'components/examples',
      componentName,
      exampleFilename,
    ),
  );

  // write to index.ts
  // add quote if contains space or -
  const keyName =
    exampleName.includes(' ') || exampleName.includes('-')
      ? `'${exampleName}'`
      : exampleName;

  exampleIndex[keyName] = `{
      name: '${humanName(exampleName)}',
      path: 'components/examples/${componentName}/${exampleFilename}',
      component: React.lazy(() =>
        import('./${exampleFilename.replace('.tsx', '')}').then((mod) => ({
          default: mod.default,
        })),
      ),
    },`;
}

await Bun.write(
  path.join(
    import.meta.dirname,
    'components/examples',
    componentName,
    'index.ts',
  ),
  `import React from 'react';

export const examples = {
  ${Object.keys(exampleIndex)
    .map((key) => `${key}: ${exampleIndex[key]}`)
    .join('\n  ')}
};
`,
);
