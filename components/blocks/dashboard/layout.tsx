import { useState, useEffect } from 'react';
import { cn } from 'lib/utils';
import { Button } from 'components/selia/button';
import { Heading } from 'components/selia/heading';
import { SidebarCloseIcon, SidebarOpenIcon } from 'lucide-react';

export function Layout({
  children,
  sidebar,
}: {
  children: React.ReactNode;
  sidebar: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  useEffect(() => {
    const windowResize = () => {
      if (window.innerWidth < 1024) {
        setSidebarOpen(false);
      } else {
        setSidebarOpen(true);
      }
    };

    windowResize();
    window.addEventListener('resize', windowResize);
    return () => window.removeEventListener('resize', windowResize);
  }, []);

  function handleSidebarOpen() {
    setSidebarOpen(!sidebarOpen);
  }

  return (
    <>
      <div
        className={cn(
          'fixed inset-0 bg-black backdrop-blur-sm z-10 transition-all',
          'max-lg:block hidden',
          sidebarOpen ? 'opacity-40 visible' : 'opacity-0 invisible',
        )}
        onClick={handleSidebarOpen}
      />
      <div
        className={cn(
          'fixed top-0 z-50 w-full max-w-72 md:w-72 h-dvh *:h-full transition-all',
          sidebarOpen ? 'left-0' : '-left-full',
        )}
      >
        {sidebar}
      </div>
      <main
        className={cn('transition-all', sidebarOpen ? 'xl:ml-72' : 'xl:ml-0')}
      >
        <nav
          className={cn(
            'h-16 flex items-center gap-2.5 max-lg:px-4',
            sidebarOpen ? 'xl:pr-4' : 'xl:px-4',
          )}
        >
          <Button
            variant="secondary-plain"
            size="sm-icon"
            onClick={handleSidebarOpen}
          >
            {sidebarOpen ? <SidebarCloseIcon /> : <SidebarOpenIcon />}
          </Button>
          <Heading size="sm">Dashboard</Heading>
        </nav>
        <div
          className={cn(
            'min-h-[calc(100vh-4rem)] flex flex-col gap-6 max-lg:px-4 pb-6',
            sidebarOpen ? 'xl:pr-4' : 'xl:px-4',
          )}
        >
          {children}
        </div>
      </main>
    </>
  );
}
