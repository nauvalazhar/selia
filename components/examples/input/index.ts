import React from 'react';

export const examples = {
  disable: {
      name: 'Disable',
      path: 'components/examples/input/disable.tsx',
      component: React.lazy(() =>
        import('./disable').then((mod) => ({
          default: mod.default,
        })),
      ),
    },
  basic: {
      name: 'Basic',
      path: 'components/examples/input/basic.tsx',
      component: React.lazy(() =>
        import('./basic').then((mod) => ({
          default: mod.default,
        })),
      ),
    },
  file: {
      name: 'File',
      path: 'components/examples/input/file.tsx',
      component: React.lazy(() =>
        import('./file').then((mod) => ({
          default: mod.default,
        })),
      ),
    },
};
