import React from 'react';

type Block = {
  [key: string]: {
    name: string;
    description: string;
    pathIndex?: string;
    path: string;
    component: React.LazyExoticComponent<React.ComponentType<any>>;
  };
};

export const blocks: Block = {
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
    pathIndex: 'page.tsx',
    path: 'components/blocks/dashboard',
    component: React.lazy(() =>
      import('./dashboard').then((mod) => ({ default: mod.default })),
    ),
  },
};
