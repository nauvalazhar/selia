import * as React from 'react';
import { Combobox as BaseCombobox } from '@base-ui-components/react/combobox';
import { cn } from 'lib/utils';
import { Chip } from 'components/selia/chip';

export function Combobox({
  ...props
}: React.ComponentProps<typeof BaseCombobox.Root>) {
  return <BaseCombobox.Root {...props} />;
}

const comboboxTriggerClasses = cn(
  'px-2.5 w-full bg-input rounded placeholder:text-dimmed transition-colors',
  'ring ring-input-border hover:ring-border05',
  'focus:outline-0 focus:ring-primary focus:ring-2',
  'has-focus:ring-primary has-focus:ring-2',
  'flex items-center',
);

export function ComboboxTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof BaseCombobox.Trigger>) {
  return (
    <div className="relative flex items-center">
      <BaseCombobox.Trigger
        {...props}
        className={cn('h-9.5', comboboxTriggerClasses, className)}
      >
        {children}
        <BaseCombobox.Icon className="text-muted ml-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </BaseCombobox.Icon>
      </BaseCombobox.Trigger>
      <div className="absolute h-full right-8 flex items-center">
        <BaseCombobox.Clear className="size-3.5 text-muted">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </BaseCombobox.Clear>
      </div>
    </div>
  );
}

export type ComboboxItem = {
  value: string;
  label: string;
  icon?: React.ReactNode;
};

export function ComboboxValue({
  placeholder = 'Select an option',
  ...props
}: React.ComponentProps<typeof BaseCombobox.Value> & {
  placeholder?: string;
}) {
  return (
    <BaseCombobox.Value {...props}>
      {(value: string | ComboboxItem) => (
        <ComboboxRenderValue value={value} placeholder={placeholder} />
      )}
    </BaseCombobox.Value>
  );
}

function ComboboxRenderValue({
  value,
  placeholder,
}: {
  value: string | ComboboxItem;
  placeholder: string;
}) {
  if (!value) {
    return <span className="text-dimmed">{placeholder}</span>;
  }

  if (typeof value === 'object') {
    return (
      <div className="flex items-center gap-2.5 [&_svg]:size-4 [&_svg]:text-foreground">
        {value.icon}
        <span className="text-foreground">{value.label}</span>
      </div>
    );
  }

  return <span className="text-foreground">{value}</span>;
}

export function ComboboxInput({
  className,
  placeholder,
  ref,
}: {
  placeholder: string;
  className?: string;
  ref?: React.RefObject<HTMLDivElement | null>;
}) {
  return (
    <BaseCombobox.Chips
      className={cn(
        'min-h-9.5 py-1 flex items-center flex-wrap gap-1.5',
        comboboxTriggerClasses,
        className,
      )}
      ref={ref}
    >
      <BaseCombobox.Value>
        {(value: ComboboxItem[]) => (
          <React.Fragment>
            {value.map((item) => (
              <BaseCombobox.Chip
                key={item.value}
                render={<Chip />}
                className={cn(
                  'focus-visible:outline-none focus-visible:bg-primary focus-visible:text-primary-foreground',
                  'focus-visible:ring-primary',
                )}
              >
                {item.label}
                <BaseCombobox.ChipRemove>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="size-3.5 opacity-60 hover:opacity-100 transition-colors"
                  >
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                </BaseCombobox.ChipRemove>
              </BaseCombobox.Chip>
            ))}
            <BaseCombobox.Input
              placeholder={value.length === 0 ? placeholder : ''}
              className={cn('min-w-4 flex-1 outline-none')}
            />
          </React.Fragment>
        )}
      </BaseCombobox.Value>
    </BaseCombobox.Chips>
  );
}

export function ComboboxContent({
  popupProps,
  children,
  ...props
}: React.ComponentProps<typeof BaseCombobox.Positioner> & {
  popupProps?: BaseCombobox.Popup.Props;
}) {
  return (
    <BaseCombobox.Portal>
      <BaseCombobox.Backdrop />
      <BaseCombobox.Positioner sideOffset={6} {...props}>
        <BaseCombobox.Popup
          {...popupProps}
          className={cn(
            'bg-popover ring ring-popover-border rounded shadow',
            'w-(--anchor-width) max-h-[min(var(---available-height),23rem)]',
            'max-w-(--available-width) origin-(--transform-origin)',
            'p-1 outline-none transition-[transform,scale,opacity]',
            'data-[ending-style]:opacity-0 data-[ending-style]:scale-90',
            'data-[starting-style]:opacity-0 data-[starting-style]:scale-90',
            popupProps?.className,
          )}
        >
          {children}
        </BaseCombobox.Popup>
      </BaseCombobox.Positioner>
    </BaseCombobox.Portal>
  );
}

export function ComboboxSearch({
  className,
  ...props
}: React.ComponentProps<typeof BaseCombobox.Input>) {
  return (
    <BaseCombobox.Input
      {...props}
      className={cn(
        'outline-none h-9.5 px-2.5 w-full border-b border-input-border mb-2',
        className,
      )}
    />
  );
}

export function ComboboxEmpty({
  className,
  ...props
}: React.ComponentProps<typeof BaseCombobox.Empty>) {
  return (
    <BaseCombobox.Empty
      {...props}
      className={cn('px-2.5 py-2 text-dimmed empty:p-0')}
    />
  );
}

export function ComboboxList({
  className,
  ...props
}: React.ComponentProps<typeof BaseCombobox.List>) {
  return (
    <BaseCombobox.List
      {...props}
      className={cn('space-y-1 outline-none', className)}
    />
  );
}

export function ComboboxItem({
  children,
  className,
  ...props
}: React.ComponentProps<typeof BaseCombobox.Item>) {
  return (
    <BaseCombobox.Item
      {...props}
      className={cn(
        'flex items-center text-foreground gap-3.5 py-2 px-2.5 rounded select-none',
        'group-data-[side=none]:min-w-[calc(var(--anchor-width))]',
        'data-[highlighted]:bg-accent04 data-[selected]:bg-accent04',
        'focus-visible:outline-none',
        'pl-10 data-[selected]:pl-2.5',
        className,
      )}
    >
      <BaseCombobox.ItemIndicator>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="size-4"
        >
          <path d="M20 6 9 17l-5-5" />
        </svg>
      </BaseCombobox.ItemIndicator>
      {children}
    </BaseCombobox.Item>
  );
}

export function ComboboxGroup({
  children,
  className,
  ...props
}: React.ComponentProps<typeof BaseCombobox.Group>) {
  return (
    <BaseCombobox.Group {...props} className={cn('space-y-1', className)} />
  );
}

export function ComboboxGroupLabel({
  children,
  className,
  ...props
}: React.ComponentProps<typeof BaseCombobox.GroupLabel>) {
  return (
    <BaseCombobox.GroupLabel
      {...props}
      className={cn('px-2.5 py-1.5 text-sm font-medium text-dimmed', className)}
    />
  );
}

export function ComboboxSeparator({
  className,
  ...props
}: React.ComponentProps<typeof BaseCombobox.Separator>) {
  return (
    <BaseCombobox.Separator
      {...props}
      className={cn('h-px my-1 bg-border02', className)}
    />
  );
}
