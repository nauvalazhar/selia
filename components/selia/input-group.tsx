import { cn } from 'lib/utils';
import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const InputGroupContext = React.createContext<{
  size: VariantProps<typeof inputGroupVariants>['size'];
}>({
  size: 'md',
});

export const inputGroupVariants = cva(
  [
    'relative flex flex-wrap',
    'ring ring-input-border hover:ring-border05',
    '[&:has(>input:focus),&:has(>[role="combobox"]:focus),&:has(textarea:focus)]:ring-primary',
    '[&:has(>input:focus),&:has(>[role="combobox"]:focus),&:has(textarea:focus)]:ring-2',
    '[&>input,&>[role="combobox"],textarea]:flex-1',
    '[&>input,&>[role="combobox"],textarea]:bg-transparent',
    '[&>input,&>[role="combobox"],textarea]:ring-0',
    '[&>input,&>[role="combobox"],textarea]:focus:ring-0',
  ],
  {
    variants: {
      variant: {
        default: 'bg-input',
        subtle: 'bg-input-subtle',
      },
      size: {
        md: '[&>textarea]:py-3 rounded',
        lg: '[&>textarea]:p-3.5 rounded-xl',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  },
);

export function InputGroup({
  className,
  children,
  variant,
  size,
  ...props
}: React.ComponentProps<'div'> & VariantProps<typeof inputGroupVariants>) {
  return (
    <InputGroupContext value={{ size }}>
      <div
        data-slot="input-group"
        className={cn(inputGroupVariants({ variant, size, className }))}
        {...props}
      >
        {children}
      </div>
    </InputGroupContext>
  );
}

export const inputGroupAddonVariants = cva(
  [
    'flex items-center gap-2.5',
    '[&_svg]:size-4 [&_svg]:text-dimmed',
    '[&_button:not([role="combobox"])]:h-7 [&_button:not([role="combobox"])]:px-2',
    '[&_[role="combobox"]]:not-focus:ring-0',
    '[&.items-start,&.items-end]:py-3',
  ],
  {
    variants: {
      align: {
        start: 'not-[:has(>[role="combobox"])]:pl-2.5',
        end: 'not-[:has(>[role="combobox"])]:pr-2.5',
      },
    },
    defaultVariants: {
      align: 'start',
    },
  },
);

export function InputGroupAddon({
  className,
  children,
  align,
  ...props
}: React.ComponentProps<'div'> & VariantProps<typeof inputGroupAddonVariants>) {
  return (
    <div
      data-slot="input-group-addon"
      className={cn(inputGroupAddonVariants({ align, className }))}
      onClick={(e) => {
        if ((e.target as HTMLElement).closest('button')) {
          return;
        }
        e.currentTarget.parentElement?.querySelector('input')?.focus();
      }}
      {...props}
    >
      {children}
    </div>
  );
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
        '[&_svg]:size-4 [&_svg]:text-dimmed',
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}

export const inputGroupBarVariants = cva(
  ['flex w-full px-2.5 py-2.5 items-center'],
  {
    variants: {
      size: {
        md: 'px-2.5 py-1.5',
        lg: 'px-3.5 py-2.5',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
);

export function InputGroupBar({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  const { size } = React.use(InputGroupContext);

  return (
    <div
      data-slot="input-group-bar"
      className={cn(inputGroupBarVariants({ size, className }))}
      {...props}
    />
  );
}

export function InputGroupSeparator({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="input-group-separator"
      className={cn('w-full h-px bg-input-border', className)}
      {...props}
    />
  );
}
