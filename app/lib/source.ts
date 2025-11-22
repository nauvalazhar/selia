import * as ALL_EXAMPLES from 'components/examples';
import { blocks } from 'components/blocks';

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

export async function getBlocks() {
  return Object.fromEntries(
    await Promise.all(
      Object.entries(blocks).map(async ([key, { path }]) => {
        let source = await Bun.file(path).text();
        source = clean(source);
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
