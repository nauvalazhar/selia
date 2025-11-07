import { useRender } from '@base-ui-components/react';
import { buttonVariants } from 'components/selia/button';
import { cn } from 'lib/utils';

export function Pagination({ ...props }: React.ComponentProps<'nav'>) {
  return (
    <nav {...props} className={cn('flex justify-center', props.className)} />
  );
}

export function PaginationList({ ...props }: React.ComponentProps<'ul'>) {
  return (
    <ul {...props} className={cn('flex items-center gap-1', props.className)} />
  );
}

export function PaginationItem({ ...props }: React.ComponentProps<'li'>) {
  return <li {...props} className={cn(props.className)} />;
}

export function PaginationLink({
  active,
  disabled,
  render,
  ...props
}: useRender.ComponentProps<'a'> & {
  active?: boolean;
  disabled?: boolean;
}) {
  return useRender({
    defaultTagName: 'a',
    render,
    props: {
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
  });
}

export function PaginationEllipsis({ ...props }: React.ComponentProps<'span'>) {
  return (
    <span
      {...props}
      className={cn('inline-flex items-center gap-2', props.className)}
    />
  );
}
