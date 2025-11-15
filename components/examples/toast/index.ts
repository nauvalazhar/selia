import React from 'react';

export const examples = {
  basic: {
    name: 'Basic',
    path: 'components/examples/toast/basic.tsx',
    component: React.lazy(() =>
      import('./basic').then((mod) => ({ default: mod.default })),
    ),
  },
  variant: {
    name: 'Variant',
    path: 'components/examples/toast/variant.tsx',
    component: React.lazy(() =>
      import('./variant').then((mod) => ({ default: mod.default })),
    ),
  },
  promise: {
    name: 'Promise',
    path: 'components/examples/toast/promise.tsx',
    component: React.lazy(() =>
      import('./promise').then((mod) => ({ default: mod.default })),
    ),
  },
  item: {
    name: 'Item',
    path: 'components/examples/toast/item.tsx',
    component: React.lazy(() =>
      import('./item').then((mod) => ({ default: mod.default })),
    ),
  },
};
