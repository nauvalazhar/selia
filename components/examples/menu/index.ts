import React from 'react';

export const examples = {
  basic: {
    name: 'Basic',
    path: 'components/examples/menu/basic.tsx',
    component: React.lazy(() =>
      import('./basic').then((mod) => ({
        default: mod.default,
      })),
    ),
  },
  trigger: {
    name: 'Trigger',
    path: 'components/examples/menu/trigger.tsx',
    component: React.lazy(() =>
      import('./trigger').then((mod) => ({
        default: mod.default,
      })),
    ),
  },
  icon: {
    name: 'Icon',
    path: 'components/examples/menu/icon.tsx',
    component: React.lazy(() =>
      import('./icon').then((mod) => ({
        default: mod.default,
      })),
    ),
  },
  group: {
    name: 'Group',
    path: 'components/examples/menu/group.tsx',
    component: React.lazy(() =>
      import('./group').then((mod) => ({
        default: mod.default,
      })),
    ),
  },
  radio: {
    name: 'Radio',
    path: 'components/examples/menu/radio.tsx',
    component: React.lazy(() =>
      import('./radio').then((mod) => ({
        default: mod.default,
      })),
    ),
  },
  nested: {
    name: 'Nested',
    path: 'components/examples/menu/nested.tsx',
    component: React.lazy(() =>
      import('./nested').then((mod) => ({
        default: mod.default,
      })),
    ),
  },
  size: {
    name: 'Size',
    path: 'components/examples/menu/size.tsx',
    component: React.lazy(() =>
      import('./size').then((mod) => ({
        default: mod.default,
      })),
    ),
  },
};
