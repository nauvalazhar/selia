'use client';

import { Menubar as BaseMenubar } from '@base-ui/react/menubar';
import { cn } from '#utils';

export function Menubar({
  className,
  ...props
}: React.ComponentProps<typeof BaseMenubar>) {
  return (
    <BaseMenubar
      className={cn(
        'flex items-center bg-background ring ring-card-border rounded p-1',
        className,
      )}
      {...props}
    />
  );
}
