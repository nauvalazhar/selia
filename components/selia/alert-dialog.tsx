import { AlertDialog as BaseAlertDialog } from '@base-ui-components/react/alert-dialog';
import { buttonVariants } from './button';
import { cn } from 'lib/utils';

export function AlertDialog({
  ...props
}: React.ComponentProps<typeof BaseAlertDialog.Root>) {
  return <BaseAlertDialog.Root data-slot="alert-dialog" {...props} />;
}

export function AlertDialogTrigger({
  children,
  ...props
}: React.ComponentProps<typeof BaseAlertDialog.Trigger>) {
  return (
    <BaseAlertDialog.Trigger data-slot="alert-dialog-trigger" {...props}>
      {children}
    </BaseAlertDialog.Trigger>
  );
}

export function AlertDialogContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof BaseAlertDialog.Popup>) {
  return (
    <BaseAlertDialog.Portal>
      <BaseAlertDialog.Backdrop
        className={cn(
          'fixed inset-0 min-h-dvh bg-black/60 transition-[color,opacity]',
          'data-[starting-style]:opacity-0 data-[ending-style]:opacity-0',
        )}
      />
      <BaseAlertDialog.Popup
        data-slot="alert-dialog-content"
        {...props}
        className={cn(
          'fixed left-1/2 -translate-x-1/2 -translate-y-1/2',
          'top-[calc(50%+1.25rem*var(--nested-dialogs))]',
          'bg-dialog text-dialog-foreground backdrop-blur-sm',
          'ring ring-dialog-border rounded-[calc(var(--radius)*2)] shadow',
          'scale-[calc(1-0.1*var(--nested-dialogs))]',
          'outline-none transition-all w-md max-w-[calc(100%-2rem)]',
          'data-[nested-dialog-open]:after:absolute',
          'data-[nested-dialog-open]:after:inset-0',
          'data-[nested-dialog-open]:after:rounded-[calc(var(--radius)*2)]',
          'data-[nested-dialog-open]:after:bg-black/20',
          'data-[nested-dialog-open]:after:z-10',
          'data-[starting-style]:opacity-0 data-[ending-style]:opacity-0',
          'data-[starting-style]:scale-90 data-[ending-style]:scale-90',
          className,
        )}
      >
        {children}
      </BaseAlertDialog.Popup>
    </BaseAlertDialog.Portal>
  );
}

export function AlertDialogHeader({
  className,
  children,
  ...props
}: React.ComponentProps<'header'>) {
  return (
    <header
      data-slot="alert-dialog-header"
      {...props}
      className={cn('px-6 pt-4.5 flex items-center gap-3.5', className)}
    >
      {children}
    </header>
  );
}

export function AlertDialogTitle({
  className,
  children,
  ...props
}: React.ComponentProps<typeof BaseAlertDialog.Title>) {
  return (
    <BaseAlertDialog.Title
      data-slot="alert-dialog-title"
      {...props}
      className={cn('text-xl font-semibold', className)}
    >
      {children}
    </BaseAlertDialog.Title>
  );
}

export function AlertDialogBody({
  className,
  children,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="alert-dialog-body"
      {...props}
      className={cn('px-6 py-4.5', className)}
    >
      {children}
    </div>
  );
}

export function AlertDialogDescription({
  className,
  children,
  ...props
}: React.ComponentProps<typeof BaseAlertDialog.Description>) {
  return (
    <BaseAlertDialog.Description
      data-slot="alert-dialog-description"
      {...props}
      className={cn('text-muted leading-relaxed', className)}
    >
      {children}
    </BaseAlertDialog.Description>
  );
}

export function AlertDialogFooter({
  className,
  children,
  ...props
}: React.ComponentProps<'footer'>) {
  return (
    <footer
      data-slot="alert-dialog-footer"
      {...props}
      className={cn(
        'flex items-center justify-end gap-1.5',
        'px-6 py-3.5 bg-dialog-footer border-t border-dialog-border rounded-b-[calc(var(--radius)*2)]',
        className,
      )}
    >
      {children}
    </footer>
  );
}

export function AlertDialogClose({
  className,
  render,
  children,
  ...props
}: React.ComponentProps<typeof BaseAlertDialog.Close>) {
  return (
    <BaseAlertDialog.Close
      data-slot="alert-dialog-close"
      render={render}
      {...props}
      className={cn(
        !render && buttonVariants({ variant: 'secondary-plain' }),
        className,
      )}
    >
      {children}
    </BaseAlertDialog.Close>
  );
}
