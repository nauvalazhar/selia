import { cn } from "#utils";
import { Button } from "components/selia/button";
import { Heading } from "components/selia/heading";
import { HatGlassesIcon, SidebarCloseIcon, SidebarOpenIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { SidebarChat } from "./sidebar";

export function Layout({ children }: { children: React.ReactNode }) {
  // in real case you should use the layout store to manage the sidebar open state
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
    <div className="flex h-dvh">
      <div className={cn("lg:w-72 lg:sticky top-0 lg:h-dvh transition-all duration-200", "fixed size-full z-50 max-lg:bg-background", sidebarOpen ? 'ml-0 left-0' : '-left-full lg:-ml-72')}>
        <SidebarChat sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      </div>
      <main className="flex-1 flex flex-col">
        <nav className="p-4 border-b border-card-separator flex items-center gap-2.5">
          <Button variant="plain" size="sm-icon" className="text-muted" onClick={handleSidebarOpen}>
            {sidebarOpen ? <SidebarCloseIcon /> : <SidebarOpenIcon />}
          </Button>
          <Heading size="sm" level={2}>New Chat</Heading>
          <Button variant="secondary" size="sm-icon" className="ml-auto">
            <HatGlassesIcon />
          </Button>
        </nav>
        {children}
      </main>
    </div>
  );
}