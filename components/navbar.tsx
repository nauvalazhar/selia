import { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router';
import { useLayoutStore } from '~/lib/layout-store';
import { Button } from './selia/button';
import { SearchIcon, XIcon, ExternalLinkIcon, MoreVerticalIcon, MenuIcon } from 'lucide-react';
import { Kbd } from './selia/kbd';
import { ThemeToggle } from './theme-toggle';
import { Logo } from './logo';
import { cn } from 'lib/utils';

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const toggleCmdk = useLayoutStore((state) => state.toggleCmdk);
  const toggleSidebar = useLayoutStore((state) => state.toggleSidebar);
  const closeSidebar = useLayoutStore((state) => state.closeSidebar);
  const isSidebarOpen = useLayoutStore((state) => state.isSidebarOpen);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const shouldShowSidebar = location.pathname.startsWith('/docs');

  return (
    <nav
      className={cn(
        'w-full z-20 transition-colors sticky top-0 border-b border-separator/50',
        menuOpen || isSidebarOpen ? 'bg-background' : 'backdrop-blur-sm bg-background/75',
      )}
    >
      <div className="container mx-auto h-full">
        <div className="flex items-center w-full h-16 justify-between md:px-2.5">
          <Logo />
          <div className="flex items-center gap-2.5">
            <Button
              variant="plain"
              size="sm-icon"
              className="lg:hidden"
              onClick={() => toggleCmdk()}
            >
              <SearchIcon />
            </Button>
            <button
              className="lg:hidden h-9.5 inline-flex items-center gap-2.5 *:[svg]:size-4.5 *:[svg]:shrink-0"
              onClick={() => { setMenuOpen(!menuOpen); closeSidebar(); }}
            >
              {menuOpen ? <XIcon /> : <MoreVerticalIcon />}
            </button>
          </div>
          <ul
            className={cn(
              'flex',
              'max-lg:flex-col max-md:border-border max-md:border-b dark:max-md:border-border-01',
              'max-lg:absolute w-full lg:w-auto z-20',
              'left-0 lg:left-auto lg:items-center',
              'bg-background lg:bg-transparent dark:lg:bg-transparent',
              '**:[a]:text-muted',
              '**:[a]:hover:text-foreground **:[a]:transition-colors',
              '**:[a]:duration-75 **:[a]:flex **:[a]:items-center **:[a]:gap-2.5',
              '**:[svg]:size-4',
              '*:mx-1 min-lg:*:mx-3',
              'max-lg:**:[a]:px-4 max-lg:**:[a]:py-2.5',
              'max-lg:**:[a]:flex',
              'max-lg:transition-all',
              menuOpen
                ? 'max-lg:opacity-100 max-lg:top-16'
                : 'max-lg:opacity-0 max-lg:invisible max-lg:top-10',
            )}
          >
            <li>
              <Link to="/docs/introduction">Documentation</Link>
            </li>
            <li>
              <Link to="/docs/alert">Components</Link>
            </li>
            <li>
              <Link to="/blocks">Blocks</Link>
            </li>
            <li>
              <a
                href="https://github.com/nauvalazhar/selia"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
                <ExternalLinkIcon />
              </a>
            </li>
            <li className="!mr-1.5">
              <Button
                variant="secondary"
                size="sm"
                pill
                className="max-lg:hidden"
                onClick={() => toggleCmdk()}
              >
                <SearchIcon />
                Search
                <Kbd className="ml-6">⌘ K</Kbd>
              </Button>
            </li>
            <li className="!ml-0 max-lg:hidden">
              <ThemeToggle />
            </li>
          </ul>
        </div>
        {shouldShowSidebar && (
          <div className="lg:hidden -mx-4">
            <Button
              variant="plain"
              size="lg"
              onClick={toggleSidebar}
              block
              className="rounded-none justify-start px-4 border-t border-separator *:[svg]:mr-2 h-14"
            >
              {isSidebarOpen ? <XIcon /> : <MenuIcon />}
              Navigation
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
