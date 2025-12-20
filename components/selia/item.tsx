import { useRender } from '@base-ui/react/use-render';
import { cn } from 'lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

export const itemVariants = cva(
  [
    'relative flex text-left transition-colors [a]:cursor-pointer',
    '[a,button]:hover:bg-accent',
  ],
  {
    variants: {
      variant: {
        default: [
          'bg-item border border-card-border rounded-(--item-rounded)',
          'has-[[data-checked]]:ring-primary has-[[data-checked]]:ring-2',
          'has-[[data-checked]]:bg-primary/10',
        ],
        outline: [
          'ring ring-item-border rounded-(--item-rounded)',
          'has-[[data-checked]]:ring-primary has-[[data-checked]]:ring-2',
          'has-[[data-checked]]:bg-primary/10',
        ],
        plain: 'bg-transparent',
        primary: 'bg-primary/10 rounded-(--item-rounded)',
        'primary-outline': 'border-primary/20 border rounded-(--item-rounded)',
        danger: 'bg-danger/10 rounded-(--item-rounded)',
        'danger-outline': 'border-danger/20 border rounded-(--item-rounded)',
        info: 'bg-info/10 rounded-(--item-rounded)',
        'info-outline': 'border-info/20 border rounded-(--item-rounded)',
        success: 'bg-success/10 rounded-(--item-rounded)',
        'success-outline': 'border-success/20 border rounded-(--item-rounded)',
        warning: 'bg-warning/10 rounded-(--item-rounded)',
        'warning-outline': 'border-warning/20 border rounded-(--item-rounded)',
        tertiary: 'bg-tertiary/10 rounded-(--item-rounded)',
        'tertiary-outline':
          'border-tertiary/20 border rounded-(--item-rounded)',
      },
      size: {
        sm: 'p-3.5 [--item-rounded:var(--radius)] gap-2.5',
        md: 'p-4 [--item-rounded:var(--radius-lg)] gap-3',
        lg: 'p-4.5 [--item-rounded:var(--radius-xl)] gap-3.5',
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
}: React.ComponentProps<'p'>) {
  return (
    <p
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
        'shrink-0 *:[img]:size-11 *:[img]:rounded *:[[data-slot=iconbox]]:size-9 *:[svg]:size-4.5',
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
