import { cn } from 'lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

export const iconBoxVariants = cva(
  [
    'flex items-center justify-center shrink-0',
    'size-9 rounded-lg',
    '[&_svg]:size-4.5',
  ],
  {
    variants: {
      variant: {
        default: 'bg-accent03 text-foreground',
        primary: 'bg-gradient-primary text-primary-foreground',
        secondary: 'bg-gradient-secondary text-secondary-foreground',
        tertiary: 'bg-gradient-tertiary text-tertiary-foreground',
        destructive: 'bg-gradient-destructive text-destructive-foreground',
        info: 'bg-gradient-info text-info-foreground',
        success: 'bg-gradient-success text-success-foreground',
        warning: 'bg-gradient-warning text-warning-foreground',
      },
      circle: {
        true: 'rounded-full',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

export function IconBox({
  variant,
  circle,
  className,
  children,
  ...props
}: React.ComponentProps<'div'> & VariantProps<typeof iconBoxVariants>) {
  return (
    <div
      {...props}
      className={cn(iconBoxVariants({ variant, circle, className }))}
    >
      {children}
    </div>
  );
}
