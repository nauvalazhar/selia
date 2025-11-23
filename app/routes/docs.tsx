import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupTitle,
  SidebarHeader,
  SidebarItem,
  SidebarList,
  SidebarMenu,
} from 'components/selia/sidebar';
import type { Route } from './+types/docs';
import { cn } from 'lib/utils';
import { Link, Outlet, redirect, useLocation, useNavigate } from 'react-router';
import { TableOfContents } from 'components/table-of-contents';
import { ScrollArea } from '@base-ui-components/react';
import { Button } from 'components/selia/button';
import { ListTreeIcon, SidebarIcon, XIcon } from 'lucide-react';
import { useEffect } from 'react';
import { useLayoutStore } from '~/lib/layout-store';
import { useShallow } from 'zustand/react/shallow';
import { getSidebarMenu } from '~/lib/sidebar';
import { Logo } from 'components/logo';

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
      <div
        className={cn(
          'lg:hidden fixed bottom-4 right-4 z-40 *:backdrop-blur-sm',
          'flex rounded-full bg-secondary',
          '*:h-10 *:first:rounded-r-none *:last:rounded-l-none',
          '*:first:after:rounded-r-none *:last:after:rounded-l-none',
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
            'lg:sticky top-0 max-h-dvh lg:w-72 px-1.5 lg:px-0',
            'fixed z-30 w-full max-lg:h-dvh bg-background dark:bg-surface-01 lg:bg-transparent dark:lg:bg-transparent transition-all',
            isSidebarOpen ? 'right-0' : '-right-full',
          )}
          size="compact"
        >
          <SidebarHeader className="lg:hidden">
            <Logo />
          </SidebarHeader>
          <SidebarContent render={<SidebarScrollArea />}>
            <SidebarMenu>
              {sidebarMenu.map((group) => (
                <SidebarGroup key={group.title}>
                  <SidebarGroupTitle>{group.title}</SidebarGroupTitle>
                  <SidebarList line>
                    {group.items.map((item) => (
                      <SidebarItem
                        key={item.path}
                        active={pathname === item.path}
                        render={<Link to={item.path} />}
                      >
                        {item.name}
                      </SidebarItem>
                    ))}
                  </SidebarList>
                </SidebarGroup>
              ))}
            </SidebarMenu>
          </SidebarContent>
        </Sidebar>
        <main className="w-full">
          <div className="flex px-4 py-10 md:p-10 gap-6 justify-between w-full flex-wrap">
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
    <ScrollArea.Root className="h-full lg:pt-4">
      <ScrollArea.Viewport className={cn('h-full lg:pr-8 pb-10 max-lg:pb-20')}>
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
        <ScrollArea.Thumb className="w-full rounded bg-secondary dark:bg-surface-04" />
      </ScrollArea.Scrollbar>
    </ScrollArea.Root>
  );
}
