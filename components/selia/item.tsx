import { useRender } from '@base-ui-components/react';
import { cn } from 'lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

export const itemVariants = cva(
  [
    'relative flex flex-1 text-left transition-colors [a]:cursor-pointer',
    'after:absolute after:bg-white/5 after:opacity-0 after:transition-opacity',
    '[a,button]:after:inset-0',
    '[a,button]:hover:after:opacity-100',
  ],
  {
    variants: {
      variant: {
        default: 'bg-card',
        outline: [
          'ring ring-border03',
          'has-[[data-checked]]:ring-primary has-[[data-checked]]:ring-2',
          'has-[[data-checked]]:bg-primary/10',
        ],
        plain: 'bg-transparent',
        primary: 'bg-primary/10',
        'primary-outline': 'border-primary/20 border',
        destructive: 'bg-destructive/10',
        'destructive-outline': 'border-destructive/20 border',
        info: 'bg-info/10',
        'info-outline': 'border-info/20 border',
        success: 'bg-success/10',
        'success-outline': 'border-success/20 border',
        warning: 'bg-warning/10',
        'warning-outline': 'border-warning/20 border',
        tertiary: 'bg-tertiary/10',
        'tertiary-outline': 'border-tertiary/20 border',
      },
      size: {
        sm: 'p-3.5 rounded-xl after:rounded-xl gap-2.5',
        md: 'p-4 rounded-2xl after:rounded-2xl gap-3',
        lg: 'p-4.5 rounded-3xl after:rounded-3xl gap-3.5',
      },
      direction: {
        row: 'flex-row',
        column: 'flex-col',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  },
);

export function Item({
  className,
  render,
  variant,
  size,
  direction,
  ...props
}: useRender.ComponentProps<'div'> & VariantProps<typeof itemVariants>) {
  return useRender({
    defaultTagName: 'div',
    render,
    props: {
      'data-slot': 'item',
      className: cn(itemVariants({ variant, size, direction, className })),
      ...props,
    },
  });
}

export function ItemContent({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="item-content"
      className={cn('flex flex-col items-start gap-0.5', className)}
      {...props}
    />
  );
}

export function ItemTitle({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="item-title"
      className={cn('text-foreground font-medium', className)}
      {...props}
    />
  );
}

export function ItemDescription({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="item-description"
      className={cn('text-muted leading-relaxed', className)}
      {...props}
    />
  );
}

export function ItemMeta({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="item-meta"
      className={cn('text-dimmed text-sm leading-relaxed', className)}
      {...props}
    />
  );
}

export function ItemMedia({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="item-media"
      className={cn(
        'shrink-0 *:[img]:size-11 *:[img]:rounded-xl *:[[data-slot=iconbox]]:size-9 *:[svg]:size-4.5',
        className,
      )}
      {...props}
    />
  );
}

export function ItemAction({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="item-action"
      className={cn(
        'ml-auto flex items-center gap-2.5 *:[svg]:size-4',
        className,
      )}
      {...props}
    />
  );
}
