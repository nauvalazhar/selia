import { useRender } from '@base-ui-components/react';
import { CheckboxGroup as BaseCheckboxGroup } from '@base-ui-components/react/checkbox-group';
import { cn } from 'lib/utils';

export function CheckboxGroup({
  className,
  ...props
}: React.ComponentProps<typeof BaseCheckboxGroup>) {
  return (
    <BaseCheckboxGroup
      {...props}
      className={cn('flex flex-col gap-2.5', className)}
    />
  );
}

export function CheckboxGroupLabel({
  render,
  ...props
}: useRender.ComponentProps<'span'>) {
  return useRender({
    defaultTagName: 'span',
    render,
    props: {
      className: cn('text-foreground', props.className),
      ...props,
    },
  });
}
