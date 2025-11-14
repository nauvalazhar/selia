import { reactRouter } from '@react-router/dev/vite';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import mdx from '@mdx-js/rollup';
import path from 'node:path';
import rehypeShiki from '@shikijs/rehype';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import { transformerNotationHighlight } from '@shikijs/transformers';
import type { ShikiTransformer } from 'shiki';
import { h } from 'hastscript';
import rehypeToc from '@jsdevtools/rehype-toc';

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

export default defineConfig({
  plugins: [
    mdx({
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
      providerImportSource: '@mdx-js/react',
    }),
    tailwindcss(),
    reactRouter(),
    tsconfigPaths(),
  ],
  ...(process.env.NODE_ENV === 'production'
    ? {
        resolve: {
          alias: {
            'react-dom/server': 'react-dom/server.node',
            components: path.resolve(__dirname, 'components'),
          },
        },
      }
    : {
        resolve: {
          alias: {
            components: path.resolve(__dirname, 'components'),
          },
        },
      }),
});
