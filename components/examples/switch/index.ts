import React from 'react';

export const examples = {
  basic: {
    name: 'Basic',
    path: 'components/examples/switch/basic.tsx',
    component: React.lazy(() =>
      import('./basic').then((mod) => ({ default: mod.default })),
    ),
  },
};
