import * as React from 'react';
import { useRender } from '@base-ui-components/react/use-render';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from 'lib/utils';

export const buttonVariants = cva(
  [
    'relative font-semibold select-none',
    'inline-flex justify-center items-center gap-2.5 transition-colors',
    'after:absolute after:inset-0 after:bg-white/10 after:opacity-0 hover:after:opacity-100 after:transition-opacity',
    'focus:outline-0 focus-visible:outline-2 focus-visible:outline-offset-2',
    'before:size-4.5 before:bg-spinner before:-mr-7 before:opacity-0 before:scale-20 before:transition-[opacity,scale,margin-right]',
    '[&>svg]:size-4.5 [&>svg]:opacity-100 [&>svg]:transition-[opacity,scale,margin-right]',
    'disabled:opacity-70',
  ],
  {
    variants: {
      variant: {
        primary: [
          'bg-gradient-primary text-primary-foreground',
          'inset-shadow-2xs inset-shadow-white/15 shadow',
          'after:rounded outline-primary',
        ],
        'primary-subtle': [
          'bg-primary/15 hover:bg-primary/25 text-primary',
          'after:content-none outline-primary',
        ],
        'primary-outline': [
          'text-primary',
          'border-2 border-primary hover:bg-primary/15',
          'after:content-none outline-primary',
        ],
        'primary-plain': [
          'text-primary hover:bg-primary/25',
          'after:content-none outline-primary',
        ],
        secondary: [
          'bg-gradient-secondary text-secondary-foreground',
          'inset-shadow-2xs inset-shadow-white/15 shadow',
          'after:rounded outline-secondary',
        ],
        'secondary-subtle': [
          'bg-secondary/15 hover:bg-secondary/25 text-secondary-foreground',
          'after:content-none outline-secondary',
        ],
        'secondary-outline': [
          'text-secondary-foreground',
          'border-2 border-secondary hover:bg-secondary/15',
          'after:content-none outline-secondary',
        ],
        'secondary-plain': [
          'text-secondary-foreground hover:bg-secondary/25',
          'after:content-none outline-secondary shadow-none',
        ],
        tertiary: [
          'bg-gradient-tertiary text-tertiary-foreground',
          'inset-shadow-2xs inset-shadow-background/15 shadow',
          'after:rounded after:bg-background/10 focus-visible:outline-tertiary',
        ],
        'tertiary-subtle': [
          'bg-tertiary/15 hover:bg-tertiary/25 text-tertiary',
          'after:content-none outline-tertiary',
        ],
        'tertiary-outline': [
          'text-tertiary',
          'border-2 border-tertiary hover:bg-tertiary/15',
          'after:content-none outline-tertiary',
        ],
        'tertiary-plain': [
          'text-tertiary hover:bg-tertiary/25',
          'after:content-none outline-tertiary',
        ],
        destructive: [
          'bg-gradient-destructive text-destructive-foreground',
          'inset-shadow-2xs inset-shadow-white/15 shadow',
          'after:rounded outline-destructive',
        ],
        'destructive-subtle': [
          'bg-destructive/15 hover:bg-destructive/25 text-destructive',
          'after:content-none outline-destructive',
        ],
        'destructive-outline': [
          'text-destructive',
          'border-2 border-destructive hover:bg-destructive/15',
          'after:content-none outline-destructive',
        ],
        'destructive-plain': [
          'text-destructive hover:bg-destructive/25',
          'after:content-none outline-destructive',
        ],
      },
      size: {
        md: 'h-9.5 px-4 rounded',
        icon: 'size-9.5 rounded',
        xs: 'h-7 px-2 rounded-lg after:rounded-lg',
        'xs-icon': 'size-7.5 rounded-lg after:rounded-lg',
        sm: 'h-8.5 px-3 rounded-[10px] after:rounded-[10px]',
        'sm-icon': 'size-8.5 rounded-[10px] after:rounded-[10px]',
        lg: 'h-10.5 px-5 rounded-[14px] after:rounded-[14px]',
        'lg-icon': 'size-10.5 rounded-[14px] after:rounded-[14px]',
      },
      pill: {
        true: 'rounded-full after:rounded-full',
      },
      block: {
        true: 'w-full',
      },
      progress: {
        true: [
          'pointer-events-none opacity-70 [&>svg]:opacity-0 [&>svg]:scale-0 [&>svg]:-mr-7',
          'before:size-4.5 before:bg-spinner before:animate-spin before:mr-0 before:opacity-100 before:scale-100',
        ],
      },
    },
    compoundVariants: [
      {
        variant: 'tertiary',
        progress: true,
        className: 'before:bg-spinner-dark',
      },
    ],
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
);

interface ButtonProps
  extends useRender.ComponentProps<'button'>,
    VariantProps<typeof buttonVariants> {}

export function Button({
  render,
  variant,
  size,
  pill,
  progress,
  block,
  className,
  ...props
}: ButtonProps) {
  return useRender({
    defaultTagName: 'button',
    render,
    props: {
      ...props,
      className: cn(
        buttonVariants({ variant, size, pill, progress, block, className }),
      ),
    },
  });
}
