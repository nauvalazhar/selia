import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupTitle,
  SidebarItem,
  SidebarList,
  SidebarMenu,
} from 'components/selia/sidebar';
import type { Route } from './+types/docs';
import { cn } from 'lib/utils';
import { readdir } from 'node:fs/promises';
import path from 'node:path';
import { Link, Outlet, redirect, useLocation } from 'react-router';
import { TableOfContents } from 'components/table-of-contents';
import { ScrollArea } from '@base-ui-components/react';
import { Button } from 'components/selia/button';
import {
  ListTreeIcon,
  MenuIcon,
  SearchIcon,
  SidebarIcon,
  XIcon,
} from 'lucide-react';
import { Kbd } from 'components/selia/kbd';
import { useEffect, useRef, useState } from 'react';
import { useLayoutStore } from '~/lib/layout-store';
import { useShallow } from 'zustand/react/shallow';

function humanName(name: string) {
  return (
    name.charAt(0).toUpperCase() +
    name.slice(1).replace('.tsx', '').replace(/-/g, ' ')
  );
}

const prologue = [
  {
    title: 'Introduction',
    path: '/docs/introduction',
  },
  {
    title: 'Installation',
    path: '/docs/installation',
  },
  {
    title: 'Customization',
    path: '/docs/customization',
  },
];

export async function loader({ request }: Route.LoaderArgs) {
  const url = new URL(request.url);
  const pathname = url.pathname.replace('/docs/', '').replace(/\/$/, '');

  if (pathname === '/docs' || pathname === '') {
    return redirect('/docs/introduction');
  }

  let componentsFolder = '../../components/selia';

  if (process.env.NODE_ENV === 'production') {
    componentsFolder = '../../../components/selia';
  }

  const components = await readdir(
    path.join(import.meta.dirname, componentsFolder),
  );

  const componentsMap = components
    .map((component) => {
      return {
        name: humanName(component),
        slug: component.replace('.tsx', ''),
      };
    })
    .sort((a, b) => a.name.localeCompare(b.name));

  return { componentsMap, name: humanName(pathname) };
}

export default function LayoutDocs({
  loaderData: { componentsMap, name },
}: Route.ComponentProps) {
  const location = useLocation();
  const {
    isSidebarOpen,
    isContentsOpen,
    toggleSidebar,
    closeSidebar,
    toogleContents,
  } = useLayoutStore(
    useShallow((state) => ({
      isSidebarOpen: state.isSidebarOpen,
      isContentsOpen: state.isContentsOpen,
      toggleSidebar: state.toggleSidebar,
      closeSidebar: state.closeSidebar,
      toogleContents: state.toggleContents,
    })),
  );

  useEffect(() => {
    closeSidebar();
  }, [location.pathname]);
  const pathname = location.pathname.replace(/\/$/, '');

  return (
    <>
      <Navbar />

      <div
        className={cn(
          'lg:hidden fixed bottom-4 right-4 left-4 z-40 *:backdrop-blur-sm',
          'flex rounded-full bg-secondary',
          '*:h-10 *:first:rounded-r-none *:last:rounded-l-none',
        )}
      >
        <Button
          variant="secondary"
          size="sm"
          block
          pill
          onClick={toogleContents}
        >
          {isContentsOpen ? <XIcon /> : <ListTreeIcon />}
          Contents
        </Button>
        <Button
          variant="secondary"
          size="sm"
          onClick={toggleSidebar}
          block
          pill
        >
          {isSidebarOpen ? <XIcon /> : <SidebarIcon />}
          Sidebar
        </Button>
      </div>

      <div className="flex container mx-auto">
        <Sidebar
          className={cn(
            'lg:sticky top-0 max-h-dvh lg:w-72 px-2.5 lg:px-0',
            'fixed z-30 w-full max-lg:h-full bg-surface01 lg:bg-transparent transition-all',
            isSidebarOpen ? 'right-0' : '-right-full',
          )}
        >
          <SidebarContent render={<SidebarScrollArea />}>
            <SidebarMenu>
              <SidebarGroup>
                <SidebarGroupTitle>Prologue</SidebarGroupTitle>
                <SidebarList line size="compact">
                  {prologue.map((item) => (
                    <SidebarItem
                      key={item.path}
                      active={pathname === item.path}
                      render={<Link to={item.path} />}
                    >
                      {item.title}
                    </SidebarItem>
                  ))}
                </SidebarList>
              </SidebarGroup>
              <SidebarGroup>
                <SidebarGroupTitle>Components</SidebarGroupTitle>
                <SidebarList line size="compact">
                  {componentsMap.map((component) => (
                    <SidebarItem
                      key={component.slug}
                      className="capitalize"
                      active={pathname === `/docs/${component.slug}`}
                      render={<Link to={`/docs/${component.slug}`} />}
                    >
                      {component.name}
                    </SidebarItem>
                  ))}
                </SidebarList>
              </SidebarGroup>
            </SidebarMenu>
          </SidebarContent>
        </Sidebar>
        <main className="w-full">
          <div className="flex px-4 py-10 md:p-10 gap-6 justify-between">
            <Outlet />
            <aside className="w-64">
              <TableOfContents />
            </aside>
          </div>
        </main>
      </div>
    </>
  );
}

function SidebarScrollArea({ children }: { children?: React.ReactNode }) {
  return (
    <ScrollArea.Root className="h-full pt-4">
      <ScrollArea.Viewport className={cn('h-full lg:pr-8 max-lg:pb-20')}>
        {children}
      </ScrollArea.Viewport>
      <ScrollArea.Scrollbar
        className={cn(
          'flex w-1 justify-center',
          'opacity-0 transition-opacity delay-300 pointer-events-none',
          'data-[hovering]:opacity-100 data-[hovering]:delay-0',
          'data-[hovering]:duration-75 data-[hovering]:pointer-events-auto',
          'data-[scrolling]:opacity-100 data-[scrolling]:delay-0',
          'data-[scrolling]:duration-75 data-[scrolling]:pointer-events-auto',
        )}
      >
        <ScrollArea.Thumb className="w-full rounded bg-surface04" />
      </ScrollArea.Scrollbar>
    </ScrollArea.Root>
  );
}

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={cn(
        'h-14 border-b border-border00 w-full relative z-20 transition-colors',
        menuOpen ? 'max-md:bg-surface01' : '',
      )}
    >
      <div className="container mx-auto px-4 md:px-2.5 h-full">
        <div className="flex items-center w-full h-full justify-between">
          <Link to="/" className="flex items-center gap-2.5">
            <svg
              className="size-8.5"
              width="1000"
              height="1000"
              viewBox="0 0 1000 1000"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_448_30)">
                <rect
                  width="1000"
                  height="1000"
                  rx="220"
                  fill="url(#paint0_linear_448_30)"
                />
                <path
                  d="M417.175 186.466C440.739 155.817 484.687 150.075 515.335 173.64L680.016 300.259C710.665 323.823 716.407 367.771 692.842 398.419L634.752 473.971L414.578 304.685C383.93 281.121 378.187 237.173 401.752 206.525L417.175 186.466Z"
                  fill="white"
                />
                <rect
                  x="346.904"
                  y="277.858"
                  width="512.257"
                  height="165.303"
                  rx="70"
                  transform="rotate(37.5557 346.904 277.858)"
                  fill="white"
                  fillOpacity="0.8"
                />
                <path
                  d="M363.586 524.406L584.571 694.315C615.219 717.88 620.961 761.828 597.397 792.476L581.974 812.535C558.409 843.183 514.461 848.925 483.813 825.361L318.322 698.119C287.674 674.554 281.931 630.606 305.496 599.958L363.586 524.406Z"
                  fill="white"
                  fillOpacity="0.6"
                />
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear_448_30"
                  x1="500"
                  y1="0"
                  x2="500"
                  y2="1000"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#4A7FF2" />
                  <stop offset="1" stopColor="#336FF1" />
                </linearGradient>
                <clipPath id="clip0_448_30">
                  <rect width="1000" height="1000" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <span className="font-semibold text-lg">Selia</span>
          </Link>
          <Button
            variant="secondary-subtle"
            size="sm"
            className="lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <XIcon /> : <MenuIcon />}
            Menu
          </Button>
          <ul
            className={cn(
              'flex lg:gap-6',
              'max-lg:flex-col max-md:border-b max-md:border-border01',
              'max-lg:absolute w-full lg:w-auto',
              'left-0 lg:left-auto lg:items-center',
              'bg-surface01 lg:bg-transparent',
              '**:[a]:text-muted **:[a]:font-medium',
              '**:[a]:hover:text-foreground **:[a]:transition-colors',
              '**:[a]:duration-75',
              'max-lg:**:[a]:px-4 max-lg:**:[a]:py-2.5',
              'max-lg:**:[a]:flex max-lg:top-14',
              'max-lg:transition-all',
              menuOpen
                ? 'max-lg:opacity-100'
                : 'max-lg:opacity-0 max-lg:invisible',
            )}
          >
            <li>
              <Link to="/docs/introduction">Documentation</Link>
            </li>
            <li>
              <Link to="/docs/alert">Components</Link>
            </li>
            <li>
              <Link to="/docs/blocks">Blocks</Link>
            </li>
            <li>
              <Button
                variant="secondary"
                size="sm"
                pill
                className="max-lg:hidden"
              >
                <SearchIcon />
                Search
                <Kbd className="ml-6">⌘ K</Kbd>
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
