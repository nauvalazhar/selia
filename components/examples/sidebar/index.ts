import React from 'react';

export const examples = {
  basic: {
    name: 'Basic',
    path: 'components/examples/sidebar/basic.tsx',
    component: React.lazy(() =>
      import('./basic').then((mod) => ({ default: mod.default })),
    ),
  },
  compact: {
    name: 'Compact',
    path: 'components/examples/sidebar/compact.tsx',
    component: React.lazy(() =>
      import('./compact').then((mod) => ({ default: mod.default })),
    ),
  },
  line: {
    name: 'Line',
    path: 'components/examples/sidebar/line.tsx',
    component: React.lazy(() =>
      import('./line').then((mod) => ({ default: mod.default })),
    ),
  },
};
