import {
  RegistrySchema
} from "./chunk-UCAIUO4I.js";
import {
  isRegistryExists
} from "./chunk-G25NKXZU.js";
import {
  buildRegistry
} from "./chunk-4FDDSKDU.js";
import {
  cleanBuild
} from "./chunk-ONNQQ2M7.js";

// src/commands/build.ts
import { Command } from "commander";
import { intro, outro, log } from "@clack/prompts";
import fs from "fs/promises";
import picocolors from "picocolors";
var buildCommand = new Command().name("build").description("Build the registry").option("-o, --output <path>", "Output directory", "./public/registry").action(async (options) => {
  intro("Build Registry");
  try {
    if (!await isRegistryExists()) {
      log.error(picocolors.red("Registry file not found: registry.json"));
      process.exit(1);
    }
    const registryContent = await fs.readFile("./registry.json", "utf-8");
    const parsedRegistry = JSON.parse(registryContent);
    const validatedRegistry = RegistrySchema.safeParse(parsedRegistry);
    if (!validatedRegistry.success) {
      console.log(validatedRegistry.error);
      log.error(picocolors.red("Invalid registry format:"));
      validatedRegistry.error.issues.forEach((err) => {
        log.error(
          picocolors.red(`  - ${err.path.join(".")}: ${err.message}`)
        );
      });
      process.exit(1);
    }
    await cleanBuild(options.output);
    await buildRegistry(validatedRegistry.data, {
      output: options.output
    });
    outro(picocolors.green("Registry built successfully! \u2713"));
  } catch (error) {
    log.error(
      picocolors.red(
        error instanceof Error ? error.message : "An unknown error occurred"
      )
    );
    process.exit(1);
  }
});

export {
  buildCommand
};
//# sourceMappingURL=chunk-DJWDZ34S.js.map