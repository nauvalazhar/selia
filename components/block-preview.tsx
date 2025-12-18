import { useEffect, useRef, useState } from 'react';
import { Text } from './selia/text';
import { Tabs, TabsItem, TabsList, TabsPanel } from './selia/tabs';
import { IconBox } from './selia/icon-box';
import {
  CheckIcon,
  ClipboardIcon,
  CodeIcon,
  ExternalLinkIcon,
  FileIcon,
  MoonIcon,
  SunIcon,
} from 'lucide-react';
import { Separator } from './selia/separator';
import { Button } from './selia/button';
import { useThemeStore } from '~/lib/theme-store';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupTitle,
  SidebarItem,
  SidebarItemButton,
  SidebarList,
  SidebarMenu,
} from 'components/selia/sidebar';
import { CodeBlock } from './code-block';

export function BlockPreview({
  name,
  code,
  codeIndex,
  title,
  description,
}: {
  name: string;
  title: string;
  code: string | Record<string, any>;
  codeIndex?: string;
  description: string;
}) {
  const theme = useThemeStore((state) => state.theme);
  const [isCopied, setIsCopied] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [tab, setTab] = useState<'preview' | 'code'>('preview');

  useEffect(() => {
    setIsDark(
      theme === 'dark' ||
        ((!theme || theme === 'system') &&
          window.matchMedia('(prefers-color-scheme: dark)').matches),
    );
  }, [theme]);

  useEffect(() => {
    const target = iframeRef.current?.contentDocument?.documentElement;
    target?.classList.toggle('dark', isDark);
    target?.classList.toggle('scheme-dark', isDark);
    target?.classList.toggle('scheme-light', !isDark);
  }, [isDark]);

  function handleCopy(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    const codeText =
      e.currentTarget.parentElement?.parentElement?.parentElement?.parentElement?.querySelector(
        'code',
      )?.textContent;

    if (codeText) {
      navigator.clipboard.writeText(codeText);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 1000);
    }
  }

  function handleTheme(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    setIsDark(!isDark);
  }

  function handleOpenPreview(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    window.open(`/block/${name}`, '_blank');
  }

  return (
    <Tabs defaultValue={tab} onValueChange={setTab}>
      <div
        className="bg-background border border-border rounded-3xl p-1 scroll-mt-8 shadow-card"
        id={name}
      >
        <header className="px-4 py-1.5 mb-1">
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
              {tab === 'preview' && (
                <Button
                  size="xs-icon"
                  variant="secondary"
                  pill
                  onClick={handleTheme}
                >
                  {isDark ? <MoonIcon /> : <SunIcon />}
                </Button>
              )}
              {tab === 'preview' && (
                <Button
                  size="xs-icon"
                  variant="secondary"
                  pill
                  onClick={handleOpenPreview}
                >
                  <ExternalLinkIcon />
                </Button>
              )}
              {tab === 'code' && (
                <Button
                  size="xs"
                  variant="secondary"
                  pill
                  className="text-muted text-sm"
                  onClick={handleCopy}
                >
                  {isCopied ? <CheckIcon /> : <ClipboardIcon />}
                </Button>
              )}
            </div>
          </div>
        </header>
        <TabsPanel value="preview" keepMounted>
          <iframe
            ref={iframeRef}
            src={`/block/${name}`}
            className="size-full h-[calc(100vh-10rem)] rounded-3xl border border-border bg-background"
          />
        </TabsPanel>
        <TabsPanel value="code" keepMounted>
          <CodePanel code={code} codeIndex={codeIndex} />
        </TabsPanel>
      </div>
    </Tabs>
  );
}

function CodePanel({
  code,
  codeIndex,
}: {
  code: string | Record<string, any>;
  codeIndex?: string;
}) {
  const files = typeof code === 'object' ? Object.keys(code) : [];
  const [selectedFile, setSelectedFile] = useState(codeIndex);

  return (
    <div className="flex">
      {files.length > 0 ? (
        <Sidebar className="w-72 shrink-0 hidden lg:block" size="compact">
          <SidebarContent>
            <SidebarMenu>
              <SidebarGroup>
                <SidebarGroupTitle>Files</SidebarGroupTitle>
                <SidebarList>
                  {files.map((file) => (
                    <SidebarItem key={file}>
                      <SidebarItemButton
                        active={selectedFile === file}
                        onClick={() => setSelectedFile(file)}
                      >
                        <FileIcon />
                        {file}
                      </SidebarItemButton>
                    </SidebarItem>
                  ))}
                </SidebarList>
              </SidebarGroup>
            </SidebarMenu>
          </SidebarContent>
        </Sidebar>
      ) : null}

      <CodeBlock
        language="tsx"
        className="w-full max-h-[calc(100vh-10rem)] bg-code rounded-3xl p-1 ring ring-border"
        syntaxClassName="p-4"
      >
        {typeof code === 'object' ? code[selectedFile ?? ''] : code}
      </CodeBlock>
    </div>
  );
}
