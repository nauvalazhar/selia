import React from 'react';

export const examples = {
  basic: {
    name: 'Basic',
    path: 'components/examples/select/basic.tsx',
    component: React.lazy(() =>
      import('./basic').then((mod) => ({
        default: mod.default,
      })),
    ),
  },
  multiple: {
    name: 'Multiple',
    path: 'components/examples/select/multiple.tsx',
    component: React.lazy(() =>
      import('./multiple').then((mod) => ({
        default: mod.default,
      })),
    ),
  },
  group: {
    name: 'Group',
    path: 'components/examples/select/group.tsx',
    component: React.lazy(() =>
      import('./group').then((mod) => ({
        default: mod.default,
      })),
    ),
  },
  icon: {
    name: 'Icon',
    path: 'components/examples/select/icon.tsx',
    component: React.lazy(() =>
      import('./icon').then((mod) => ({
        default: mod.default,
      })),
    ),
  },
  render: {
    name: 'Render',
    path: 'components/examples/select/render.tsx',
    component: React.lazy(() =>
      import('./render').then((mod) => ({
        default: mod.default,
      })),
    ),
  },
  disable: {
    name: 'Disable',
    path: 'components/examples/select/disable.tsx',
    component: React.lazy(() =>
      import('./disable').then((mod) => ({
        default: mod.default,
      })),
    ),
  },
};
