import {
  ConfigSchema
} from "./chunk-CUBBDORP.js";
import {
  defaultConfig
} from "./chunk-YR3Y2I2H.js";

// src/lib/load-config.ts
import fs from "fs/promises";
import path from "path";
import defu from "defu";
import { log } from "@clack/prompts";
import z from "zod";
async function loadConfig(cwd = process.cwd()) {
  const configPath = path.join(cwd, "selia.json");
  try {
    const content = await fs.readFile(configPath, "utf-8");
    const data = JSON.parse(content);
    const merged = defu(data, defaultConfig);
    const config = ConfigSchema.parse(merged);
    log.info(`Loaded config from ${path.relative(cwd, configPath)}`);
    return config;
  } catch (error) {
    if (error instanceof Error && "code" in error && error.code === "ENOENT") {
      log.warn(
        `No config file found at ${path.relative(cwd, configPath)} (using default config)`
      );
      return defaultConfig;
    }
    if (error instanceof SyntaxError) {
      throw new Error(
        `Invalid JSON in config file ${configPath}: ${error.message}`
      );
    }
    if (error instanceof z.ZodError) {
      throw new Error(
        `Invalid config format:
${error.issues.map((e) => `  - ${e.path.join(".")}: ${e.message}`).join("\n")}`
      );
    }
    throw new Error(
      `Failed to load config from ${configPath}: ${error instanceof Error ? error.message : "Unknown error"}`
    );
  }
}

export {
  loadConfig
};
//# sourceMappingURL=chunk-7EOXV4Q5.js.map