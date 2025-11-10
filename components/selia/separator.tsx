import { Separator as BaseSeparator } from '@base-ui-components/react/separator';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from 'lib/utils';

export const separatorVariants = cva('bg-border02 my-6', {
  variants: {
    orientation: {
      horizontal: 'w-full h-px',
      vertical: 'w-px h-full',
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
