import * as React from 'react';
import { Combobox as BaseCombobox } from '@base-ui-components/react/combobox';
import { cn } from 'lib/utils';
import { Chip } from './chip';
import { cva, type VariantProps } from 'class-variance-authority';

export function Combobox({
  ...props
}: React.ComponentProps<typeof BaseCombobox.Root>) {
  return <BaseCombobox.Root data-slot="combobox" {...props} />;
}

export const comboboxTriggerVariants = cva(
  [
    'px-2.5 w-full bg-input rounded placeholder:text-dimmed transition-all',
    'focus:outline-0 focus:ring-primary focus:ring-2',
    'has-focus:ring-primary has-focus:ring-2',
    'flex items-center gap-2.5 cursor-default',
    'data-disabled:opacity-70 data-disabled:pointer-events-none',
  ],
  {
    variants: {
      variant: {
        default:
          'bg-input ring ring-input-border hover:ring-input-accent-border shadow-input',
        subtle:
          'bg-input/60 ring ring-input-border hover:ring-input-accent-border shadow-input',
        plain: 'bg-transparent hover:bg-input',
      },
      pill: {
        true: 'rounded-full',
      },
    },
    defaultVariants: {
      variant: 'default',
      pill: false,
    },
  },
);

export function ComboboxTrigger({
  className,
  children,
  variant,
  ...props
}: React.ComponentProps<typeof BaseCombobox.Trigger> &
  VariantProps<typeof comboboxTriggerVariants>) {
  return (
    <BaseCombobox.Trigger
      data-slot="combobox-trigger"
      {...props}
      role="combobox"
      className={cn('h-9.5', comboboxTriggerVariants({ variant, className }))}
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
    <BaseCombobox.Value data-slot="combobox-value" {...props}>
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
      <div className="flex items-center gap-2.5 *:[svg]:size-4 *:[svg]:text-foreground">
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
  variant,
  pill,
  ref,
}: VariantProps<typeof comboboxTriggerVariants> & {
  placeholder: string;
  className?: string;
  ref?: React.RefObject<HTMLDivElement | null>;
}) {
  return (
    <BaseCombobox.Chips
      data-slot="combobox-chips"
      role="combobox"
      className={cn(
        comboboxTriggerVariants({ variant, pill, className }),
        'min-h-9.5 py-1 flex items-center flex-wrap gap-1.5',
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
  className,
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
          data-slot="combobox-content"
          {...popupProps}
          className={cn(
            'bg-popover ring ring-popover-border rounded shadow-popover overflow-y-auto',
            'w-(--anchor-width) max-h-[min(var(---available-height),23rem)]',
            'max-w-(--available-width) origin-(--transform-origin)',
            'p-1 outline-none transition-[transform,scale,opacity]',
            'data-[ending-style]:opacity-0 data-[ending-style]:scale-90',
            'data-[starting-style]:opacity-0 data-[starting-style]:scale-90',
            className,
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
      data-slot="combobox-search"
      placeholder="Search item"
      {...props}
      className={cn(
        'outline-none h-10 px-2.5 w-full border-b border-input-border mb-2',
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
      data-slot="combobox-empty"
      {...props}
      className={cn('px-3 py-1.5 text-dimmed empty:p-0')}
    />
  );
}

export function ComboboxList({
  className,
  ...props
}: React.ComponentProps<typeof BaseCombobox.List>) {
  return (
    <BaseCombobox.List
      data-slot="combobox-list"
      {...props}
      className={cn('space-y-0.5 outline-none', className)}
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
      data-slot="combobox-item"
      {...props}
      className={cn(
        'flex items-center text-foreground gap-3.5 py-2.5 px-3 rounded select-none',
        'group-data-[side=none]:min-w-[calc(var(--anchor-width))]',
        'data-[highlighted]:bg-popover-accent data-[selected]:bg-popover-accent',
        'focus-visible:outline-none',
        'pl-10 data-[selected]:pl-2.5',
        'data-disabled:opacity-70 data-disabled:pointer-events-none',
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
    <BaseCombobox.Group
      data-slot="combobox-group"
      {...props}
      className={cn('space-y-1', className)}
    />
  );
}

export function ComboboxGroupLabel({
  children,
  className,
  ...props
}: React.ComponentProps<typeof BaseCombobox.GroupLabel>) {
  return (
    <BaseCombobox.GroupLabel
      data-slot="combobox-group-label"
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
      data-slot="combobox-separator"
      {...props}
      className={cn('h-px my-1 bg-popover-border', className)}
    />
  );
}
