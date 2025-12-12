import { cn } from 'lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

export const badgeVariants = cva(
  'inline-flex items-center gap-1.5 border border-transparent',
  {
    variants: {
      variant: {
        primary: 'bg-primary/15 text-primary',
        'primary-outline': 'border-primary text-primary',
        secondary: 'bg-secondary/50 text-secondary-foreground',
        'secondary-outline': 'border-secondary text-secondary-foreground',
        tertiary: 'bg-tertiary/15 text-tertiary',
        'tertiary-outline': 'border-tertiary text-tertiary',
        success: 'bg-success/15 text-success',
        'success-outline': 'border-success text-success',
        info: 'bg-info/15 text-info',
        'info-outline': 'border-info text-info',
        warning: 'bg-warning/15 text-warning',
        'warning-outline': 'border-warning text-warning',
        danger: 'bg-danger/15 text-danger',
        'danger-outline': 'border-danger text-danger',
      },
      size: {
        sm: 'px-1 h-5 rounded-sm text-xs *:[svg]:size-3',
        md: 'px-1.5 h-5.5 rounded-sm text-sm *:[svg]:size-3.5',
        lg: 'px-2 h-6 rounded-sm *:[svg]:size-4',
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
