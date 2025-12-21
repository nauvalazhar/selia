import { Registry, RegistrySchema } from '~/schemas/registry-schema';

export async function fetchRegistry(registryUrl: string): Promise<Registry> {
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
      `Failed to fetch registry: ${error instanceof Error ? error.message : 'Unknown error'}`,
    );
  }
}
