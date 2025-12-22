import fs from 'fs/promises';
import path from 'path';
import { parse } from 'yaml';

export async function isSinglePackageWorkspace(cwd: string) {
  try {
    const wsPath = path.join(cwd, 'pnpm-workspace.yaml');
    const raw = await fs.readFile(wsPath, 'utf-8');
    const ws = parse(raw);

    const packages = ws?.packages ?? [];

    return (
      packages.length === 1 && (packages[0] === '.' || packages[0] === './')
    );
  } catch {
    return false;
  }
}

export async function isPnpmWorkspaceRoot(cwd: string): Promise<boolean> {
  try {
    await fs.access(path.join(cwd, 'pnpm-workspace.yaml'));
    return true;
  } catch {
    return false;
  }
}
