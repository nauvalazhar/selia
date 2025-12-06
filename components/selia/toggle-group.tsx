import { ToggleGroup as BaseToggleGroup } from '@base-ui-components/react/toggle-group';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from 'lib/utils';

export const toggleGroupVariants = cva(
  ['flex items-center gap-0.5 ring rounded'],
  {
    variants: {
      variant: {
        default: [
          'ring-border shadow',
          '*:data-[slot=toggle]:shadow-none',
          '*:data-[slot=toggle]:ring-0',
        ],
        outline: [
          'ring-border',
          '*:data-[slot=toggle]:shadow-none',
          '*:data-[slot=toggle]:ring-0',
        ],
        plain: 'ring-transparent gap-2.5',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

export function ToggleGroup({
  className,
  variant,
  ...props
}: React.ComponentProps<typeof BaseToggleGroup> &
  VariantProps<typeof toggleGroupVariants>) {
  return (
    <BaseToggleGroup
      data-slot="toggle-group"
      className={cn(toggleGroupVariants({ variant, className }))}
      {...props}
    />
  );
}
