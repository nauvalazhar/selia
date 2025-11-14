import React from 'react';

export const examples = {
  basic: {
    name: 'Icon Box',
    path: 'components/examples/icon-box/basic.tsx',
    component: React.lazy(() =>
      import('./basic').then((mod) => ({
        default: mod.default,
      })),
    ),
  },
  variant: {
    name: 'Icon Box Variant',
    path: 'components/examples/icon-box/variant.tsx',
    component: React.lazy(() =>
      import('./variant').then((mod) => ({
        default: mod.default,
      })),
    ),
  },
  size: {
    name: 'Icon Box Size',
    path: 'components/examples/icon-box/size.tsx',
    component: React.lazy(() =>
      import('./size').then((mod) => ({
        default: mod.default,
      })),
    ),
  },
  circle: {
    name: 'Icon Box Circle',
    path: 'components/examples/icon-box/circle.tsx',
    component: React.lazy(() =>
      import('./circle').then((mod) => ({
        default: mod.default,
      })),
    ),
  },
};
