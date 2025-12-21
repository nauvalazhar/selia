import { Item } from '../schemas/item-schema';
import { fetchItem } from './fetch-item';

interface ResolvedDependencies {
  items: Map<string, Item>; // name -> item
  npmPackages: Record<string, string>; // package -> version
}

export async function resolveDependencies(
  items: Item[],
  registryUrl: string,
  visited: Set<string> = new Set(),
): Promise<ResolvedDependencies> {
  const result: ResolvedDependencies = {
    items: new Map(),
    npmPackages: {},
  };

  for (const item of items) {
    // Skip if already processed
    if (visited.has(item.name)) continue;
    visited.add(item.name);

    // Add current item
    result.items.set(item.name, item);

    // Collect npm dependencies
    if (item.dependencies?.npm) {
      Object.assign(result.npmPackages, item.dependencies.npm);
    }

    // Recursively fetch item dependencies
    if (item.dependencies?.items && item.dependencies.items.length > 0) {
      const depItems = await Promise.all(
        item.dependencies.items.map((depName) =>
          fetchItem(registryUrl, depName),
        ),
      );

      const depResolved = await resolveDependencies(
        depItems,
        registryUrl,
        visited,
      );

      // Merge results
      for (const [name, depItem] of depResolved.items) {
        result.items.set(name, depItem);
      }
      Object.assign(result.npmPackages, depResolved.npmPackages);
    }
  }

  return result;
}
