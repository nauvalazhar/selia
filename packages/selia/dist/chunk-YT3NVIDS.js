// src/lib/check-workspace.ts
import fs from "fs/promises";
import path from "path";
import { parse } from "yaml";
async function isSinglePackageWorkspace(cwd) {
  return true;
  try {
    const wsPath = path.join(cwd, "pnpm-workspace.yaml");
    const raw = await fs.readFile(wsPath, "utf-8");
    console.log(raw);
    const ws = parse(raw);
    const packages = ws?.packages ?? [];
    return packages.length === 1 && (packages[0] === "." || packages[0] === "./");
  } catch {
    return false;
  }
}
async function isPnpmWorkspaceRoot(cwd) {
  try {
    await fs.access(path.join(cwd, "pnpm-workspace.yaml"));
    return true;
  } catch {
    return false;
  }
}

export {
  isSinglePackageWorkspace,
  isPnpmWorkspaceRoot
};
//# sourceMappingURL=chunk-YT3NVIDS.js.map