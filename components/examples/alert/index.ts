import React from 'react';

export const examples = {
  basic: {
    name: 'Basic',
    path: 'components/examples/alert/basic.tsx',
    component: React.lazy(() =>
      import('./basic').then((mod) => ({
        default: mod.default,
      })),
    ),
  },
  solid: {
    name: 'Solid Variant',
    path: 'components/examples/alert/solid.tsx',
    component: React.lazy(() =>
      import('./solid').then((mod) => ({
        default: mod.default,
      })),
    ),
  },
  light: {
    name: 'Light Variant',
    path: 'components/examples/alert/light.tsx',
    component: React.lazy(() =>
      import('./light').then((mod) => ({
        default: mod.default,
      })),
    ),
  },
  action: {
    name: 'Alert with Action',
    path: 'components/examples/alert/action.tsx',
    component: React.lazy(() =>
      import('./action').then((mod) => ({
        default: mod.default,
      })),
    ),
  },
  description: {
    name: 'Alert with Description',
    path: 'components/examples/alert/description.tsx',
    component: React.lazy(() =>
      import('./description').then((mod) => ({
        default: mod.default,
      })),
    ),
  },
};
