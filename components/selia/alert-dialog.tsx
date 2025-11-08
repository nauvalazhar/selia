import { AlertDialog as BaseAlertDialog } from '@base-ui-components/react/alert-dialog';
import { buttonVariants } from 'components/selia/button';
import { cn } from 'lib/utils';

export function AlertDialog({
  ...props
}: React.ComponentProps<typeof BaseAlertDialog.Root>) {
  return <BaseAlertDialog.Root {...props} />;
}

export function AlertDialogTrigger({
  children,
  ...props
}: React.ComponentProps<typeof BaseAlertDialog.Trigger>) {
  return (
    <BaseAlertDialog.Trigger {...props}>{children}</BaseAlertDialog.Trigger>
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
        {...props}
        className={cn(
          'fixed left-1/2 -translate-x-1/2 -translate-y-1/2',
          'top-[calc(50%+1.25rem*var(--nested-dialogs))]',
          'bg-dialog text-dialog-foreground backdrop-blur-sm',
          'ring ring-dialog-border rounded-3xl shadow',
          'scale-[calc(1-0.1*var(--nested-dialogs))]',
          'outline-none transition-all',
          'data-[nested-dialog-open]:after:absolute',
          'data-[nested-dialog-open]:after:inset-0',
          'data-[nested-dialog-open]:after:rounded-3xl',
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
    <div {...props} className={cn('px-6 py-4.5', className)}>
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
      {...props}
      className={cn(
        'flex items-center justify-end gap-1.5',
        'px-6 py-3.5 bg-surface01 border-t border-border01 rounded-b-2xl',
        className,
      )}
    >
      {children}
    </footer>
  );
}

export function AlertDialogClose({
  className,
  children,
  ...props
}: React.ComponentProps<typeof BaseAlertDialog.Close>) {
  return (
    <BaseAlertDialog.Close
      {...props}
      className={cn(buttonVariants({ variant: 'secondary-plain' }), className)}
    >
      {children}
    </BaseAlertDialog.Close>
  );
}
