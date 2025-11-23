import * as React from 'react';
import { cn } from 'lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

export const dividerVariants = cva('flex items-center gap-2.5', {
  variants: {
    variant: {
      default: 'before:bg-separator before:h-px before:w-full',
      center:
        'before:bg-separator after:bg-separator before:h-px before:w-full after:h-px after:w-full',
      left: 'after:bg-separator after:h-px after:w-full',
      right: 'before:bg-separator before:h-px before:w-full',
    },
  },
  defaultVariants: {
    variant: 'left',
  },
});

export function Divider({
  children,
  variant,
  className,
  ...props
}: React.ComponentProps<'div'> & VariantProps<typeof dividerVariants>) {
  return (
    <div
      data-slot="divider"
      className={cn(dividerVariants({ variant, className }))}
      {...props}
    >
      <span className="text-sm text-dimmed text-nowrap">{children}</span>
    </div>
  );
}
