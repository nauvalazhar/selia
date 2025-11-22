import { Suspense, useEffect, useRef, useState } from 'react';
import { Spinner } from './selia/spinner';
import { Text } from './selia/text';
import { Tabs, TabsItem, TabsList, TabsPanel } from './selia/tabs';
import { highlighter } from '~/lib/highlighter';
import ShikiHighlighter from 'react-shiki/core';
import { cn } from 'lib/utils';
import { ScrollArea } from '@base-ui-components/react/scroll-area';
import { IconBox } from './selia/icon-box';
import {
  CheckIcon,
  Code2Icon,
  CodeIcon,
  CopyIcon,
  MoonIcon,
  SunIcon,
} from 'lucide-react';
import { Separator } from './selia/separator';
import { Button } from './selia/button';
import { useThemeStore } from '~/lib/theme-store';

export function BlockPreview({
  name,
  code,
  title,
  description,
}: {
  name: string;
  title: string;
  code: string;
  description: string;
}) {
  const theme = useThemeStore((state) => state.theme);
  const [isCopied, setIsCopied] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    setIsDark(
      theme === 'dark' ||
        ((!theme || theme === 'system') &&
          window.matchMedia('(prefers-color-scheme: dark)').matches),
    );
  }, [theme]);

  useEffect(() => {
    iframeRef.current?.contentDocument?.documentElement.classList.toggle(
      'dark',
      isDark,
    );
  }, [isDark]);

  function handleCopy(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();

    if (code) {
      navigator.clipboard.writeText(code);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 1000);
    }
  }

  function handleTheme(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    setIsDark(!isDark);
  }

  return (
    <Tabs defaultValue="preview">
      <div className="bg-surface-01 rounded-3xl p-1 scroll-mt-8" id={name}>
        <header className="dark px-4 py-1.5 mb-1">
          <div className="border-b border-border mb-2 pb-2 flex items-center gap-3">
            <IconBox variant="primary" size="sm">
              <CodeIcon />
            </IconBox>
            <h2 className="text-foreground font-semibold">{title}</h2>
            <Separator orientation="vertical" className="mx-2" />
            <Text className="text-muted truncate">{description}</Text>
          </div>
          <div className="flex items-center justify-between gap-4">
            <TabsList className="*:rounded-full rounded-full">
              <TabsItem value="preview">Preview</TabsItem>
              <TabsItem value="code">Code</TabsItem>
            </TabsList>
            <div className="flex items-center gap-2">
              <Button
                size="xs-icon"
                variant="tertiary-subtle"
                pill
                onClick={handleTheme}
              >
                {isDark ? <MoonIcon /> : <SunIcon />}
              </Button>
              <Button
                size="xs"
                variant="tertiary-subtle"
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
          </div>
        </header>
        <TabsPanel value="preview" keepMounted>
          <iframe
            ref={iframeRef}
            src={`/block/${name}`}
            className="size-full h-[calc(100vh-10rem)] rounded-3xl"
          />
        </TabsPanel>
        <TabsPanel value="code" keepMounted>
          <ScrollArea.Root>
            <ScrollArea.Viewport className="bg-surface-03/50 ring ring-border-02 rounded-3xl px-4 py-4.5 outline-none max-h-[calc(100vh-10rem)]">
              <ShikiHighlighter
                language="tsx"
                theme="ayu-dark"
                showLanguage={false}
                highlighter={highlighter}
                showLineNumbers
                className={cn(
                  'outline-none *:outline-none *:!bg-transparent *:!overflow-visible',
                  '*:!p-0',
                )}
              >
                {code}
              </ShikiHighlighter>
            </ScrollArea.Viewport>
          </ScrollArea.Root>
        </TabsPanel>
      </div>
    </Tabs>
  );
}
