import {
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from 'components/selia/item';
import { Link } from 'react-router';

const guides = [
  {
    name: 'Vite',
    href: '/docs/installation/vite',
    description: 'Lightning-fast frontend tooling for modern web development',
    icon: '/vitejs.svg',
  },
  {
    name: 'React Router',
    href: '/docs/installation/react-router',
    description:
      'User-focused, standards-based fullstack router deployable anywhere',
    icon: '/reactrouter.svg',
  },
  {
    name: 'TanStack Start',
    href: '/docs/installation/tanstack-start',
    description:
      'Type-safe fullstack React framework built on TanStack foundations',
    icon: '/tanstack.svg',
  },
  {
    name: 'TanStack Router',
    href: '/docs/installation/tanstack-router',
    description:
      'A powerful React router for client-side and full-stack react applications',
    icon: '/tanstack.svg',
  },
  {
    name: 'Next.js',
    href: '/docs/installation/next',
    description:
      'Fullstack React framework with routing, SSR, and built-in optimizations',
    icon: '/nextjs.svg',
  },
];

export function InstallationGuides({ type }: { type: 'framework' | 'manual' }) {
  if (type === 'manual') {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Item render={<Link to="/docs/installation/manual" />}>
          <ItemMedia className="mt-1">
            <img src="/reactjs.svg" alt="React" className="size-11" />
          </ItemMedia>
          <ItemContent className="ml-2">
            <ItemTitle className="text-lg">Manual Guide</ItemTitle>
            <ItemDescription>
              Manual instructions for installing Selia in your React
              application.
            </ItemDescription>
          </ItemContent>
        </Item>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {guides.map((guide) => (
        <Item key={guide.name} render={<Link to={guide.href} />}>
          <ItemMedia className="mt-1">
            <img src={guide.icon} alt={guide.name} className="size-11" />
          </ItemMedia>
          <ItemContent className="ml-2">
            <ItemTitle className="text-lg">{guide.name}</ItemTitle>
            <ItemDescription>{guide.description}</ItemDescription>
          </ItemContent>
        </Item>
      ))}
    </div>
  );
}
