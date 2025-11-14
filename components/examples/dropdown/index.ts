import React from 'react';

export const examples = {
  basic: {
    name: 'Basic',
    path: 'components/examples/dropdown/basic.tsx',
    component: React.lazy(() =>
      import('./basic').then((mod) => ({
        default: mod.default,
      })),
    ),
  },
  trigger: {
    name: 'Trigger',
    path: 'components/examples/dropdown/trigger.tsx',
    component: React.lazy(() =>
      import('./trigger').then((mod) => ({
        default: mod.default,
      })),
    ),
  },
  icon: {
    name: 'Icon',
    path: 'components/examples/dropdown/icon.tsx',
    component: React.lazy(() =>
      import('./icon').then((mod) => ({
        default: mod.default,
      })),
    ),
  },
  group: {
    name: 'Group',
    path: 'components/examples/dropdown/group.tsx',
    component: React.lazy(() =>
      import('./group').then((mod) => ({
        default: mod.default,
      })),
    ),
  },
  radio: {
    name: 'Radio',
    path: 'components/examples/dropdown/radio.tsx',
    component: React.lazy(() =>
      import('./radio').then((mod) => ({
        default: mod.default,
      })),
    ),
  },
  nested: {
    name: 'Nested',
    path: 'components/examples/dropdown/nested.tsx',
    component: React.lazy(() =>
      import('./nested').then((mod) => ({
        default: mod.default,
      })),
    ),
  },
};
