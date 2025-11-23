import * as React from 'react';
import { cn } from 'lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import { buttonVariants } from 'components/selia/button';

export const alertVariants = cva(
  [
    'w-full px-3.5 py-1.5 min-h-11 rounded font-medium',
    '*:[svg]:size-4.5 *:[svg]:shrink-0',
    'items-center gap-x-2.5 gap-y-1 flex',
    'has-[>[data-slot=alert-description]]:grid',
    'has-[>[data-slot=alert-description]]:py-3',
    'has-[>svg]:grid-cols-[calc(var(--spacing)*4.5)_1fr_auto]',
  ],
  {
    variants: {
      variant: {
        secondary: [
          'bg-secondary text-secondary-foreground',
          '**:data-[slot=alert-button]:hover:bg-tertiary/15',
        ],
        danger: [
          'bg-danger text-danger-foreground',
          '*:data-[slot=alert-description]:text-danger-foreground/80',
          '**:data-[slot=alert-button]:text-white',
        ],
        info: [
          'bg-info text-info-foreground',
          '*:data-[slot=alert-description]:text-info-foreground/80',
          '**:data-[slot=alert-button]:text-white',
        ],
        success: [
          'bg-success text-success-foreground',
          '*:data-[slot=alert-description]:text-success-foreground/80',
          '**:data-[slot=alert-button]:text-white',
        ],
        warning: [
          'bg-warning text-warning-foreground',
          '*:data-[slot=alert-description]:text-warning-foreground/80',
          '**:data-[slot=alert-button]:text-white',
        ],
        tertiary: [
          'bg-tertiary text-tertiary-foreground',
          '*:data-[slot=alert-description]:text-tertiary-foreground/80',
          '**:data-[slot=alert-button]:text-white',
          '**:data-[slot=alert-button]:hover:bg-secondary/20',
        ],
        'secondary-subtle':
          'bg-secondary/15 text-secondary-foreground ring ring-secondary',
        'danger-subtle':
          'bg-danger/15 text-danger ring ring-danger *:[svg]:text-danger',
        'info-subtle': 'bg-info/15 text-info ring ring-info *:[svg]:text-info',
        'success-subtle':
          'bg-success/15 text-success ring ring-success *:[svg]:text-success',
        'warning-subtle':
          'bg-warning/15 text-warning ring ring-warning *:[svg]:text-warning',
        'tertiary-subtle':
          'bg-tertiary/15 text-tertiary ring ring-tertiary *:[svg]:text-tertiary',
      },
    },
    defaultVariants: {
      variant: 'secondary',
    },
  },
);

export function Alert({
  className,
  variant,
  ...props
}: React.ComponentProps<'div'> & VariantProps<typeof alertVariants>) {
  return (
    <div
      data-slot="alert"
      className={cn(alertVariants({ variant, className }))}
      {...props}
    />
  );
}

export function AlertTitle({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="alert-title"
      className={cn('font-medium', className)}
      {...props}
    />
  );
}

export function AlertDescription({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="alert-description"
      className={cn(
        'text-muted font-normal col-start-2 leading-relaxed',
        className,
      )}
      {...props}
    />
  );
}

export function AlertAction({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="alert-action"
      className={cn(
        'ml-auto flex items-center gap-1.5 col-start-3 row-start-1 row-span-2 self-center',
        className,
      )}
      {...props}
    />
  );
}

export function AlertButton({
  className,
  ...props
}: React.ComponentProps<'button'>) {
  return (
    <button
      data-slot="alert-button"
      className={cn(
        buttonVariants({
          variant: 'tertiary-plain',
          size: 'xs',
          pill: true,
          className,
        }),
      )}
      {...props}
    />
  );
}
