'use client';

import { ScrollArea as BaseScrollArea } from '@base-ui/react/scroll-area';
import { cn } from '#utils';

export function ScrollArea({
  children,
  className,
  scrollbar = 'both',
  fitContent = false,
  ...props
}: React.ComponentProps<typeof BaseScrollArea.Root> & {
  scrollbar?: 'horizontal' | 'vertical' | 'both' | false;
  fitContent?: boolean;
}) {
  return (
    <BaseScrollArea.Root
      data-slot="scroll-area"
      className={cn('overflow-hidden', className)}
      {...props}
    >
      <BaseScrollArea.Viewport
        data-slot="scroll-area-viewport"
        className={cn(
          'overscroll-contain outline-none w-full',
          fitContent ? 'max-h-[inherit]' : 'h-full',
        )}
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
        'flex touch-none select-none transition-opacity delay-300 pointer-events-none opacity-0',
        'data-[hovering]:opacity-100 data-[hovering]:delay-0 data-[hovering]:duration-75 data-[hovering]:pointer-events-auto',
        'data-[scrolling]:opacity-100 data-[scrolling]:delay-0 data-[scrolling]:duration-75 data-[scrolling]:pointer-events-auto',
        orientation === 'vertical'
          ? 'flex-col w-1.5'
          : 'flex-row h-1.5',
        className,
      )}
      orientation={orientation}
      style={{
        position: 'absolute',
        ...(orientation === 'vertical'
          ? {
              right: '0.25rem',
              top: '0.25rem',
              height: 'calc(100% - 1rem)',
            }
          : {
              bottom: '0.25rem',
              left: '0.25rem',
              width: 'calc(100% - 1rem)',
            }),
      }}
    >
      <BaseScrollArea.Thumb
        data-slot="scroll-area-thumb"
        className={cn(
          'rounded-full bg-scrollbar cursor-grab active:cursor-grabbing',
          orientation === 'vertical' ? 'w-full' : 'h-full',
        )}
      />
    </BaseScrollArea.Scrollbar>
  );
}
