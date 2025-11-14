import React from 'react';

export const examples = {
  basic: {
    name: 'Basic',
    path: 'components/examples/field/basic.tsx',
    component: React.lazy(() =>
      import('./basic').then((mod) => ({
        default: mod.default,
      })),
    ),
  },
  select: {
    name: 'Select',
    path: 'components/examples/field/select.tsx',
    component: React.lazy(() =>
      import('./select').then((mod) => ({
        default: mod.default,
      })),
    ),
  },
};
