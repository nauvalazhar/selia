'use client';

import { Separator as BaseSeparator } from '@base-ui/react/separator';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '#utils';

export const separatorVariants = cva('bg-separator', {
  variants: {
    orientation: {
      horizontal: 'w-full h-px',
      vertical: 'w-px min-h-5',
    },
  },
  defaultVariants: {
    orientation: 'horizontal',
  },
});

export function Separator({
  className,
  orientation,
  ...props
}: React.ComponentProps<typeof BaseSeparator> &
  VariantProps<typeof separatorVariants>) {
  return (
    <BaseSeparator
      data-slot="separator"
      className={cn(separatorVariants({ orientation, className }))}
      {...props}
    />
  );
}
