import { Accordion as BaseAccordion } from '@base-ui-components/react/accordion';
import { cn } from 'lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

export const accordionVariants = cva(
  [
    'flex flex-col border',
    '**:data-[slot=accordion-item]:first:**:[[data-slot=accordion-trigger]]:rounded-b-none',
    '**:data-[slot=accordion-item]:not-last:not-first:**:[[data-slot=accordion-trigger]]:rounded-none',
    '**:data-[slot=accordion-item]:last:**:[[data-slot=accordion-trigger]]:rounded-t-none',
    '**:data-[slot=accordion-item]:last:**:[[data-slot=accordion-trigger][data-panel-open]]:rounded-none',
  ],
  {
    variants: {
      size: {
        default: [
          'rounded-lg',
          '**:data-[slot=accordion-panel-content]:p-4',
          '**:data-[slot=accordion-trigger]:p-4',
          '**:data-[slot=accordion-trigger]:rounded-lg',
        ],
        sm: [
          'rounded',
          '**:data-[slot=accordion-panel-content]:p-3.5',
          '**:data-[slot=accordion-trigger]:p-3.5',
          '**:data-[slot=accordion-trigger]:rounded',
        ],
        lg: [
          'rounded-xl',
          '**:data-[slot=accordion-panel-content]:p-4.5',
          '**:data-[slot=accordion-trigger]:p-4.5',
          '**:data-[slot=accordion-trigger]:rounded-xl',
        ],
      },
      variant: {
        default: 'bg-card border-card-border shadow',
        outline: 'border-card-border border',
        plain: 'border-transparent rounded-none',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export function Accordion({
  className,
  variant,
  size,
  ...props
}: React.ComponentProps<typeof BaseAccordion.Root> &
  VariantProps<typeof accordionVariants>) {
  return (
    <BaseAccordion.Root
      data-slot="accordion"
      className={cn(accordionVariants({ variant, size, className }))}
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
        'data-panel-open:border-b border-card-border transition-colors duration-100',
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
      <div data-slot="accordion-panel-content">{children}</div>
    </BaseAccordion.Panel>
  );
}
