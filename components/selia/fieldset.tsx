import * as React from 'react';
import { cn } from 'lib/utils';
import { Fieldset as BaseFieldset } from '@base-ui-components/react/fieldset';

export function Fieldset({
  className,
  ...props
}: React.ComponentProps<typeof BaseFieldset.Root>) {
  return (
    <BaseFieldset.Root
      className={cn(
        'flex flex-col',
        '*:data-[slot=text]:mt-2 *:data-[slot=text]:text-muted',
        '*:data-[slot=text]:mb-6',
        '[&_[data-slot="field"]:not([data-layout="inline"])]:not-last:mb-6',
        '[&_[data-slot="field"][data-layout="inline"]]:not-last:mb-2.5',
        '*:data-[slot=radio-group]:gap-0',
        '*:data-[slot=checkbox-group]:gap-0',
        className,
      )}
      {...props}
    />
  );
}

export function FieldsetLegend({
  className,
  ...props
}: React.ComponentProps<typeof BaseFieldset.Legend>) {
  return (
    <BaseFieldset.Legend
      className={cn('font-semibold text-foreground text-lg', className)}
      {...props}
    />
  );
}
