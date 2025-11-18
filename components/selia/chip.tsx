import { useRender } from '@base-ui-components/react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from 'lib/utils';

export const chipVariants = cva(
  'inline-flex items-center gap-2 ring font-medium',
  {
    variants: {
      variant: {
        default: 'bg-accent-03 ring-accent-04 text-foreground',
        primary: 'bg-primary ring-primary text-primary-foreground',
        secondary: 'bg-secondary ring-secondary text-secondary-foreground',
        tertiary: 'bg-tertiary ring-tertiary text-tertiary-foreground',
        success: 'bg-success ring-success text-success-foreground',
        info: 'bg-info ring-info text-info-foreground',
        warning: 'bg-warning ring-warning text-warning-foreground',
        danger: 'bg-danger ring-danger text-danger-foreground',
      },
      size: {
        sm: 'text-sm px-1.5 h-5 rounded-md *:[svg]:size-3.5',
        md: 'px-2 h-6.5 rounded-lg *:[svg]:size-4',
        lg: 'px-2.5 h-7.5 rounded-lg *:[svg]:size-4.5',
      },
      pill: {
        true: 'rounded-full',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  },
);

export function Chip({
  render,
  variant,
  size,
  pill,
  className,
  ...props
}: useRender.ComponentProps<'div'> & VariantProps<typeof chipVariants>) {
  return useRender({
    defaultTagName: 'div',
    render,
    props: {
      'data-slot': 'chip',
      className: cn(chipVariants({ variant, size, pill, className })),
      ...props,
    },
  });
}

export function ChipButton({ ...props }: useRender.ComponentProps<'button'>) {
  return (
    <button
      data-slot="chip-button"
      className="opacity-60 hover:opacity-100 transition-opacity cursor-pointer"
      {...props}
    />
  );
}
