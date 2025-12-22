// commands/add.ts
import { Command } from 'commander';
import { intro, outro, spinner, log, select } from '@clack/prompts';
import fs from 'fs/promises';
import path from 'path';
import { loadConfig } from '~/lib/load-config';
import { fetchItems } from '~/lib/fetch-item';
import { resolveDependencies } from '~/lib/resolve-dependencies';
import { resolveImportAlias, resolveTargetPath } from '~/lib/resolve-import';
import { installDependencies } from '~/lib/install-dependencies';
import { abortIfCancel, getRegistryFromConfig } from '~/lib/utils';
import picocolors from 'picocolors';

import { existsSync } from 'fs';

export const addCommand = new Command()
  .name('add')
  .description('Add components to your project')
  .argument('<items...>', 'Items to add')
  .option('-y, --yes', 'Skip confirmation prompts')
  .option('--no-install', 'Skip installing dependencies')
  .option('--overwrite', 'Overwrite existing files without asking')
  .action(async (itemNames: string[], options) => {
    console.log();
    intro(picocolors.bgBlue(picocolors.blackBright(' Add Item ')));

    log.warn(
      picocolors.yellow(
        'The CLI is still in development, report any issues on GitHub!',
      ),
    );

    try {
      const config = await loadConfig();
      const s = spinner();
      const registry = getRegistryFromConfig(config);

      if (!registry?.url) {
        log.error(picocolors.red('Registry not found'));
        return;
      }

      //   s.start(`Fetching ${itemNames.length} item(s) from registry...`);
      const items = await fetchItems(registry.url, itemNames);
      //   s.stop(`Fetched ${items.length} item(s)`);

      s.start('Resolving dependencies...');
      const resolved = await resolveDependencies(items, registry.url);
      s.stop(
        `Resolved ${resolved.items.size} item(s) and ${Object.keys(resolved.npmPackages).length} npm package(s)`,
      );

      const allItems = Array.from(resolved.items.values());
      const npmPackages = resolved.npmPackages;

      // Check for existing files
      const existingFiles: string[] = [];
      const filesToWrite: Array<{
        item: (typeof allItems)[0];
        file: (typeof allItems)[0]['files'][0];
        targetPath: string;
        content: string;
      }> = [];

      for (const item of allItems) {
        for (const file of item.files) {
          const basePath = resolveTargetPath(
            file.target,
            config,
            process.cwd(),
          );
          const targetPath = path.join(basePath, file.name);

          let content = file.content || '';
          content = resolveImportAlias(content, config);

          filesToWrite.push({ item, file, targetPath, content });

          if (existsSync(targetPath)) {
            existingFiles.push(path.relative(process.cwd(), targetPath));
          }
        }
      }

      // Handle existing files
      if (existingFiles.length > 0 && !options.overwrite) {
        log.warn(`Found ${existingFiles.length} existing file(s):`);
        existingFiles.forEach((f) =>
          console.log(`  ${picocolors.yellow('•')} ${f}`),
        );
        console.log();

        const overwriteChoice = await select({
          message: 'How do you want to proceed?',
          initialValue: 'skip',
          options: [
            { value: 'overwrite', label: 'Overwrite all existing files' },
            { value: 'skip', label: 'Skip existing files' },
            { value: 'cancel', label: 'Cancel operation' },
          ],
        });

        abortIfCancel(overwriteChoice);

        if (overwriteChoice === 'cancel') {
          outro('Cancelled');
          process.exit(0);
        }

        if (overwriteChoice === 'skip') {
          // Filter out existing files
          const skippedCount = filesToWrite.length;
          filesToWrite.splice(
            0,
            filesToWrite.length,
            ...filesToWrite.filter((f) => !existsSync(f.targetPath)),
          );
          log.info(
            `Skipping ${skippedCount - filesToWrite.length} existing file(s)`,
          );
        }
      }

      // Write files
      if (filesToWrite.length === 0) {
        log.warn('No files to write');
        outro('Done');
        return;
      }

      s.start('Writing files...');
      let filesWritten = 0;

      for (const { targetPath, content } of filesToWrite) {
        await fs.mkdir(path.dirname(targetPath), { recursive: true });
        await fs.writeFile(targetPath, content, 'utf-8');
        filesWritten++;
      }

      s.stop(`Wrote ${filesWritten} file(s)`);

      // Install npm dependencies
      if (options.install && Object.keys(npmPackages).length > 0) {
        await installDependencies(npmPackages);
      }

      outro('Components added successfully! ✓');
    } catch (error) {
      log.error(
        picocolors.red(
          error instanceof Error ? error.message : 'An unknown error occurred',
        ),
      );
      process.exit(1);
    }
  });
