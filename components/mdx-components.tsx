import { ScrollArea } from '@base-ui-components/react';
import { CodeTabs, CodeTabsPanel } from 'components/code-tabs';
import { CopyButton } from 'components/copy-button';
import { cn } from 'lib/utils';
import { useState } from 'react';

export default {
  h1: ({ children, ...props }: React.ComponentProps<'h1'>) => {
    return <h1 {...props}>{children}</h1>;
  },
  h2: ({ children, ...props }: React.ComponentProps<'h2'>) => {
    return <h2 {...props}>{children}</h2>;
  },
  h3: ({ children, ...props }: React.ComponentProps<'h3'>) => {
    return <h3 {...props}>{children}</h3>;
  },
  pre: ({
    children,
    style: _style,
    clip,
    ...props
  }: React.ComponentProps<'pre'> & {
    filename?: string;
    clip?: boolean;
  }) => {
    const filename = props.filename;
    const [isClipOpen, setIsClipOpen] = useState(false);

    return (
      <div className="w-full bg-surface-01 rounded-3xl p-1 ring ring-border-01 my-4 [&+p]:mt-8">
        <header className="flex px-2.5 h-10 items-center justify-between mb-1">
          {filename && (
            <span className="text-sm font-semibold text-dimmed">
              {filename}
            </span>
          )}
          <CopyButton />
        </header>
        <div className="relative w-full bg-surface-02/80 ring ring-border-02 rounded-3xl **:[code,pre]:outline-none flex flex-col">
          <ScrollArea.Root
            className={cn(
              clip && !isClipOpen
                ? 'h-72 overflow-hidden pointer-events-none'
                : '',
            )}
          >
            <ScrollArea.Viewport className="px-4 py-4.5 rounded-3xl h-full">
              <pre {...props}>{children}</pre>
            </ScrollArea.Viewport>
          </ScrollArea.Root>
          {clip && (
            <button
              className={cn(
                'flex items-center justify-center w-full absolute bottom-0 inset-x-0 py-4',
                'bg-linear-to-b from-surface-02/50 to-surface-02 rounded-b-3xl cursor-pointer',
                'font-semibold text-sm text-muted hover:text-foreground transition-colors',
                'outline-none',
              )}
              onClick={() => setIsClipOpen(!isClipOpen)}
            >
              {isClipOpen ? 'Hide Code' : 'Show Code'}
            </button>
          )}
        </div>
      </div>
    );
  },
  code: ({ children, ...props }: React.ComponentProps<'code'>) => {
    return <code {...props}>{children}</code>;
  },
  CodeTabs,
  CodeTabsPanel,
};
