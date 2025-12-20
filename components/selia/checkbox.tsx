'use client';

import { Checkbox as BaseCheckbox } from '@base-ui/react/checkbox';
import { useRender } from '@base-ui/react/use-render';
import { CheckboxGroup as BaseCheckboxGroup } from '@base-ui/react/checkbox-group';
import { cn } from '#utils';

export function CheckboxGroup({
  className,
  ...props
}: React.ComponentProps<typeof BaseCheckboxGroup>) {
  return (
    <BaseCheckboxGroup
      data-slot="checkbox-group"
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
      'data-slot': 'checkbox-group-label',
      className: cn('text-foreground font-medium', props.className),
      ...props,
    },
  });
}

export function Checkbox({
  ...props
}: React.ComponentProps<typeof BaseCheckbox.Root>) {
  return (
    <BaseCheckbox.Root
      data-slot="checkbox"
      {...props}
      className={cn(
        'size-4 shrink-0 flex items-center justify-center rounded-xs border border-input-border bg-input shadow-input',
        'focus:outline-0 focus-visible:outline-2 focus-visible:outline-offset-2 outline-primary',
        'data-[checked]:bg-primary data-[checked]:border-primary',
        'transition-colors duration-75 hover:border-input-accent-border',
        'disabled::opacity-70 disabled:pointer-events-none',
        props.className,
      )}
    >
      <BaseCheckbox.Indicator
        className="data-[unchecked]:hidden flex"
        render={(props, state) => (
          <span {...props}>
            {state.indeterminate ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-3"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                className="size-3 text-primary-foreground"
                viewBox="0 0 24 24"
              >
                <path d="M20 6 9 17l-5-5"></path>
              </svg>
            )}
          </span>
        )}
      />
    </BaseCheckbox.Root>
  );
}
