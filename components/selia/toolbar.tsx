import { Toolbar as BaseToolbar } from '@base-ui-components/react/toolbar';
import { cn } from 'lib/utils';

export function Toolbar({
  className,
  ...props
}: React.ComponentProps<typeof BaseToolbar.Root>) {
  return (
    <BaseToolbar.Root
      data-slot="toolbar"
      className={cn(
        'flex items-center bg-card border border-card-border rounded-lg p-1',
        className,
      )}
      {...props}
    />
  );
}

export function ToolbarButton({
  className,
  ...props
}: React.ComponentProps<typeof BaseToolbar.Button>) {
  return (
    <BaseToolbar.Button
      data-slot="toolbar-button"
      className={cn('flex', className)}
      {...props}
    />
  );
}

export function ToolbarLink({
  className,
  ...props
}: React.ComponentProps<typeof BaseToolbar.Link>) {
  return (
    <BaseToolbar.Link
      data-slot="toolbar-link"
      className={cn('flex', className)}
      {...props}
    />
  );
}

export function ToolbarInput({
  className,
  ...props
}: React.ComponentProps<typeof BaseToolbar.Input>) {
  return (
    <BaseToolbar.Input
      data-slot="toolbar-input"
      className={cn('flex', className)}
      {...props}
    />
  );
}

export function ToolbarGroup({
  className,
  ...props
}: React.ComponentProps<typeof BaseToolbar.Group>) {
  return (
    <BaseToolbar.Group
      data-slot="toolbar-group"
      className={cn('flex gap-1', className)}
      {...props}
    />
  );
}

export function ToolbarSeparator({
  className,
  ...props
}: React.ComponentProps<typeof BaseToolbar.Separator>) {
  return (
    <BaseToolbar.Separator
      data-slot="toolbar-separator"
      className={cn('h-4 w-px bg-card-separator mx-4', className)}
      {...props}
    />
  );
}
