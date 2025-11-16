import { cn } from 'lib/utils';
import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router';
import { useShallow } from 'zustand/react/shallow';
import { useLayoutStore } from '~/lib/layout-store';

export function TableOfContents() {
  const containerRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const [tocNav, setTocNav] = useState<string>('');
  const { isContentsOpen } = useLayoutStore(
    useShallow((state) => ({
      isContentsOpen: state.isContentsOpen,
    })),
  );

  useEffect(() => {
    const tocNav = document.querySelector<HTMLElement>('article > nav');
    if (tocNav) {
      setTocNav(tocNav.innerHTML);
    }
  }, [location.pathname]);

  return (
    <div
      className={cn(
        'lg:sticky lg:top-10 max-lg:overflow-y-auto',
        'transition-opacity',
        'max-lg:fixed bottom-16 left-4 right-4 z-20',
        'max-lg:bg-surface01/95 max-lg:rounded max-lg:p-4 max-lg:ring ring-border01 max-lg:backdrop-blur-sm',
        tocNav ? 'opacity-100' : 'opacity-0',
        isContentsOpen
          ? 'max-lg:opacity-100'
          : 'max-lg:opacity-0 max-lg:invisible',
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
          '-mb-2.5',
        )}
        dangerouslySetInnerHTML={{ __html: tocNav }}
      />
    </div>
  );
}
