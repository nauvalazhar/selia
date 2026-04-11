import { Item, ItemSchema } from '../schemas/item-schema';

export async function fetchItem(
  registryUrl: string,
  itemName: string,
  retry = true,
): Promise<Item> {
  const url = `${registryUrl}/${itemName}.json`;

  let response: Response;
  try {
    response = await fetch(url);
  } catch (error) {
    if (retry) {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return fetchItem(registryUrl, itemName, false);
    }

    throw new Error(
      `Failed to fetch item "${itemName}": ${error instanceof Error ? error.message : 'network error'}`,
    );
  }

  if (!response.ok) {
    if (response.status === 404) {
      throw new Error(`Item "${itemName}" could not be found.`);
    }

    throw new Error(
      `Failed to fetch item "${itemName}" from registry: ${response.statusText}`,
    );
  }

  const data = await response.json();
  return ItemSchema.parse(data);
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
