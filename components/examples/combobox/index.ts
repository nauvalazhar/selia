import React from 'react';

export const examples = {
  basic: {
    name: 'Basic',
    path: 'components/examples/combobox/basic.tsx',
    component: React.lazy(() =>
      import('./basic').then((mod) => ({
        default: mod.default,
      })),
    ),
  },
  variant: {
    name: 'Variant',
    path: 'components/examples/combobox/variant.tsx',
    component: React.lazy(() =>
      import('./variant').then((mod) => ({
        default: mod.default,
      })),
    ),
  },
  multiple: {
    name: 'Multiple',
    path: 'components/examples/combobox/multiple.tsx',
    component: React.lazy(() =>
      import('./multiple').then((mod) => ({
        default: mod.default,
      })),
    ),
  },
  group: {
    name: 'Group',
    path: 'components/examples/combobox/group.tsx',
    component: React.lazy(() =>
      import('./group').then((mod) => ({
        default: mod.default,
      })),
    ),
  },
};
