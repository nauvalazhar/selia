import {
  RegistrySchema
} from "../chunk-UCAIUO4I.js";
import "../chunk-ICP4KZNS.js";
import "../chunk-KEWLX44Q.js";

// src/lib/fetch-registry.ts
async function fetchRegistry(registryUrl) {
  const url = `${registryUrl}/registry.json`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch registry: ${response.statusText}`);
    }
    const data = await response.json();
    return RegistrySchema.parse(data);
  } catch (error) {
    throw new Error(
      `Failed to fetch registry: ${error instanceof Error ? error.message : "Unknown error"}`
    );
  }
}
export {
  fetchRegistry
};
//# sourceMappingURL=fetch-registry.js.map