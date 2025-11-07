import { cn } from 'lib/utils';

export function Kbd({ ...props }: React.ComponentProps<'kbd'>) {
  return (
    <kbd
      {...props}
      className={cn(
        'inline-flex items-center gap-1 px-1.5 h-5.5',
        'bg-kbd text-sm text-kbd-foreground',
        'ring ring-kbd-border rounded-md',
        'shadow inset-shadow-2xs inset-shadow-white/15',
        props.className,
      )}
    />
  );
}
