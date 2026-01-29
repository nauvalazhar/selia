import React from 'react';

export type Block = {
  [key: string]: {
    name: string;
    description: string;
    category: (typeof categories)[number];
    pathIndex?: string;
    path: string;
    featured?: boolean;
    component: React.LazyExoticComponent<React.ComponentType<any>>;
  };
};

export const categories = [
  'AI',
  'Dashboard',
  'Forms',
  'Marketing',
  'Sidebar',
  'Misc',
] as const;

export const blocks: Block = {
  aichat: {
    name: 'AI Chat',
    description: 'A chat interface with AI capabilities.',
    category: 'AI',
    pathIndex: 'page.tsx',
    path: 'components/blocks/ai-chat',
    featured: true,
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
    category: 'Misc',
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
    featured: true,
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
    featured: true,
    component: React.lazy(() =>
      import('./dashboard/page').then((mod) => ({ default: mod.default })),
    ),
  },
  contact: {
    name: 'Contact',
    description: 'A contact form block with contact information.',
    category: 'Forms',
    path: 'components/blocks/contact.tsx',
    featured: true,
    component: React.lazy(() =>
      import('./contact').then((mod) => ({ default: mod.default })),
    ),
  },
  hero: {
    name: 'Hero',
    description:
      'A hero section with headline, subtitle, and call-to-action buttons.',
    category: 'Marketing',
    path: 'components/blocks/hero.tsx',
    component: React.lazy(() =>
      import('./hero').then((mod) => ({ default: mod.default })),
    ),
  },
  about: {
    name: 'About',
    description:
      'An about section showcasing key features with icons and descriptions.',
    category: 'Marketing',
    path: 'components/blocks/about.tsx',
    component: React.lazy(() =>
      import('./about').then((mod) => ({ default: mod.default })),
    ),
  },
  bentoCards: {
    name: 'Bento Cards',
    description: 'A grid layout with bento-style cards of varying sizes.',
    category: 'Marketing',
    path: 'components/blocks/bento-cards.tsx',
    component: React.lazy(() =>
      import('./bento-cards').then((mod) => ({ default: mod.default })),
    ),
  },
  testimonial: {
    name: 'Testimonial',
    description: 'Customer testimonial cards with ratings and avatars.',
    category: 'Marketing',
    path: 'components/blocks/testimonial.tsx',
    component: React.lazy(() =>
      import('./testimonial').then((mod) => ({ default: mod.default })),
    ),
  },
  pricing: {
    name: 'Pricing',
    description:
      'Three-tier pricing section with feature comparison and CTA buttons.',
    category: 'Marketing',
    path: 'components/blocks/pricing.tsx',
    component: React.lazy(() =>
      import('./pricing').then((mod) => ({ default: mod.default })),
    ),
  },
  faq: {
    name: 'FAQ',
    description: 'Frequently asked questions with expandable accordion layout.',
    category: 'Marketing',
    path: 'components/blocks/faq.tsx',
    component: React.lazy(() =>
      import('./faq').then((mod) => ({ default: mod.default })),
    ),
  },
  stats: {
    name: 'Stats',
    description:
      'Statistics and metrics showcase section with key performance indicators.',
    category: 'Marketing',
    path: 'components/blocks/stats.tsx',
    component: React.lazy(() =>
      import('./stats').then((mod) => ({ default: mod.default })),
    ),
  },
  logoGrid: {
    name: 'Logo Grid',
    description:
      'Grid of company logos showcasing trusted partners and clients.',
    category: 'Marketing',
    path: 'components/blocks/logo-grid.tsx',
    component: React.lazy(() =>
      import('./logo-grid').then((mod) => ({ default: mod.default })),
    ),
  },
  newsletter: {
    name: 'Newsletter',
    description: 'Email signup form with success message and privacy notice.',
    category: 'Marketing',
    path: 'components/blocks/newsletter.tsx',
    component: React.lazy(() =>
      import('./newsletter').then((mod) => ({ default: mod.default })),
    ),
  },
  splitSection: {
    name: 'Split Section',
    description: 'Side-by-side content layout with text and visual elements.',
    category: 'Marketing',
    path: 'components/blocks/split-section.tsx',
    component: React.lazy(() =>
      import('./split-section').then((mod) => ({ default: mod.default })),
    ),
  },
  ctaSection: {
    name: 'CTA Section',
    description:
      'Call-to-action section with gradient background and multiple buttons.',
    category: 'Marketing',
    path: 'components/blocks/cta-section.tsx',
    component: React.lazy(() =>
      import('./cta-section').then((mod) => ({ default: mod.default })),
    ),
  },
  team: {
    name: 'Team',
    description:
      'Team member cards with avatars, titles, bios, and social links.',
    category: 'Marketing',
    path: 'components/blocks/team.tsx',
    component: React.lazy(() =>
      import('./team').then((mod) => ({ default: mod.default })),
    ),
  },
  featuresDetailed: {
    name: 'Features Detailed',
    description:
      'Detailed feature cards with icons and comprehensive descriptions.',
    category: 'Marketing',
    path: 'components/blocks/features-detailed.tsx',
    component: React.lazy(() =>
      import('./features-detailed').then((mod) => ({ default: mod.default })),
    ),
  },
  videoSection: {
    name: 'Video Section',
    description:
      'Video player with overlay controls and supporting content sections.',
    category: 'Marketing',
    path: 'components/blocks/video-section.tsx',
    component: React.lazy(() =>
      import('./video-section').then((mod) => ({ default: mod.default })),
    ),
  },
};
