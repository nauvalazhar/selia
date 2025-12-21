// src/lib/utils.ts
import fs from "fs/promises";
import { cancel, isCancel } from "@clack/prompts";
async function isRegistryExists() {
  try {
    await fs.access("./registry.json");
    return true;
  } catch (e) {
    return false;
  }
}
function getRegistryFromConfig(config) {
  if (!config.registries?.default || !config.registries.sources) {
    return null;
  }
  const registry = config.registries.sources[config.registries.default];
  if (!registry) {
    return null;
  }
  return registry;
}
function abortIfCancel(value) {
  if (isCancel(value)) {
    cancel("Setup aborted by user.");
    process.exit(1);
  }
}

export {
  isRegistryExists,
  getRegistryFromConfig,
  abortIfCancel
};
//# sourceMappingURL=chunk-G25NKXZU.js.map