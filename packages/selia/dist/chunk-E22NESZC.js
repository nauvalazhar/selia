import {
  resolveRegistry
} from "./chunk-CV6HVZMJ.js";
import {
  executeSetup,
  executeSetupActions,
  previewSetupActions
} from "./chunk-FC2UZPB4.js";
import {
  writeConfig
} from "./chunk-JY7QBKUB.js";
import {
  fetchSetup
} from "./chunk-CAKORMJ3.js";
import {
  abortIfCancel
} from "./chunk-G25NKXZU.js";
import {
  defaultConfig
} from "./chunk-YR3Y2I2H.js";

// src/commands/init.ts
import { Command } from "commander";
import { intro, outro, log, spinner, note, confirm } from "@clack/prompts";
import picocolors from "picocolors";
var initCommand = new Command().name("init").description("Initialize Selia in your project").option("-r, --registry <url>", "Registry URL").option("-y, --yes", "Skip confirmation").action(async (options) => {
  console.log();
  intro(picocolors.bgBlue(picocolors.blackBright(" Initialize Selia ")));
  if (options.registry) {
    log.info(
      "This feature is not available yet.\nUse default Selia registry instead."
    );
    console.log();
    return;
  }
  try {
    const { runtimeUrl, persist, existingConfig } = await resolveRegistry(
      process.cwd(),
      options.registry
    );
    const registryUrl = runtimeUrl;
    if (!registryUrl) {
      outro("Cancelled.");
      return;
    }
    const s = spinner();
    let setup;
    try {
      s.start("Fetching setup configuration...");
      setup = await fetchSetup(registryUrl);
      s.stop("Setup configuration loaded");
    } catch (error) {
      if (error instanceof Error) {
        s.stop(error.message);
        return;
      }
      s.stop("No setup configuration found");
      const finalConfig = {
        ...defaultConfig
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
      };
      await writeConfig(finalConfig);
      outro(picocolors.green("Config created \u2713"));
      log.info(
        "Run " + picocolors.cyan("selia add <component>") + " to add components"
      );
      console.log();
      return;
    }
    const context = await executeSetup(setup);
    const actions = await previewSetupActions(setup, context);
    actions.unshift("Create `selia.json`");
    console.log();
    log.info("I will now perform the following actions:");
    actions.forEach((action) => {
      console.log(picocolors.dim("  \u2022 ") + action);
    });
    console.log();
    if (!options.yes) {
      const shouldContinue = await confirm({
        message: "Is this okay?",
        initialValue: true
      });
      abortIfCancel(shouldContinue);
      if (!shouldContinue) {
        outro("Cancelled. Nothing was done.");
        process.exit(0);
      }
    }
    await executeSetupActions(setup, context);
    const config = {
      ...defaultConfig,
      ...existingConfig
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
    };
    s.start("Creating config file...");
    await writeConfig(config);
    s.stop("Config file created");
    note(picocolors.dim("Config saved to: ") + picocolors.cyan("selia.json"));
    outro(picocolors.green("Selia initialized successfully! \u2713"));
    log.info(
      "Run " + picocolors.cyan("selia add <component>") + " to add components"
    );
    console.log();
  } catch (error) {
    log.error(
      error instanceof Error ? error.message : "An unknown error occurred"
    );
    process.exit(1);
  }
});

export {
  initCommand
};
//# sourceMappingURL=chunk-E22NESZC.js.map