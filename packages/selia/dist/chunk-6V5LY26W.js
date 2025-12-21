import {
  detectPackageManager,
  getInstallCommand
} from "./chunk-EY3QT3VP.js";
import {
  isPnpmWorkspaceRoot,
  isSinglePackageWorkspace
} from "./chunk-YT3NVIDS.js";

// src/lib/install-dependencies.ts
import { execa } from "execa";
import { spinner } from "@clack/prompts";
async function installDependencies(packages, cwd = process.cwd()) {
  if (Object.keys(packages).length === 0) return;
  const pm = await detectPackageManager(cwd);
  const packagesString = Object.entries(packages).map(([pkg, version]) => `${pkg}@${version}`).join(" ");
  const s = spinner();
  s.start(`Installing dependencies with ${pm}...`);
  try {
    const [command, ...args] = getInstallCommand(pm).split(" ");
    if (pm === "pnpm" && await isPnpmWorkspaceRoot(cwd)) {
      if (!await isSinglePackageWorkspace(cwd)) {
        throw new Error("You need to install dependencies manually.");
      }
      args.push("-w");
    }
    await execa(command, [...args, ...packagesString.split(" ")], {
      cwd,
      args,
      stdio: "pipe"
    });
    s.stop("Dependencies installed");
  } catch (error) {
    s.stop("Failed to install dependencies");
    throw new Error(
      `${error instanceof Error ? error.message : "Unknown error"}`
    );
  }
}

export {
  installDependencies
};
//# sourceMappingURL=chunk-6V5LY26W.js.map