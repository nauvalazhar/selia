import { Popover as BasePopover } from '@base-ui-components/react/popover';
import { cn } from 'lib/utils';

export function Popover({
  ...props
}: React.ComponentProps<typeof BasePopover.Root>) {
  return <BasePopover.Root {...props} />;
}

export function PopoverTrigger({
  ...props
}: React.ComponentProps<typeof BasePopover.Trigger>) {
  return <BasePopover.Trigger {...props} />;
}

export function PopoverContent({
  popupProps,
  children,
  className,
  ...props
}: React.ComponentProps<typeof BasePopover.Positioner> & {
  popupProps?: BasePopover.Popup.Props;
}) {
  return (
    <BasePopover.Portal>
      <BasePopover.Positioner sideOffset={12} {...props}>
        <BasePopover.Popup
          {...popupProps}
          className={cn(
            'flex flex-col gap-1.5',
            'bg-popover ring ring-popover-border rounded shadow',
            'p-4 outline-none transition-[transform,scale,opacity]',
            'data-[ending-style]:opacity-0 data-[ending-style]:scale-90',
            'data-[starting-style]:opacity-0 data-[starting-style]:scale-90',
            className,
          )}
        >
          {children}
          <BasePopover.Arrow
            className={cn(
              'data-[side=bottom]:top-[-8px] data-[side=left]:right-[-12px] data-[side=left]:rotate-90 data-[side=right]:left-[-12px] data-[side=right]:-rotate-90 data-[side=top]:bottom-[-8px] data-[side=top]:rotate-180',
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
          </BasePopover.Arrow>
        </BasePopover.Popup>
      </BasePopover.Positioner>
    </BasePopover.Portal>
  );
}

export function PopoverTitle({
  className,
  ...props
}: React.ComponentProps<typeof BasePopover.Title>) {
  return (
    <BasePopover.Title
      {...props}
      className={cn('text-lg font-semibold', className)}
    />
  );
}

export function PopoverDescription({
  className,
  ...props
}: React.ComponentProps<typeof BasePopover.Description>) {
  return (
    <BasePopover.Description
      {...props}
      className={cn('text-muted leading-relaxed', className)}
    />
  );
}
