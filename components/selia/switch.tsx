import { Switch as BaseSwitch } from '@base-ui-components/react/switch';
import { cn } from 'lib/utils';

export function Switch({
  className,
  ...props
}: React.ComponentProps<typeof BaseSwitch.Root>) {
  return (
    <BaseSwitch.Root
      data-slot="switch"
      className={cn(
        'w-9 h-5 rounded-full flex items-center px-0.5',
        'ring ring-input-border bg-input',
        'data-checked:bg-primary data-checked:ring-primary',
        'transition-colors duration-75',
        'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary',
        className,
      )}
      {...props}
    >
      <BaseSwitch.Thumb
        data-slot="switch-thumb"
        className={cn(
          'size-4 bg-white rounded-full shadow',
          'data-checked:translate-x-4 transition-transform duration-75',
        )}
      />
    </BaseSwitch.Root>
  );
}
