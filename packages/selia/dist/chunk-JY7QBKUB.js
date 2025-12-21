// src/lib/write-config.ts
import fs from "fs/promises";
import path from "path";
async function writeConfig(config) {
  const configPath = path.join(process.cwd(), "selia.json");
  await fs.writeFile(configPath, JSON.stringify(config, null, 2), "utf-8");
  return configPath;
}

export {
  writeConfig
};
//# sourceMappingURL=chunk-JY7QBKUB.js.map