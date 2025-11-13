import { cn } from 'lib/utils';
import { useEffect, useRef } from 'react';

export function TableOfContents() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tocNav = document.querySelector<HTMLElement>('article > nav');
    let observer: IntersectionObserver | null = null;

    if (tocNav) {
      containerRef.current?.appendChild(tocNav);
      tocNav.classList.remove('hidden');
    }
  }, []);

  return (
    <div className="sticky top-10 max-h-[calc(100vh-8rem)] overflow-y-auto">
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
      />
    </div>
  );
}
