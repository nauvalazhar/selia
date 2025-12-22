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
    name: 'Next.js',
    href: '/docs/installation/next',
    description:
      'Fullstack React framework with routing, SSR, and built-in optimizations',
    icon: '/nextjs.svg',
  },
];

export function InstallationGuides() {
  return (
    <>
      <h2>Framework Guides</h2>
      <p>
        We provide installation guides for the following frameworks. Select the
        framework you are using to get started.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {guides.map((guide) => (
          <Item key={guide.name} render={<Link to={guide.href} />}>
            <ItemMedia className="mt-1">
              <img src={guide.icon} alt={guide.name} />
            </ItemMedia>
            <ItemContent className="ml-2">
              <ItemTitle className="text-lg">{guide.name}</ItemTitle>
              <ItemDescription>{guide.description}</ItemDescription>
            </ItemContent>
          </Item>
        ))}
      </div>
      <h2>Manual</h2>
      <p>
        If your framework is not listed, you can follow the manual installation
        guide.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Item render={<Link to="/docs/installation/manual" />}>
          <ItemMedia className="mt-1">
            <img src="/reactjs.svg" alt="React" />
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
    </>
  );
}
