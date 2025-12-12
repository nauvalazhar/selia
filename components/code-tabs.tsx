import { Tabs, TabsItem, TabsList, TabsPanel } from 'components/selia/tabs';
import ShikiHighlighter from 'react-shiki/core';
import { highlighter } from 'app/lib/highlighter';
import React, { Children, isValidElement, useState } from 'react';
import { ScrollArea } from '@base-ui-components/react';
import { cn } from 'lib/utils';
import { Button } from 'components/selia/button';
import { CheckIcon, CopyIcon } from 'lucide-react';
import { CodeBlock } from 'components/code-block';

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
        'bg-secondary/20 rounded-3xl ring ring-border items-start gap-0',
        'relative',
      )}
    >
      <div className="flex items-center justify-between w-full px-4 border-b border-border h-12">
        <TabsList className="bg-transparent px-0 rounded-full *:rounded-full inset-shadow-none">
          {items.map((item) => (
            <TabsItem key={item} value={item}>
              {item}
            </TabsItem>
          ))}
        </TabsList>
        <Button
          size="xs"
          variant="secondary"
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
    <TabsPanel value={value} keepMounted className="w-full outline-none">
      <CodeBlock language={language} className="px-4 py-3">
        {getTextFromChildren(children)}
      </CodeBlock>
    </TabsPanel>
  );
}
