'use client';

import { cn } from '#utils';
import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { useRender } from '@base-ui/react/use-render';

export const inputGroupVariants = cva(
  [
    'relative flex flex-wrap transition-all',
    '[&>input,&>[role="combobox"],textarea]:flex-1',
    '[&>input,&>[role="combobox"],textarea]:bg-transparent',
    '[&>input,&>[role="combobox"],textarea]:ring-0',
    '[&>input,&>[role="combobox"],textarea]:shadow-none',
    '[&>input,&>[role="combobox"],textarea]:focus:ring-0',
    'has-[>[data-align^="block"]]:flex-col',
  ],
  {
    variants: {
      variant: {
        default: 'bg-input',
        subtle: 'bg-input/60',
        plain: 'bg-transparent focus:outline-none',
      },
    },
    compoundVariants: [
      {
        variant: ['default', 'subtle'],
        className: [
          'ring ring-input-border hover:ring-input-accent-border shadow-input rounded',
          '[&:has(>input:focus),&:has(>[role="combobox"]:focus),&:has(textarea:focus)]:ring-primary',
          '[&:has(>input:focus),&:has(>[role="combobox"]:focus),&:has(textarea:focus)]:ring-2',
        ],
      },
    ],
    defaultVariants: {
      variant: 'default',
    },
  },
);

export function InputGroup({
  className,
  children,
  variant,
  ...props
}: React.ComponentProps<'div'> & VariantProps<typeof inputGroupVariants>) {
  return (
    <div
      data-slot="input-group"
      className={cn(inputGroupVariants({ variant, className }))}
      {...props}
    >
      {children}
    </div>
  );
}

export const inputGroupAddonVariants = cva(
  [
    'flex items-center gap-1.5 shrink-0',
    '**:[svg]:size-4 **:[svg]:text-dimmed',
    '[&_[role="combobox"]]:not-focus:ring-0',
    '[&_[role="combobox"]]:not-focus:ring-transparent',
    '[&_[role="combobox"]]:shadow-none',
    '[&.items-start,&.items-end]:py-3',
  ],
  {
    variants: {
      align: {
        start: 'not-[:has(>[role="combobox"])]:pl-2.5',
        end: 'not-[:has(>[role="combobox"])]:pr-2.5',
        'block-start': 'px-3.5 pt-3.5',
        'block-end': 'px-3.5 pb-3.5',
      },
    },
    compoundVariants: [
      {
        align: ['start', 'end'],
        className: [
          '[&_button:not([role="combobox"])]:h-7 [&_button:not([role="combobox"])]:px-2',
          'has-[>button:not([role="combobox"])]:-mx-1',
        ],
      },
    ],
    defaultVariants: {
      align: 'start',
    },
  },
);

export function InputGroupAddon({
  className,
  align,
  render,
  ...props
}: useRender.ComponentProps<'div'> &
  VariantProps<typeof inputGroupAddonVariants>) {
  return useRender({
    defaultTagName: 'div',
    render,
    props: {
      'data-slot': 'input-group-addon',
      'data-align': align,
      className: cn(inputGroupAddonVariants({ align, className })),
      ...props,
    },
  });
}

export function InputGroupText({
  className,
  children,
  ...props
}: React.ComponentProps<'span'>) {
  return (
    <span
      data-slot="input-group-text"
      className={cn(
        'inline-flex items-center gap-1.5 text-muted select-none',
        '*:[svg]:size-4 *:[svg]:text-dimmed',
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
