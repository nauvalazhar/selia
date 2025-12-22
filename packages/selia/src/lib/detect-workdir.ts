import { join } from 'node:path';
import { existsSync } from 'node:fs';

export function detectWorkdir(cwd: string) {
  if (existsSync(join(cwd, 'src'))) {
    return './src/';
  }

  return './';
}
