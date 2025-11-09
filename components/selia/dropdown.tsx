import { Menu as BaseMenu } from '@base-ui-components/react/menu';
import { cn } from 'lib/utils';

export function Dropdown({
  ...props
}: React.ComponentProps<typeof BaseMenu.Root>) {
  return <BaseMenu.Root {...props} />;
}

export function DropdownTrigger({
  ...props
}: React.ComponentProps<typeof BaseMenu.Trigger>) {
  return <BaseMenu.Trigger {...props} />;
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
      <BaseMenu.Positioner {...props}>
        <BaseMenu.Popup
          {...popupProps}
          className={cn(
            'origin-(--transform-origin) bg-popover ring ring-popover-border rounded shadow',
            'p-1 outline-none transition-[transform,scale,opacity]',
            'data-[ending-style]:opacity-0 data-[ending-style]:scale-90',
            'data-[starting-style]:opacity-0 data-[starting-style]:scale-90',
            className,
          )}
        >
          {children}
        </BaseMenu.Popup>
      </BaseMenu.Positioner>
    </BaseMenu.Portal>
  );
}

export function DropdownArrow({
  ...props
}: React.ComponentProps<typeof BaseMenu.Arrow>) {
  return (
    <BaseMenu.Arrow
      {...props}
      className={cn(
        'data-[side=bottom]:top-[-8px] data-[side=left]:right-[-13px] data-[side=left]:rotate-90 data-[side=right]:left-[-13px] data-[side=right]:-rotate-90 data-[side=top]:bottom-[-8px] data-[side=top]:rotate-180',
        props.className,
      )}
    >
      <svg width="20" height="10" viewBox="0 0 20 10" fill="none">
        <path
          d="M9.66437 2.60207L4.80758 6.97318C4.07308 7.63423 3.11989 8 2.13172 8H0V10H20V8H18.5349C17.5468 8 16.5936 7.63423 15.8591 6.97318L11.0023 2.60207C10.622 2.2598 10.0447 2.25979 9.66437 2.60207Z"
          className="fill-popover"
        />
        <path
          d="M8.99542 1.85876C9.75604 1.17425 10.9106 1.17422 11.6713 1.85878L16.5281 6.22989C17.0789 6.72568 17.7938 7.00001 18.5349 7.00001L15.89 7L11.0023 2.60207C10.622 2.2598 10.0447 2.2598 9.66436 2.60207L4.77734 7L2.13171 7.00001C2.87284 7.00001 3.58774 6.72568 4.13861 6.22989L8.99542 1.85876Z"
          className="fill-popover-border"
        />
        <path d="M10.3333 3.34539L5.47654 7.71648C4.55842 8.54279 3.36693 9 2.13172 9H0V8H2.13172C3.11989 8 4.07308 7.63423 4.80758 6.97318L9.66437 2.60207C10.0447 2.25979 10.622 2.2598 11.0023 2.60207L15.8591 6.97318C16.5936 7.63423 17.5468 8 18.5349 8H20V9H18.5349C17.2998 9 16.1083 8.54278 15.1901 7.71648L10.3333 3.34539Z" />
      </svg>
    </BaseMenu.Arrow>
  );
}

const dropdownItemClasses = [
  'flex items-center text-foreground gap-3.5 py-2 px-2.5 rounded',
  'cursor-default select-none',
  'data-[highlighted]:bg-accent04 data-[selected]:bg-accent04',
  'data-[popup-open]:bg-accent04',
  'focus-visible:outline-none',
  '[&_svg]:size-4 [&_svg]:text-foreground',
];

export function DropdownItem({
  ...props
}: React.ComponentProps<typeof BaseMenu.Item>) {
  return (
    <BaseMenu.Item
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
      className={cn('h-px my-1 bg-border04', props.className)}
      {...props}
    />
  );
}

export function DropdownSubmenu({
  ...props
}: React.ComponentProps<typeof BaseMenu.SubmenuRoot>) {
  return <BaseMenu.SubmenuRoot {...props} />;
}

export function DropdownSubmenuTrigger({
  ...props
}: React.ComponentProps<typeof BaseMenu.SubmenuTrigger>) {
  return (
    <BaseMenu.SubmenuTrigger
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
  return <BaseMenu.Group {...props} />;
}

export function DropdownGroupLabel({
  ...props
}: React.ComponentProps<typeof BaseMenu.GroupLabel>) {
  return (
    <BaseMenu.GroupLabel
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
  return <BaseMenu.RadioGroup {...props} />;
}

export function DropdownRadioItem({
  children,
  ...props
}: React.ComponentProps<typeof BaseMenu.RadioItem>) {
  return (
    <BaseMenu.RadioItem
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
