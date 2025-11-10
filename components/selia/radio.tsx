import { useRender } from '@base-ui-components/react';
import { Radio as BaseRadio } from '@base-ui-components/react/radio';
import { RadioGroup as BaseRadioGroup } from '@base-ui-components/react/radio-group';
import { cn } from 'lib/utils';

export function RadioGroup({
  className,
  ...props
}: React.ComponentProps<typeof BaseRadioGroup>) {
  return (
    <BaseRadioGroup
      data-slot="radio-group"
      {...props}
      className={cn('flex flex-col gap-2.5', className)}
    />
  );
}

export function RadioGroupLabel({
  className,
  render,
  ...props
}: useRender.ComponentProps<'span'>) {
  return useRender({
    defaultTagName: 'span',
    render,
    props: {
      'data-slot': 'radio-group-label',
      className: cn('text-foreground', className),
      ...props,
    },
  });
}

export function Radio({
  className,
  ...props
}: React.ComponentProps<typeof BaseRadio.Root>) {
  return (
    <BaseRadio.Root
      data-slot="radio"
      className={cn(
        'size-4 flex items-center justify-center rounded-full ring ring-input-border bg-input',
        'focus:outline-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary',
        'data-[checked]:bg-primary data-[checked]:ring-primary',
        'transition-colors duration-75',
        'disabled::opacity-70 disabled:pointer-events-none',
        className,
      )}
      {...props}
    >
      <BaseRadio.Indicator className="size-2 rounded-full bg-foreground" />
    </BaseRadio.Root>
  );
}
