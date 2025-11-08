import * as React from 'react';
import { Tabs as BaseTabs } from '@base-ui-components/react/tabs';
import { cn } from 'lib/utils';

export function Tabs({
  className,
  ...props
}: React.ComponentProps<typeof BaseTabs.Root>) {
  return (
    <BaseTabs.Root
      className={cn('flex flex-col gap-2.5', className)}
      {...props}
    />
  );
}

export function TabsList({
  className,
  children,
  ...props
}: React.ComponentProps<typeof BaseTabs.List>) {
  return (
    <BaseTabs.List
      className={cn(
        'relative z-0 flex items-center bg-tabs p-1 rounded-xl',
        className,
      )}
      {...props}
    >
      {children}
      <BaseTabs.Indicator
        className={cn(
          'absolute top-1/2 left-0 h-8 w-(--active-tab-width)',
          'translate-x-(--active-tab-left) -translate-y-1/2',
          'rounded-xl z-[-1] transition-all',
          'bg-gradient-accent03 shadow inset-shadow-2xs inset-shadow-white/15',
        )}
      />
    </BaseTabs.List>
  );
}

export function TabsTab({
  className,
  ...props
}: React.ComponentProps<typeof BaseTabs.Tab>) {
  return (
    <BaseTabs.Tab
      className={cn(
        'flex items-center justify-center gap-2.5',
        'h-8 py-1 px-3 text-muted flex-1 font-medium',
        'data-selected:text-foreground',
        'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary',
        '[&_svg]:size-4',
        className,
      )}
      {...props}
    />
  );
}

export function TabsPanel({
  className,
  ...props
}: React.ComponentProps<typeof BaseTabs.Panel>) {
  return <BaseTabs.Panel className={cn(className)} {...props} />;
}
