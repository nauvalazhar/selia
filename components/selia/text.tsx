import { useRender } from '@base-ui-components/react';
import { cn } from 'lib/utils';

export function Text({
  className,
  render,
  ...props
}: useRender.ComponentProps<'p'>) {
  return useRender({
    defaultTagName: 'p',
    render,
    props: {
      className: cn('text-base/6 text-foreground', className),
      ...props,
    },
  });
}

export function TextLink({
  className,
  render,
  ...props
}: useRender.ComponentProps<'a'>) {
  return useRender({
    defaultTagName: 'a',
    render,
    props: {
      className: cn('text-foreground underline', className),
      ...props,
    },
  });
}

export function Strong({
  className,
  ...props
}: React.ComponentProps<'strong'>) {
  return (
    <strong
      className={cn('font-semibold text-foreground', className)}
      {...props}
    />
  );
}

export function Code({ className, ...props }: React.ComponentProps<'code'>) {
  return (
    <code
      className={cn(
        'font-mono text-sm bg-accent03 px-1 py-px rounded-md text-foreground',
        className,
      )}
      {...props}
    />
  );
}
