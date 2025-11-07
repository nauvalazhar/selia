import * as React from 'react';
import { cn } from 'lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

export interface DividerProps extends React.HTMLAttributes<HTMLHRElement> {}

export function Divider({ className, ...props }: DividerProps) {
  return <hr className={cn('border-border02', className)} {...props} />;
}

export const dividerTextVariants = cva('flex items-center gap-2.5', {
  variants: {
    variant: {
      default: 'before:bg-border02 before:h-px before:w-full',
      center:
        'before:bg-border02 after:bg-border02 before:h-px before:w-full after:h-px after:w-full',
      left: 'after:bg-border02 after:h-px after:w-full',
      right: 'before:bg-border02 before:h-px before:w-full',
    },
  },
  defaultVariants: {
    variant: 'left',
  },
});

export interface DividerTextProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof dividerTextVariants> {
  children?: React.ReactNode;
}

export function DividerText({
  children,
  variant,
  className,
  ...props
}: DividerTextProps) {
  return (
    <div className={cn(dividerTextVariants({ variant, className }))} {...props}>
      <span className="text-sm text-dimmed text-nowrap">{children}</span>
    </div>
  );
}
