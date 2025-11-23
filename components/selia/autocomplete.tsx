import * as React from 'react';
import { Autocomplete as BaseAutocomplete } from '@base-ui-components/react/autocomplete';
import { cn } from 'lib/utils';

export function Autocomplete({
  ...props
}: React.ComponentProps<typeof BaseAutocomplete.Root>) {
  return <BaseAutocomplete.Root data-slot="autocomplete" {...props} />;
}

export function AutocompleteInput({
  className,
  ...props
}: React.ComponentProps<typeof BaseAutocomplete.Input>) {
  return (
    <BaseAutocomplete.Input
      data-slot="autocomplete-input"
      {...props}
      className={cn('px-2.5 py-3 w-full outline-none', className)}
    />
  );
}

export function AutocompleteEmpty({
  className,
  ...props
}: React.ComponentProps<typeof BaseAutocomplete.Empty>) {
  return (
    <BaseAutocomplete.Empty
      data-slot="autocomplete-empty"
      {...props}
      className={cn(
        'flex items-center justify-center px-3 py-2.5 text-muted text-center',
        'empty:h-0 empty:p-0 empty:hidden',
        className,
      )}
    />
  );
}

export function AutocompleteList({
  className,
  ...props
}: React.ComponentProps<typeof BaseAutocomplete.List>) {
  return (
    <BaseAutocomplete.List
      data-slot="autocomplete-list"
      {...props}
      className={cn(
        'space-y-1 overflow-auto empty:hidden empty:h-0 empty:p-0',
        className,
      )}
    />
  );
}

export function AutocompleteGroup({
  className,
  ...props
}: React.ComponentProps<typeof BaseAutocomplete.Group>) {
  return (
    <BaseAutocomplete.Group
      data-slot="autocomplete-group"
      {...props}
      className={cn('pb-2 last:pb-0', className)}
    />
  );
}

export function AutocompleteGroupLabel({
  className,
  ...props
}: React.ComponentProps<typeof BaseAutocomplete.GroupLabel>) {
  return (
    <BaseAutocomplete.GroupLabel
      data-slot="autocomplete-group-label"
      {...props}
      className={cn('px-3 py-1.5 text-sm font-medium text-dimmed', className)}
    />
  );
}

export function AutocompleteCollection({
  ...props
}: React.ComponentProps<typeof BaseAutocomplete.Collection>) {
  return (
    <BaseAutocomplete.Collection
      data-slot="autocomplete-collection"
      {...props}
    />
  );
}

export function AutocompleteItem({
  className,
  ...props
}: React.ComponentProps<typeof BaseAutocomplete.Item>) {
  return (
    <BaseAutocomplete.Item
      data-slot="autocomplete-item"
      {...props}
      className={cn(
        'flex items-center gap-3.5 text-foreground px-3 py-2.5 rounded',
        'data-[highlighted]:bg-popover-accent data-[selected]:bg-popover-accent',
        className,
      )}
    />
  );
}

export function AutocompleteFooter({
  className,
  ...props
}: React.ComponentProps<'footer'>) {
  return (
    <footer
      data-slot="autocomplete-footer"
      {...props}
      className={cn('px-3 py-2.5 flex items-center gap-6', className)}
    />
  );
}

export function AutocompleteFooterItem({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="autocomplete-footer-item"
      {...props}
      className={cn('flex items-center gap-2.5', className)}
    />
  );
}

export function AutocompleteFooterText({
  className,
  ...props
}: React.ComponentProps<'span'>) {
  return (
    <span
      data-slot="autocomplete-footer-text"
      {...props}
      className={cn('text-sm text-muted font-medium', className)}
    />
  );
}
