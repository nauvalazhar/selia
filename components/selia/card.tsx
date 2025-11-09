import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from 'lib/utils';

export const cardVariants = cva(
  ['text-foreground ring ring-card-border rounded-3xl'],
  {
    variants: {
      variant: {
        default: 'bg-card',
        gradient: 'bg-gradient-card',
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
    <div className={cn(cardVariants({ variant, className }))} {...props} />
  );
}

export const cardHeaderVariants = cva(
  'p-6 flex gap-1.5 border-b border-card-border',
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
    <div className={cn(cardHeaderVariants({ align, className }))} {...props} />
  );
}

export function CardHeaderContent({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return <div className={cn('flex flex-col gap-2', className)} {...props} />;
}

export function CardHeaderActions({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn('ml-auto flex items-center gap-2', className)}
      {...props}
    />
  );
}

export function CardTitle({ className, ...props }: React.ComponentProps<'h3'>) {
  return (
    <h3
      className={cn('text-lg font-semibold leading-none', className)}
      {...props}
    />
  );
}

export function CardDescription({
  className,
  ...props
}: React.ComponentProps<'p'>) {
  return <p className={cn('text-muted', className)} {...props} />;
}

export function CardBody({ className, ...props }: React.ComponentProps<'div'>) {
  return <div className={cn('p-6', className)} {...props} />;
}

export function CardFooter({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn(
        'p-6 bg-card-footer border-t border-card-border rounded-b-3xl',
        className,
      )}
      {...props}
    />
  );
}
