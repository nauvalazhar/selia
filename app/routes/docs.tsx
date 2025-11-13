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

function humanName(name: string) {
  return (
    name.charAt(0).toUpperCase() +
    name.slice(1).replace('.tsx', '').replace(/-/g, ' ')
  );
}

export async function loader({ request }: Route.LoaderArgs) {
  const url = new URL(request.url);
  const pathname = url.pathname.replace('/docs/', '');

  const components = await readdir(
    path.join(import.meta.dirname, '../../components/selia'),
  );

  const source = await Bun.file(
    path.join(
      import.meta.dirname,
      '../../components/examples/alert-example.tsx',
    ),
  ).text();

  const componentsMap = components.map((component) => {
    return {
      name: humanName(component),
      slug: component.replace('.tsx', ''),
    };
  });

  return { componentsMap };
}

export default function LayoutDocs({
  loaderData: { componentsMap },
}: Route.ComponentProps) {
  const location = useLocation();

  return (
    <div className="flex container mx-auto">
      <Sidebar className="sticky top-0 max-h-dvh py-4 w-72">
        <SidebarContent>
          <SidebarMenu>
            <SidebarGroup>
              <SidebarGroupTitle>Prologue</SidebarGroupTitle>
              <SidebarList line size="compact">
                <SidebarItem
                  className="capitalize"
                  active={location.pathname === '/docs'}
                  render={<Link to="/docs" />}
                >
                  Introduction
                </SidebarItem>
                <SidebarItem
                  className="capitalize"
                  active={location.pathname === '/docs/installation'}
                  render={<Link to="/docs/installation" />}
                >
                  Installation
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
              'flex-1 max-w-2xl mx-auto text-zinc-300',
              '*:[h1]:text-3xl *:[h1]:font-semibold *:[h1]:mb-6',
              '*:[h2]:text-2xl *:[h2]:font-semibold *:[h2]:mb-3 *:[h2]:mt-14',
              '*:[p]:mb-6',
            )}
          >
            <MDXProvider components={mdxComponents}>
              <Outlet />
            </MDXProvider>
          </article>
          <aside className="w-64">Table of contents</aside>
        </div>
      </main>
    </div>
  );
}
