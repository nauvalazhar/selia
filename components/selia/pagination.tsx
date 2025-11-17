import { useRender } from '@base-ui-components/react';
import { buttonVariants } from './button';
import { cn } from 'lib/utils';

export function Pagination({ ...props }: React.ComponentProps<'nav'>) {
  return (
    <nav
      data-slot="pagination"
      aria-label="Pagination"
      {...props}
      className={cn('flex justify-center', props.className)}
    />
  );
}

export function PaginationList({
  children,
  ...props
}: React.ComponentProps<'ul'>) {
  return (
    <ul
      data-slot="pagination-list"
      className="flex items-center gap-1"
      {...props}
    >
      {children}
    </ul>
  );
}

export function PaginationItem({
  active,
  disabled,
  render,
  ...props
}: useRender.ComponentProps<'a'> & {
  active?: boolean;
  disabled?: boolean;
}) {
  return (
    <li>
      {useRender({
        defaultTagName: 'a',
        render,
        props: {
          'data-slot': 'pagination-link',
          'aria-current': active ? 'page' : undefined,
          'aria-disabled': disabled ? true : undefined,
          className: cn(
            buttonVariants({
              variant: active ? 'secondary' : 'secondary-plain',
            }),
            'cursor-pointer',
            active && 'pointer-events-none',
            disabled && 'pointer-events-none opacity-70',
            props.className,
          ),
          ...props,
        },
      })}
    </li>
  );
}
