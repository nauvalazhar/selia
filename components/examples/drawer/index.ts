import React from 'react';

export const examples = {
  basic: {
    name: 'Basic',
    path: 'components/examples/drawer/basic.tsx',
    component: React.lazy(() =>
      import('./basic').then((mod) => ({
        default: mod.default,
      })),
    ),
  },
  bottom: {
    name: 'Bottom',
    path: 'components/examples/drawer/bottom.tsx',
    component: React.lazy(() =>
      import('./bottom').then((mod) => ({
        default: mod.default,
      })),
    ),
  },
  left: {
    name: 'Left',
    path: 'components/examples/drawer/left.tsx',
    component: React.lazy(() =>
      import('./left').then((mod) => ({
        default: mod.default,
      })),
    ),
  },
  controlled: {
    name: 'Controlled',
    path: 'components/examples/drawer/controlled.tsx',
    component: React.lazy(() =>
      import('./controlled').then((mod) => ({
        default: mod.default,
      })),
    ),
  },
  actionsheet: {
    name: 'Action Sheet',
    path: 'components/examples/drawer/actionsheet.tsx',
    component: React.lazy(() =>
      import('./actionsheet').then((mod) => ({
        default: mod.default,
      })),
    ),
  },
  nested: {
    name: 'Nested',
    path: 'components/examples/drawer/nested.tsx',
    component: React.lazy(() =>
      import('./nested').then((mod) => ({
        default: mod.default,
      })),
    ),
  },
  mobilenav: {
    name: 'Mobile Navigation',
    path: 'components/examples/drawer/mobilenav.tsx',
    component: React.lazy(() =>
      import('./mobilenav').then((mod) => ({
        default: mod.default,
      })),
    ),
  },
};
