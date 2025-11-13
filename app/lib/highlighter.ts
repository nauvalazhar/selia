import { codeToHtml } from 'shiki';

const cache = new Map<string, string>();

export async function highlightCode(path: string) {
  // if (process.env.NODE_ENV === 'development' && cache.has(path)) {
  //   return cache.get(path)!;
  // }

  const source = await Bun.file(path).text();
  const html = await codeToHtml(source, {
    lang: 'tsx',
    theme: 'tokyo-night',
  });

  // if (process.env.NODE_ENV === 'development') {
  //   cache.set(path, html);
  // }

  return html;
}

export async function highlightExamples<
  T extends Record<string, { path: string }>,
>(examples: T): Promise<Record<keyof T, string>> {
  return Object.fromEntries(
    await Promise.all(
      Object.entries(examples).map(async ([key, { path }]) => [
        key,
        await highlightCode(path),
      ]),
    ),
  );
}
