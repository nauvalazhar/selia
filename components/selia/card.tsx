import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from 'lib/utils';

export const cardVariants = cva(
  'text-foreground ring ring-card-border rounded-3xl shadow-card',
  {
    variants: {
      variant: {
        default: 'bg-card',
      },
    },
    defaultVariants: { variant: 'default' },
  },
);

export function Card({
  variant,
  className,
  ...props
}: React.ComponentProps<'div'> & VariantProps<typeof cardVariants>) {
  return (
    <div
      data-slot="card"
      className={cn(cardVariants({ variant, className }))}
      {...props}
    />
  );
}

export const cardHeaderVariants = cva(
  [
    'p-6 gap-x-3.5 gap-y-2 border-b border-card-border',
    'grid grid-cols-[1fr_auto]',
    'has-[svg]:grid-cols-[auto_1fr_auto]',
    'has-[[data-slot=iconbox]]:*:data-[slot=card-description]:col-start-2',
    '**:[svg,[data-slot=iconbox]]:row-span-2',
    '*:data-[slot=iconbox]:row-span-2',
    '*:data-[slot=card-description]:row-start-2',
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
}: React.ComponentProps<'div'> & VariantProps<typeof cardHeaderVariants>) {
  return (
    <div
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
        'p-6 *:data-[slot=table-container]:-m-6 **:data-[slot=item]:px-6',
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
        'p-6 bg-card-footer border-t border-card-border rounded-b-3xl',
        className,
      )}
      {...props}
    />
  );
}
