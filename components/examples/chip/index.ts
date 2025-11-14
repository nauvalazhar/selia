import React from 'react';

export const examples = {
  basic: {
    name: 'Basic',
    path: 'components/examples/chip/basic.tsx',
    component: React.lazy(() =>
      import('./basic').then((mod) => ({
        default: mod.default,
      })),
    ),
  },
  variant: {
    name: 'Variant',
    path: 'components/examples/chip/variant.tsx',
    component: React.lazy(() =>
      import('./variant').then((mod) => ({
        default: mod.default,
      })),
    ),
  },
  size: {
    name: 'Size',
    path: 'components/examples/chip/size.tsx',
    component: React.lazy(() =>
      import('./size').then((mod) => ({
        default: mod.default,
      })),
    ),
  },
  icon: {
    name: 'Icon',
    path: 'components/examples/chip/icon.tsx',
    component: React.lazy(() =>
      import('./icon').then((mod) => ({
        default: mod.default,
      })),
    ),
  },
};
