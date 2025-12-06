import React from 'react';

export const examples = {
  basic: {
    name: 'Basic',
    path: 'components/examples/sidebar/basic.tsx',
    component: React.lazy(() =>
      import('./basic').then((mod) => ({ default: mod.default })),
    ),
  },
  compact: {
    name: 'Compact',
    path: 'components/examples/sidebar/compact.tsx',
    component: React.lazy(() =>
      import('./compact').then((mod) => ({ default: mod.default })),
    ),
  },
  loose: {
    name: 'Loose',
    path: 'components/examples/sidebar/loose.tsx',
    component: React.lazy(() =>
      import('./loose').then((mod) => ({ default: mod.default })),
    ),
  },
  background: {
    name: 'Background',
    path: 'components/examples/sidebar/background.tsx',
    component: React.lazy(() =>
      import('./background').then((mod) => ({ default: mod.default })),
    ),
  },
  chatbot: {
    name: 'Chatbot',
    path: 'components/examples/sidebar/chatbot.tsx',
    component: React.lazy(() =>
      import('./chatbot').then((mod) => ({ default: mod.default })),
    ),
  },
};
