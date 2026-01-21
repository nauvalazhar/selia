import fs from 'fs/promises';
import path from 'path';
import { Registry } from '../schemas/registry-schema';
import { Item } from '../schemas/item-schema';
import { log, spinner } from '@clack/prompts';
import picocolors from 'picocolors';
import type { Setup } from '../schemas/setup-schema';

interface BuildRegistryOptions {
  output: string;
}

export async function buildRegistry(
  registry: Registry,
  options: BuildRegistryOptions,
) {
  const s = spinner();
  s.start('Building registry...');

  try {
    // Build registry.json
    await buildRegistryFile(registry, options.output);

    // Build individual items
    for (let i = 0; i < registry.items.length; i++) {
      const item = registry.items[i];
      s.message(`Building ${item.name} (${i + 1}/${registry.items.length})`);
      await buildItem(item, options.output);
    }

    // Build setup if exists
    if (registry.setup) {
      s.message('Building setup configuration...');
      await buildSetup(registry.setup, options.output);
    }

    s.stop('Build complete');
    log.success(
      picocolors.green(`Built ${registry.items.length} items successfully`),
    );
  } catch (error) {
    s.stop('Build failed');
    const message = error instanceof Error ? error.message : 'Unknown error';
    log.error(picocolors.red(message));
    process.exit(1);
  }
}

async function buildRegistryFile(
  registry: Registry,
  output: string,
): Promise<void> {
  // Remove file paths from registry.json (keep metadata only)
  const cleanedItems = registry.items.map((item) => ({
    ...item,
    files: item.files.map(({ path: _, ...file }) => file),
  }));

  const cleanedRegistry = {
    ...registry,
    items: cleanedItems,
  };

  if (registry.setup) {
    cleanedRegistry.setup = 'setup.json';
  }

  await fs.mkdir(output, { recursive: true });
  await fs.writeFile(
    path.join(output, 'registry.json'),
    JSON.stringify(cleanedRegistry, null, 2),
    'utf-8',
  );
}

async function buildItem(item: Item, output: string): Promise<void> {
  const filesWithContent = await Promise.all(
    item.files.map(async (file) => {
      if (!file.path) {
        throw new Error(`Path is required for file in item "${item.name}"`);
      }

      const rawContent = await fs.readFile(file.path, 'utf-8');
      const content = rawContent.replace(/\r/g, '').trim();

      const { path: _, ...rest } = file;

      return {
        ...rest,
        content,
      };
    }),
  );

  const itemWithContent = {
    ...item,
    files: filesWithContent,
  };

  await fs.mkdir(output, { recursive: true });
  await fs.writeFile(
    path.join(output, `${item.name}.json`),
    JSON.stringify(itemWithContent, null, 2),
    'utf-8',
  );
}

async function buildSetup(setup: Setup, output: string): Promise<void> {
  // Process setup steps and resolve contentPath
  const processedSteps = await Promise.all(
    setup.steps.map(async (step) => {
      // Only process steps with contentPath
      if (
        'contentPath' in step &&
        step.contentPath &&
        (step.type === 'file-append' || step.type === 'file-create')
      ) {
        try {
          const content = await fs.readFile(step.contentPath, 'utf-8');
          const { contentPath: _, ...rest } = step;

          return {
            ...rest,
            content,
          };
        } catch (error) {
          throw new Error(
            `Failed to read content for setup step from "${step.contentPath}": ${error instanceof Error ? error.message : 'Unknown error'
            }`,
          );
        }
      }

      return step;
    }),
  );

  const processedSetup = {
    steps: processedSteps,
  };

  await fs.writeFile(
    path.join(output, 'setup.json'),
    JSON.stringify(processedSetup, null, 2),
    'utf-8',
  );
}

async function processSetupPaths(setup: Setup): Promise<Setup> {
  const processedSteps = setup.steps.map((step) => {
    if ('contentPath' in step && step.contentPath) {
      const { contentPath: _, content: __, ...rest } = step as any;
      return rest;
    }

    if ('content' in step && step.content) {
      const { content: _, ...rest } = step as any;
      return rest;
    }

    return step;
  });

  return {
    steps: processedSteps,
  };
}
