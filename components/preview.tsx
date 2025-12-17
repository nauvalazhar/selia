import { cn } from 'lib/utils';
import { Button } from './selia/button';
import { CheckIcon, CopyIcon } from 'lucide-react';
import { Suspense, useRef, useState } from 'react';
import { Spinner } from './selia/spinner';
import { useParams } from 'react-router';
import * as ALL_EXAMPLES from 'components/examples';
import { Tabs, TabsItem, TabsList, TabsPanel } from 'components/selia/tabs';
import { CodeBlock } from 'components/code-block';

export function Preview({
  children,
  component,
  name,
  sources,
  start,
}: {
  component?: string;
  children: React.ReactNode;
  name: string;
  sources: Record<string, string>;
  start?: boolean;
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
    <Tabs className="my-6 flex flex-col items-start" defaultValue="preview">
      <TabsList className="inline-flex rounded-3xl *:rounded-3xl">
        <TabsItem value="preview">Preview</TabsItem>
        <TabsItem value="code">Code</TabsItem>
      </TabsList>
      <TabsPanel value="preview" className="w-full">
        {ExampleComponent && (
          <PreviewDemo start={start}>
            <ExampleComponent />
          </PreviewDemo>
        )}
      </TabsPanel>

      <TabsPanel value="code" className="w-full">
        {sources && sources[name] && <PreviewCode>{sources[name]}</PreviewCode>}
      </TabsPanel>
    </Tabs>
  );
}

export function PreviewDemo({
  children,
  start,
  ...props
}: React.ComponentProps<'div'> & { start?: boolean }) {
  return (
    <div
      className={cn(
        'flex min-h-[500px] bg-background items-center justify-center flex-wrap',
        'p-4 md:p-12 gap-x-2.5 gap-y-4 flex-wrap rounded-3xl border border-border',
        'overflow-auto relative',
      )}
      {...props}
    >
      <div
        className={cn(
          'flex items-center flex-wrap gap-x-2.5 gap-y-4 w-full',
          start ? 'justify-start' : 'justify-center',
        )}
      >
        <Suspense
          fallback={
            <Spinner className="size-6 absolute left-1/2 top-1/2 -translate-1/2" />
          }
        >
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
        'bg-code rounded-3xl p-1 mt-2 md:mt-0 ring ring-border',
      )}
    >
      <div className="w-full flex justify-between items-center py-2 px-4 border-b border-border">
        <span className="text-sm font-medium text-foreground select-none">
          Source
        </span>
        <Button
          size="xs"
          variant="secondary"
          pill
          onClick={handleCopy}
          className="text-sm"
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
      <CodeBlock language="tsx" className="h-[500px]">
        {children}
      </CodeBlock>
    </div>
  );
}
