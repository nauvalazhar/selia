import { Config } from '../schemas/config-schema';
import path from 'path';

export function resolveImportAlias(content: string, config: Config): string {
  let resolved = content;

  const regex = /\bfrom\s+(['"`])(#(\w+)(?:\/[^'"`]*)?)\1/g;

  resolved = resolved.replace(regex, (match, quote, fullPath, key) => {
    const target = config.imports[key];

    if (!target) {
      return match;
    }

    const replaced = fullPath.replace(`#${key}`, target);
    return `from ${quote}${replaced}${quote}`;
  });

  return resolved;
}

export function resolveTargetPath(
  target: string,
  config: Config,
  cwd: string = process.cwd(),
): string {
  const configPath = config.paths[target as keyof typeof config.paths];

  if (!configPath) {
    throw new Error(
      `Unknown target "${target}". Available targets: ${Object.keys(config.paths).join(', ')}`,
    );
  }

  return path.join(cwd, configPath);
}
