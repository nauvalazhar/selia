import React from 'react';

export const examples = {
  basic: {
    name: 'Basic',
    path: 'components/examples/radio/basic.tsx',
    component: React.lazy(() =>
      import('./basic').then((mod) => ({
        default: mod.default,
      })),
    ),
  },
  item: {
    name: 'Item',
    path: 'components/examples/radio/item.tsx',
    component: React.lazy(() =>
      import('./item').then((mod) => ({
        default: mod.default,
      })),
    ),
  },
};
