'use client';

import { Accordion as BaseAccordion } from '@base-ui/react/accordion';
import { cn } from '#utils';

export function Accordion({
  className,
  ...props
}: React.ComponentProps<typeof BaseAccordion.Root>) {
  return (
    <BaseAccordion.Root
      data-slot="accordion"
      className={cn('flex flex-col', className)}
      {...props}
    />
  );
}

export function AccordionItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof BaseAccordion.Item>) {
  return (
    <BaseAccordion.Item
      data-slot="accordion-item"
      className={cn('border-b border-card-border last:border-b-0', className)}
      {...props}
    >
      {children}
    </BaseAccordion.Item>
  );
}

export function AccordionHeader({
  className,
  children,
  ...props
}: React.ComponentProps<typeof BaseAccordion.Header>) {
  return (
    <BaseAccordion.Header
      data-slot="accordion-header"
      className={className}
      {...props}
    >
      {children}
    </BaseAccordion.Header>
  );
}

export function AccordionTrigger({
  className,
  expandableIndicator = true,
  ...props
}: React.ComponentProps<typeof BaseAccordion.Trigger> & {
  expandableIndicator?: boolean;
}) {
  return (
    <BaseAccordion.Trigger
      data-slot="accordion-trigger"
      data-expandable={expandableIndicator ? true : undefined}
      className={cn(
        'flex items-center gap-2.5 select-none cursor-pointer',
        'transition-colors duration-100 py-4',
        'focus:outline-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary',
        '**:[svg]:size-4 w-full text-left leading-relaxed font-medium',
        '**:data-[slot=expandable-indicator]:transition-all',
        '**:data-[slot=expandable-indicator]:duration-100',
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

export function AccordionPanel({
  className,
  children,
  ...props
}: React.ComponentProps<typeof BaseAccordion.Panel>) {
  return (
    <BaseAccordion.Panel
      data-slot="accordion-panel"
      className={cn(
        'flex flex-col gap-2.5',
        'overflow-hidden transition-all ease-out',
        '[&[hidden]:not([hidden=until-found])]:hidden h-[var(--accordion-panel-height)]',
        'data-[ending-style]:h-0 data-[starting-style]:h-0',
        className,
      )}
      {...props}
    >
      <div data-slot="accordion-panel-content" className="pb-2">
        {children}
      </div>
    </BaseAccordion.Panel>
  );
}
