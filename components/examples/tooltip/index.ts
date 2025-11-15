import React from 'react';

export const examples = {
  basic: {
    name: 'Basic',
    path: 'components/examples/tooltip/basic.tsx',
    component: React.lazy(() =>
      import('./basic').then((mod) => ({ default: mod.default })),
    ),
  },
  position: {
    name: 'Position',
    path: 'components/examples/tooltip/position.tsx',
    component: React.lazy(() =>
      import('./position').then((mod) => ({ default: mod.default })),
    ),
  },
};
