import { Tabs, TabsItem, TabsList, TabsPanel } from 'components/selia/tabs';
import ShikiHighlighter from 'react-shiki/core';
import { highlighter } from 'app/lib/highlighter';
import React, { Children, isValidElement, useState } from 'react';
import { ScrollArea } from '@base-ui-components/react';
import { cn } from 'lib/utils';
import { Button } from 'components/selia/button';
import { CheckIcon, CopyIcon } from 'lucide-react';

export function CodeTabs({
  children,
  items,
  title,
}: {
  children: React.ReactNode;
  items: string[];
  title?: string;
}) {
  const [isCopied, setIsCopied] = useState(false);

  function handleCopy(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();

    const target = e.currentTarget.parentElement?.parentElement?.querySelector(
      '[data-slot="tabs-panel"]:not([hidden])',
    );

    const code = target?.querySelector('code')?.textContent;

    if (code) {
      navigator.clipboard.writeText(code);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 1000);
    }
  }

  return (
    <Tabs
      defaultValue={items[0]}
      className={cn(
        'p-1 bg-surface-01 rounded-3xl ring ring-boder-01 items-start gap-0',
        'relative',
      )}
    >
      <div className="flex items-center justify-between w-full px-2.5">
        <TabsList variant="line" className="bg-transparent px-0">
          {items.map((item) => (
            <TabsItem key={item} value={item}>
              {item}
            </TabsItem>
          ))}
        </TabsList>
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
      {children}
    </Tabs>
  );
}

function getTextFromChildren(children: React.ReactNode) {
  if (isValidElement<{ children?: React.ReactNode }>(children)) {
    return getTextFromChildren(children.props.children);
  }

  return children as string;
}

export function CodeTabsPanel({
  value,
  children,
  language,
}: {
  value: string;
  children: React.ReactNode;
  language?: string;
}) {
  return (
    <TabsPanel value={value} keepMounted className="w-full mt-1 outline-none">
      <ScrollArea.Root>
        <ScrollArea.Viewport className="bg-surface-02/80 ring ring-boder-02 rounded-3xl px-4 py-4.5 outline-none">
          <ShikiHighlighter
            language={language}
            theme="ayu-dark"
            showLanguage={false}
            highlighter={highlighter}
            className={cn(
              'outline-none *:outline-none *:!bg-transparent *:!overflow-visible',
              '*:!p-0',
            )}
          >
            {getTextFromChildren(children)}
          </ShikiHighlighter>
        </ScrollArea.Viewport>
      </ScrollArea.Root>
    </TabsPanel>
  );
}
