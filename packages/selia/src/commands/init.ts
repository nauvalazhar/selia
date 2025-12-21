import { Command } from 'commander';
import { intro, outro, log, spinner, note, confirm } from '@clack/prompts';
import picocolors from 'picocolors';
import { fetchSetup } from '~/lib/fetch-setup';
import {
  executeSetup,
  executeSetupActions,
  previewSetupActions,
} from '~/lib/setup-executor';
import { defaultConfig } from '~/lib/default-config';
import { resolveRegistry } from '~/lib/resolve-registry';
import { writeConfig } from '~/lib/write-config';
import { Config } from '~/schemas/config-schema';
import { abortIfCancel } from '~/lib/utils';

export const initCommand = new Command()
  .name('init')
  .description('Initialize Selia in your project')
  .option('-r, --registry <url>', 'Registry URL')
  .option('-y, --yes', 'Skip confirmation')
  .action(async (options) => {
    console.log();
    intro(picocolors.bgBlue(picocolors.blackBright(' Initialize Selia ')));

    log.warn(
      picocolors.yellow(
        'The CLI is still in development, report any issues on GitHub!',
      ),
    );

    if (options.registry) {
      log.info(
        'This feature is not available yet.\nUse default Selia registry instead.',
      );
      console.log();
      return;
    }

    try {
      const { runtimeUrl, persist, existingConfig } = await resolveRegistry(
        process.cwd(),
        options.registry,
      );

      const registryUrl = runtimeUrl;
      if (!registryUrl) {
        outro('Cancelled.');
        return;
      }

      const s = spinner();

      // Fetch registry metadata
      //   const registry = await fetchRegistry(registryUrl);

      // Try to fetch setup.json
      let setup;
      try {
        s.start('Fetching setup configuration...');
        setup = await fetchSetup(registryUrl as string);
        s.stop('Setup configuration loaded');
      } catch (error) {
        if (error instanceof Error) {
          s.stop(error.message);
          return;
        }

        s.stop('No setup configuration found');

        const finalConfig = {
          ...defaultConfig,
          //   ...(persist && {
          //     registries: {
          //       default: 'selia',
          //       sources: {
          //         selia: {
          //           name: registry.name,
          //           url: registryUrl,
          //         },
          //       },
          //     },
          //   }),
        } as Config;

        await writeConfig(finalConfig);

        outro(picocolors.green('Config created ✓'));
        log.info(
          'Run ' +
            picocolors.cyan('selia add <component>') +
            ' to add components',
        );
        console.log();
        return;
      }

      // Execute setup prompts (Phase 1: Collect info)
      const context = await executeSetup(setup);

      // Preview actions
      const actions = await previewSetupActions(setup, context);

      // Always add config creation action
      actions.unshift('Create `selia.json`');

      // Show what will be done
      console.log(); // spacing
      log.info('I will now perform the following actions:');
      actions.forEach((action) => {
        console.log(picocolors.dim('  • ') + action);
      });
      console.log(); // spacing

      // Confirm
      if (!options.yes) {
        const shouldContinue = await confirm({
          message: 'Is this okay?',
          initialValue: true,
        });

        abortIfCancel(shouldContinue);

        if (!shouldContinue) {
          outro('Cancelled. Nothing was done.');
          process.exit(0);
        }
      }

      // Execute actions (Phase 2: Do the work)
      await executeSetupActions(setup, context);

      // Build final config
      const config = {
        ...defaultConfig,
        ...existingConfig,
        // ...(persist && {
        //   registries: {
        //     default: 'selia',
        //     sources: {
        //       selia: {
        //         name: registry.name,
        //         url: registryUrl,
        //       },
        //     },
        //   },
        // }),
      } as Config;

      // Write config file
      s.start('Creating config file...');
      await writeConfig(config);
      s.stop('Config file created');

      // Show summary
      note(picocolors.dim('Config saved to: ') + picocolors.cyan('selia.json'));

      outro(picocolors.green('Selia initialized successfully! ✓'));
      log.info(
        'Run ' +
          picocolors.cyan('selia add <component>') +
          ' to add components',
      );
      console.log();
    } catch (error) {
      log.error(
        error instanceof Error ? error.message : 'An unknown error occurred',
      );
      process.exit(1);
    }
  });
