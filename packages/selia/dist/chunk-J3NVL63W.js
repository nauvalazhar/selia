import {
  fetchItem
} from "./chunk-ZS2G2W6I.js";

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

export {
  resolveDependencies
};
//# sourceMappingURL=chunk-J3NVL63W.js.map