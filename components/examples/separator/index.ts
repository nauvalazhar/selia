import React from 'react';

export const examples = {
  basic: {
    name: 'Basic',
    path: 'components/examples/separator/basic.tsx',
    component: React.lazy(() =>
      import('./basic').then((mod) => ({
        default: mod.default,
      })),
    ),
  },
  vertical: {
    name: 'Vertical',
    path: 'components/examples/separator/vertical.tsx',
    component: React.lazy(() =>
      import('./vertical').then((mod) => ({
        default: mod.default,
      })),
    ),
  },
};
