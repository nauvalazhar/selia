import { cn } from 'lib/utils';

export function Label({ className, ...props }: React.ComponentProps<'label'>) {
  return (
    <label
      data-slot="label"
      className={cn(
        'text-foreground flex items-center gap-3 font-medium',
        className,
      )}
      {...props}
    />
  );
}
