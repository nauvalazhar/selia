// src/lib/resolve-registry.ts
import fs from "fs/promises";
import path from "path";
async function resolveRegistry(cwd, cliRegistry) {
  const configPath = path.join(cwd, "selia.json");
  let existingConfig = null;
  try {
    existingConfig = JSON.parse(await fs.readFile(configPath, "utf-8"));
  } catch {
  }
  const isDev = process.env.SELIA_DEV === "1" || process.env.NODE_ENV === "development";
  const defaultRegistry = isDev ? "http://localhost:5173/registry" : "https://selia.nauv.al/registry";
  const runtimeUrl = cliRegistry || existingConfig?.registries?.sources?.selia?.url || defaultRegistry;
  const persist = Boolean(cliRegistry) && !existingConfig?.registries?.sources?.selia;
  return {
    runtimeUrl,
    persist,
    existingConfig
  };
}

export {
  resolveRegistry
};
//# sourceMappingURL=chunk-CV6HVZMJ.js.map