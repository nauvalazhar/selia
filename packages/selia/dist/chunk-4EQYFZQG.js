import {
  resolveDependencies
} from "./chunk-J3NVL63W.js";
import {
  resolveImportAlias,
  resolveTargetPath
} from "./chunk-A2B5L7S6.js";
import {
  fetchItems
} from "./chunk-ZS2G2W6I.js";
import {
  loadConfig
} from "./chunk-7EOXV4Q5.js";
import {
  installDependencies
} from "./chunk-6V5LY26W.js";
import {
  abortIfCancel,
  getRegistryFromConfig
} from "./chunk-G25NKXZU.js";

// src/commands/add.ts
import { Command } from "commander";
import { intro, outro, spinner, log, select } from "@clack/prompts";
import fs from "fs/promises";
import path from "path";
import picocolors from "picocolors";
import { existsSync } from "fs";
var addCommand = new Command().name("add").description("Add components to your project").argument("<items...>", "Items to add").option("-y, --yes", "Skip confirmation prompts").option("--no-install", "Skip installing dependencies").option("--overwrite", "Overwrite existing files without asking").action(async (itemNames, options) => {
  console.log();
  intro(picocolors.bgBlue(picocolors.blackBright(" Add Item ")));
  log.warn(
    picocolors.yellow(
      "The CLI is still in development, report any issues on GitHub!"
    )
  );
  try {
    const config = await loadConfig();
    const s = spinner();
    const registry = getRegistryFromConfig(config);
    if (!registry?.url) {
      log.error(picocolors.red("Registry not found"));
      return;
    }
    const items = await fetchItems(registry.url, itemNames);
    s.start("Resolving dependencies...");
    const resolved = await resolveDependencies(items, registry.url);
    s.stop(
      `Resolved ${resolved.items.size} item(s) and ${Object.keys(resolved.npmPackages).length} npm package(s)`
    );
    const allItems = Array.from(resolved.items.values());
    const npmPackages = resolved.npmPackages;
    const existingFiles = [];
    const filesToWrite = [];
    for (const item of allItems) {
      for (const file of item.files) {
        const basePath = resolveTargetPath(
          file.target,
          config,
          process.cwd()
        );
        const targetPath = path.join(basePath, file.name);
        let content = file.content || "";
        content = resolveImportAlias(content, config);
        filesToWrite.push({ item, file, targetPath, content });
        if (existsSync(targetPath)) {
          existingFiles.push(path.relative(process.cwd(), targetPath));
        }
      }
    }
    if (existingFiles.length > 0 && !options.overwrite) {
      log.warn(`Found ${existingFiles.length} existing file(s):`);
      existingFiles.forEach(
        (f) => console.log(`  ${picocolors.yellow("\u2022")} ${f}`)
      );
      console.log();
      const overwriteChoice = await select({
        message: "How do you want to proceed?",
        options: [
          { value: "overwrite", label: "Overwrite all existing files" },
          { value: "skip", label: "Skip existing files" },
          { value: "cancel", label: "Cancel operation" }
        ]
      });
      abortIfCancel(overwriteChoice);
      if (overwriteChoice === "cancel") {
        outro("Cancelled");
        process.exit(0);
      }
      if (overwriteChoice === "skip") {
        const skippedCount = filesToWrite.length;
        filesToWrite.splice(
          0,
          filesToWrite.length,
          ...filesToWrite.filter((f) => !existsSync(f.targetPath))
        );
        log.info(
          `Skipping ${skippedCount - filesToWrite.length} existing file(s)`
        );
      }
    }
    if (filesToWrite.length === 0) {
      log.warn("No files to write");
      outro("Done");
      return;
    }
    s.start("Writing files...");
    let filesWritten = 0;
    for (const { targetPath, content } of filesToWrite) {
      await fs.mkdir(path.dirname(targetPath), { recursive: true });
      await fs.writeFile(targetPath, content, "utf-8");
      filesWritten++;
    }
    s.stop(`Wrote ${filesWritten} file(s)`);
    if (options.install && Object.keys(npmPackages).length > 0) {
      await installDependencies(npmPackages);
    }
    outro("Components added successfully! \u2713");
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
  addCommand
};
//# sourceMappingURL=chunk-4EQYFZQG.js.map