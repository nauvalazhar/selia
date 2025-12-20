import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from 'lib/utils';

export function Card({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card"
      className={cn(
        'text-foreground ring ring-card-border rounded-xl shadow-card bg-card',
        className,
      )}
      {...props}
    />
  );
}

export const cardHeaderVariants = cva(
  [
    'p-6 gap-x-3.5 gap-y-2 border-b border-card-separator',
    'grid grid-cols-[1fr_auto]',
    'has-[svg]:grid-cols-[auto_1fr_auto]',
    'has-[[data-slot=iconbox]]:*:data-[slot=card-description]:col-start-2',
    '**:[svg,[data-slot=iconbox]]:row-span-2',
    '*:data-[slot=iconbox]:row-span-2',
    '*:data-[slot=card-description]:row-start-2',
    'not-[:has([data-slot=iconbox])]:items-center',
    '*:[[data-slot=card-title]:not(:has(+[data-slot=card-description]))]:row-span-2',
  ],
  {
    variants: {
      align: {
        default: 'justify-start',
        center: 'justify-center text-center',
        right: 'justify-end',
      },
    },
    defaultVariants: {
      align: 'default',
    },
  },
);

export function CardHeader({
  align,
  className,
  ...props
}: React.ComponentProps<'header'> & VariantProps<typeof cardHeaderVariants>) {
  return (
    <header
      data-slot="card-header"
      className={cn(cardHeaderVariants({ align, className }))}
      {...props}
    />
  );
}

export function CardHeaderAction({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-header-action"
      className={cn(
        'col-start-3 row-start-1 row-span-2 ml-auto flex items-center gap-2',
        className,
      )}
      {...props}
    />
  );
}

export function CardTitle({ className, ...props }: React.ComponentProps<'h3'>) {
  return (
    <h3
      data-slot="card-title"
      className={cn('text-lg font-semibold leading-none', className)}
      {...props}
    />
  );
}

export function CardDescription({
  className,
  ...props
}: React.ComponentProps<'p'>) {
  return (
    <p
      data-slot="card-description"
      className={cn('text-muted', className)}
      {...props}
    />
  );
}

export function CardBody({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-body"
      className={cn(
        'p-6 **:data-[slot=item]:px-6',
        '*:data-[slot=table-container]:-m-6 **:data-[slot=table-head]:border-t-0',
        '*:data-[slot=stack]:-m-6',
        'not-[:has(caption)]:[&_tbody>tr:last-child>td:first-child]:rounded-bl-xl',
        'not-[:has(caption)]:[&_tbody>tr:last-child>td:last-child]:rounded-br-xl',
        className,
      )}
      {...props}
    />
  );
}

export function CardFooter({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-footer"
      className={cn(
        'flex items-center gap-1.5',
        'p-6 bg-card-footer border-t border-card-separator rounded-b-xl',
        className,
      )}
      {...props}
    />
  );
}
