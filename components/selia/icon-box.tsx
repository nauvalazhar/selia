import { cn } from 'lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

export const iconBoxVariants = cva(
  ['flex items-center justify-center shrink-0'],
  {
    variants: {
      variant: {
        default: 'bg-accent-03 text-foreground',
        primary: 'bg-gradient-primary text-primary-foreground',
        secondary: 'bg-gradient-secondary text-secondary-foreground',
        tertiary: 'bg-gradient-tertiary text-tertiary-foreground',
        danger: 'bg-gradient-danger text-danger-foreground',
        info: 'bg-gradient-info text-info-foreground',
        success: 'bg-gradient-success text-success-foreground',
        warning: 'bg-gradient-warning text-warning-foreground',
      },
      size: {
        sm: 'size-7 rounded-md *:[svg]:size-3.5',
        md: 'size-9 rounded-lg *:[svg]:size-4.5',
        lg: 'size-11 rounded-xl *:[svg]:size-5.5',
      },
      circle: {
        true: 'rounded-full',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  },
);

export function IconBox({
  variant,
  size,
  circle,
  className,
  children,
  ...props
}: React.ComponentProps<'div'> & VariantProps<typeof iconBoxVariants>) {
  return (
    <div
      data-slot="iconbox"
      {...props}
      className={cn(iconBoxVariants({ variant, size, circle, className }))}
    >
      {children}
    </div>
  );
}
