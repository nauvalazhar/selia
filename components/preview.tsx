import { cn } from 'lib/utils';
import { ScrollArea } from '@base-ui-components/react/scroll-area';

export function Preview({
  children,
  title,
  source,
}: {
  children: React.ReactNode;
  title?: string;
  source?: React.ReactNode;
}) {
  return (
    <div className="relative p-1 bg-surface01 w-full ring ring-border01 rounded-3xl mb-6 flex flex-col">
      {title && (
        <div className="px-6 h-14 flex items-center border-b border-border01 w-full">
          <span className="text-sm font-medium text-dim">{title}</span>
        </div>
      )}
      {children}
    </div>
  );
}

export function PreviewDemo({ ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn(
        'flex min-h-40 bg-surface00 items-center justify-center',
        'p-12 gap-2.5 flex-wrap rounded-3xl border border-border01 shadow',
      )}
      {...props}
    />
  );
}

export function PreviewCode({
  children,
  ...props
}: React.ComponentProps<typeof ScrollArea.Root>) {
  return (
    <ScrollArea.Root {...props}>
      <ScrollArea.Viewport
        className={cn(
          '*:[pre]:!bg-transparent *:[pre]:p-0 **:[code,pre]:border-none',
        )}
      >
        {children}
      </ScrollArea.Viewport>
      <ScrollArea.Scrollbar
        className={cn(
          'm-2 flex w-1 justify-center rounded bg-white',
          'opacity-0 transition-opacity delay-300 pointer-events-none',
          'data-[hovering]:opacity-100 data-[hovering]:delay-0',
          'data-[hovering]:duration-75 data-[hovering]:pointer-events-auto',
          'data-[scrolling]:opacity-100 data-[scrolling]:delay-0',
          'data-[scrolling]:duration-75 data-[scrolling]:pointer-events-auto',
        )}
      >
        <ScrollArea.Thumb className="w-full rounded bg-red-500" />
      </ScrollArea.Scrollbar>
    </ScrollArea.Root>
  );
}
