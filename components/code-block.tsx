import { useThemeStore } from '~/lib/theme-store';
import { ScrollArea } from 'components/selia/scroll-area';
import ShikiHighlighter from 'react-shiki/core';
import { highlighter } from '~/lib/highlighter';
import { cn } from 'lib/utils';

export function CodeBlock({
  children,
  language = 'jsx',
  className,
  syntaxClassName,
}: {
  children: string;
  language?: string;
  className?: string;
  syntaxClassName?: string;
}) {
  const _theme = useThemeStore((state) => state.theme);

  const theme =
    _theme === 'dark' ||
    ((!_theme || _theme === 'system') &&
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
      ? 'dark'
      : 'light';

  return (
    <ScrollArea className={cn(className)}>
      <ShikiHighlighter
        language={language}
        theme={{
          light: 'github-light',
          dark: 'github-dark',
        }}
        defaultColor="light"
        className={cn(
          '**:[pre]:!p-0 **:[pre]:!overflow-visible **:[pre]:!bg-transparent **:[pre]:!outline-none',
          syntaxClassName,
        )}
        showLanguage={false}
        highlighter={highlighter}
      >
        {children}
      </ShikiHighlighter>
    </ScrollArea>
  );
}
