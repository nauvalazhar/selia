import fs from 'fs/promises';
import path from 'path';

async function exists(p: string) {
  try {
    await fs.access(p);
    return true;
  } catch {
    return false;
  }
}

export async function detectFramework(
  cwd: string = process.cwd(),
): Promise<string> {
  try {
    const pkgPath = path.join(cwd, 'package.json');
    const pkg = JSON.parse(await fs.readFile(pkgPath, 'utf-8'));

    const deps = {
      ...pkg.dependencies,
      ...pkg.devDependencies,
    };

    /* ----------------------------
     * React meta-frameworks
     * ---------------------------- */

    if (deps['next']) return 'next';

    // React Router v7 (ex-Remix)
    if (deps['react-router'] && deps['@react-router/dev']) {
      return 'react-router';
    }

    // Remix (legacy but still exists)
    if (deps['@remix-run/react']) return 'remix';

    // TanStack Start
    if (deps['@tanstack/start']) return 'tanstack-start';

    // TanStack Router (standalone)
    if (deps['@tanstack/router']) return 'tanstack-router';

    // Astro
    if (deps['astro']) return 'astro';

    /* ----------------------------
     * Vite (needs file hint)
     * ---------------------------- */

    if (
      deps['vite'] &&
      ((await exists(path.join(cwd, 'vite.config.ts'))) ||
        (await exists(path.join(cwd, 'vite.config.js'))))
    ) {
      return 'vite';
    }

    /* ----------------------------
     * Laravel (non-Node primary)
     * ---------------------------- */

    if (
      (await exists(path.join(cwd, 'artisan'))) &&
      (await exists(path.join(cwd, 'composer.json')))
    ) {
      return 'laravel';
    }

    /* ----------------------------
     * Plain React fallback
     * ---------------------------- */

    if (deps['react']) return 'react';

    return 'unknown';
  } catch {
    return 'unknown';
  }
}
