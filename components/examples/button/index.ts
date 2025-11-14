import React from 'react';

export const examples = {
  variants: {
    name: 'Variants',
    path: 'components/examples/button/variant.tsx',
    component: React.lazy(() =>
      import('./variant').then((mod) => ({
        default: mod.default,
      })),
    ),
  },
  subtle: {
    name: 'Subtle',
    path: 'components/examples/button/subtle.tsx',
    component: React.lazy(() =>
      import('./subtle').then((mod) => ({
        default: mod.default,
      })),
    ),
  },
  plain: {
    name: 'Plain',
    path: 'components/examples/button/plain.tsx',
    component: React.lazy(() =>
      import('./plain').then((mod) => ({
        default: mod.default,
      })),
    ),
  },
  outline: {
    name: 'Outline',
    path: 'components/examples/button/outline.tsx',
    component: React.lazy(() =>
      import('./outline').then((mod) => ({
        default: mod.default,
      })),
    ),
  },
  block: {
    name: 'Block',
    path: 'components/examples/button/block.tsx',
    component: React.lazy(() =>
      import('./block').then((mod) => ({
        default: mod.default,
      })),
    ),
  },
  basic: {
    name: 'Basic',
    path: 'components/examples/button/basic.tsx',
    component: React.lazy(() =>
      import('./basic').then((mod) => ({
        default: mod.default,
      })),
    ),
  },
  icon: {
    name: 'Icon',
    path: 'components/examples/button/icon.tsx',
    component: React.lazy(() =>
      import('./icon').then((mod) => ({
        default: mod.default,
      })),
    ),
  },
  iconProgress: {
    name: 'Icon Progress',
    path: 'components/examples/button/icon-progress.tsx',
    component: React.lazy(() =>
      import('./icon-progress').then((mod) => ({
        default: mod.default,
      })),
    ),
  },
  pill: {
    name: 'Pill',
    path: 'components/examples/button/pill.tsx',
    component: React.lazy(() =>
      import('./pill').then((mod) => ({
        default: mod.default,
      })),
    ),
  },
  progress: {
    name: 'Progress',
    path: 'components/examples/button/progress.tsx',
    component: React.lazy(() =>
      import('./progress').then((mod) => ({
        default: mod.default,
      })),
    ),
  },
  size: {
    name: 'Size',
    path: 'components/examples/button/size.tsx',
    component: React.lazy(() =>
      import('./size').then((mod) => ({
        default: mod.default,
      })),
    ),
  },
  link: {
    name: 'Link',
    path: 'components/examples/button/link.tsx',
    component: React.lazy(() =>
      import('./link').then((mod) => ({
        default: mod.default,
      })),
    ),
  },
};
