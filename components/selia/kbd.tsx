import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from 'lib/utils';

export const kbdVariants = cva(
  [
    'inline-flex items-center gap-1 px-1.5 h-5.5 min-w-5.5 justify-center',
    'ring ring-kbd-border rounded-sm text-sm/8 font-medium',
  ],
  {
    variants: {
      variant: {
        default:
          'bg-kbd text-kbd-foreground shadow inset-shadow-2xs inset-shadow-white/15',
        outline: 'ring ring-kbd-border text-kbd-foreground',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

export function Kbd({
  variant,
  className,
  ...props
}: React.ComponentProps<'kbd'> & VariantProps<typeof kbdVariants>) {
  return (
    <kbd
      data-slot="kbd"
      {...props}
      className={cn(kbdVariants({ variant, className }))}
    />
  );
}

export function KbdGroup({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="kbd-group"
      {...props}
      className={cn('flex items-center gap-1.5', className)}
    />
  );
}
