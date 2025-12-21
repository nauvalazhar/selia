// src/lib/build-registry.ts
import fs from "fs/promises";
import path from "path";
import { log, spinner } from "@clack/prompts";
import picocolors from "picocolors";
async function buildRegistry(registry, options) {
  const s = spinner();
  s.start("Building registry...");
  try {
    await buildRegistryFile(registry, options.output);
    for (let i = 0; i < registry.items.length; i++) {
      const item = registry.items[i];
      s.message(`Building ${item.name} (${i + 1}/${registry.items.length})`);
      await buildItem(item, options.output);
    }
    if (registry.setup) {
      s.message("Building setup configuration...");
      await buildSetup(registry.setup, options.output);
    }
    s.stop("Build complete");
    log.success(
      picocolors.green(`Built ${registry.items.length} items successfully`)
    );
  } catch (error) {
    s.stop("Build failed");
    const message = error instanceof Error ? error.message : "Unknown error";
    log.error(picocolors.red(message));
    process.exit(1);
  }
}
async function buildRegistryFile(registry, output) {
  const cleanedItems = registry.items.map((item) => ({
    ...item,
    files: item.files.map(({ path: _, ...file }) => file)
  }));
  const cleanedRegistry = {
    ...registry,
    items: cleanedItems
  };
  if (registry.setup) {
    cleanedRegistry.setup = "setup.json";
  }
  await fs.mkdir(output, { recursive: true });
  await fs.writeFile(
    path.join(output, "registry.json"),
    JSON.stringify(cleanedRegistry, null, 2),
    "utf-8"
  );
}
async function buildItem(item, output) {
  const filesWithContent = await Promise.all(
    item.files.map(async (file) => {
      if (!file.path) {
        throw new Error(`Path is required for file in item "${item.name}"`);
      }
      const content = await fs.readFile(file.path, "utf-8");
      const { path: _, ...rest } = file;
      return {
        ...rest,
        content
      };
    })
  );
  const itemWithContent = {
    ...item,
    files: filesWithContent
  };
  await fs.mkdir(output, { recursive: true });
  await fs.writeFile(
    path.join(output, `${item.name}.json`),
    JSON.stringify(itemWithContent, null, 2),
    "utf-8"
  );
}
async function buildSetup(setup, output) {
  const processedSteps = await Promise.all(
    setup.steps.map(async (step) => {
      if ("contentPath" in step && step.contentPath && (step.type === "file-append" || step.type === "file-create")) {
        try {
          const content = await fs.readFile(step.contentPath, "utf-8");
          const { contentPath: _, ...rest } = step;
          return {
            ...rest,
            content
          };
        } catch (error) {
          throw new Error(
            `Failed to read content for setup step from "${step.contentPath}": ${error instanceof Error ? error.message : "Unknown error"}`
          );
        }
      }
      return step;
    })
  );
  const processedSetup = {
    steps: processedSteps
  };
  await fs.writeFile(
    path.join(output, "setup.json"),
    JSON.stringify(processedSetup, null, 2),
    "utf-8"
  );
}

export {
  buildRegistry
};
//# sourceMappingURL=chunk-4FDDSKDU.js.map