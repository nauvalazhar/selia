import React from 'react';

export const examples = {
  basic: {
    name: 'Basic',
    path: 'components/examples/stack/basic.tsx',
    component: React.lazy(() =>
      import('./basic').then((mod) => ({ default: mod.default })),
    ),
  },
  row: {
    name: 'Row',
    path: 'components/examples/stack/row.tsx',
    component: React.lazy(() =>
      import('./row').then((mod) => ({ default: mod.default })),
    ),
  },
};
