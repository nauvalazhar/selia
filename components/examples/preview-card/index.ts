import React from 'react';

export const examples = {
  basic: {
    name: 'Basic',
    path: 'components/examples/preview-card/basic.tsx',
    component: React.lazy(() =>
      import('./basic').then((mod) => ({ default: mod.default })),
    ),
  },
};
