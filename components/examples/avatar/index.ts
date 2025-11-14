import React from 'react';

export const examples = {
  basic: {
    name: 'Basic',
    path: 'components/examples/avatar/basic.tsx',
    component: React.lazy(() =>
      import('./basic').then((mod) => ({
        default: mod.default,
      })),
    ),
  },
  indicator: {
    name: 'Indicator',
    path: 'components/examples/avatar/indicator.tsx',
    component: React.lazy(() =>
      import('./indicator').then((mod) => ({
        default: mod.default,
      })),
    ),
  },
  initial: {
    name: 'Initials',
    path: 'components/examples/avatar/initial.tsx',
    component: React.lazy(() =>
      import('./initial').then((mod) => ({
        default: mod.default,
      })),
    ),
  },
};
