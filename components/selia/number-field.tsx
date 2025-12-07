import { NumberField as BaseNumberField } from '@base-ui-components/react/number-field';
import { cn } from 'lib/utils';

export function NumberField({
  className,
  ...props
}: React.ComponentProps<typeof BaseNumberField.Root>) {
  return (
    <BaseNumberField.Root
      data-slot="number-field"
      {...props}
      className={cn('flex flex-col items-start gap-2', className)}
    />
  );
}

export function NumberFieldScrubArea({
  className,
  children,
  ...props
}: React.ComponentProps<typeof BaseNumberField.ScrubArea>) {
  return (
    <BaseNumberField.ScrubArea
      data-slot="number-field-scrub-area"
      {...props}
      className={cn('cursor-ew-resize', className)}
    >
      {children}
      <NumberFieldScrubAreaCursor />
    </BaseNumberField.ScrubArea>
  );
}

export function NumberFieldScrubAreaCursor({
  ...props
}: React.ComponentProps<typeof BaseNumberField.ScrubAreaCursor>) {
  return (
    <BaseNumberField.ScrubAreaCursor
      data-slot="number-field-scrub-area-cursor"
      {...props}
    >
      <svg
        width="26"
        height="14"
        viewBox="0 0 24 14"
        fill="black"
        stroke="white"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M19.5 5.5L6.49737 5.51844V2L1 6.9999L6.5 12L6.49737 8.5L19.5 8.5V12L25 6.9999L19.5 2V5.5Z" />
      </svg>
    </BaseNumberField.ScrubAreaCursor>
  );
}

export function NumberFieldGroup({
  className,
  ...props
}: React.ComponentProps<typeof BaseNumberField.Group>) {
  return (
    <BaseNumberField.Group
      data-slot="number-field-group"
      {...props}
      className={cn(
        'flex h-9.5 rounded',
        'ring ring-input-border bg-input shadow-input',
        'hover:ring-input-accent-border',
        '**:[svg]:size-4.5',
        '*:[button]:size-9.5 *:[button]:flex *:[button]:items-center *:[button]:justify-center',
        '*:[button]:transition-all *:[button]:duration-100',
        '*:first:border-r *:last:border-l *:border-input-border',
        '*:first:rounded-l *:last:rounded-r',
        '*:[button]:hover:bg-accent',
        className,
      )}
    />
  );
}

export function NumberFieldDecrement({
  className,
  ...props
}: React.ComponentProps<typeof BaseNumberField.Decrement>) {
  return (
    <BaseNumberField.Decrement
      data-slot="number-field-decrement"
      {...props}
      className={cn(className)}
    />
  );
}

export function NumberFieldIncrement({
  className,
  ...props
}: React.ComponentProps<typeof BaseNumberField.Increment>) {
  return (
    <BaseNumberField.Increment
      data-slot="number-field-increment"
      {...props}
      className={cn(className)}
    />
  );
}

export function NumberFieldInput({
  className,
  ...props
}: React.ComponentProps<typeof BaseNumberField.Input>) {
  return (
    <BaseNumberField.Input
      data-slot="number-field-input"
      {...props}
      className={cn(
        'w-20 px-2.5 z-10 text-center',
        'text-foreground placeholder:text-dimmed transition-all',
        'hover:ring-input-accent-border focus:outline-0 focus:ring-primary focus:ring-2',
        'disabled:opacity-70 disabled:pointer-events-none',
        className,
      )}
    />
  );
}
