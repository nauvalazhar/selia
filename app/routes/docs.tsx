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
import { Link, Outlet, useLocation } from 'react-router';
import { MDXProvider } from '@mdx-js/react';
import mdxComponents from 'components/mdx-components';
import { examples, type ExampleName } from 'components/examples';
import { highlightExamples } from '~/lib/highlighter';
import { TableOfContents } from 'components/table-of-contents';
import { ScrollArea } from '@base-ui-components/react';
import { Button } from 'components/selia/button';
import { SearchIcon } from 'lucide-react';
import { Kbd } from 'components/selia/kbd';

function humanName(name: string) {
  return (
    name.charAt(0).toUpperCase() +
    name.slice(1).replace('.tsx', '').replace(/-/g, ' ')
  );
}

export async function loader({ request }: Route.LoaderArgs) {
  const url = new URL(request.url);
  const pathname = url.pathname.replace('/docs/', '');

  if (!(pathname in examples)) {
    throw new Response('Not Found', { status: 404 });
  }

  const componentExamples = await examples[pathname as ExampleName]();
  const sources = await highlightExamples(componentExamples);

  const components = await readdir(
    path.join(import.meta.dirname, '../../components/selia'),
  );

  const componentsMap = components.map((component) => {
    return {
      name: humanName(component),
      slug: component.replace('.tsx', ''),
    };
  });

  return { componentsMap, sources, name: humanName(pathname) };
}

export default function LayoutDocs({
  loaderData: { componentsMap, sources, name },
}: Route.ComponentProps) {
  const location = useLocation();

  return (
    <div>
      <title>{`${name} - Selia`}</title>
      <Navbar />

      <div className="flex container mx-auto">
        <Sidebar className="sticky top-0 max-h-dvh w-72">
          <SidebarContent render={<SidebarScrollArea />}>
            <SidebarMenu>
              <SidebarGroup>
                <SidebarGroupTitle>Prologue</SidebarGroupTitle>
                <SidebarList line size="compact">
                  <SidebarItem
                    active={location.pathname === '/docs'}
                    render={<Link to="/docs" />}
                  >
                    Introduction
                  </SidebarItem>
                  <SidebarItem
                    active={location.pathname === '/docs/installation'}
                    render={<Link to="/docs/installation" />}
                  >
                    Installation
                  </SidebarItem>
                  <SidebarItem
                    active={location.pathname === '/docs/customization'}
                    render={<Link to="/docs/customization" />}
                  >
                    Customization
                  </SidebarItem>
                </SidebarList>
              </SidebarGroup>
              <SidebarGroup>
                <SidebarGroupTitle>Components</SidebarGroupTitle>
                <SidebarList line size="compact">
                  {componentsMap.map((component) => (
                    <SidebarItem
                      key={component.slug}
                      className="capitalize"
                      active={location.pathname === `/docs/${component.slug}`}
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
          <div className="flex p-10 gap-6 justify-between">
            <article
              className={cn(
                'flex-1 xl:max-w-xl 2xl:max-w-2xl mx-auto text-zinc-300',
                '*:[h1]:text-3xl *:[h1]:font-semibold *:[h1]:mb-4',
                '*:[h2]:text-2xl *:[h2]:font-semibold *:[h2,h3]:mb-3',
                '*:[h2+h3]:mt-8 *:[h2]:mt-14',
                '*:[h3]:text-xl *:[h3]:font-semibold *:[h3]:mt-12',
                '**:[h1,h2,h3]:text-foreground',
                '*:[p]:mb-2 *:[p]:leading-loose *:[p]:font-medium',
                '**:[p_code]:before:content-["`"] **:[p_code]:after:content-["`"]',
                '**:[p_code]:text-foreground **:[p_code]:font-medium',
                '[&>p:first-of-type]:text-lg',
                '[&>p:first-of-type]:text-muted',
                '**:[ul]:list-[square] **:[ul]:pl-4 **:[ul]:mb-2',
                '**:[ul]:leading-relaxed',
                '[p_a]:text-foreground **:[p_a]:font-medium **:[p_a]:border-b',
              )}
            >
              <MDXProvider components={mdxComponents}>
                <Outlet context={{ sources }} />
              </MDXProvider>
            </article>
            <aside className="w-64">
              <TableOfContents />
            </aside>
          </div>
        </main>
      </div>
    </div>
  );
}

function SidebarScrollArea({ children }: { children?: React.ReactNode }) {
  return (
    <ScrollArea.Root className="h-full pt-4">
      <ScrollArea.Viewport className={cn('h-full overscroll-contain pr-8')}>
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
  return (
    <nav className="h-14 border-b border-border00 w-full">
      <div className="container mx-auto px-2.5 h-full">
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
          <ul
            className={cn(
              'flex items-center gap-6',
              '**:[a]:text-muted **:[a]:font-medium',
              '**:[a]:hover:text-foreground **:[a]:transition-colors',
              '**:[a]:duration-75',
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
              <Button variant="secondary" size="sm" pill>
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
