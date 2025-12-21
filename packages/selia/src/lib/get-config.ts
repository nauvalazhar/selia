import fs from 'fs/promises';
import { defaultConfig } from './default-config';
import defu from 'defu';
import { Config, ConfigSchema } from '../schemas/config-schema';
import { log } from '@clack/prompts';
import picocolors from 'picocolors';

export async function getConfig(): Promise<Config> {
  const configPath = './selia.json';

  if (
    !(await fs
      .access(configPath)
      .then(() => true)
      .catch(() => false))
  ) {
    log.message(picocolors.yellow('Config not found, using default config'));
    return defaultConfig;
  }

  const config = await fs.readFile(configPath, 'utf-8');

  const parsedConfig = JSON.parse(config);

  const validatedConfig = ConfigSchema.safeParse(parsedConfig);

  if (!validatedConfig.success) {
    log.error(picocolors.red('Config is not valid'));
    log.error(validatedConfig.error.message);
    return defaultConfig;
  }

  return defu(parsedConfig, defaultConfig);
}
