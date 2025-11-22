import type { Config } from '@react-router/dev/config';

export default {
  // Config options...
  // Server-side render by default, to enable SPA mode set this to `false`
  async prerender({ getStaticPaths }) {
    const components = await import.meta.glob('./app/routes/docs.*.mdx');
    return [
      ...getStaticPaths(),
      ...Object.keys(components).map((component) => {
        const filename = component
          .split('/')
          .pop()
          ?.replace('.mdx', '')
          .replace('docs.', '');

        return `/docs/${filename}`;
      }),
      // ...Object.keys(blocks).map((block) => {
      //   return `/block/${block}`;
      // }),
    ];
  },
  ssr: false,
} satisfies Config;
