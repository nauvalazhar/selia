import { useRender } from '@base-ui-components/react/use-render';
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
      className={cn('flex flex-col', className)}
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
        'size-4 flex items-center justify-center rounded-full border border-input-border bg-input',
        'focus:outline-0 focus-visible:outline-2 focus-visible:outline-offset-2 outline-primary',
        'data-[checked]:bg-primary data-[checked]:border-primary',
        'transition-colors duration-75 hover:border-input-accent-border',
        'disabled::opacity-70 disabled:pointer-events-none',
        className,
      )}
      {...props}
    >
      <BaseRadio.Indicator className="size-2 rounded-full bg-primary-foreground" />
    </BaseRadio.Root>
  );
}
