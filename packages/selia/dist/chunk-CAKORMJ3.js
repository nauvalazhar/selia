import {
  SetupSchema
} from "./chunk-KEWLX44Q.js";

// src/lib/fetch-setup.ts
async function fetchSetup(registryUrl) {
  const url = `${registryUrl}/setup.json`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch setup: ${response.statusText}`);
    }
    const data = await response.json();
    return SetupSchema.parse(data);
  } catch (error) {
    throw new Error(
      `Failed to fetch setup configuration: ${error instanceof Error ? "Schema validation failed" : "Unknown error"}`
    );
  }
}

export {
  fetchSetup
};
//# sourceMappingURL=chunk-CAKORMJ3.js.map