import * as React from 'react';
import { cn } from 'lib/utils';
import { Fieldset as BaseFieldset } from '@base-ui-components/react/fieldset';

export function Fieldset({
  className,
  ...props
}: React.ComponentProps<typeof BaseFieldset.Root>) {
  return (
    <BaseFieldset.Root
      data-slot="fieldset"
      className={cn(
        'flex flex-col gap-0',
        '*:data-[slot=text]:text-muted',
        '*:data-[slot=text]:mb-6',
        '[&_[data-slot="field"]:not([data-layout="inline"])]:not-last:mb-6',
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
      data-slot="fieldset-legend"
      className={cn('font-semibold text-foreground text-lg mb-2', className)}
      {...props}
    />
  );
}
