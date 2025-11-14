import React from 'react';

export const examples = {
  basic: {
    name: 'Basic',
    path: 'components/examples/checkbox/basic.tsx',
    component: React.lazy(() =>
      import('./basic').then((mod) => ({
        default: mod.default,
      })),
    ),
  },
  group: {
    name: 'Group',
    path: 'components/examples/checkbox/group.tsx',
    component: React.lazy(() =>
      import('./group').then((mod) => ({
        default: mod.default,
      })),
    ),
  },
  groupNested: {
    name: 'Group Nested',
    path: 'components/examples/checkbox/group-nested.tsx',
    component: React.lazy(() =>
      import('./group-nested').then((mod) => ({
        default: mod.default,
      })),
    ),
  },
  'label-alt': {
    name: 'Label Alt',
    path: 'components/examples/checkbox/label-alt.tsx',
    component: React.lazy(() =>
      import('./label-alt').then((mod) => ({
        default: mod.default,
      })),
    ),
  },
  label: {
    name: 'Label',
    path: 'components/examples/checkbox/label.tsx',
    component: React.lazy(() =>
      import('./label').then((mod) => ({
        default: mod.default,
      })),
    ),
  },
};
