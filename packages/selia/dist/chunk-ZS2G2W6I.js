import {
  ItemSchema
} from "./chunk-ICP4KZNS.js";

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

export {
  fetchItem,
  fetchItems
};
//# sourceMappingURL=chunk-ZS2G2W6I.js.map