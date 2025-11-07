import { useRender } from '@base-ui-components/react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from 'lib/utils';

export const chipVariants = cva(
  'inline-flex items-center gap-2 ring font-medium',
  {
    variants: {
      variant: {
        default: 'bg-accent03 ring-accent04 text-foreground',
        primary: 'bg-primary ring-primary text-primary-foreground',
        secondary: 'bg-secondary ring-secondary text-secondary-foreground',
        tertiary: 'bg-tertiary ring-tertiary text-tertiary-foreground',
        success: 'bg-success ring-success text-success-foreground',
        info: 'bg-info ring-info text-info-foreground',
        warning: 'bg-warning ring-warning text-warning-foreground',
        destructive:
          'bg-destructive ring-destructive text-destructive-foreground',
      },
      size: {
        sm: 'text-sm px-1.5 h-5 rounded-sm [&_svg]:size-3.5',
        md: 'px-2 h-6.5 rounded-lg [&_svg]:size-4',
        lg: 'px-2.5 h-7 rounded-xl [&_svg]:size-4.5',
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

export interface ChipProps
  extends useRender.ComponentProps<'div'>,
    VariantProps<typeof chipVariants> {}

export function Chip({
  render,
  variant,
  size,
  pill,
  className,
  ...props
}: ChipProps) {
  return useRender({
    defaultTagName: 'div',
    render,
    props: {
      className: cn(chipVariants({ variant, size, pill, className })),
      ...props,
    },
  });
}

export interface ChipActionProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function ChipAction({ ...props }: ChipActionProps) {
  return (
    <button
      className="opacity-60 hover:opacity-100 transition-opacity cursor-pointer"
      {...props}
    />
  );
}
