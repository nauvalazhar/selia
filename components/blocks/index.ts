import React from 'react';
import LoginBlock from './login';

export const blocks = {
  login: {
    name: 'Login',
    description: 'A simple login form with Google and GitHub authentication.',
    path: 'components/blocks/login.tsx',
    component: React.lazy(() =>
      import('./login').then((mod) => ({ default: mod.default })),
    ),
  },
  dashboard: {
    name: 'Dashboard',
    description: 'A simple dashboard with a sidebar and a main content area.',
    path: 'components/blocks/dashboard.tsx',
    component: React.lazy(() =>
      import('./dashboard').then((mod) => ({ default: mod.default })),
    ),
  },
};
