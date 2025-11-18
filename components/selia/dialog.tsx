import { Dialog as BaseDialog } from '@base-ui-components/react/dialog';
import { buttonVariants } from './button';
import { cn } from 'lib/utils';

export function Dialog({
  ...props
}: React.ComponentProps<typeof BaseDialog.Root>) {
  return <BaseDialog.Root data-slot="dialog" {...props} />;
}

export function DialogTrigger({
  children,
  ...props
}: React.ComponentProps<typeof BaseDialog.Trigger>) {
  return (
    <BaseDialog.Trigger data-slot="dialog-trigger" {...props}>
      {children}
    </BaseDialog.Trigger>
  );
}

export function DialogContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof BaseDialog.Popup>) {
  return (
    <BaseDialog.Portal>
      <BaseDialog.Backdrop
        className={cn(
          'fixed inset-0 min-h-dvh bg-black/60 transition-[color,opacity]',
          'data-[starting-style]:opacity-0 data-[ending-style]:opacity-0',
        )}
      />
      <BaseDialog.Popup
        data-slot="dialog-content"
        {...props}
        className={cn(
          'fixed left-1/2 -translate-x-1/2 -translate-y-1/2',
          'top-[calc(50%+1.25rem*var(--nested-dialogs))]',
          'bg-dialog text-dialog-foreground backdrop-blur-sm',
          'ring ring-dialog-border rounded-3xl shadow',
          'scale-[calc(1-0.1*var(--nested-dialogs))]',
          'outline-none transition-all w-md max-w-[calc(100%-2rem)]',
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
      </BaseDialog.Popup>
    </BaseDialog.Portal>
  );
}

export function DialogHeader({
  className,
  children,
  ...props
}: React.ComponentProps<'header'>) {
  return (
    <header
      data-slot="dialog-header"
      {...props}
      className={cn('px-6 pt-4.5 flex items-center gap-3.5', className)}
    >
      {children}
    </header>
  );
}

export function DialogTitle({
  className,
  children,
  ...props
}: React.ComponentProps<typeof BaseDialog.Title>) {
  return (
    <BaseDialog.Title
      data-slot="dialog-title"
      {...props}
      className={cn('text-xl font-semibold', className)}
    >
      {children}
    </BaseDialog.Title>
  );
}

export function DialogBody({
  className,
  children,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="dialog-body"
      {...props}
      className={cn('px-6 py-4.5 space-y-1.5', className)}
    >
      {children}
    </div>
  );
}

export function DialogDescription({
  className,
  children,
  ...props
}: React.ComponentProps<typeof BaseDialog.Description>) {
  return (
    <BaseDialog.Description
      data-slot="dialog-description"
      {...props}
      className={cn('text-muted leading-relaxed', className)}
    >
      {children}
    </BaseDialog.Description>
  );
}

export function DialogFooter({
  className,
  children,
  ...props
}: React.ComponentProps<'footer'>) {
  return (
    <footer
      data-slot="dialog-footer"
      {...props}
      className={cn(
        'flex items-center justify-end gap-1.5',
        'px-6 py-3.5 bg-dialog-footer border-t border-dialog-border rounded-b-2xl',
        className,
      )}
    >
      {children}
    </footer>
  );
}

export function DialogClose({
  className,
  children,
  render,
  ...props
}: React.ComponentProps<typeof BaseDialog.Close>) {
  return (
    <BaseDialog.Close
      data-slot="dialog-close"
      render={render}
      {...props}
      className={cn(
        !render && buttonVariants({ variant: 'secondary-plain' }),
        className,
      )}
    >
      {children}
    </BaseDialog.Close>
  );
}
