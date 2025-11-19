import { Separator as BaseSeparator } from '@base-ui-components/react/separator';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from 'lib/utils';

export const separatorVariants = cva('bg-separator', {
  variants: {
    orientation: {
      horizontal: 'w-full h-px my-6',
      vertical: 'w-px min-h-5 h-full mx-6',
    },
  },
  defaultVariants: {
    orientation: 'horizontal',
  },
});

export function Separator({
  className,
  orientation,
  ...props
}: React.ComponentProps<typeof BaseSeparator> &
  VariantProps<typeof separatorVariants>) {
  return (
    <BaseSeparator
      data-slot="separator"
      className={cn(separatorVariants({ orientation, className }))}
      {...props}
    />
  );
}
