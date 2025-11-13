import React from 'react';

export const examples = {
  basic: {
    name: 'Basic',
    path: 'components/examples/alert-dialog/basic.tsx',
    component: React.lazy(() =>
      import('./basic').then((mod) => ({
        default: mod.default,
      })),
    ),
  },
  trigger: {
    name: 'Trigger',
    path: 'components/examples/alert-dialog/trigger.tsx',
    component: React.lazy(() =>
      import('./trigger').then((mod) => ({
        default: mod.default,
      })),
    ),
  },
  icon: {
    name: 'Icon',
    path: 'components/examples/alert-dialog/icon.tsx',
    component: React.lazy(() =>
      import('./icon').then((mod) => ({
        default: mod.default,
      })),
    ),
  },
  confirmation: {
    name: 'Confirmation',
    path: 'components/examples/alert-dialog/confirmation.tsx',
    component: React.lazy(() =>
      import('./confirmation').then((mod) => ({
        default: mod.default,
      })),
    ),
  },
};
