import React from 'react';

export const examples = {
  basic: {
    name: 'Basic',
    path: 'components/examples/badge/basic.tsx',
    component: React.lazy(() =>
      import('./basic').then((mod) => ({
        default: mod.default,
      })),
    ),
  },
  variants: {
    name: 'Variants',
    path: 'components/examples/badge/variants.tsx',
    component: React.lazy(() =>
      import('./variants').then((mod) => ({
        default: mod.default,
      })),
    ),
  },
  size: {
    name: 'Size',
    path: 'components/examples/badge/size.tsx',
    component: React.lazy(() =>
      import('./size').then((mod) => ({
        default: mod.default,
      })),
    ),
  },
  pill: {
    name: 'Pill',
    path: 'components/examples/badge/pill.tsx',
    component: React.lazy(() =>
      import('./pill').then((mod) => ({
        default: mod.default,
      })),
    ),
  },
  subtle: {
    name: 'Subtle',
    path: 'components/examples/badge/subtle.tsx',
    component: React.lazy(() =>
      import('./subtle').then((mod) => ({
        default: mod.default,
      })),
    ),
  },
  icon: {
    name: 'Icon',
    path: 'components/examples/badge/icon.tsx',
    component: React.lazy(() =>
      import('./icon').then((mod) => ({
        default: mod.default,
      })),
    ),
  },
};
