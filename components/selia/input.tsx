'use client';

import * as React from 'react';
import { Input as BaseInput } from '@base-ui/react/input';
import { cn } from '#utils';
import { cva, type VariantProps } from 'class-variance-authority';

export const inputVariants = cva(
  [
    'h-9.5 px-3.5 w-full text-foreground rounded placeholder:text-dimmed transition-all shadow-input',
    'ring ring-input-border hover:ring-input-accent-border focus:outline-0 focus:ring-primary focus:ring-2',
    '[&[type="file"]]:py-2 [&[type="file"]]:text-dimmed file:-ml-1.5',
    'file:h-5.5 file:px-1.5 file:rounded-sm file:text-secondary-foreground file:ring file:ring-input-accent-border file:bg-secondary file:text-sm file:mr-2',
    'disabled:opacity-70 disabled:pointer-events-none',
  ],
  {
    variants: {
      variant: {
        default: 'bg-input',
        subtle: 'bg-input/60',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

export function Input({
  className,
  variant,
  ...props
}: React.ComponentProps<typeof BaseInput> &
  VariantProps<typeof inputVariants>) {
  return (
    <BaseInput
      data-slot="input"
      className={cn(inputVariants({ variant, className }))}
      {...props}
    />
  );
}
