import * as ALL_EXAMPLES from 'components/examples';
import { type Block } from 'components/blocks';
import { stat } from 'node:fs/promises';
import { readdir } from 'node:fs/promises';
import path from 'node:path';

function clean(source: string) {
  return source.replace(/import\s*{([^}]*)}\s*from/g, (match, group) => {
    // Remove newlines and all whitespace for easier comma cleanup
    let cleaned = group
      .replace(/[\r\n]+/g, ' ') // Remove all newlines
      .replace(/\s+/g, ' ') // Collapse whitespace
      .replace(/,(\s*,)+/g, ',') // Remove accidental double commas
      .replace(/,\s*$/, ' '); // Remove any trailing comma at the end
    return `import {${cleaned}} from`;
  });
}

export async function getSources(componentKey: string) {
  return Object.fromEntries(
    await Promise.all(
      Object.entries(
        ALL_EXAMPLES[componentKey as keyof typeof ALL_EXAMPLES],
      ).map(async ([key, { path }]) => {
        let source = await Bun.file(path).text();
        source = clean(source);

        return [key, source];
      }),
    ),
  );
}

async function readFilesRecursively(dir: string): Promise<Record<string, any>> {
  const files = await readdir(dir, { withFileTypes: true });
  const result: Record<string, any> = {};

  for (const entry of files) {
    const resolvedPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      result[entry.name] = await readFilesRecursively(resolvedPath);
    } else if (entry.isFile()) {
      let fileContent = await Bun.file(resolvedPath).text();
      fileContent = clean(fileContent);
      result[entry.name] = fileContent;
    }
  }
  return result;
}

export async function getBlockSources(blocks: Block) {
  return Object.fromEntries(
    await Promise.all(
      Object.entries(blocks).map(async ([key, { path }]) => {
        const stats = await stat(path);
        let source;
        if (stats.isDirectory()) {
          source = await readFilesRecursively(path);
        } else {
          let fileContent = await Bun.file(path).text();
          source = clean(fileContent);
        }
        return [key, source];
      }),
    ),
  );
}

export async function getBlock(path: string) {
  let source = await Bun.file(path).text();
  source = clean(source);

  return source;
}
