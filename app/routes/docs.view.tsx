import type { Route } from './+types/docs.view';
import path from 'node:path';
import type { ShikiTransformer } from 'shiki';
import { transformerNotationHighlight } from '@shikijs/transformers';
import { h } from 'hastscript';
import { useMemo } from 'react';
import { Preview, PreviewDemo } from 'components/preview';
import { cn } from 'lib/utils';
import mdxComponents from 'components/mdx-components';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import * as ALL_EXAMPLES from 'components/examples';
import rehypeSlug from 'rehype-slug';
import rehypeToc from '@jsdevtools/rehype-toc';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeShiki from '@shikijs/rehype';

function humanName(name: string) {
  return (
    name.charAt(0).toUpperCase() +
    name.slice(1).replace('.tsx', '').replace(/-/g, ' ')
  );
}

const transformers: ShikiTransformer[] = [
  transformerNotationHighlight(),
  {
    pre(node) {
      const raw = this.options.meta?.__raw;
      // "filename=\"Basic Alert\""
      const filename = raw?.match(/filename="([^"]+)"/)?.[1]?.replace(/"/g, '');

      if (!filename) return;

      const span = h(
        'span',
        {
          'data-filename': filename,
        },
        filename,
      );

      node.children.unshift(span);
    },
  },
];

export async function loader({ params }: Route.LoaderArgs) {
  const pathname = params.path;
  const componentName = pathname.replace(/-([a-z])/g, (_, letter) =>
    letter.toUpperCase(),
  );

  let sources: Record<string, string> = {};

  if (componentName in ALL_EXAMPLES) {
    sources = Object.fromEntries(
      await Promise.all(
        Object.entries(
          ALL_EXAMPLES[componentName as keyof typeof ALL_EXAMPLES],
        ).map(async ([key, { path }]) => {
          let source = await Bun.file(path).text();
          source = source.replace(
            /import\s*{([^}]*)}\s*from/g,
            (match, group) => {
              // Remove newlines and all whitespace for easier comma cleanup
              let cleaned = group
                .replace(/[\r\n]+/g, ' ') // Remove all newlines
                .replace(/\s+/g, ' ') // Collapse whitespace
                .replace(/,(\s*,)+/g, ',') // Remove accidental double commas
                .replace(/,\s*$/, ' '); // Remove any trailing comma at the end
              return `import {${cleaned}} from`;
            },
          );

          return [key, source];
        }),
      ),
    );
  }

  try {
    const source = await Bun.file(
      path.join(process.cwd(), 'app/routes', `docs.${pathname}.mdx`),
    ).text();

    const mdxCode = await serialize(source, {
      mdxOptions: {
        rehypePlugins: [
          rehypeSlug,
          [
            rehypeToc,
            {
              headings: ['h1', 'h2', 'h3'],
              position: 'beforeend',
              cssClasses: {
                toc: 'hidden',
              },
            },
          ],
          [
            rehypeAutolinkHeadings,
            {
              behavior: 'wrap',
              properties: {
                className: ['anchor'],
              },
            },
          ],
          [
            rehypeShiki,
            {
              theme: 'tokyo-night',
              transformers,
            },
          ],
        ],
      },
    });

    return {
      mdxCode,
      sources,
      name: humanName(pathname),
    };
  } catch (error) {
    console.log('cwd', process.cwd());
    console.error(error);
    throw new Error(`Failed to load documentation for ${pathname}`);
  }
}

const components = {
  ...mdxComponents,
  PreviewDemo,
};

export default function DocsView({
  loaderData,
  params: { path },
}: Route.ComponentProps) {
  const { mdxCode, sources, name } = loaderData;

  const memoizedComponents = useMemo(
    () => ({
      Preview: (props: React.ComponentProps<typeof Preview>) => (
        <Preview {...props} sources={sources ?? {}} />
      ),
    }),
    [sources],
  );

  return (
    <>
      <title>{`${name} - Selia`}</title>
      <article
        className={cn(
          'flex-1 w-full xl:max-w-xl 2xl:max-w-2xl mx-auto text-zinc-300',
          '*:[h1]:text-3xl *:[h1]:font-semibold *:[h1]:mb-4',
          '*:[h2]:text-2xl *:[h2]:font-semibold *:[h2,h3]:mb-3',
          '*:[h2+h3]:mt-8 *:[h2]:mt-14',
          '*:[h3]:text-xl *:[h3]:font-semibold *:[h3]:mt-12',
          '**:[h1,h2,h3]:text-foreground',
          '*:[p]:mb-2 *:[p]:leading-loose',
          '[&>p>code]:before:content-["`"] [&>p>code]:after:content-["`"]',
          '[&>p>code]:text-foreground [&>p>code]:font-medium',
          '[&>p:first-of-type]:text-lg/relaxed',
          '[&>p:first-of-type]:text-muted',
          '[&>p:first-of-type]:mb-8',
          '*:[ul]:list-[square] *:[ul]:pl-4 *:[ul]:mb-2',
          '*:[ul]:leading-relaxed',
          '[p_a]:text-foreground *:[p_a]:font-medium *:[p_a]:border-b',
        )}
      >
        <MDXRemote
          {...mdxCode}
          components={{ ...components, ...memoizedComponents }}
        />
      </article>
    </>
  );
}
