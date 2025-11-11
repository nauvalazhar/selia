import * as React from 'react';
import { Field as BaseField } from '@base-ui-components/react/field';
import { cn } from 'lib/utils';

export function Field({
  className,
  ...props
}: React.ComponentProps<typeof BaseField.Root>) {
  return (
    <BaseField.Root
      data-slot="field"
      className={cn('flex gap-2 flex-col', className)}
      {...props}
    />
  );
}

export function FieldLabel({
  className,
  ...props
}: React.ComponentProps<typeof BaseField.Label>) {
  return (
    <BaseField.Label
      data-slot="field-label"
      className={cn('text-foreground font-medium', className)}
      {...props}
    />
  );
}

export function FieldDescription({
  className,
  ...props
}: React.ComponentProps<typeof BaseField.Description>) {
  return (
    <BaseField.Description
      data-slot="field-description"
      className={cn('text-muted text-sm leading-relaxed', className)}
      {...props}
    />
  );
}

export function FieldError({
  className,
  ...props
}: React.ComponentProps<typeof BaseField.Error>) {
  return (
    <BaseField.Error
      data-slot="field-error"
      className={cn('text-destructive', className)}
      {...props}
    />
  );
}

export function FieldValidity({
  ...props
}: React.ComponentProps<typeof BaseField.Validity>) {
  return <BaseField.Validity data-slot="field-validity" {...props} />;
}
