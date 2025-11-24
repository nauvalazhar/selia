import * as React from 'react';
import { Select as BaseSelect } from '@base-ui-components/react/select';
import { cn } from 'lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import { Chip } from './chip';

export type SelectItem = {
  value: string;
  label: React.ReactNode;
  icon?: React.ReactNode;
};

export function Select({
  ...props
}: React.ComponentProps<typeof BaseSelect.Root>) {
  return <BaseSelect.Root {...props} />;
}

export const selectVariants = cva(
  [
    'h-9.5 px-2.5 w-full bg-input rounded placeholder:text-dimmed transition-all',
    'focus:outline-0 focus:ring-primary focus:ring-2',
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

export function SelectTrigger({
  className,
  children,
  variant,
  pill,
  ...props
}: React.ComponentProps<typeof BaseSelect.Trigger> &
  VariantProps<typeof selectVariants>) {
  return (
    <BaseSelect.Trigger
      data-slot="select-trigger"
      className={cn(selectVariants({ variant, pill, className }))}
      {...props}
    >
      {children}

      <BaseSelect.Icon className="ml-auto size-4 text-muted pointer-events-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </BaseSelect.Icon>
    </BaseSelect.Trigger>
  );
}

export function SelectValue({
  className,
  placeholder = 'Select an option',
  ...props
}: React.ComponentProps<typeof BaseSelect.Value> & {
  placeholder?: string;
}) {
  return (
    <BaseSelect.Value
      data-slot="select-value"
      className={cn(className)}
      {...props}
    >
      {(value: string | SelectItem | null) => (
        <SelectRenderValue value={value} placeholder={placeholder} />
      )}
    </BaseSelect.Value>
  );
}

function SelectRenderValue({
  value,
  placeholder,
}: {
  value: string | SelectItem | SelectItem[] | null;
  placeholder: string;
}) {
  if (!value || (Array.isArray(value) && value.length === 0)) {
    return <span className="text-dimmed">{placeholder}</span>;
  }

  if (Array.isArray(value)) {
    const firstValue = value[0];
    const firstValueLabel =
      typeof firstValue === 'object' ? firstValue.label : firstValue;
    const additionalValues =
      value.length > 1 ? (
        <Chip variant="secondary" className="ml-1.5" size="sm">
          +{value.length - 1} more
        </Chip>
      ) : (
        ''
      );

    return (
      <>
        {firstValueLabel}
        {additionalValues}
      </>
    );
  }

  if (typeof value === 'object') {
    return (
      <div className="flex items-center gap-2.5 select-none *:[svg]:size-4 *:[svg]:text-popover-foreground">
        {value.icon}
        <span className="text-popover-foreground">{value.label}</span>
      </div>
    );
  }

  return <span className="text-popover-foreground select-none">{value}</span>;
}

export function SelectContent({
  popupProps,
  children,
  className,
  ...props
}: React.ComponentProps<typeof BaseSelect.Positioner> &
  VariantProps<typeof selectVariants> & {
    popupProps?: BaseSelect.Popup.Props;
  }) {
  return (
    <BaseSelect.Portal>
      <BaseSelect.Backdrop />
      <BaseSelect.Positioner {...props}>
        <BaseSelect.ScrollUpArrow className="top-1 left-1 right-1 z-10 absolute rounded h-5 text-xs text-popover-foreground flex items-center justify-around bg-popover-accent" />
        <BaseSelect.Popup
          data-slot="select-content"
          {...popupProps}
          className={cn(
            'group origin-(--transform-origin) bg-popover ring ring-popover-border rounded shadow-popover',
            'p-1 outline-none max-lg:w-(--anchor-width)',
            className,
          )}
        >
          <BaseSelect.Arrow />
          {children}
        </BaseSelect.Popup>
        <BaseSelect.ScrollDownArrow className="bottom-1 left-1 right-1 z-10 absolute rounded h-5 text-xs text-popover-foreground flex items-center justify-around bg-popover-accent" />
      </BaseSelect.Positioner>
    </BaseSelect.Portal>
  );
}

export function SelectList({
  className,
  ...props
}: React.ComponentProps<typeof BaseSelect.List>) {
  return (
    <BaseSelect.List
      data-slot="select-list"
      className={cn(
        'space-y-0.5 max-h-(--available-height) overflow-y-auto relative',
        className,
      )}
      {...props}
    />
  );
}

export function SelectItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof BaseSelect.Item>) {
  return (
    <BaseSelect.Item
      data-slot="select-item"
      className={cn(
        'flex items-center text-popover-foreground py-2.5 px-3 gap-3.5 rounded select-none',
        'group-data-[side=none]:min-w-[calc(var(--anchor-width))]',
        'data-[highlighted]:bg-popover-accent data-[selected]:bg-popover-accent',
        'focus-visible:outline-none',
        'data-disabled:opacity-70 data-disabled:pointer-events-none',
        className,
      )}
      {...props}
    >
      <BaseSelect.ItemText className="flex items-center gap-2.5 *:[svg]:size-4">
        {children}
      </BaseSelect.ItemText>
      <BaseSelect.ItemIndicator className="ml-auto">
        <svg
          className="size-4 text-primary"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </BaseSelect.ItemIndicator>
    </BaseSelect.Item>
  );
}

export function SelectGroup({
  className,
  ...props
}: React.ComponentProps<typeof BaseSelect.Group>) {
  return (
    <BaseSelect.Group
      data-slot="select-group"
      className={cn(className)}
      {...props}
    />
  );
}

export function SelectGroupLabel({
  className,
  ...props
}: React.ComponentProps<typeof BaseSelect.GroupLabel>) {
  return (
    <BaseSelect.GroupLabel
      data-slot="select-group-label"
      className={cn('px-3 py-1.5 text-sm font-medium text-dimmed', className)}
      {...props}
    />
  );
}

export function SelectSeparator({
  className,
  ...props
}: React.ComponentProps<typeof BaseSelect.Separator>) {
  return (
    <BaseSelect.Separator
      data-slot="select-separator"
      className={cn('h-px my-1 bg-popover-border', className)}
      {...props}
    />
  );
}
