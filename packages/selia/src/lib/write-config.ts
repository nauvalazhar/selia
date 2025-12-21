import fs from 'fs/promises';
import path from 'path';
import { Config } from '~/schemas/config-schema';

export async function writeConfig(config: Config) {
  const configPath = path.join(process.cwd(), 'selia.json');
  await fs.writeFile(configPath, JSON.stringify(config, null, 2), 'utf-8');

  return configPath;
}
