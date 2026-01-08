'use client';

import { ScrollArea as BaseScrollArea } from '@base-ui/react/scroll-area';
import { cn } from '#utils';

export function ScrollArea({
  children,
  className,
  scrollbar = 'both',
  ...props
}: React.ComponentProps<typeof BaseScrollArea.Root> & {
  scrollbar?: 'horizontal' | 'vertical' | 'both' | false;
}) {
  return (
    <BaseScrollArea.Root
      data-slot="scroll-area"
      className={cn('overflow-hidden', className)}
      {...props}
    >
      <BaseScrollArea.Viewport
        data-slot="scroll-area-viewport"
        className="overscroll-contain outline-none size-full"
      >
        {children}
      </BaseScrollArea.Viewport>
      {scrollbar === 'horizontal' && (
        <ScrollAreaScrollbar orientation="horizontal" />
      )}
      {scrollbar === 'vertical' && (
        <ScrollAreaScrollbar orientation="vertical" />
      )}
      {scrollbar === 'both' && (
        <>
          <ScrollAreaScrollbar orientation="horizontal" />
          <ScrollAreaScrollbar orientation="vertical" />
        </>
      )}
      <BaseScrollArea.Corner />
    </BaseScrollArea.Root>
  );
}

function ScrollAreaScrollbar({
  className,
  orientation = 'vertical',
  ...props
}: React.ComponentProps<typeof BaseScrollArea.Scrollbar>) {
  return (
    <BaseScrollArea.Scrollbar
      {...props}
      data-slot="scroll-area-scrollbar"
      className={cn(
        'flex m-1 touch-none select-none',
        'opacity-0 transition-opacity delay-300 pointer-events-none',
        'data-[hovering]:opacity-100 data-[hovering]:delay-0',
        'data-[hovering]:duration-75 data-[hovering]:pointer-events-auto',
        'data-[scrolling]:opacity-100 data-[scrolling]:delay-0',
        'data-[scrolling]:duration-75 data-[scrolling]:pointer-events-auto',
        orientation === 'vertical'
          ? 'w-1.5 justify-center'
          : 'h-1.5 justify-start',
        className,
      )}
      orientation={orientation}
    >
      <BaseScrollArea.Thumb
        data-slot="scroll-area-thumb"
        className="rounded bg-scrollbar w-full"
      />
    </BaseScrollArea.Scrollbar>
  );
}
