import React from 'react';

export const examples = {
  basic: {
    name: 'Basic',
    path: 'components/examples/divider/basic.tsx',
    component: React.lazy(() =>
      import('./basic').then((mod) => ({
        default: mod.default,
      })),
    ),
  },
  text: {
    name: 'Text',
    path: 'components/examples/divider/text.tsx',
    component: React.lazy(() =>
      import('./text').then((mod) => ({
        default: mod.default,
      })),
    ),
  },
};
