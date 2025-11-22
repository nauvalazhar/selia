import { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router';
import { useLayoutStore } from '~/lib/layout-store';
import { Button } from './selia/button';
import { SearchIcon, XIcon, MenuIcon, ExternalLinkIcon } from 'lucide-react';
import { Kbd } from './selia/kbd';
import { ThemeToggle } from './theme-toggle';
import { Logo } from './logo';
import { cn } from 'lib/utils';

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const toggleCmdk = useLayoutStore((state) => state.toggleCmdk);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={cn(
        'h-16 border-b border-border w-full relative z-20 transition-colors',
        menuOpen ? 'max-md:bg-popover dark:max-md:bg-surface-01' : '',
      )}
    >
      <div className="container mx-auto px-4 md:px-2.5 h-full">
        <div className="flex items-center w-full h-full justify-between">
          <Logo />
          <div className="flex items-center gap-2.5">
            <Button
              variant="secondary-subtle"
              size="sm-icon"
              className="lg:hidden"
              onClick={() => toggleCmdk()}
            >
              <SearchIcon />
            </Button>
            <Button
              variant="secondary-subtle"
              size="sm"
              className="lg:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <XIcon /> : <MenuIcon />}
              Menu
            </Button>
          </div>
          <ul
            className={cn(
              'flex',
              'max-lg:flex-col max-md:border-border :max-md:border-b dark:max-md:border-border-01',
              'max-lg:absolute w-full lg:w-auto',
              'left-0 lg:left-auto lg:items-center',
              'bg-background dark:bg-surface-01 lg:bg-transparent dark:lg:bg-transparent',
              '**:[a]:text-muted',
              '**:[a]:hover:text-foreground **:[a]:transition-colors',
              '**:[a]:duration-75 **:[a]:flex **:[a]:items-center **:[a]:gap-2.5',
              '**:[svg]:size-4',
              '*:mx-3',
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
      </div>
    </nav>
  );
}
