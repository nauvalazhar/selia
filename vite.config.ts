import { reactRouter } from '@react-router/dev/vite';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
  ...(process.env.NODE_ENV === 'production'
    ? {
        resolve: {
          alias: {
            'react-dom/server': 'react-dom/server.node',
          },
        },
      }
    : {}),
});
