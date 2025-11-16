import type { Config } from '@react-router/dev/config';
import { readdir } from 'node:fs/promises';
import path from 'node:path';

export default {
  // Config options...
  // Server-side render by default, to enable SPA mode set this to `false`
  prerender: true,
  ssr: false,
} satisfies Config;
