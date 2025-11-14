import React from 'react';

export const examples = {
  basic: {
    name: 'Fieldset',
    path: 'components/examples/fieldset/basic.tsx',
    component: React.lazy(() =>
      import('./basic').then((mod) => ({
        default: mod.default,
      })),
    ),
  },
  complex: {
    name: 'Fieldset Complex',
    path: 'components/examples/fieldset/complex.tsx',
    component: React.lazy(() =>
      import('./complex').then((mod) => ({
        default: mod.default,
      })),
    ),
  },
};
