import * as React from 'react';
import { cn } from 'lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

export const alertVariants = cva(
  [
    'w-full px-3.5 py-1.5 min-h-11 rounded flex items-center gap-2.5 font-medium',
    '[&_svg]:size-4.5 [&_svg]:shrink-0',
  ],
  {
    variants: {
      variant: {
        secondary: 'bg-gradient-secondary text-secondary-foreground',
        destructive: 'bg-gradient-destructive text-destructive-foreground',
        info: 'bg-gradient-info text-info-foreground',
        success: 'bg-gradient-success text-success-foreground',
        warning: 'bg-gradient-warning text-warning-foreground',
        tertiary: 'bg-gradient-tertiary text-tertiary-foreground',
        light: 'bg-secondary/10 text-secondary-foreground ring ring-secondary',
        'destructive-light':
          'bg-destructive/20 text-destructive ring ring-destructive [&_svg]:text-destructive',
        'info-light': 'bg-info/10 text-info ring ring-info [&_svg]:text-info',
        'success-light':
          'bg-success/20 text-success ring ring-success [&_svg]:text-success',
        'warning-light':
          'bg-warning/20 text-warning ring ring-warning [&_svg]:text-warning',
        'tertiary-light':
          'bg-tertiary/20 text-tertiary ring ring-tertiary [&_svg]:text-tertiary',
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
    <div className={cn(alertVariants({ variant, className }))} {...props} />
  );
}

export function AlertActions({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn('ml-auto flex items-center gap-1.5', className)}
      {...props}
    />
  );
}
