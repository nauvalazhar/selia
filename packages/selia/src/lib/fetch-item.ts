import { Item, ItemSchema } from '../schemas/item-schema';

export async function fetchItem(
  registryUrl: string,
  itemName: string,
): Promise<Item> {
  const url = `${registryUrl}/${itemName}.json`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      if (response.status === 404) {
        throw new Error(`No item found.`);
      }

      throw new Error(
        `Failed to fetch item "${itemName}" from registry: ${response.statusText}`,
      );
    }

    const data = await response.json();
    return ItemSchema.parse(data);
  } catch (error) {
    if (error instanceof Error) {
      throw new Error('Item could not be found.');
    }

    throw new Error('Failed to fetch item.');
  }
}

export async function fetchItems(
  registryUrl: string,
  itemNames: string[],
): Promise<Item[]> {
  const items = await Promise.all(
    itemNames.map((name) => fetchItem(registryUrl, name)),
  );
  return items;
}
