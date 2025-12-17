import * as React from 'react';
import { useRender } from '@base-ui/react/use-render';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from 'lib/utils';

export const buttonVariants = cva(
  [
    'relative font-medium select-none',
    'inline-flex justify-center items-center gap-2.5 transition-colors',
    'after:absolute after:inset-0 after:bg-white/15 after:opacity-0 hover:after:opacity-100',
    'active:after:opacity-100 after:transition-opacity',
    'focus:outline-0 focus-visible:outline-2 focus-visible:outline-offset-2',
    'before:size-4.5 before:bg-spinner before:-mr-7 before:opacity-0 before:scale-20 before:transition-[opacity,scale,margin-right]',
    '[&>svg]:opacity-100 [&>svg]:transition-[opacity,scale,margin-right]',
    'disabled:opacity-70 disabled:pointer-events-none',
  ],
  {
    variants: {
      variant: {
        primary: [
          'bg-primary text-primary-foreground **:[svg]:text-primary-foreground',
          'ring ring-primary-border',
          'inset-shadow-2xs inset-shadow-white/15 shadow',
          'after:rounded outline-primary',
        ],
        secondary: [
          'bg-secondary text-secondary-foreground **:[svg]:text-secondary-foreground',
          'ring ring-secondary-border',
          'inset-shadow-2xs inset-shadow-white/15 shadow',
          'after:rounded outline-secondary',
        ],
        tertiary: [
          'bg-tertiary hover:bg-tertiary/90 text-tertiary-foreground **:[svg]:text-tertiary-foreground',
          'ring ring-tertiary-border',
          'inset-shadow-2xs inset-shadow-background/15 shadow',
          'after:rounded after:bg-background/10 focus-visible:outline-tertiary',
        ],
        danger: [
          'bg-danger text-danger-foreground **:[svg]:text-danger-foreground',
          'ring ring-danger-border',
          'inset-shadow-2xs inset-shadow-white/15 shadow',
          'after:rounded outline-danger',
        ],
        outline: [
          'text-foreground **:[svg]:text-foreground',
          'ring ring-border hover:bg-accent active:bg-accent',
          'after:content-none outline-border',
        ],
        plain: [
          'text-foreground hover:bg-accent active:bg-accent **:[svg]:text-foreground',
          'after:content-none outline-border',
        ],
      },
      size: {
        xs: 'h-7 px-2 rounded-sm after:rounded-sm *:[svg]:size-4',
        'xs-icon': 'size-7.5 rounded-sm after:rounded-sm *:[svg]:size-4',
        sm: 'h-8.5 px-3 rounded after:rounded *:[svg]:size-4.5',
        'sm-icon': 'size-8.5 rounded after:rounded *:[svg]:size-4.5',
        md: 'h-9.5 px-4 rounded *:[svg]:size-4.5',
        icon: 'size-9.5 rounded *:[svg]:size-4.5',
        lg: 'h-11.5 px-5.5 rounded-lg after:rounded-lg *:[svg]:size-4.5',
        'lg-icon': 'size-11.5 rounded-lg after:rounded-lg *:[svg]:size-4.5',
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

export function Button({
  render,
  variant,
  size,
  pill,
  progress,
  block,
  className,
  ...props
}: useRender.ComponentProps<'button'> & VariantProps<typeof buttonVariants>) {
  return useRender({
    defaultTagName: 'button',
    render,
    props: {
      'data-slot': 'button',
      ...props,
      className: cn(
        buttonVariants({ variant, size, pill, progress, block, className }),
      ),
    },
  });
}
