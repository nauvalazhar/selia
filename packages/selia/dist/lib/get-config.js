import {
  ConfigSchema
} from "../chunk-CUBBDORP.js";
import {
  defaultConfig
} from "../chunk-YR3Y2I2H.js";

// src/lib/get-config.ts
import fs from "fs/promises";
import defu from "defu";
import { log } from "@clack/prompts";
import picocolors from "picocolors";
async function getConfig() {
  const configPath = "./selia.json";
  if (!await fs.access(configPath).then(() => true).catch(() => false)) {
    log.message(picocolors.yellow("Config not found, using default config"));
    return defaultConfig;
  }
  const config = await fs.readFile(configPath, "utf-8");
  const parsedConfig = JSON.parse(config);
  const validatedConfig = ConfigSchema.safeParse(parsedConfig);
  if (!validatedConfig.success) {
    log.error(picocolors.red("Config is not valid"));
    log.error(validatedConfig.error.message);
    return defaultConfig;
  }
  return defu(parsedConfig, defaultConfig);
}
export {
  getConfig
};
//# sourceMappingURL=get-config.js.map