import { cn } from 'lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

export const badgeVariants = cva('inline-flex items-center gap-1', {
  variants: {
    variant: {
      default: 'bg-accent03 text-foreground',
      primary: 'bg-primary text-primary-foreground',
      secondary: 'bg-secondary text-secondary-foreground',
      tertiary: 'bg-tertiary text-tertiary-foreground',
      success: 'bg-success text-success-foreground',
      info: 'bg-info text-info-foreground',
      warning: 'bg-warning text-warning-foreground',
      destructive: 'bg-destructive text-destructive-foreground',
    },
    size: {
      sm: 'px-1 h-5 rounded-sm text-xs',
      md: 'px-1.5 h-5.5 rounded-lg text-sm',
      lg: 'px-2 h-6 rounded-xl',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'md',
  },
});

export function Badge({
  variant,
  size,
  className,
  ...props
}: React.ComponentProps<'span'> & VariantProps<typeof badgeVariants>) {
  return (
    <span {...props} className={cn(badgeVariants({ variant, className }))} />
  );
}
