import fs from 'fs/promises';
import path from 'path';
import { ConfigSchema, type Config } from '../schemas/config-schema';
import { defaultConfig } from '~/lib/default-config';
import defu from 'defu';
import { log } from '@clack/prompts';
import z from 'zod';

export async function loadConfig(cwd: string = process.cwd()): Promise<Config> {
  const configPath = path.join(cwd, 'selia.json');

  try {
    const content = await fs.readFile(configPath, 'utf-8');
    const data = JSON.parse(content);

    const merged = defu(data, defaultConfig);

    const config = ConfigSchema.parse(merged);

    log.info(`Loaded config from ${path.relative(cwd, configPath)}`);

    return config;
  } catch (error) {
    if (error instanceof Error && 'code' in error && error.code === 'ENOENT') {
      log.warn(
        `No config file found at ${path.relative(cwd, configPath)} (using default config)`,
      );

      return defaultConfig;
    }

    if (error instanceof SyntaxError) {
      throw new Error(
        `Invalid JSON in config file ${configPath}: ${error.message}`,
      );
    }

    if (error instanceof z.ZodError) {
      throw new Error(
        `Invalid config format:\n${error.issues.map((e) => `  - ${e.path.join('.')}: ${e.message}`).join('\n')}`,
      );
    }

    throw new Error(
      `Failed to load config from ${configPath}: ${error instanceof Error ? error.message : 'Unknown error'}`,
    );
  }
}
