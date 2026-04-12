import { Doc, DocSchema, DocsIndex, DocsIndexSchema } from '../schemas/doc-schema';

export async function fetchDoc(
  registryUrl: string,
  name: string,
  retry = true,
): Promise<Doc> {
  const url = `${registryUrl}/docs/${name}.json`;

  let response: Response;
  try {
    response = await fetch(url);
  } catch (error) {
    if (retry) {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return fetchDoc(registryUrl, name, false);
    }

    throw new Error(
      `Failed to fetch docs for "${name}": ${error instanceof Error ? error.message : 'network error'}`,
    );
  }

  if (!response.ok) {
    if (response.status === 404) {
      throw new Error(`Documentation for "${name}" could not be found.`);
    }

    throw new Error(
      `Failed to fetch docs for "${name}" from registry: ${response.statusText}`,
    );
  }

  const contentType = response.headers.get('content-type') || '';
  if (!contentType.includes('application/json')) {
    throw new Error(`Documentation for "${name}" could not be found.`);
  }

  const data = await response.json();
  return DocSchema.parse(data);
}

export async function fetchDocsIndex(
  registryUrl: string,
  retry = true,
): Promise<DocsIndex> {
  const url = `${registryUrl}/docs/index.json`;

  let response: Response;
  try {
    response = await fetch(url);
  } catch (error) {
    if (retry) {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return fetchDocsIndex(registryUrl, false);
    }

    throw new Error(
      `Failed to fetch docs index: ${error instanceof Error ? error.message : 'network error'}`,
    );
  }

  if (!response.ok) {
    throw new Error(
      `Failed to fetch docs index from registry: ${response.statusText}`,
    );
  }

  const contentType = response.headers.get('content-type') || '';
  if (!contentType.includes('application/json')) {
    throw new Error('Failed to fetch docs index: unexpected response format.');
  }

  const data = await response.json();
  return DocsIndexSchema.parse(data);
}
