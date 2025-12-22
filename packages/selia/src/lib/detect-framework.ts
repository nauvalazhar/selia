import fs from 'fs/promises';
import path from 'path';
import { glob } from 'glob';

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
): Promise<[string, string]> {
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

    if (deps['next']) {
      const files = await glob('{pages,src/pages}/_app.{js,ts,jsx,tsx}', {
        cwd,
      });

      if (files.length > 0) {
        return ['next-pages', 'Next.js Pages'];
      }
      return ['next', 'Next.js'];
    }

    // React Router v7 (ex-Remix)
    if (deps['react-router'] && deps['@react-router/dev']) {
      return ['react-router', 'React Router v7'];
    }

    // Remix (legacy but still exists)
    if (deps['@remix-run/react']) return ['remix', 'Remix'];

    // TanStack Start
    if (deps['@tanstack/react-start'])
      return ['tanstack-start', 'TanStack Start'];

    // TanStack Router (standalone)
    if (deps['@tanstack/react-router'])
      return ['tanstack-router', 'TanStack Router'];

    // Astro
    if (deps['astro']) return ['astro', 'Astro'];

    /* ----------------------------
     * Vite (needs file hint)
     * ---------------------------- */

    if (
      deps['vite'] &&
      ((await exists(path.join(cwd, 'vite.config.ts'))) ||
        (await exists(path.join(cwd, 'vite.config.js'))))
    ) {
      return ['vite', 'Vite'];
    }

    /* ----------------------------
     * Laravel (non-Node primary)
     * ---------------------------- */

    if (
      (await exists(path.join(cwd, 'artisan'))) &&
      (await exists(path.join(cwd, 'composer.json')))
    ) {
      return ['laravel', 'Laravel'];
    }

    /* ----------------------------
     * Plain React fallback
     * ---------------------------- */

    if (deps['react']) return ['react', 'React'];

    return ['unknown', 'Unknown'];
  } catch {
    return ['unknown', 'Unknown'];
  }
}
