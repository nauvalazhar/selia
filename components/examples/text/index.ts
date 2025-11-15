import React from 'react';

export const examples = {
  basic: {
    name: 'Basic',
    path: 'components/examples/text/basic.tsx',
    component: React.lazy(() =>
      import('./basic').then((mod) => ({
        default: mod.default,
      })),
    ),
  },
  link: {
    name: 'Link',
    path: 'components/examples/text/link.tsx',
    component: React.lazy(() =>
      import('./link').then((mod) => ({
        default: mod.default,
      })),
    ),
  },
  strong: {
    name: 'Strong',
    path: 'components/examples/text/strong.tsx',
    component: React.lazy(() =>
      import('./strong').then((mod) => ({
        default: mod.default,
      })),
    ),
  },
  code: {
    name: 'Code',
    path: 'components/examples/text/code.tsx',
    component: React.lazy(() =>
      import('./code').then((mod) => ({ default: mod.default })),
    ),
  },
};
