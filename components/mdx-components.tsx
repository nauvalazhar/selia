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
      <div className="w-full bg-code rounded-3xl ring ring-border my-4 [&+p]:mt-8">
        <header className="flex px-4 h-12 items-center justify-between mb-1 border-b border-border">
          {filename && (
            <span className="font-medium text-sm text-dimmed">{filename}</span>
          )}
          <CopyButton />
        </header>
        <div
          className={cn(
            'relative w-full **:[code,pre]:outline-none flex flex-col',
            '**:[code]:w-full **:[code]:inline-block',
          )}
        >
          <ScrollArea.Root
            className={cn(
              clip && !isClipOpen
                ? 'h-72 overflow-hidden pointer-events-none'
                : '',
            )}
          >
            <ScrollArea.Viewport className="px-4 py-4 rounded-3xl h-full">
              <pre
                {...props}
                className={cn(
                  'shiki [&:has(.highlighted)_.line:not(.highlighted)]:opacity-70 hover:[&_.line]:!opacity-100',
                  '[&_.highlighted]:bg-linear-to-r [&_.highlighted]:from-primary/20 [&_.highlighted]:to-primary/5',
                  '[&_.highlighted]:border-l-2 [&_.highlighted]:border-primary',
                  '[&_.highlighted]:-m-4 [&_.highlighted]:pl-4 [&_.highlighted]:transition-opacity',
                  '[&_.highlighted]:w-[calc(100%+2rem)] [&_.highlighted]:inline-block',
                )}
              >
                {children}
              </pre>
            </ScrollArea.Viewport>
          </ScrollArea.Root>
          {clip && (
            <button
              className={cn(
                'flex items-center justify-center w-full absolute bottom-0 inset-x-0 py-4',
                'bg-linear-to-b from-background/50 to-background rounded-b-3xl cursor-pointer',
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
