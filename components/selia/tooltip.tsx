import { Tooltip as BaseTooltip } from '@base-ui-components/react/tooltip';
import { cn } from 'lib/utils';

export function Tooltip({
  ...props
}: React.ComponentProps<typeof BaseTooltip.Root>) {
  return <BaseTooltip.Root data-slot="tooltip" {...props} />;
}

export function TooltipTrigger({
  ...props
}: React.ComponentProps<typeof BaseTooltip.Trigger>) {
  return <BaseTooltip.Trigger data-slot="tooltip-trigger" {...props} />;
}

export function TooltipPopup({
  children,
  className,
  align,
  alignOffset,
  side,
  sideOffset,
  anchor,
  sticky,
  positionMethod,
  ...props
}: React.ComponentProps<typeof BaseTooltip.Popup> & {
  align?: BaseTooltip.Positioner.Props['align'];
  alignOffset?: BaseTooltip.Positioner.Props['alignOffset'];
  side?: BaseTooltip.Positioner.Props['side'];
  sideOffset?: BaseTooltip.Positioner.Props['sideOffset'];
  anchor?: BaseTooltip.Positioner.Props['anchor'];
  sticky?: BaseTooltip.Positioner.Props['sticky'];
  positionMethod?: BaseTooltip.Positioner.Props['positionMethod'];
}) {
  return (
    <BaseTooltip.Portal>
      <BaseTooltip.Positioner
        align={align}
        alignOffset={alignOffset}
        side={side}
        sideOffset={sideOffset || 12}
        anchor={anchor}
        sticky={sticky}
        positionMethod={positionMethod}
      >
        <BaseTooltip.Popup
          data-slot="tooltip-popup"
          {...props}
          className={cn(
            'bg-tertiary text-tertiary-foreground rounded shadow',
            'text-sm p-2 outline-none transition-[transform,scale,opacity]',
            'data-[ending-style]:opacity-0 data-[ending-style]:scale-90',
            'data-[starting-style]:opacity-0 data-[starting-style]:scale-90',
            className,
          )}
        >
          {children}
          <BaseTooltip.Arrow
            className={cn(
              'data-[side=bottom]:top-[-7px] data-[side=left]:right-[-10px] data-[side=left]:rotate-90 data-[side=right]:left-[-10px] data-[side=right]:-rotate-90 data-[side=top]:bottom-[-7px] data-[side=top]:rotate-180',
            )}
          >
            <svg width="20" height="10" viewBox="0 0 20 10" fill="none">
              <path
                d="M9.66437 2.60207L4.80758 6.97318C4.07308 7.63423 3.11989 8 2.13172 8H0V10H20V8H18.5349C17.5468 8 16.5936 7.63423 15.8591 6.97318L11.0023 2.60207C10.622 2.2598 10.0447 2.25979 9.66437 2.60207Z"
                className="fill-tertiary"
              />
              <path
                d="M8.99542 1.85876C9.75604 1.17425 10.9106 1.17422 11.6713 1.85878L16.5281 6.22989C17.0789 6.72568 17.7938 7.00001 18.5349 7.00001L15.89 7L11.0023 2.60207C10.622 2.2598 10.0447 2.2598 9.66436 2.60207L4.77734 7L2.13171 7.00001C2.87284 7.00001 3.58774 6.72568 4.13861 6.22989L8.99542 1.85876Z"
                className="fill-tertiary"
              />
              <path d="M10.3333 3.34539L5.47654 7.71648C4.55842 8.54279 3.36693 9 2.13172 9H0V8H2.13172C3.11989 8 4.07308 7.63423 4.80758 6.97318L9.66437 2.60207C10.0447 2.25979 10.622 2.2598 11.0023 2.60207L15.8591 6.97318C16.5936 7.63423 17.5468 8 18.5349 8H20V9H18.5349C17.2998 9 16.1083 8.54278 15.1901 7.71648L10.3333 3.34539Z" />
            </svg>
          </BaseTooltip.Arrow>
        </BaseTooltip.Popup>
      </BaseTooltip.Positioner>
    </BaseTooltip.Portal>
  );
}
