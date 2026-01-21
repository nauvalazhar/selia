import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupTitle,
  SidebarItem,
  SidebarItemButton,
  SidebarList,
  SidebarMenu,
} from 'components/selia/sidebar';
import type { Route } from './+types/docs';
import { cn } from 'lib/utils';
import { Link, Outlet, redirect, useLocation } from 'react-router';
import { TableOfContents } from 'components/table-of-contents';
import { ScrollArea } from '@base-ui/react';
import { useEffect } from 'react';
import { useLayoutStore } from '~/lib/layout-store';
import { useShallow } from 'zustand/react/shallow';
import { getSidebarMenu } from '~/lib/sidebar';

export async function loader({ request }: Route.LoaderArgs) {
  const url = new URL(request.url);
  const pathname = url.pathname.replace('/docs/', '').replace(/\/$/, '');

  if (pathname === '/docs' || pathname === '') {
    return redirect('/docs/introduction');
  }

  const sidebarMenu = await getSidebarMenu();

  return { sidebarMenu };
}

export default function LayoutDocs({
  loaderData: { sidebarMenu },
}: Route.ComponentProps) {
  const location = useLocation();
  const {
    isSidebarOpen,
    closeSidebar,
  } = useLayoutStore(
    useShallow((state) => ({
      isSidebarOpen: state.isSidebarOpen,
      closeSidebar: state.closeSidebar,
    })),
  );

  useEffect(() => {
    closeSidebar();
  }, [location.pathname]);

  const pathname = location.pathname.replace(/\/$/, '');

  function isActive(path: string) {
    if (pathname.split('/').length > 3) {
      return pathname.startsWith(path);
    }

    return pathname === path;
  }

  return (
    <div className="flex container mx-auto">
      <Sidebar
        className={cn(
          'lg:sticky top-[calc(var(--spacing)*30+1px)] lg:top-16 lg:h-[calc(100vh-4rem)] max-h-dvh lg:w-64 px-1.5 lg:px-0 shrink-0 xl:border-r border-separator/50',
          'fixed z-30 w-full max-lg:h-dvh bg-background lg:bg-transparent dark:lg:bg-transparent transition-all',
          '**:data-[slot=sidebar-submenu]:ml-3.5',
          '**:data-[slot=sidebar-submenu]:pl-1',
          'max-lg:**:data-[slot=sidebar-item-button]:text-lg',
          isSidebarOpen ? 'left-0' : '-left-full',
        )}
        size="compact"
      >
        <SidebarContent render={<SidebarScrollArea />}>
          <SidebarMenu className="py-9">
            {sidebarMenu.map((group) => (
              <SidebarGroup key={group.title}>
                <SidebarGroupTitle className="max-lg:text-base">{group.title}</SidebarGroupTitle>
                <SidebarList>
                  {group.items.map((item) => (
                    <SidebarItem key={item.path}>
                      <SidebarItemButton
                        active={isActive(item.path)}
                        render={<Link to={item.path} />}
                      >
                        {item.name}
                      </SidebarItemButton>
                    </SidebarItem>
                  ))}
                </SidebarList>
              </SidebarGroup>
            ))}
          </SidebarMenu>
        </SidebarContent>
      </Sidebar>
      <main className="w-full min-w-0 flex py-6 md:py-10 gap-6 justify-between max-lg:flex-wrap">
        <div className="w-full min-w-0 xl:w-3xl mx-auto">
          <Outlet />
        </div>
        <aside className="w-64">
          <TableOfContents />
        </aside>
      </main>
    </div>
  );
}

function SidebarScrollArea({ children }: { children?: React.ReactNode }) {
  return (
    <ScrollArea.Root className="h-full -ml-1">
      <ScrollArea.Viewport
        className={cn('h-full lg:pr-8 pb-10 max-lg:pb-20 outline-none')}
      >
        <ScrollArea.Content className="pl-1">{children}</ScrollArea.Content>
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
        <ScrollArea.Thumb className="w-full rounded bg-secondary dark:bg-surface-04" />
      </ScrollArea.Scrollbar>
    </ScrollArea.Root>
  );
}
