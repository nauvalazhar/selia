// src/lib/detect-framework.ts
import fs from "fs/promises";
import path from "path";
async function exists(p) {
  try {
    await fs.access(p);
    return true;
  } catch {
    return false;
  }
}
async function detectFramework(cwd = process.cwd()) {
  try {
    const pkgPath = path.join(cwd, "package.json");
    const pkg = JSON.parse(await fs.readFile(pkgPath, "utf-8"));
    const deps = {
      ...pkg.dependencies,
      ...pkg.devDependencies
    };
    if (deps["next"]) return "next";
    if (deps["react-router"] && deps["@react-router/dev"]) {
      return "react-router";
    }
    if (deps["@remix-run/react"]) return "remix";
    if (deps["@tanstack/start"]) return "tanstack-start";
    if (deps["@tanstack/router"]) return "tanstack-router";
    if (deps["astro"]) return "astro";
    if (deps["vite"] && (await exists(path.join(cwd, "vite.config.ts")) || await exists(path.join(cwd, "vite.config.js")))) {
      return "vite";
    }
    if (await exists(path.join(cwd, "artisan")) && await exists(path.join(cwd, "composer.json"))) {
      return "laravel";
    }
    if (deps["react"]) return "react";
    return "unknown";
  } catch {
    return "unknown";
  }
}

export {
  detectFramework
};
//# sourceMappingURL=chunk-DBWDD2V3.js.map