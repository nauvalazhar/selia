#!/usr/bin/env node

// src/index.ts
import { program } from "commander";

// src/commands/add.ts
import { Command } from "commander";
import { intro, outro, spinner as spinner2, log as log2, select } from "@clack/prompts";
import fs5 from "fs/promises";
import path5 from "path";

// src/lib/load-config.ts
import fs from "fs/promises";
import path from "path";

// src/schemas/config-schema.ts
import { z } from "zod";
var ConfigSchema = z.object({
  framework: z.string().optional(),
  paths: z.record(z.string(), z.string()),
  imports: z.record(z.string(), z.string()),
  registries: z.object({
    default: z.string().optional(),
    sources: z.record(
      z.string(),
      z.object({
        name: z.string(),
        url: z.url(),
        homepage: z.url().optional()
      })
    ).optional()
  }).optional()
});

// src/lib/default-config.ts
var defaultConfig = {
  framework: "react",
  paths: {
    components: "components/selia",
    utils: "lib/utils.ts"
  },
  imports: {
    utils: "@/lib/utils",
    components: "@/components/selia"
  },
  registries: {
    default: "selia",
    sources: {
      selia: {
        name: "selia",
        url: "http://localhost:5173/registry"
      }
    }
  }
};

// src/lib/load-config.ts
import defu from "defu";
import { log } from "@clack/prompts";
import z2 from "zod";
async function loadConfig(cwd = process.cwd()) {
  const configPath = path.join(cwd, "selia.json");
  try {
    const content = await fs.readFile(configPath, "utf-8");
    const data = JSON.parse(content);
    const merged = defu(data, defaultConfig);
    const config = ConfigSchema.parse(merged);
    log.info(`Loaded config from ${path.relative(cwd, configPath)}`);
    return config;
  } catch (error) {
    if (error instanceof Error && "code" in error && error.code === "ENOENT") {
      log.warn(
        `No config file found at ${path.relative(cwd, configPath)} (using default config)`
      );
      return defaultConfig;
    }
    if (error instanceof SyntaxError) {
      throw new Error(
        `Invalid JSON in config file ${configPath}: ${error.message}`
      );
    }
    if (error instanceof z2.ZodError) {
      throw new Error(
        `Invalid config format:
${error.issues.map((e) => `  - ${e.path.join(".")}: ${e.message}`).join("\n")}`
      );
    }
    throw new Error(
      `Failed to load config from ${configPath}: ${error instanceof Error ? error.message : "Unknown error"}`
    );
  }
}

// src/schemas/item-schema.ts
import { z as z3 } from "zod";
var ItemSchema = z3.object({
  name: z3.string(),
  type: z3.union([
    z3.enum(["component", "block", "hook", "util", "config"]),
    z3.string()
  ]),
  dependencies: z3.object({
    npm: z3.record(z3.string(), z3.string()).optional(),
    items: z3.array(z3.string()).optional()
  }).optional(),
  files: z3.array(
    z3.object({
      name: z3.string(),
      content: z3.string().optional(),
      target: z3.string(),
      path: z3.string().optional(),
      type: z3.union([
        z3.enum(["component", "block", "hook", "util", "config"]),
        z3.string()
      ]).optional()
    })
  )
});

// src/lib/fetch-item.ts
async function fetchItem(registryUrl, itemName) {
  const url = `${registryUrl}/${itemName}.json`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      if (response.status === 404) {
        throw new Error(`No item found.`);
      }
      throw new Error(
        `Failed to fetch item "${itemName}" from registry: ${response.statusText}`
      );
    }
    const data = await response.json();
    return ItemSchema.parse(data);
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Failed to fetch item "${itemName}": ${error.message}`);
    }
    throw error;
  }
}
async function fetchItems(registryUrl, itemNames) {
  const items = await Promise.all(
    itemNames.map((name) => fetchItem(registryUrl, name))
  );
  return items;
}

// src/lib/resolve-dependencies.ts
async function resolveDependencies(items, registryUrl, visited = /* @__PURE__ */ new Set()) {
  const result = {
    items: /* @__PURE__ */ new Map(),
    npmPackages: {}
  };
  for (const item of items) {
    if (visited.has(item.name)) continue;
    visited.add(item.name);
    result.items.set(item.name, item);
    if (item.dependencies?.npm) {
      Object.assign(result.npmPackages, item.dependencies.npm);
    }
    if (item.dependencies?.items && item.dependencies.items.length > 0) {
      const depItems = await Promise.all(
        item.dependencies.items.map(
          (depName) => fetchItem(registryUrl, depName)
        )
      );
      const depResolved = await resolveDependencies(
        depItems,
        registryUrl,
        visited
      );
      for (const [name, depItem] of depResolved.items) {
        result.items.set(name, depItem);
      }
      Object.assign(result.npmPackages, depResolved.npmPackages);
    }
  }
  return result;
}

// src/lib/resolve-import.ts
import path2 from "path";
function resolveImportAlias(content, config) {
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
function resolveTargetPath(target, config, cwd = process.cwd()) {
  const configPath = config.paths[target];
  if (!configPath) {
    throw new Error(
      `Unknown target "${target}". Available targets: ${Object.keys(config.paths).join(", ")}`
    );
  }
  return path2.join(cwd, configPath);
}

// src/lib/install-dependencies.ts
import { execa } from "execa";

// src/lib/package-manager.ts
import fs2 from "fs/promises";
import { existsSync } from "fs";
import path3 from "path";
async function detectPackageManager(cwd = process.cwd()) {
  if (existsSync(path3.join(cwd, "bun.lock"))) return "bun";
  if (existsSync(path3.join(cwd, "pnpm-lock.yaml"))) return "pnpm";
  if (existsSync(path3.join(cwd, "yarn.lock"))) return "yarn";
  if (existsSync(path3.join(cwd, "package-lock.json"))) return "npm";
  try {
    const pkgPath = path3.join(cwd, "package.json");
    const pkg = JSON.parse(await fs2.readFile(pkgPath, "utf-8"));
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

// src/lib/install-dependencies.ts
import { spinner } from "@clack/prompts";

// src/lib/check-workspace.ts
import fs3 from "fs/promises";
import path4 from "path";
import { parse } from "yaml";
async function isSinglePackageWorkspace(cwd) {
  try {
    const wsPath = path4.join(cwd, "pnpm-workspace.yaml");
    const raw = await fs3.readFile(wsPath, "utf-8");
    const ws = parse(raw);
    const packages = ws?.packages ?? [];
    return packages.length === 1 && (packages[0] === "." || packages[0] === "./");
  } catch {
    return false;
  }
}
async function isPnpmWorkspaceRoot(cwd) {
  try {
    await fs3.access(path4.join(cwd, "pnpm-workspace.yaml"));
    return true;
  } catch {
    return false;
  }
}

// src/lib/install-dependencies.ts
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

// src/lib/utils.ts
import fs4 from "fs/promises";
import { cancel, isCancel } from "@clack/prompts";
async function isRegistryExists() {
  try {
    await fs4.access("./registry.json");
    return true;
  } catch (e) {
    return false;
  }
}
function getRegistryFromConfig(config) {
  if (!config.registries?.default || !config.registries.sources) {
    return null;
  }
  const registry = config.registries.sources[config.registries.default];
  if (!registry) {
    return null;
  }
  return registry;
}
function abortIfCancel(value) {
  if (isCancel(value)) {
    cancel("Setup aborted by user.");
    process.exit(1);
  }
}

// src/commands/add.ts
import picocolors from "picocolors";
import { existsSync as existsSync2 } from "fs";
var addCommand = new Command().name("add").description("Add components to your project").argument("<items...>", "Items to add").option("-y, --yes", "Skip confirmation prompts").option("--no-install", "Skip installing dependencies").option("--overwrite", "Overwrite existing files without asking").action(async (itemNames, options) => {
  console.log();
  intro(picocolors.bgBlue(picocolors.blackBright(" Add Item ")));
  log2.warn(
    picocolors.yellow(
      "The CLI is still in development, report any issues on GitHub!"
    )
  );
  if (!existsSync2(path5.join(process.cwd(), "selia.json"))) {
    log2.error(
      picocolors.red("You can only use this command in a Selia project.")
    );
    console.log();
    return;
  }
  try {
    const config = await loadConfig();
    const s = spinner2();
    const registry = getRegistryFromConfig(config);
    if (!registry?.url) {
      log2.error(picocolors.red("Registry not found"));
      return;
    }
    const items = await fetchItems(registry.url, itemNames);
    s.start("Resolving dependencies...");
    const resolved = await resolveDependencies(items, registry.url);
    s.stop(
      `Resolved ${resolved.items.size} item(s) and ${Object.keys(resolved.npmPackages).length} npm package(s)`
    );
    const allItems = Array.from(resolved.items.values());
    const npmPackages = resolved.npmPackages;
    const existingFiles = [];
    const filesToWrite = [];
    for (const item of allItems) {
      for (const file of item.files) {
        const basePath = resolveTargetPath(
          file.target,
          config,
          process.cwd()
        );
        const targetPath = path5.join(basePath, file.name);
        let content = file.content || "";
        content = resolveImportAlias(content, config);
        filesToWrite.push({ item, file, targetPath, content });
        if (existsSync2(targetPath)) {
          existingFiles.push(path5.relative(process.cwd(), targetPath));
        }
      }
    }
    if (existingFiles.length > 0 && !options.overwrite) {
      log2.warn(`Found ${existingFiles.length} existing file(s):`);
      existingFiles.forEach(
        (f) => console.log(`  ${picocolors.yellow("\u2022")} ${f}`)
      );
      console.log();
      const overwriteChoice = await select({
        message: "How do you want to proceed?",
        initialValue: "skip",
        options: [
          { value: "overwrite", label: "Overwrite all existing files" },
          { value: "skip", label: "Skip existing files" },
          { value: "cancel", label: "Cancel operation" }
        ]
      });
      abortIfCancel(overwriteChoice);
      if (overwriteChoice === "cancel") {
        outro("Cancelled");
        process.exit(0);
      }
      if (overwriteChoice === "skip") {
        const skippedCount = filesToWrite.length;
        filesToWrite.splice(
          0,
          filesToWrite.length,
          ...filesToWrite.filter((f) => !existsSync2(f.targetPath))
        );
        log2.info(
          `Skipping ${skippedCount - filesToWrite.length} existing file(s)`
        );
      }
    }
    if (filesToWrite.length === 0) {
      log2.warn("No files to write");
      outro("Done");
      return;
    }
    s.start("Writing files...");
    let filesWritten = 0;
    for (const { targetPath, content } of filesToWrite) {
      await fs5.mkdir(path5.dirname(targetPath), { recursive: true });
      await fs5.writeFile(targetPath, content, "utf-8");
      filesWritten++;
    }
    s.stop(`Wrote ${filesWritten} file(s)`);
    if (options.install && Object.keys(npmPackages).length > 0) {
      await installDependencies(npmPackages);
    }
    outro("Components added successfully! \u2713");
  } catch (error) {
    log2.error(
      picocolors.red(
        error instanceof Error ? error.message : "An unknown error occurred"
      )
    );
    process.exit(1);
  }
});

// src/commands/init.ts
import { Command as Command2 } from "commander";
import { intro as intro2, outro as outro2, log as log4, spinner as spinner3, note, confirm as confirm2 } from "@clack/prompts";
import picocolors3 from "picocolors";

// src/schemas/setup-schema.ts
import { z as z4 } from "zod";
var ConditionAtomSchema = z4.discriminatedUnion("type", [
  z4.object({
    type: z4.literal("file-exists"),
    path: z4.string()
  }),
  z4.object({
    type: z4.literal("file-contains"),
    path: z4.string(),
    pattern: z4.string()
  }),
  z4.object({
    type: z4.literal("dependency"),
    name: z4.string()
  }),
  z4.object({
    type: z4.literal("env"),
    key: z4.string()
  }),
  z4.object({
    type: z4.literal("framework"),
    value: z4.string()
  })
]);
var ConditionSchema = z4.lazy(
  () => z4.union([
    ConditionAtomSchema,
    z4.object({
      all: z4.array(ConditionSchema)
    }),
    z4.object({
      any: z4.array(ConditionSchema)
    }),
    z4.object({
      not: ConditionSchema
    })
  ])
);
var BaseStepSchema = z4.object({
  condition: z4.object({
    if: ConditionSchema.optional(),
    unless: ConditionSchema.optional()
  }).optional()
});
var SetupStepSchema = z4.discriminatedUnion("type", [
  BaseStepSchema.extend({
    type: z4.literal("dependencies"),
    packages: z4.record(z4.string(), z4.string())
  }),
  // Detect framework
  BaseStepSchema.extend({
    type: z4.literal("detect-framework"),
    name: z4.string(),
    saveAs: z4.string().optional()
  }),
  // Detect workdir
  BaseStepSchema.extend({
    type: z4.literal("detect-workdir"),
    name: z4.string(),
    saveAs: z4.string().optional()
  }),
  // Context update
  BaseStepSchema.extend({
    type: z4.literal("context-update"),
    name: z4.string(),
    data: z4.record(z4.string(), z4.any())
  }),
  // Assert
  BaseStepSchema.extend({
    type: z4.literal("assert"),
    name: z4.string(),
    check: z4.discriminatedUnion("type", [
      z4.object({
        type: z4.literal("dependency"),
        packages: z4.array(z4.string())
      }),
      z4.object({
        type: z4.literal("file-exists"),
        path: z4.string()
      }),
      z4.object({
        type: z4.literal("framework"),
        value: z4.array(z4.string())
      }),
      z4.object({
        type: z4.literal("env"),
        key: z4.string()
      })
    ]),
    onFail: z4.object({
      exit: z4.boolean().default(true),
      message: z4.union([z4.string(), z4.array(z4.string())])
    })
  }),
  // Prompt
  BaseStepSchema.extend({
    type: z4.literal("prompt"),
    name: z4.string(),
    promptType: z4.enum(["text", "select", "confirm", "file-search"]),
    message: z4.string(),
    saveAs: z4.string(),
    // where to save in config
    default: z4.any().optional(),
    // For file-search
    pattern: z4.string().optional(),
    exclude: z4.array(z4.string()).optional(),
    // For select
    options: z4.array(
      z4.object({
        value: z4.string(),
        label: z4.string()
      })
    ).optional(),
    // Validation
    validate: z4.object({
      pattern: z4.string().optional(),
      required: z4.boolean().optional()
    }).optional()
  }),
  // File append
  BaseStepSchema.extend({
    type: z4.literal("file-append"),
    target: z4.string(),
    // supports {{variable}}
    content: z4.string().optional(),
    contentPath: z4.string().optional(),
    // from registry
    saveTargetAs: z4.union([z4.string(), z4.array(z4.string())]).optional()
  }),
  // File create
  BaseStepSchema.extend({
    type: z4.literal("file-create"),
    target: z4.string(),
    content: z4.string().optional(),
    contentPath: z4.string().optional(),
    overwrite: z4.boolean().optional().default(false),
    saveTargetAs: z4.union([z4.string(), z4.array(z4.string())]).optional()
  }),
  // File update
  BaseStepSchema.extend({
    type: z4.literal("file-update"),
    target: z4.string(),
    search: z4.string(),
    // regex pattern
    replace: z4.string(),
    // replacement string
    saveTargetAs: z4.union([z4.string(), z4.array(z4.string())]).optional()
  }),
  // File update JSON
  BaseStepSchema.extend({
    type: z4.literal("file-update-json"),
    target: z4.string(),
    content: z4.record(z4.string(), z4.any()),
    merge: z4.enum(["shallow", "deep"]).optional().default("deep"),
    saveTargetAs: z4.union([z4.string(), z4.array(z4.string())]).optional()
  })
]);
var SetupSchema = z4.object({
  steps: z4.array(SetupStepSchema)
});

// src/lib/fetch-setup.ts
async function fetchSetup(registryUrl) {
  const url = `${registryUrl}/setup.json`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`${response.statusText}`);
    }
    const data = await response.json();
    return SetupSchema.parse(data);
  } catch (error) {
    throw new Error(
      `Failed to fetch setup configuration: ${error instanceof Error ? error.message : "Unknown error"}`
    );
  }
}

// src/lib/setup-executor.ts
import fs7 from "fs/promises";
import { existsSync as existsSync4 } from "fs";
import path7 from "path";
import { glob as glob2 } from "glob";
import { text, select as select2, confirm, log as log3 } from "@clack/prompts";
import { defu as defu2 } from "defu";

// src/lib/detect-framework.ts
import fs6 from "fs/promises";
import path6 from "path";
import { glob } from "glob";
async function exists(p) {
  try {
    await fs6.access(p);
    return true;
  } catch {
    return false;
  }
}
async function detectFramework(cwd = process.cwd()) {
  try {
    const pkgPath = path6.join(cwd, "package.json");
    const pkg = JSON.parse(await fs6.readFile(pkgPath, "utf-8"));
    const deps = {
      ...pkg.dependencies,
      ...pkg.devDependencies
    };
    if (deps["next"]) {
      const files = await glob("{pages,src/pages}/_app.{js,ts,jsx,tsx}", {
        cwd
      });
      if (files.length > 0) {
        return ["next-pages", "Next.js Pages"];
      }
      return ["next", "Next.js"];
    }
    if (deps["react-router"] && deps["@react-router/dev"]) {
      return ["react-router", "React Router v7"];
    }
    if (deps["@remix-run/react"]) return ["remix", "Remix"];
    if (deps["@tanstack/react-start"])
      return ["tanstack-start", "TanStack Start"];
    if (deps["@tanstack/react-router"])
      return ["tanstack-router", "TanStack Router"];
    if (deps["astro"]) return ["astro", "Astro"];
    if (deps["vite"] && (await exists(path6.join(cwd, "vite.config.ts")) || await exists(path6.join(cwd, "vite.config.js")))) {
      return ["vite", "Vite"];
    }
    if (await exists(path6.join(cwd, "artisan")) && await exists(path6.join(cwd, "composer.json"))) {
      return ["laravel", "Laravel"];
    }
    if (deps["react"]) return ["react", "React"];
    return ["unknown", "Unknown"];
  } catch {
    return ["unknown", "Unknown"];
  }
}

// src/lib/detect-workdir.ts
import { join } from "path";
import { existsSync as existsSync3 } from "fs";
function detectWorkdir(cwd) {
  if (existsSync3(join(cwd, "src"))) {
    return "./src/";
  }
  return "./";
}

// src/lib/setup-executor.ts
import picocolors2 from "picocolors";
var executable = [
  "prompt",
  "detect-framework",
  "detect-workdir",
  "assert",
  "context-update"
];
async function executeSetup(setup, options = {}) {
  const context = {};
  const cwd = options.cwd || process.cwd();
  for (const step of setup.steps) {
    if (!executable.includes(step.type)) {
      continue;
    }
    if (await shouldRunStep(step, context, cwd)) {
      await executeStep(step, context, cwd);
    }
  }
  return context;
}
async function executeSetupActions(setup, context, options = {}) {
  const cwd = options.cwd || process.cwd();
  for (const step of setup.steps) {
    if (executable.includes(step.type)) {
      continue;
    }
    if (await shouldRunStep(step, context, cwd)) {
      await executeStep(step, context, cwd);
    }
  }
}
async function previewSetupActions(setup, context, options = {}) {
  const actions = [];
  const cwd = options.cwd || process.cwd();
  for (const step of setup.steps) {
    if (executable.includes(step.type)) {
      continue;
    }
    if (!await shouldRunStep(step, context, cwd)) {
      continue;
    }
    if (step.type === "dependencies") {
      const count = Object.keys(step.packages).length;
      actions.push(`Install ${count} required package${count > 1 ? "s" : ""}`);
    } else if (step.type === "file-create") {
      const target = interpolate(step.target, context);
      actions.push(`Create \`${target}\``);
    } else if (step.type === "file-append") {
      const target = interpolate(step.target, context);
      actions.push(`Append to \`${target}\``);
    } else if (step.type === "file-update") {
      const target = interpolate(step.target, context);
      actions.push(`Update \`${target}\``);
    } else if (step.type === "file-update-json") {
      const target = interpolate(step.target, context);
      actions.push(`Update \`${target}\``);
    }
  }
  return actions;
}
async function executeStep(step, context, cwd) {
  switch (step.type) {
    case "assert":
      await executeAssert(step, context, cwd);
      break;
    case "dependencies":
      await executeDependencies(step, cwd);
      break;
    case "detect-framework":
      await executeDetectFramework(step, context, cwd);
      break;
    case "detect-workdir":
      await executeDetectWorkdir(step, context, cwd);
      break;
    case "prompt":
      await executePrompt(step, context, cwd);
      break;
    case "file-append":
      await executeFileAppend(step, context, cwd);
      break;
    case "file-create":
      await executeFileCreate(step, context, cwd);
      break;
    case "file-update":
      await executeFileUpdate(step, context, cwd);
      break;
    case "file-update-json":
      await executeFileUpdateJson(step, context, cwd);
      break;
    case "context-update":
      await executeContextUpdate(step, context, cwd);
      break;
  }
}
async function executeContextUpdate(step, context, cwd) {
  for (const [key, value] of Object.entries(step.data)) {
    const interpolatedValue = typeof value === "string" ? interpolate(value, context) : value;
    setNestedValue(context, key, interpolatedValue);
  }
}
async function executeAssert(step, context, cwd) {
  const ok = await runAssertCheck(step.check, context, cwd);
  if (!ok) {
    const message = Array.isArray(step.onFail.message) ? step.onFail.message.join("\n") : step.onFail.message;
    if (step.onFail?.exit !== false) {
      throw new Error(message);
    }
  }
}
async function runAssertCheck(check, context, cwd) {
  switch (check.type) {
    case "dependency":
      return checkDependencies(check.packages, cwd);
    case "file-exists":
      return existsSync4(path7.join(cwd, check.path));
    case "framework":
      return check.value.includes(context.framework);
    case "env":
      return process.env[check.key] !== void 0;
    default:
      throw new Error(`Unknown assert check type: ${check.type}`);
  }
}
async function checkDependencies(packages, cwd) {
  try {
    const pkgPath = path7.join(cwd, "package.json");
    const pkg = JSON.parse(await fs7.readFile(pkgPath, "utf-8"));
    const deps = {
      ...pkg.dependencies,
      ...pkg.devDependencies
    };
    return packages.every((name) => deps[name]);
  } catch {
    return false;
  }
}
async function executeDependencies(step, cwd) {
  await installDependencies(step.packages, cwd);
}
async function executeDetectWorkdir(step, context, cwd) {
  const workdir = await detectWorkdir(cwd);
  const saveAs = step.saveAs || step.name;
  setNestedValue(context, saveAs, workdir);
}
async function executeDetectFramework(step, context, cwd) {
  const [framework, frameworkLabel] = await detectFramework(cwd);
  log3.info(
    `Framework: ${picocolors2.bgWhiteBright(picocolors2.black(` ${frameworkLabel} `))}`
  );
  const saveAs = step.saveAs || step.name;
  setNestedValue(context, saveAs, framework);
}
async function executePrompt(step, context, cwd) {
  let answer;
  if (step.promptType === "text") {
    const input = await text({
      message: step.message,
      placeholder: step.default,
      validate: (value) => {
        const actualValue = value || step.default;
        if (step.validate?.required && !actualValue) {
          return "This field is required";
        }
        if (step.validate?.pattern && actualValue) {
          const regex = new RegExp(step.validate.pattern);
          if (!regex.test(actualValue)) {
            return `Must match pattern: ${step.validate.pattern}`;
          }
        }
      }
    });
    abortIfCancel(input);
    answer = input || step.default;
  } else if (step.promptType === "select" && step.options) {
    answer = await select2({
      message: step.message,
      options: step.options
    });
    abortIfCancel(answer);
  } else if (step.promptType === "confirm") {
    answer = await confirm({
      message: step.message
    });
    abortIfCancel(answer);
  } else if (step.promptType === "file-search") {
    const pattern = step.pattern || "**/*";
    const exclude = step.exclude || ["node_modules", "dist", ".git"];
    const files = await glob2(pattern, {
      cwd,
      ignore: exclude,
      dot: false,
      absolute: false
    });
    if (files.length === 0) {
      answer = await text({
        message: step.message,
        defaultValue: step.default
      });
    } else {
      const sortedFiles = files.sort((a, b) => a.localeCompare(b)).slice(0, 20);
      const options = sortedFiles.map((f) => ({
        value: f,
        label: f
      }));
      options.push({
        value: "__custom__",
        label: "Enter custom path..."
      });
      const selected = await select2({
        message: step.message,
        options
      });
      abortIfCancel(selected);
      if (selected === "__custom__") {
        answer = await text({
          message: "Enter file path:",
          defaultValue: step.default
        });
        abortIfCancel(answer);
      } else {
        answer = selected;
      }
    }
  }
  if (answer !== void 0) {
    setNestedValue(context, step.saveAs || step.name, answer);
  }
}
async function executeFileAppend(step, context, cwd) {
  const target = interpolate(step.target, context);
  const targetPath = path7.join(cwd, target);
  if (!existsSync4(targetPath)) {
    throw new Error(`File not found: ${target}`);
  }
  const content = step.content || await getContent(step.contentPath);
  const existing = await fs7.readFile(targetPath, "utf-8");
  const newContent = existing + "\n" + content;
  await fs7.writeFile(targetPath, newContent, "utf-8");
  if (step.saveTargetAs) {
    saveTargetAs(context, step.saveTargetAs, target);
  }
}
async function executeFileCreate(step, context, cwd) {
  const target = interpolate(step.target, context);
  const targetPath = path7.join(cwd, target);
  if (existsSync4(targetPath) && !step.overwrite) {
    const shouldOverwrite = await confirm({
      message: `File \`${target}\` already exists. Overwrite?`,
      initialValue: false
    });
    if (!shouldOverwrite) {
      return;
    }
  }
  const content = step.content || await getContent(step.contentPath);
  await fs7.mkdir(path7.dirname(targetPath), { recursive: true });
  await fs7.writeFile(targetPath, content, "utf-8");
  if (step.saveTargetAs) {
    saveTargetAs(context, step.saveTargetAs, target);
  }
}
async function executeFileUpdate(step, context, cwd) {
  const target = interpolate(step.target, context);
  const targetPath = path7.join(cwd, target);
  if (!existsSync4(targetPath)) {
    throw new Error(`File not found: ${target}`);
  }
  let content = await fs7.readFile(targetPath, "utf-8");
  const searchRegex = new RegExp(step.search, "gms");
  if (!searchRegex.test(content)) {
    return;
  }
  const newContent = content.replace(searchRegex, step.replace);
  await fs7.writeFile(targetPath, newContent, "utf-8");
  log3.success(`Updated ${target}`);
  if (step.saveTargetAs) {
    saveTargetAs(context, step.saveTargetAs, target);
  }
}
async function executeFileUpdateJson(step, context, cwd) {
  const target = interpolate(step.target, context);
  const targetPath = path7.join(cwd, target);
  let existing = {};
  if (existsSync4(targetPath)) {
    const content = await fs7.readFile(targetPath, "utf-8");
    existing = JSON.parse(content);
  }
  const merged = step.merge === "deep" ? defu2(step.content, existing) : { ...existing, ...step.content };
  await fs7.writeFile(targetPath, JSON.stringify(merged, null, 2), "utf-8");
  if (step.saveTargetAs) {
    saveTargetAs(context, step.saveTargetAs, target);
  }
}
function interpolate(str, context) {
  return str.replace(/\{\{([^}]+)\}\}/g, (match, key) => {
    const trimmedKey = key.trim();
    let value = getNestedValue(context, trimmedKey);
    if (value === void 0 && !trimmedKey.includes(".")) {
      value = getNestedValue(context, `paths.${trimmedKey}`);
    }
    return value !== void 0 ? value : match;
  });
}
async function getContent(contentPath) {
  const filePath = path7.join(process.cwd(), contentPath);
  try {
    return await fs7.readFile(filePath, "utf-8");
  } catch (error) {
    throw new Error(
      `Failed to read content from ${filePath}: ${error instanceof Error ? error.message : "Unknown error"}`
    );
  }
}
function getNestedValue(obj, path11) {
  return path11.split(".").reduce((current, key) => current?.[key], obj);
}
function setNestedValue(obj, path11, value) {
  const keys = path11.split(".");
  let current = obj;
  for (let i = 0; i < keys.length - 1; i++) {
    if (!current[keys[i]]) {
      current[keys[i]] = {};
    }
    current = current[keys[i]];
  }
  current[keys[keys.length - 1]] = value;
}
async function evaluateCondition(condition, context, cwd) {
  if ("all" in condition) {
    for (const c of condition.all) {
      if (!await evaluateCondition(c, context, cwd)) return false;
    }
    return true;
  }
  if ("any" in condition) {
    for (const c of condition.any) {
      if (await evaluateCondition(c, context, cwd)) return true;
    }
    return false;
  }
  if ("not" in condition) {
    return !await evaluateCondition(condition.not, context, cwd);
  }
  switch (condition.type) {
    case "file-exists": {
      return existsSync4(path7.join(cwd, interpolate(condition.path, context)));
    }
    case "file-contains": {
      const fullPath = path7.join(cwd, interpolate(condition.path, context));
      if (!existsSync4(fullPath)) return false;
      const content = await fs7.readFile(fullPath, "utf-8");
      const regex = new RegExp(condition.pattern, "m");
      return regex.test(content);
    }
    case "dependency": {
      try {
        const pkg = JSON.parse(
          await fs7.readFile(path7.join(cwd, "package.json"), "utf-8")
        );
        return pkg.dependencies?.[condition.name] || pkg.devDependencies?.[condition.name];
      } catch {
        return false;
      }
    }
    case "env":
      return process.env[condition.key] !== void 0;
    case "framework":
      return context.framework === condition.value;
    default:
      throw new Error(`Unknown condition type: ${condition.type}`);
  }
}
async function shouldRunStep(step, context, cwd) {
  if (!step.condition) return true;
  if (step.condition.if) {
    const ok = await evaluateCondition(step.condition.if, context, cwd);
    if (!ok) return false;
  }
  if (step.condition.unless) {
    const blocked = await evaluateCondition(
      step.condition.unless,
      context,
      cwd
    );
    if (blocked) return false;
  }
  return true;
}
function saveTargetAs(context, name, value) {
  if (Array.isArray(name)) {
    for (const n of name) {
      setNestedValue(context, n, value);
    }
    return;
  }
  setNestedValue(context, name, value);
}

// src/lib/resolve-registry.ts
import fs8 from "fs/promises";
import path8 from "path";
async function resolveRegistry(cwd, cliRegistry) {
  const configPath = path8.join(cwd, "selia.json");
  let existingConfig = null;
  try {
    existingConfig = JSON.parse(await fs8.readFile(configPath, "utf-8"));
  } catch {
  }
  const isDev = process.env.SELIA_DEV === "1" || process.env.NODE_ENV === "development";
  const defaultRegistry = isDev ? "http://localhost:5173/registry" : "https://selia.nauv.al/registry";
  const runtimeUrl = cliRegistry || existingConfig?.registries?.sources?.selia?.url || defaultRegistry;
  const persist = Boolean(cliRegistry) && !existingConfig?.registries?.sources?.selia;
  return {
    runtimeUrl,
    persist,
    existingConfig
  };
}

// src/lib/write-config.ts
import deepmerge from "deepmerge";
import fs9 from "fs/promises";
import path9 from "path";
async function writeConfig(config) {
  let existingConfig;
  try {
    existingConfig = await fs9.readFile(
      path9.join(process.cwd(), "selia.json"),
      "utf-8"
    );
  } catch (error) {
    existingConfig = "{}";
  }
  const mergedConfig = deepmerge(JSON.parse(existingConfig), config);
  const configPath = path9.join(process.cwd(), "selia.json");
  await fs9.writeFile(
    configPath,
    JSON.stringify(mergedConfig, null, 2),
    "utf-8"
  );
  return configPath;
}

// src/commands/init.ts
var initCommand = new Command2().name("init").description("Initialize Selia in your project").option("-r, --registry <url>", "Registry URL").option("-y, --yes", "Skip confirmation").action(async (options) => {
  console.log();
  intro2(picocolors3.bgBlue(picocolors3.blackBright(" Initialize Selia ")));
  log4.warn(
    picocolors3.yellow(
      "The CLI is still in development, report any issues on GitHub!"
    )
  );
  if (options.registry) {
    log4.info(
      "This feature is not available yet.\nUse default Selia registry instead."
    );
    console.log();
    return;
  }
  try {
    const { runtimeUrl } = await resolveRegistry(
      process.cwd(),
      options.registry
    );
    const registryUrl = runtimeUrl;
    if (!registryUrl) {
      outro2("Cancelled.");
      return;
    }
    const s = spinner3();
    let setup;
    try {
      s.start("Fetching setup configuration...");
      setup = await fetchSetup(registryUrl);
      s.stop("Setup configuration loaded");
    } catch (error) {
      if (error instanceof Error) {
        s.stop(error.message);
        return;
      }
      s.stop("No setup configuration found");
      const finalConfig = {
        ...defaultConfig
      };
      await writeConfig(finalConfig);
      outro2(picocolors3.green("Config created \u2713"));
      log4.info(
        "Run " + picocolors3.cyan("selia add <component>") + " to add components"
      );
      console.log();
      return;
    }
    const context = await executeSetup(setup);
    const actions = await previewSetupActions(setup, context);
    actions.unshift("Create `selia.json`");
    log4.info("I will now perform the following actions:");
    actions.forEach((action) => {
      console.log(picocolors3.dim("  \u2022 ") + action);
    });
    if (!options.yes) {
      const shouldContinue = await confirm2({
        message: "Is this okay?",
        initialValue: true
      });
      abortIfCancel(shouldContinue);
      if (!shouldContinue) {
        outro2("Cancelled. Nothing was done.");
        process.exit(0);
      }
    }
    await executeSetupActions(setup, context);
    const config = context;
    s.start("Creating config file...");
    await writeConfig(config);
    s.stop("Config file created");
    note(picocolors3.dim("Config saved to: ") + picocolors3.cyan("selia.json"));
    log4.info(picocolors3.green("Selia initialized successfully! \u2713"));
    outro2(
      "Run " + picocolors3.cyan("selia add <component>") + " to add components"
    );
    console.log();
  } catch (error) {
    log4.error(
      error instanceof Error ? error.message : "An unknown error occurred"
    );
    console.log();
    process.exit(1);
  }
});

// src/commands/build.ts
import { Command as Command3 } from "commander";
import { intro as intro3, outro as outro3, log as log6 } from "@clack/prompts";
import fs12 from "fs/promises";
import picocolors5 from "picocolors";

// src/schemas/registry-schema.ts
import { z as z5 } from "zod";
var RegistrySchema = z5.object({
  name: z5.string(),
  homepage: z5.url().optional(),
  items: z5.array(ItemSchema),
  setup: z5.union([SetupSchema, z5.string()]).optional()
});

// src/lib/clean-build.ts
import fs10 from "fs/promises";
async function cleanBuild(output) {
  await fs10.rm(output, { recursive: true, force: true }).catch(() => {
  });
  await fs10.mkdir(output, { recursive: true }).catch(() => {
  });
}

// src/lib/build-registry.ts
import fs11 from "fs/promises";
import path10 from "path";
import { log as log5, spinner as spinner4 } from "@clack/prompts";
import picocolors4 from "picocolors";
async function buildRegistry(registry, options) {
  const s = spinner4();
  s.start("Building registry...");
  try {
    await buildRegistryFile(registry, options.output);
    for (let i = 0; i < registry.items.length; i++) {
      const item = registry.items[i];
      s.message(`Building ${item.name} (${i + 1}/${registry.items.length})`);
      await buildItem(item, options.output);
    }
    if (registry.setup) {
      s.message("Building setup configuration...");
      await buildSetup(registry.setup, options.output);
    }
    s.stop("Build complete");
    log5.success(
      picocolors4.green(`Built ${registry.items.length} items successfully`)
    );
  } catch (error) {
    s.stop("Build failed");
    const message = error instanceof Error ? error.message : "Unknown error";
    log5.error(picocolors4.red(message));
    process.exit(1);
  }
}
async function buildRegistryFile(registry, output) {
  const cleanedItems = registry.items.map((item) => ({
    ...item,
    files: item.files.map(({ path: _, ...file }) => file)
  }));
  const cleanedRegistry = {
    ...registry,
    items: cleanedItems
  };
  if (registry.setup) {
    cleanedRegistry.setup = "setup.json";
  }
  await fs11.mkdir(output, { recursive: true });
  await fs11.writeFile(
    path10.join(output, "registry.json"),
    JSON.stringify(cleanedRegistry, null, 2),
    "utf-8"
  );
}
async function buildItem(item, output) {
  const filesWithContent = await Promise.all(
    item.files.map(async (file) => {
      if (!file.path) {
        throw new Error(`Path is required for file in item "${item.name}"`);
      }
      const content = await fs11.readFile(file.path, "utf-8");
      const { path: _, ...rest } = file;
      return {
        ...rest,
        content
      };
    })
  );
  const itemWithContent = {
    ...item,
    files: filesWithContent
  };
  await fs11.mkdir(output, { recursive: true });
  await fs11.writeFile(
    path10.join(output, `${item.name}.json`),
    JSON.stringify(itemWithContent, null, 2),
    "utf-8"
  );
}
async function buildSetup(setup, output) {
  const processedSteps = await Promise.all(
    setup.steps.map(async (step) => {
      if ("contentPath" in step && step.contentPath && (step.type === "file-append" || step.type === "file-create")) {
        try {
          const content = await fs11.readFile(step.contentPath, "utf-8");
          const { contentPath: _, ...rest } = step;
          return {
            ...rest,
            content
          };
        } catch (error) {
          throw new Error(
            `Failed to read content for setup step from "${step.contentPath}": ${error instanceof Error ? error.message : "Unknown error"}`
          );
        }
      }
      return step;
    })
  );
  const processedSetup = {
    steps: processedSteps
  };
  await fs11.writeFile(
    path10.join(output, "setup.json"),
    JSON.stringify(processedSetup, null, 2),
    "utf-8"
  );
}

// src/commands/build.ts
var buildCommand = new Command3().name("build").description("Build the registry").option("-o, --output <path>", "Output directory", "./public/registry").action(async (options) => {
  intro3("Build Registry");
  try {
    if (!await isRegistryExists()) {
      log6.error(picocolors5.red("Registry file not found: registry.json"));
      process.exit(1);
    }
    const registryContent = await fs12.readFile("./registry.json", "utf-8");
    const parsedRegistry = JSON.parse(registryContent);
    const validatedRegistry = RegistrySchema.safeParse(parsedRegistry);
    if (!validatedRegistry.success) {
      console.log(validatedRegistry.error);
      log6.error(picocolors5.red("Invalid registry format:"));
      validatedRegistry.error.issues.forEach((err) => {
        log6.error(
          picocolors5.red(`  - ${err.path.join(".")}: ${err.message}`)
        );
      });
      process.exit(1);
    }
    await cleanBuild(options.output);
    await buildRegistry(validatedRegistry.data, {
      output: options.output
    });
    outro3(picocolors5.green("Registry built successfully! \u2713"));
  } catch (error) {
    log6.error(
      picocolors5.red(
        error instanceof Error ? error.message : "An unknown error occurred"
      )
    );
    process.exit(1);
  }
});

// src/index.ts
program.version("0.0.1");
program.addCommand(initCommand);
program.addCommand(addCommand);
program.addCommand(buildCommand);
program.parse();
//# sourceMappingURL=index.js.map