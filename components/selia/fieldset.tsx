import * as React from 'react';
import { cn } from 'lib/utils';
import { Fieldset as BaseFieldset } from '@base-ui-components/react/fieldset';

export function Fieldset({
  className,
  ...props
}: React.ComponentProps<typeof BaseFieldset.Root>) {
  return (
    <BaseFieldset.Root
      className={cn('flex flex-col gap-4', className)}
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
      className={cn('text-lg font-semibold text-foreground', className)}
      {...props}
    />
  );
}
