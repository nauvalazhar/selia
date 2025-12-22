import deepmerge from 'deepmerge';
import fs from 'fs/promises';
import path from 'path';
import { Config } from '~/schemas/config-schema';

export async function writeConfig(config: Config) {
  // read existing config
  let existingConfig;
  try {
    existingConfig = await fs.readFile(
      path.join(process.cwd(), 'selia.json'),
      'utf-8',
    );
  } catch (error) {
    existingConfig = '{}';
  }

  // merge configs
  const mergedConfig = deepmerge(JSON.parse(existingConfig), config);

  const configPath = path.join(process.cwd(), 'selia.json');
  await fs.writeFile(
    configPath,
    JSON.stringify(mergedConfig, null, 2),
    'utf-8',
  );

  return configPath;
}
