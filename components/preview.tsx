import { cn } from 'lib/utils';
import { ScrollArea } from '@base-ui-components/react/scroll-area';
import { useOutletContext } from 'react-router';

interface SourceContext<T extends string = string> {
  sources: Record<T, string>;
}

export function Preview<K extends string>({
  children,
  title,
  name,
}: {
  children: React.ReactNode;
  title?: string;
  name: K;
}) {
  const { sources } = useOutletContext<SourceContext<K>>();

  return (
    <div className="relative p-1 bg-surface01 w-full ring ring-border01 rounded-3xl mb-6 flex flex-col my-4">
      {title && (
        <div className="px-6 h-14 flex items-center border-b border-border01 w-full">
          <span className="text-sm font-medium text-dim">{title}</span>
        </div>
      )}
      {children}
      {sources[name] && (
        <PreviewCode>
          <div dangerouslySetInnerHTML={{ __html: sources[name] }} />
        </PreviewCode>
      )}
    </div>
  );
}

export function PreviewDemo({ ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn(
        'flex min-h-40 bg-surface00 items-center justify-center',
        'p-6 md:p-12 gap-x-2.5 gap-y-4 flex-wrap rounded-3xl border border-border01',
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
    <ScrollArea.Root {...props} className="h-72">
      <ScrollArea.Viewport
        className={cn(
          '**:[pre]:!bg-transparent **:[pre]:p-4 **:[pre]:outline-none **:[code]:leading-relaxed',
          'h-full overscroll-contain **:[pre]:-mx-1 **:[pre]:-mb-1',
        )}
      >
        {children}
      </ScrollArea.Viewport>
      <ScrollArea.Scrollbar
        className={cn(
          'm-1 flex w-1 justify-center',
          'opacity-0 transition-opacity delay-300 pointer-events-none',
          'data-[hovering]:opacity-100 data-[hovering]:delay-0',
          'data-[hovering]:duration-75 data-[hovering]:pointer-events-auto',
          'data-[scrolling]:opacity-100 data-[scrolling]:delay-0',
          'data-[scrolling]:duration-75 data-[scrolling]:pointer-events-auto',
        )}
      >
        <ScrollArea.Thumb className="w-full rounded bg-surface04" />
      </ScrollArea.Scrollbar>
    </ScrollArea.Root>
  );
}
