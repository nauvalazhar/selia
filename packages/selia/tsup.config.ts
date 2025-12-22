import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['./src/index.ts'],
  platform: 'node',
  target: 'node18',
  format: ['esm'],
  outDir: 'dist',
  clean: true,
  shims: true,
  sourcemap: true,
  external: ['yaml'],
});
