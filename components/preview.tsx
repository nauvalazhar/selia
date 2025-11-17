import { cn } from 'lib/utils';
import { Button } from './selia/button';
import { CheckIcon, CopyIcon } from 'lucide-react';
import { Suspense, useRef, useState } from 'react';
import { Spinner } from './selia/spinner';
import ShikiHighlighter from 'react-shiki/core';
import { createHighlighterCore, createJavaScriptRegexEngine } from 'shiki';

const highlighter = await createHighlighterCore({
  themes: [import('@shikijs/themes/tokyo-night')],
  langs: [
    import('@shikijs/langs/tsx'),
    import('@shikijs/langs/typescript'),
    import('@shikijs/langs/css'),
  ],
  engine: createJavaScriptRegexEngine(),
});

export function Preview({
  children,
  title,
  name,
  sources,
}: {
  children: React.ReactNode;
  title?: string;
  name: string;
  sources: Record<string, string>;
}) {
  return (
    <div className="relative p-1 bg-surface01 w-full ring ring-border01 rounded-3xl mb-6 flex flex-col my-4">
      {title && (
        <div className="px-6 h-14 flex items-center border-b border-border01 w-full">
          <span className="text-sm font-medium text-dim">{title}</span>
        </div>
      )}
      {children}
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
        'flex min-h-40 bg-surface00 items-center justify-center flex-wrap',
        'p-4 md:p-12 gap-x-2.5 gap-y-4 flex-wrap rounded-3xl border border-border01',
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
      <div className="w-full border-b border-border01 flex justify-between items-center py-2 px-2.5">
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
      <div className="h-full overscroll-contain overflow-auto max-h-72">
        <ShikiHighlighter
          language="tsx"
          theme="tokyo-night"
          className="**:[pre]:!p-0"
          showLanguage={false}
          highlighter={highlighter}
        >
          {children}
        </ShikiHighlighter>
      </div>
    </div>
  );
}
