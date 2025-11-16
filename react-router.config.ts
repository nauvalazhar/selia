import type { Config } from '@react-router/dev/config';
import { readdir } from 'node:fs/promises';
import path from 'node:path';

export default {
  // Config options...
  // Server-side render by default, to enable SPA mode set this to `false`
  // async prerender({ getStaticPaths }) {
  //   const components = await readdir(
  //     path.join(import.meta.dirname, 'components/selia'),
  //   );
  //   return [
  //     ...getStaticPaths(),
  //     ...components.map(
  //       (component) => `/docs/${component.replace('.tsx', '')}`,
  //     ),
  //   ];
  // },
  // ssr: false,
} satisfies Config;
