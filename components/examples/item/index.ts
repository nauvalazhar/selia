import React from 'react';

export const examples = {
  basic: {
    name: 'Basic',
    path: 'components/examples/item/basic.tsx',
    component: React.lazy(() =>
      import('./basic').then((mod) => ({ default: mod.default })),
    ),
  },
  variant: {
    name: 'Variant',
    path: 'components/examples/item/variant.tsx',
    component: React.lazy(() =>
      import('./variant').then((mod) => ({ default: mod.default })),
    ),
  },
  icon: {
    name: 'Icon',
    path: 'components/examples/item/icon.tsx',
    component: React.lazy(() =>
      import('./icon').then((mod) => ({ default: mod.default })),
    ),
  },
  outline: {
    name: 'Outline',
    path: 'components/examples/item/outline.tsx',
    component: React.lazy(() =>
      import('./outline').then((mod) => ({ default: mod.default })),
    ),
  },
  plain: {
    name: 'Plain',
    path: 'components/examples/item/plain.tsx',
    component: React.lazy(() =>
      import('./plain').then((mod) => ({ default: mod.default })),
    ),
  },
  meta: {
    name: 'Meta',
    path: 'components/examples/item/meta.tsx',
    component: React.lazy(() =>
      import('./meta').then((mod) => ({ default: mod.default })),
    ),
  },
  stack: {
    name: 'Stack',
    path: 'components/examples/item/stack.tsx',
    component: React.lazy(() =>
      import('./stack').then((mod) => ({ default: mod.default })),
    ),
  },
};
