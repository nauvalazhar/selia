'use client';

import * as React from 'react';
import { Tabs as BaseTabs } from '@base-ui/react/tabs';
import { cn } from '#utils';

export function Tabs({
  className,
  ...props
}: React.ComponentProps<typeof BaseTabs.Root>) {
  return (
    <BaseTabs.Root
      data-slot="tabs"
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
      data-slot="tabs-list"
      className={cn(
        'relative z-0 flex items-center bg-tabs p-1 rounded',
        'inset-shadow-xs inset-shadow-black/10 dark:inset-shadow-none',
        className,
      )}
      {...props}
    >
      {children}
      <BaseTabs.Indicator
        data-slot="tabs-indicator"
        className={cn(
          'absolute top-1/2 left-0 h-8 w-(--active-tab-width)',
          'translate-x-(--active-tab-left) -translate-y-1/2',
          'duration-100',
          'rounded z-[-1] transition-all',
          'bg-tabs-accent shadow inset-shadow-2xs inset-shadow-white/15 dark:inset-shadow-black/15',
          'ring ring-tabs-border',
        )}
      />
    </BaseTabs.List>
  );
}

export function TabsItem({
  className,
  ...props
}: React.ComponentProps<typeof BaseTabs.Tab>) {
  return (
    <BaseTabs.Tab
      data-slot="tabs-item"
      className={cn(
        'flex items-center justify-center gap-2.5 rounded',
        'h-8 py-1 px-3 text-muted flex-1 font-medium',
        'data-active:text-foreground',
        'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary',
        '[&_svg:not([class*=size-])]:size-4',
        'data-disabled:opacity-70 data-disabled:pointer-events-none',
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
  return (
    <BaseTabs.Panel
      data-slot="tabs-panel"
      className={cn('outline-none', className)}
      {...props}
    />
  );
}
