import * as React from 'react';
import { Field as BaseField } from '@base-ui-components/react/field';
import { cn } from 'lib/utils';

export function Field({
  className,
  ...props
}: React.ComponentProps<typeof BaseField.Root>) {
  return (
    <BaseField.Root
      className={cn('flex flex-col gap-2', className)}
      {...props}
    />
  );
}

export function FieldLabel({
  className,
  ...props
}: React.ComponentProps<typeof BaseField.Label>) {
  return (
    <BaseField.Label className={cn('text-foreground', className)} {...props} />
  );
}

export function FieldDescription({
  className,
  ...props
}: React.ComponentProps<typeof BaseField.Description>) {
  return (
    <BaseField.Description
      className={cn('text-muted text-sm', className)}
      {...props}
    />
  );
}

export function FieldError({
  className,
  ...props
}: React.ComponentProps<typeof BaseField.Error>) {
  return (
    <BaseField.Error className={cn('text-destructive', className)} {...props} />
  );
}

export function FieldValidity({
  ...props
}: React.ComponentProps<typeof BaseField.Validity>) {
  return <BaseField.Validity {...props} />;
}
