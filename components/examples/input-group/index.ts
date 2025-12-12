import React from 'react';

export const examples = {
  basic: {
    name: 'Basic',
    path: 'components/examples/input-group/basic.tsx',
    component: React.lazy(() =>
      import('./basic').then((mod) => ({ default: mod.default })),
    ),
  },
  icon: {
    name: 'Icon',
    path: 'components/examples/input-group/icon.tsx',
    component: React.lazy(() =>
      import('./icon').then((mod) => ({ default: mod.default })),
    ),
  },
  menu: {
    name: 'Menu',
    path: 'components/examples/input-group/menu.tsx',
    component: React.lazy(() =>
      import('./menu').then((mod) => ({ default: mod.default })),
    ),
  },
  select: {
    name: 'Select',
    path: 'components/examples/input-group/select.tsx',
    component: React.lazy(() =>
      import('./select').then((mod) => ({ default: mod.default })),
    ),
  },
  button: {
    name: 'Button',
    path: 'components/examples/input-group/button.tsx',
    component: React.lazy(() =>
      import('./button').then((mod) => ({ default: mod.default })),
    ),
  },
  textarea: {
    name: 'Textarea',
    path: 'components/examples/input-group/textarea.tsx',
    component: React.lazy(() =>
      import('./textarea').then((mod) => ({ default: mod.default })),
    ),
  },
};
