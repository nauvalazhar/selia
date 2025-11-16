import { cn } from 'lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

export const stackVariants = cva(
  'flex flex-col gap-2.5 flex-wrap *:data-[slot=separator]:-my-2.5',
  {
    variants: {
      direction: {
        row: 'flex-row',
        column: 'flex-col',
      },
      spacing: {
        sm: 'gap-2.5',
        md: 'gap-4',
        lg: 'gap-6',
      },
    },
    defaultVariants: {
      direction: 'column',
      spacing: 'md',
    },
  },
);

export function Stack({
  direction,
  spacing,
  children,
  className,
  ...props
}: React.ComponentProps<'div'> & VariantProps<typeof stackVariants>) {
  return (
    <div
      data-slot="stack"
      className={cn(stackVariants({ direction, spacing, className }))}
      {...props}
    >
      {children}
    </div>
  );
}
