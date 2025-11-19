import * as React from 'react';
import { Tabs as BaseTabs } from '@base-ui-components/react/tabs';
import { cn } from 'lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

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

export const tabsListVariants = cva(
  'relative z-0 flex items-center bg-tabs p-1 rounded-xl',
  {
    variants: {
      variant: {
        line: '',
      },
    },
    defaultVariants: {
      variant: 'line',
    },
  },
);

export function TabsList({
  className,
  variant,
  children,
  ...props
}: React.ComponentProps<typeof BaseTabs.List> &
  VariantProps<typeof tabsListVariants>) {
  return (
    <BaseTabs.List
      data-slot="tabs-list"
      className={cn(tabsListVariants({ variant }), className)}
      {...props}
    >
      {children}
      <BaseTabs.Indicator
        className={cn(
          'absolute top-1/2 left-0 h-8 w-(--active-tab-width)',
          'translate-x-(--active-tab-left) -translate-y-1/2',
          'rounded-xl z-[-1] transition-all',
          'bg-tabs-accent shadow inset-shadow-2xs inset-shadow-white/15',
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
        'flex items-center justify-center gap-2.5 rounded-xl',
        'h-8 py-1 px-3 text-muted flex-1 font-medium',
        'data-selected:text-foreground',
        'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary',
        '*:[svg]:size-4',
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
