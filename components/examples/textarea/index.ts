import React from 'react';

export const examples = {
  basic: {
    name: 'Basic',
    path: 'components/examples/textarea/basic.tsx',
    component: React.lazy(() =>
      import('./basic').then((mod) => ({ default: mod.default })),
    ),
  },
  subtle: {
    name: 'Subtle',
    path: 'components/examples/textarea/subtle.tsx',
    component: React.lazy(() =>
      import('./subtle').then((mod) => ({ default: mod.default })),
    ),
  },
};
