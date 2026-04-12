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
  settings: {
    name: 'Settings',
    path: 'components/examples/drawer/settings.tsx',
    component: React.lazy(() =>
      import('./settings').then((mod) => ({
        default: mod.default,
      })),
    ),
  },
  scrolling: {
    name: 'Scrolling',
    path: 'components/examples/drawer/scrolling.tsx',
    component: React.lazy(() =>
      import('./scrolling').then((mod) => ({
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
  top: {
    name: 'Top',
    path: 'components/examples/drawer/top.tsx',
    component: React.lazy(() =>
      import('./top').then((mod) => ({
        default: mod.default,
      })),
    ),
  },
  snapPoints: {
    name: 'Snap Points',
    path: 'components/examples/drawer/snap-points.tsx',
    component: React.lazy(() =>
      import('./snap-points').then((mod) => ({
        default: mod.default,
      })),
    ),
  },
  nonModal: {
    name: 'Non-Modal',
    path: 'components/examples/drawer/non-modal.tsx',
    component: React.lazy(() =>
      import('./non-modal').then((mod) => ({
        default: mod.default,
      })),
    ),
  },
  indent: {
    name: 'Indent',
    path: 'components/examples/drawer/indent.tsx',
    component: React.lazy(() =>
      import('./indent').then((mod) => ({
        default: mod.default,
      })),
    ),
  },
  swipeArea: {
    name: 'Swipe Area',
    path: 'components/examples/drawer/swipe-area.tsx',
    component: React.lazy(() =>
      import('./swipe-area').then((mod) => ({
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
};
