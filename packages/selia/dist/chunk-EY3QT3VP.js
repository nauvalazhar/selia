// src/lib/package-manager.ts
import fs from "fs/promises";
import { existsSync } from "fs";
import path from "path";
async function detectPackageManager(cwd = process.cwd()) {
  if (existsSync(path.join(cwd, "bun.lock"))) return "bun";
  if (existsSync(path.join(cwd, "pnpm-lock.yaml"))) return "pnpm";
  if (existsSync(path.join(cwd, "yarn.lock"))) return "yarn";
  if (existsSync(path.join(cwd, "package-lock.json"))) return "npm";
  try {
    const pkgPath = path.join(cwd, "package.json");
    const pkg = JSON.parse(await fs.readFile(pkgPath, "utf-8"));
    if (pkg.packageManager) {
      if (pkg.packageManager.startsWith("bun")) return "bun";
      if (pkg.packageManager.startsWith("pnpm")) return "pnpm";
      if (pkg.packageManager.startsWith("yarn")) return "yarn";
    }
  } catch {
  }
  return "npm";
}
function getInstallCommand(pm) {
  const commands = {
    npm: "npm install",
    yarn: "yarn add",
    pnpm: "pnpm add",
    bun: "bun add"
  };
  return commands[pm];
}

export {
  detectPackageManager,
  getInstallCommand
};
//# sourceMappingURL=chunk-EY3QT3VP.js.map