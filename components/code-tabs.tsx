import { Tabs, TabsItem, TabsList, TabsPanel } from 'components/selia/tabs';
import React, { isValidElement, useState } from 'react';
import { cn } from 'lib/utils';
import { Button } from 'components/selia/button';
import { CheckIcon, ClipboardIcon } from 'lucide-react';
import { CodeBlock } from 'components/code-block';
import { useTabsStore } from '~/lib/tabs-store';

export function CodeTabs({
  id,
  children,
  items,
  title,
}: {
  children: React.ReactNode;
  items: string[];
  id?: string;
  title?: string;
}) {
  const [isCopied, setIsCopied] = useState(false);
  const tabKey: string = id || 'cli';
  const activeTab = useTabsStore((state) => state.activeTab[tabKey]);
  const setActiveTab = useTabsStore((state) => state.setActiveTab);

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
      value={activeTab || items[0]}
      onValueChange={(value) => setActiveTab(tabKey, value)}
      className={cn(
        'bg-code rounded-3xl ring ring-border items-start gap-0',
        'relative mb-6',
      )}
    >
      <div className="flex items-center justify-between w-full px-4 border-b border-border h-12">
        <TabsList
          className={cn(
            'bg-transparent px-0 rounded-full *:rounded-full inset-shadow-none',
            '*:data-[slot=tabs-indicator]:bg-accent',
          )}
        >
          {items.map((item) => (
            <TabsItem key={item} value={item}>
              {item}
            </TabsItem>
          ))}
        </TabsList>
        <Button
          size="xs-icon"
          variant="secondary"
          pill
          className="text-muted text-sm"
          onClick={handleCopy}
        >
          {isCopied ? <CheckIcon /> : <ClipboardIcon />}
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
      <CodeBlock language={language} className="px-4 py-4">
        {getTextFromChildren(children)}
      </CodeBlock>
    </TabsPanel>
  );
}
