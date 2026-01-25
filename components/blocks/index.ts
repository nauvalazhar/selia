import React from 'react';

type Block = {
  [key: string]: {
    name: string;
    description: string;
    category: string;
    pathIndex?: string;
    path: string;
    component: React.LazyExoticComponent<React.ComponentType<any>>;
  };
};

export const blocks: Block = {
  aichat: {
    name: 'AI Chat',
    description: 'A chat interface with AI capabilities.',
    category: 'Chat',
    pathIndex: 'page.tsx',
    path: 'components/blocks/ai-chat',
    component: React.lazy(() =>
      import('./ai-chat/page').then((mod) => ({ default: mod.default })),
    ),
  },
  sidebarMail: {
    name: 'Sidebar Mail',
    description: 'A sidebar for mail application.',
    category: 'Sidebar',
    path: 'components/blocks/sidebar-mail.tsx',
    component: React.lazy(() =>
      import('./sidebar-mail').then((mod) => ({ default: mod.default })),
    ),
  },
  sidebarStorage: {
    name: 'Sidebar Storage',
    description: 'A sidebar for storage management.',
    category: 'Sidebar',
    path: 'components/blocks/sidebar-storage.tsx',
    component: React.lazy(() =>
      import('./sidebar-storage').then((mod) => ({ default: mod.default })),
    ),
  },
  sidebarGit: {
    name: 'Sidebar Git',
    description: 'A sidebar for git application.',
    category: 'Sidebar',
    path: 'components/blocks/sidebar-git.tsx',
    component: React.lazy(() =>
      import('./sidebar-git').then((mod) => ({ default: mod.default })),
    ),
  },
  sidebarChat: {
    name: 'Sidebar Chat',
    description: 'A sidebar for chat application.',
    category: 'Sidebar',
    path: 'components/blocks/sidebar-chat.tsx',
    component: React.lazy(() =>
      import('./sidebar-chat').then((mod) => ({ default: mod.default })),
    ),
  },
  sidebarCode: {
    name: 'Sidebar Code',
    description: 'A sidebar with a file tree for code editor.',
    category: 'Sidebar',
    path: 'components/blocks/sidebar-code.tsx',
    component: React.lazy(() =>
      import('./sidebar-code').then((mod) => ({ default: mod.default })),
    ),
  },
  profile: {
    name: 'Profile',
    description: 'A simple profile block with buttons and a separator.',
    category: 'Profile',
    path: 'components/blocks/profile.tsx',
    component: React.lazy(() =>
      import('./profile').then((mod) => ({ default: mod.default })),
    ),
  },
  login: {
    name: 'Login',
    description: 'A simple login form with Google and GitHub authentication.',
    category: 'Forms',
    path: 'components/blocks/login.tsx',
    component: React.lazy(() =>
      import('./login').then((mod) => ({ default: mod.default })),
    ),
  },
  dashboard: {
    name: 'Dashboard',
    description: 'A simple dashboard with a sidebar and a main content area.',
    category: 'Dashboard',
    pathIndex: 'page.tsx',
    path: 'components/blocks/dashboard',
    component: React.lazy(() =>
      import('./dashboard/page').then((mod) => ({ default: mod.default })),
    ),
  },
  contact: {
    name: 'Contact',
    description: 'A contact form block with contact information.',
    category: 'Forms',
    path: 'components/blocks/contact.tsx',
    component: React.lazy(() =>
      import('./contact').then((mod) => ({ default: mod.default })),
    ),
  },
};
