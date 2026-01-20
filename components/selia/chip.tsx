'use client';

import { useRender } from '@base-ui/react/use-render';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '#utils';

export const chipVariants = cva('inline-flex items-center ring font-medium', {
  variants: {
    variant: {
      default: 'bg-chip ring-chip-border text-foreground',
      primary: 'bg-primary ring-primary text-primary-foreground',
      outline: 'ring-chip-border text-foreground',
      plain: 'bg-transparent ring-transparent text-foreground',
    },
    size: {
      sm: 'text-sm px-1.5 h-5 rounded-sm [&_svg:not([class*=size-])]:size-3.5 gap-1',
      md: 'px-2 h-6.5 rounded-sm [&_svg:not([class*=size-])]:size-4 gap-2',
      lg: 'px-2.5 h-7.5 rounded-sm [&_svg:not([class*=size-])]:size-4.5 gap-3',
    },
    pill: {
      true: 'rounded-full',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'md',
  },
});

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
      className="opacity-60 hover:opacity-100 transition-opacity cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
      {...props}
    />
  );
}
