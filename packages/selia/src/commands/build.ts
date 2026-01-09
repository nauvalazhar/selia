import { Command } from 'commander';
import { intro, outro, log } from '@clack/prompts';
import fs from 'fs/promises';
import picocolors from 'picocolors';
import { RegistrySchema } from '../schemas/registry-schema';
import { isRegistryExists } from '~/lib/utils';
import { cleanBuild } from '~/lib/clean-build';
import { buildRegistry } from '../lib/build-registry';

export const buildCommand = new Command()
  .name('build')
  .description('Build the registry')
  .option('-o, --output <path>', 'Output directory', './public/registry')
  .action(async (options) => {
    console.log();
    intro(picocolors.bgBlue(picocolors.blackBright(' Build Registry ')));

    log.warn(
      picocolors.yellow('This feature is not yet available for public use.'),
    );

    try {
      // Check if registry exists
      if (!(await isRegistryExists())) {
        log.error(picocolors.red('Registry file not found: registry.json'));
        console.log();
        process.exit(1);
      }

      // Read and parse registry
      const registryContent = await fs.readFile('./registry.json', 'utf-8');
      const parsedRegistry = JSON.parse(registryContent);

      // Validate registry
      const validatedRegistry = RegistrySchema.safeParse(parsedRegistry);

      if (!validatedRegistry.success) {
        console.log(validatedRegistry.error);
        log.error(picocolors.red('Invalid registry format:'));
        validatedRegistry.error.issues.forEach((err) => {
          log.error(
            picocolors.red(`  - ${err.path.join('.')}: ${err.message}`),
          );
        });
        process.exit(1);
      }

      // Clean output directory
      await cleanBuild(options.output);

      // Build registry
      await buildRegistry(validatedRegistry.data, {
        output: options.output,
      });

      outro(picocolors.green('Registry built successfully! ✓'));
    } catch (error) {
      log.error(
        picocolors.red(
          error instanceof Error ? error.message : 'An unknown error occurred',
        ),
      );
      process.exit(1);
    }
  });
