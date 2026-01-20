'use client';

import { Collapsible as BaseCollapsible } from '@base-ui/react/collapsible';
import { cn } from '#utils';

export function Collapsible({
  className,
  ...props
}: React.ComponentProps<typeof BaseCollapsible.Root>) {
  return (
    <BaseCollapsible.Root
      data-slot="collapsible"
      className={cn('flex flex-col', className)}
      {...props}
    />
  );
}

export function CollapsibleTrigger({
  className,
  expandableIndicator = true,
  ...props
}: React.ComponentProps<typeof BaseCollapsible.Trigger> & {
  expandableIndicator?: boolean;
}) {
  return (
    <BaseCollapsible.Trigger
      data-slot="collapsible-trigger"
      data-expandable={expandableIndicator ? true : undefined}
      className={cn(
        'flex items-center gap-2.5 select-none cursor-pointer',
        'transition-colors duration-100 py-2 text-foreground',
        'focus:outline-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary',
        '[&_svg:not([class*=size-])]:size-4 text-left leading-relaxed font-medium w-full',
        '**:data-[slot=expandable-indicator]:transition-all',
        '**:data-[slot=expandable-indicator]:duration-100',
        'disabled:opacity-70 disabled:cursor-not-allowed',
        expandableIndicator && [
          'data-expandable:after:bg-chevron-down-dark dark:data-expandable:after:bg-chevron-down data-expandable:after:size-4 data-expandable:after:ml-auto',
          'data-expandable:after:transition-transform data-expandable:after:duration-100 data-expandable:after:shrink-0',
          'data-expandable:data-[panel-open]:after:rotate-180',
        ],
        className,
      )}
      {...props}
    />
  );
}

export function CollapsiblePanel({
  className,
  children,
  ...props
}: React.ComponentProps<typeof BaseCollapsible.Panel>) {
  return (
    <BaseCollapsible.Panel
      data-slot="collapsible-panel"
      className={cn(
        'flex flex-col gap-2.5',
        'overflow-hidden transition-all ease-out',
        '[&[hidden]:not([hidden=until-found])]:hidden h-[var(--collapsible-panel-height)]',
        'data-[ending-style]:h-0 data-[starting-style]:h-0',
        className,
      )}
      {...props}
    >
      <div data-slot="collapsible-panel-content">{children}</div>
    </BaseCollapsible.Panel>
  );
}
