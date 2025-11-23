import { useRender } from '@base-ui-components/react/use-render';
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
      'data-slot': 'text',
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
      'data-slot': 'text-link',
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
      data-slot="text-strong"
      className={cn('font-semibold text-foreground', className)}
      {...props}
    />
  );
}

export function Code({ className, ...props }: React.ComponentProps<'code'>) {
  return (
    <code
      data-slot="text-code"
      className={cn(
        'font-mono text-sm rounded-md text-foreground after:content-["`"] before:content-["`"]',
        className,
      )}
      {...props}
    />
  );
}
