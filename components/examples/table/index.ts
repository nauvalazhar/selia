import React from 'react';

export const examples = {
  basic: {
    name: 'Basic',
    path: 'components/examples/table/basic.tsx',
    component: React.lazy(() =>
      import('./basic').then((mod) => ({ default: mod.default })),
    ),
  },
  card: {
    name: 'Card',
    path: 'components/examples/table/card.tsx',
    component: React.lazy(() =>
      import('./card').then((mod) => ({ default: mod.default })),
    ),
  },
};
