import { Setup, SetupSchema } from '../schemas/setup-schema';

export async function fetchSetup(registryUrl: string): Promise<Setup> {
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
      `Failed to fetch setup configuration: ${error instanceof Error ? 'Schema validation failed' : 'Unknown error'}`,
    );
  }
}
