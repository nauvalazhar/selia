import { Toggle as BaseToggle } from '@base-ui-components/react/toggle';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from 'lib/utils';

const toggleVariants = cva(
  [
    'inline-flex items-center justify-center gap-2.5 ring *:[svg]:size-4.5',
    'focus:outline-0 focus-visible:outline-2 focus-visible:outline-offset-2',
    'transition-colors duration-100',
    'hover:bg-accent/50',
  ],
  {
    variants: {
      variant: {
        default: 'ring-border shadow data-pressed:bg-accent',
        plain: 'ring-transparent data-pressed:bg-accent',
      },
      size: {
        sm: 'h-8.5 min-w-8.5 rounded px-3',
        'sm-icon': 'h-8.5 w-8.5 rounded',
        md: 'h-9.5 min-w-9.5 rounded px-4',
        'md-icon': 'h-9.5 w-9.5 rounded',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  },
);

export function Toggle({
  className,
  children,
  variant,
  size,
  ...props
}: React.ComponentProps<typeof BaseToggle> &
  VariantProps<typeof toggleVariants>) {
  return (
    <BaseToggle
      data-slot="toggle"
      className={cn(toggleVariants({ variant, size, className }))}
      {...props}
    >
      {children}
    </BaseToggle>
  );
}
