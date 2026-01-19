'use client';

import * as React from 'react';
import { cn } from '#utils';
import { cva, type VariantProps } from 'class-variance-authority';

export const alertVariants = cva(
  [
    'w-full px-3.5 py-1.5 min-h-11 rounded font-medium',
    '[&_svg:not([class*=size-])]:size-4.5 *:[svg]:shrink-0',
    'items-center gap-x-2.5 gap-y-1 flex text-foreground',
    'has-[>[data-slot=alert-description]]:grid',
    'has-[>[data-slot=alert-description]]:py-3',
    'has-[>svg]:grid-cols-[calc(var(--spacing)*4.5)_1fr_auto]',
    'not-[:has(>svg)]:grid-cols-[1fr_auto]',
    'not-[:has(>svg)]:[&>[data-slot=alert-description]]:col-start-1',
  ],
  {
    variants: {
      variant: {
        default: 'bg-background ring ring-border',
        danger: 'bg-danger/7 ring ring-danger/30 [&_svg:not([class*=text-])]:text-danger',
        info: 'bg-info/7 ring ring-info/30 [&_svg:not([class*=text-])]:text-info',
        success: 'bg-success/7 ring ring-success/30 [&_svg:not([class*=text-])]:text-success',
        warning: 'bg-warning/7 ring ring-warning/30 [&_svg:not([class*=text-])]:text-warning',
        tertiary: 'bg-tertiary/7 ring ring-tertiary/30 [&_svg:not([class*=text-])]:text-tertiary',
      },
    },
    defaultVariants: {
      variant: 'default',
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
  return <div data-slot="alert-title" className={cn(className)} {...props} />;
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
