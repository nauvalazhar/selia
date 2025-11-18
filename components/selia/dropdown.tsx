import { Menu as BaseMenu } from '@base-ui-components/react/menu';
import { cn } from 'lib/utils';

export function Dropdown({
  ...props
}: React.ComponentProps<typeof BaseMenu.Root>) {
  return <BaseMenu.Root data-slot="dropdown" {...props} />;
}

export function DropdownTrigger({
  ...props
}: React.ComponentProps<typeof BaseMenu.Trigger>) {
  return <BaseMenu.Trigger data-slot="dropdown-trigger" {...props} />;
}

export function DropdownContent({
  popupProps,
  children,
  className,
  ...props
}: React.ComponentProps<typeof BaseMenu.Positioner> & {
  popupProps?: BaseMenu.Popup.Props;
}) {
  return (
    <BaseMenu.Portal>
      <BaseMenu.Backdrop />
      <BaseMenu.Positioner sideOffset={6} {...props}>
        <BaseMenu.Popup
          data-slot="dropdown-content"
          {...popupProps}
          className={cn(
            'origin-(--transform-origin) bg-popover ring ring-popover-border rounded shadow',
            'p-1 outline-none transition-[transform,scale,opacity]',
            'data-[ending-style]:opacity-0 data-[ending-style]:scale-90',
            'data-[starting-style]:opacity-0 data-[starting-style]:scale-90',
            '**:data-[slot=item]:p-0',
            className,
          )}
        >
          {children}
        </BaseMenu.Popup>
      </BaseMenu.Positioner>
    </BaseMenu.Portal>
  );
}

const dropdownItemClasses = [
  'flex items-center text-foreground gap-3.5 py-2 px-2.5 rounded',
  'cursor-default select-none',
  'data-[highlighted]:bg-accent-04 data-[selected]:bg-accent-04',
  'data-[popup-open]:bg-accent-04',
  'focus-visible:outline-none',
  '*:[svg]:size-4 *:[svg]:text-foreground',
  '*:data-[slot=switch]:ml-auto',
];

export function DropdownItem({
  ...props
}: React.ComponentProps<typeof BaseMenu.Item>) {
  return (
    <BaseMenu.Item
      data-slot="dropdown-item"
      {...props}
      className={cn(dropdownItemClasses, props.className)}
    />
  );
}

export function DropdownSeparator({
  ...props
}: React.ComponentProps<typeof BaseMenu.Separator>) {
  return (
    <BaseMenu.Separator
      data-slot="dropdown-separator"
      className={cn('h-px my-1 bg-boder-04', props.className)}
      {...props}
    />
  );
}

export function DropdownSubmenu({
  ...props
}: React.ComponentProps<typeof BaseMenu.SubmenuRoot>) {
  return <BaseMenu.SubmenuRoot data-slot="dropdown-submenu" {...props} />;
}

export function DropdownSubmenuTrigger({
  ...props
}: React.ComponentProps<typeof BaseMenu.SubmenuTrigger>) {
  return (
    <BaseMenu.SubmenuTrigger
      data-slot="dropdown-submenu-trigger"
      {...props}
      className={cn(
        dropdownItemClasses,
        'after:bg-chevron-right after:size-4 after:ml-auto',
        props.className,
      )}
    />
  );
}

export function DropdownGroup({
  ...props
}: React.ComponentProps<typeof BaseMenu.Group>) {
  return <BaseMenu.Group data-slot="dropdown-group" {...props} />;
}

export function DropdownGroupLabel({
  ...props
}: React.ComponentProps<typeof BaseMenu.GroupLabel>) {
  return (
    <BaseMenu.GroupLabel
      data-slot="dropdown-group-label"
      className={cn(
        'px-2.5 py-1.5 text-dimmed font-medium text-sm',
        props.className,
      )}
      {...props}
    />
  );
}

export function DropdownCheckboxItem({
  children,
  ...props
}: React.ComponentProps<typeof BaseMenu.CheckboxItem>) {
  return (
    <BaseMenu.CheckboxItem
      data-slot="dropdown-checkbox-item"
      {...props}
      className={cn(
        dropdownItemClasses,
        'pl-10 data-[checked]:pl-2.5',
        props.className,
      )}
    >
      <BaseMenu.CheckboxItemIndicator className="w-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
          className="size-4"
          viewBox="0 0 24 24"
        >
          <path d="M20 6 9 17l-5-5"></path>
        </svg>
      </BaseMenu.CheckboxItemIndicator>
      {children}
    </BaseMenu.CheckboxItem>
  );
}

export function DropdownRadioGroup({
  ...props
}: React.ComponentProps<typeof BaseMenu.RadioGroup>) {
  return <BaseMenu.RadioGroup data-slot="dropdown-radio-group" {...props} />;
}

export function DropdownRadioItem({
  children,
  ...props
}: React.ComponentProps<typeof BaseMenu.RadioItem>) {
  return (
    <BaseMenu.RadioItem
      data-slot="dropdown-radio-item"
      {...props}
      className={cn(
        dropdownItemClasses,
        'pl-10 data-[checked]:pl-2.5',
        props.className,
      )}
    >
      <BaseMenu.RadioItemIndicator className="w-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="fill-foreground !w-2 mx-auto"
        >
          <circle cx="12" cy="12" r="10" />
        </svg>
      </BaseMenu.RadioItemIndicator>
      {children}
    </BaseMenu.RadioItem>
  );
}
