import { cn } from 'lib/utils';
import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router';

export function TableOfContents() {
  const containerRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const [tocNav, setTocNav] = useState<string>('');

  useEffect(() => {
    const tocNav = document.querySelector<HTMLElement>('article > nav');
    if (tocNav) {
      setTocNav(tocNav.innerHTML);
    }
  }, [location.pathname]);

  return (
    <div
      className={cn(
        'sticky top-10 max-h-[calc(100vh-8rem)] overflow-y-auto',
        'transition-opacity',
        tocNav ? 'opacity-100' : 'opacity-0',
      )}
    >
      <h3 className="text-sm font-semibold text-foreground mb-4">
        On this page
      </h3>
      <div
        ref={containerRef}
        className={cn(
          '**:[a]:mb-2.5 **:[a]:inline-block **:[a]:transition-colors',
          '**:[a]:duration-75 **:[a]:text-muted **:[a]:hover:text-foreground',
          '[&_.toc-level-3]:pl-2.5',
          '[&_.active]:text-foreground [&_.active]:font-semibold',
        )}
        dangerouslySetInnerHTML={{ __html: tocNav }}
      />
    </div>
  );
}
