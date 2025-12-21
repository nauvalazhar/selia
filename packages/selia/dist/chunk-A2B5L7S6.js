// src/lib/resolve-import.ts
import path from "path";
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
  return path.join(cwd, configPath);
}

export {
  resolveImportAlias,
  resolveTargetPath
};
//# sourceMappingURL=chunk-A2B5L7S6.js.map