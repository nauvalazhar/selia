import * as React from 'react';
import { Field as BaseField } from '@base-ui-components/react/field';
import { cn } from 'lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

export const fieldVariants = cva('flex', {
  variants: {
    inline: {
      true: 'flex-row gap-3 items-center',
      false: 'flex-col gap-2',
    },
  },
  defaultVariants: {
    inline: false,
  },
});

export function Field({
  className,
  inline,
  ...props
}: React.ComponentProps<typeof BaseField.Root> &
  VariantProps<typeof fieldVariants>) {
  return (
    <BaseField.Root
      data-slot="field"
      data-layout={inline ? 'inline' : 'block'}
      className={cn(fieldVariants({ inline, className }))}
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
      className={cn('text-foreground', className)}
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
