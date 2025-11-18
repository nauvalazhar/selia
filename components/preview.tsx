import { cn } from 'lib/utils';
import { Button } from './selia/button';
import { CheckIcon, CopyIcon } from 'lucide-react';
import { Suspense, useRef, useState } from 'react';
import { Spinner } from './selia/spinner';
import ShikiHighlighter from 'react-shiki/core';
import { createHighlighterCore, createJavaScriptRegexEngine } from 'shiki';
import { useParams } from 'react-router';
import * as ALL_EXAMPLES from 'components/examples';
import { ScrollArea } from '@base-ui-components/react';

const highlighter = await createHighlighterCore({
  themes: [import('@shikijs/themes/ayu-dark')],
  langs: [
    import('@shikijs/langs/tsx'),
    import('@shikijs/langs/typescript'),
    import('@shikijs/langs/css'),
  ],
  engine: createJavaScriptRegexEngine(),
});

export function Preview({
  children,
  component,
  title,
  name,
  sources,
}: {
  component?: string;
  children: React.ReactNode;
  title?: string;
  name: string;
  sources: Record<string, string>;
}) {
  const { path } = useParams();
  const pathname = path?.replace(/-([a-z])/g, (_, letter) =>
    letter.toUpperCase(),
  );
  const exampleName = component ?? pathname;

  const exampleComponents =
    ALL_EXAMPLES[exampleName as keyof typeof ALL_EXAMPLES];
  const ExampleComponent =
    exampleComponents[name as keyof typeof exampleComponents].component;

  return (
    <div className="relative p-1 bg-surface-01 w-full ring ring-border-01 rounded-3xl mb-6 flex flex-col my-4">
      {title && (
        <div className="px-6 h-14 flex items-center border-b border-border-01 w-full">
          <span className="text-sm font-medium text-dim">{title}</span>
        </div>
      )}

      {ExampleComponent && (
        <PreviewDemo>
          <ExampleComponent />
        </PreviewDemo>
      )}

      {sources && sources[name] && <PreviewCode>{sources[name]}</PreviewCode>}
    </div>
  );
}

export function PreviewDemo({
  children,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn(
        'flex min-h-40 bg-surface-00 items-center justify-center flex-wrap',
        'p-4 md:p-12 gap-x-2.5 gap-y-4 flex-wrap rounded-3xl border border-border-01',
      )}
      {...props}
    >
      <div className="flex items-center justify-center flex-wrap gap-x-2.5 gap-y-4 w-full">
        <Suspense fallback={<Spinner className="size-6" />}>
          {children}
        </Suspense>
      </div>
    </div>
  );
}

export function PreviewCode({ children }: { children: string }) {
  const [isCopied, setIsCopied] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleCopy = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    const codeText = ref.current?.querySelector('code')?.textContent;

    setIsCopied(true);
    navigator.clipboard.writeText(codeText ?? '');
    setTimeout(() => setIsCopied(false), 1000);
  };

  return (
    <div
      ref={ref}
      className={cn(
        '**:[pre]:!bg-transparent **:[pre]:p-4 **:[pre]:outline-none **:[code]:leading-relaxed',
      )}
    >
      <div className="w-full border-b border-border-01 flex justify-between items-center py-2 px-2.5">
        <span className="text-sm font-medium text-dimmed select-none">
          Source
        </span>
        <Button
          size="xs"
          variant="secondary-subtle"
          pill
          className="text-muted text-sm"
          onClick={handleCopy}
        >
          {isCopied ? (
            <>
              <CheckIcon /> Copied
            </>
          ) : (
            <>
              <CopyIcon /> Copy
            </>
          )}
        </Button>
      </div>
      <ScrollArea.Root>
        <ScrollArea.Viewport className="h-full overscroll-contain overflow-auto max-h-72">
          <ShikiHighlighter
            language="tsx"
            theme="ayu-dark"
            className="**:[pre]:!p-0 **:[pre]:!overflow-visible"
            showLanguage={false}
            highlighter={highlighter}
          >
            {children}
          </ShikiHighlighter>
        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar
          className={cn(
            'flex w-1 justify-center',
            'opacity-0 transition-opacity delay-300 pointer-events-none',
            'data-[hovering]:opacity-100 data-[hovering]:delay-0',
            'data-[hovering]:duration-75 data-[hovering]:pointer-events-auto',
            'data-[scrolling]:opacity-100 data-[scrolling]:delay-0',
            'data-[scrolling]:duration-75 data-[scrolling]:pointer-events-auto',
          )}
        >
          <ScrollArea.Thumb className="w-full rounded bg-surface-04" />
        </ScrollArea.Scrollbar>
      </ScrollArea.Root>
    </div>
  );
}
