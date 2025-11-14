import React from 'react';

export const examples = {
  action: {
    name: 'Action',
    path: 'components/examples/card/action.tsx',
    component: React.lazy(() =>
      import('./action').then((mod) => ({
        default: mod.default,
      })),
    ),
  },
  description: {
    name: 'Description',
    path: 'components/examples/card/description.tsx',
    component: React.lazy(() =>
      import('./description').then((mod) => ({
        default: mod.default,
      })),
    ),
  },
  basic: {
    name: 'Basic',
    path: 'components/examples/card/basic.tsx',
    component: React.lazy(() =>
      import('./basic').then((mod) => ({
        default: mod.default,
      })),
    ),
  },
  teamCard: {
    name: 'Team Card',
    path: 'components/examples/card/team-card.tsx',
    component: React.lazy(() =>
      import('./team-card').then((mod) => ({
        default: mod.default,
      })),
    ),
  },
  alternative: {
    name: 'Alternative',
    path: 'components/examples/card/alternative.tsx',
    component: React.lazy(() =>
      import('./alternative').then((mod) => ({
        default: mod.default,
      })),
    ),
  },
};
