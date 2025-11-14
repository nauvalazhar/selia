import { cn } from 'lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

export const badgeVariants = cva(
  'inline-flex items-center gap-1.5 border border-transparent',
  {
    variants: {
      variant: {
        primary: 'bg-primary text-primary-foreground',
        'primary-subtle': 'bg-primary/15 text-primary',
        'primary-outline': 'border-primary text-primary',
        secondary: 'bg-secondary text-secondary-foreground',
        'secondary-subtle': 'bg-secondary/15 text-secondary-foreground',
        'secondary-outline': 'border-secondary text-secondary-foreground',
        tertiary: 'bg-tertiary text-tertiary-foreground',
        'tertiary-subtle': 'bg-tertiary/15 text-tertiary',
        'tertiary-outline': 'border-tertiary text-tertiary',
        success: 'bg-success text-success-foreground',
        'success-subtle': 'bg-success/15 text-success',
        'success-outline': 'border-success text-success',
        info: 'bg-info text-info-foreground',
        'info-subtle': 'bg-info/15 text-info',
        'info-outline': 'border-info text-info',
        warning: 'bg-warning text-warning-foreground',
        'warning-subtle': 'bg-warning/15 text-warning',
        'warning-outline': 'border-warning text-warning',
        destructive: 'bg-destructive text-destructive-foreground',
        'destructive-subtle': 'bg-destructive/15 text-destructive',
        'destructive-outline': 'border-destructive text-destructive',
      },
      size: {
        sm: 'px-1 h-5 rounded-[calc(var(--radius)*0.5)] text-xs [&_svg]:size-3',
        md: 'px-1.5 h-5.5 rounded-[calc(var(--radius)-0.250rem)] text-sm [&_svg]:size-3.5',
        lg: 'px-2 h-6 rounded [&_svg]:size-4',
      },
      pill: {
        true: 'rounded-full',
      },
    },
    defaultVariants: {
      variant: 'secondary',
      size: 'md',
    },
  },
);

export function Badge({
  variant,
  size,
  pill,
  className,
  ...props
}: React.ComponentProps<'span'> & VariantProps<typeof badgeVariants>) {
  return (
    <span
      data-slot="badge"
      {...props}
      className={cn(badgeVariants({ variant, size, pill, className }))}
    />
  );
}
