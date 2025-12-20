'use client';

import { Meter as BaseMeter } from '@base-ui/react/meter';
import { cn } from '#utils';

export function Meter({
  className,
  children,
  ...props
}: React.ComponentProps<typeof BaseMeter.Root>) {
  return (
    <BaseMeter.Root
      data-slot="meter"
      {...props}
      className={cn('flex flex-wrap gap-1.5 justify-between', className)}
    >
      {children}
      <BaseMeter.Track className="h-1.5 w-full rounded-full bg-track">
        <BaseMeter.Indicator className="rounded-full bg-primary transition-all duration-500" />
      </BaseMeter.Track>
    </BaseMeter.Root>
  );
}

export function MeterLabel({
  className,
  ...props
}: React.ComponentProps<typeof BaseMeter.Label>) {
  return (
    <BaseMeter.Label
      data-slot="meter-label"
      {...props}
      className={cn('font-medium text-foreground', className)}
    />
  );
}

export function MeterValue({
  className,
  ...props
}: React.ComponentProps<typeof BaseMeter.Value>) {
  return (
    <BaseMeter.Value
      data-slot="meter-value"
      {...props}
      className={cn('text-sm text-dimmed', className)}
    />
  );
}
