import type { Route } from './+types/docs.view';
import path from 'node:path';
import type { ShikiTransformer } from 'shiki';
import { transformerNotationHighlight } from '@shikijs/transformers';
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
import { componentName } from '~/lib/components';
import { getSidebarMenuNextPrev } from '~/lib/sidebar';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import { Link } from 'react-router';
import { getSources } from '~/lib/source';

const transformers: ShikiTransformer[] = [
  transformerNotationHighlight(),
  {
    pre(node) {
      const raw = this.options.meta?.__raw;
      // "filename=\"Basic Alert\""
      const filename = raw?.match(/filename="([^"]+)"/)?.[1]?.replace(/"/g, '');
      const clip = raw?.match(/clip/)?.[0];

      node.properties.filename = filename;
      node.properties.clip = clip ? true : false;
    },
  },
];

export async function loader({ params, request }: Route.LoaderArgs) {
  const pathname = params.path;
  const componentKey = pathname.replace(/-([a-z])/g, (_, letter) =>
    letter.toUpperCase(),
  );

  let sources: Record<string, string> = {};

  if (componentKey in ALL_EXAMPLES) {
    sources = await getSources(componentKey);
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
              theme: 'ayu-dark',
              transformers,
            },
          ],
        ],
      },
    });

    const menuNextPrev = await getSidebarMenuNextPrev(
      new URL(request.url).pathname,
    );

    return {
      mdxCode,
      sources,
      menuNextPrev,
      name: componentName(pathname),
    };
  } catch (error) {
    console.error(error);
    throw new Error(`Failed to load documentation for ${pathname}`);
  }
}

const components = {
  ...mdxComponents,
  PreviewDemo,
};

export default function DocsView({ loaderData }: Route.ComponentProps) {
  const { mdxCode, sources, name, menuNextPrev } = loaderData;

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
      <div className="flex-1 w-full xl:max-w-xl 2xl:max-w-2xl mx-auto">
        <article
          className={cn(
            'text-zinc-600 dark:text-zinc-300',
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
            '[&>p_a]:text-foreground [&>p_a]:font-medium [&>p_a]:border-b',
          )}
        >
          <MDXRemote
            {...mdxCode}
            components={{ ...components, ...memoizedComponents }}
          />
        </article>
        <div
          className={cn(
            'flex justify-between *:flex *:items-center **:[svg]:size-4',
            '*:text-muted *:hover:text-foreground *:transition-colors',
            '*:duration-75 *:gap-2.5 *:font-semibold mt-20',
          )}
        >
          {menuNextPrev.prev && (
            <Link to={menuNextPrev.prev.path}>
              <ChevronLeftIcon />
              {menuNextPrev.prev.name}
            </Link>
          )}
          {menuNextPrev.next && (
            <Link to={menuNextPrev.next.path}>
              {menuNextPrev.next.name}
              <ChevronRightIcon />
            </Link>
          )}
        </div>
      </div>
    </>
  );
}
