import { Checkbox as BaseCheckbox } from '@base-ui-components/react/checkbox';
import { cn } from 'lib/utils';

export function Checkbox({
  ...props
}: React.ComponentProps<typeof BaseCheckbox.Root>) {
  return (
    <BaseCheckbox.Root
      {...props}
      className={cn(
        'size-4 flex items-center justify-center rounded-sm ring ring-input-border bg-input',
        'focus:outline-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary',
        'data-[checked]:bg-primary data-[checked]:ring-primary',
        'transition-colors duration-75',
        'disabled::opacity-70 disabled:pointer-events-none',
        props.className,
      )}
    >
      <BaseCheckbox.Indicator
        className="data-[unchecked]:hidden flex text-foreground"
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
                className="size-3"
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
