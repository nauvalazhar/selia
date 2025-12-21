import fs from 'fs/promises';
import { Config } from '../schemas/config-schema';
import { cancel, isCancel } from '@clack/prompts';

export async function isRegistryExists() {
  try {
    await fs.access('./registry.json');
    return true;
  } catch (e) {
    return false;
  }
}

export function getRegistryFromConfig(config: Config) {
  if (!config.registries?.default || !config.registries.sources) {
    return null;
  }

  const registry = config.registries.sources[config.registries.default];

  if (!registry) {
    return null;
  }

  return registry;
}

export function abortIfCancel(value: unknown): never | void {
  if (isCancel(value)) {
    cancel('Setup aborted by user.');
    process.exit(1);
  }
}
