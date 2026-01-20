'use client';

import { cn } from '#utils';

export function Label({ className, ...props }: React.ComponentProps<'label'>) {
  return (
    <label
      data-slot="label"
      className={cn(
        'text-foreground flex items-center gap-3',
        'cursor-pointer has-[>[disabled],>[data-disabled]]:cursor-not-allowed',
        className,
      )}
      {...props}
    />
  );
}
