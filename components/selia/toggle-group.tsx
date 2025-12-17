import { ToggleGroup as BaseToggleGroup } from '@base-ui/react/toggle-group';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from 'lib/utils';

export const toggleGroupVariants = cva(
  [
    'flex items-center gap-0.5 ring rounded p-0.5',
    '*:data-[slot=toggle]:shadow-none',
    '*:data-[slot=toggle]:ring-0',
  ],
  {
    variants: {
      variant: {
        default: 'ring-border shadow',
        outline: 'ring-border',
        plain: 'ring-transparent',
      },
      size: {
        sm: [
          '*:data-[slot=toggle]:px-3',
          '*:data-[slot=toggle]:h-[calc(var(--spacing)*8.5-4px)]',
          '*:data-[slot=toggle]:min-w-[calc(var(--spacing)*8.5-4px)]',
        ],
        'sm-icon': [
          '*:data-[slot=toggle]:size-8.5',
          '*:data-[slot=toggle]:px-0',
          'not-[[data-variant=plain]]:*:data-[slot=toggle]:size-[calc(var(--spacing)*8.5-4px)]',
          'not-[[data-variant=plain]]:*:data-[slot=toggle]:min-w-[calc(var(--spacing)*8.5-4px)]',
        ],
        md: [
          '*:data-[slot=toggle]:h-[calc(var(--spacing)*9.5-4px)]',
          '*:data-[slot=toggle]:min-w-[calc(var(--spacing)*9.5-4px)]',
        ],
        'md-icon': [
          '*:data-[slot=toggle]:size-9.5',
          '*:data-[slot=toggle]:px-0',
          'not-[[data-variant=plain]]:*:data-[slot=toggle]:size-[calc(var(--spacing)*9.5-4px)]',
        ],
      },
      orientation: {
        horizontal: 'flex-row',
        vertical: 'flex-col',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  },
);

export function ToggleGroup({
  className,
  orientation,
  size,
  variant,
  ...props
}: React.ComponentProps<typeof BaseToggleGroup> &
  VariantProps<typeof toggleGroupVariants>) {
  return (
    <BaseToggleGroup
      data-slot="toggle-group"
      data-variant={variant}
      data-size={size}
      orientation={orientation}
      className={cn(
        toggleGroupVariants({ variant, orientation, size, className }),
      )}
      {...props}
    />
  );
}
