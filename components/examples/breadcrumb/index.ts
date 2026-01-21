import React from 'react';

export const examples = {
  basic: {
    name: 'Basic',
    path: 'components/examples/breadcrumb/basic.tsx',
    component: React.lazy(() =>
      import('./basic').then((mod) => ({ default: mod.default })),
    ),
  },
  ellipsis: {
    name: 'Ellipsis',
    path: 'components/examples/breadcrumb/ellipsis.tsx',
    component: React.lazy(() =>
      import('./ellipsis').then((mod) => ({ default: mod.default })),
    ),
  },
};
