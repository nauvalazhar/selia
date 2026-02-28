'use client';

import { DrawerPreview as BaseDrawer } from '@base-ui/react/drawer';
import { buttonVariants } from './button';
import { cn } from '#utils';
import { XIcon } from 'lucide-react';

export function Drawer({
  ...props
}: React.ComponentProps<typeof BaseDrawer.Root>) {
  return <BaseDrawer.Root data-slot="drawer" swipeDirection="right" {...props} />;
}

export function DrawerTrigger({
  children,
  ...props
}: React.ComponentProps<typeof BaseDrawer.Trigger>) {
  return (
    <BaseDrawer.Trigger data-slot="drawer-trigger" {...props}>
      {children}
    </BaseDrawer.Trigger>
  );
}

export function DrawerPopup({
  className,
  children,
  ...props
}: React.ComponentProps<typeof BaseDrawer.Popup>) {
  return (
    <BaseDrawer.Portal>
      <BaseDrawer.Backdrop
        className={cn(
          'fixed inset-0 min-h-dvh bg-black/60 transition-[color,opacity] backdrop-blur-sm',
          'data-[starting-style]:opacity-0 data-[ending-style]:opacity-0',
        )}
      />
      <BaseDrawer.Viewport
        className={cn('fixed inset-y-0 right-0 w-full max-w-md')}
      >
        <BaseDrawer.Popup
          data-slot="drawer-popup"
          {...props}
          className={cn(
            'w-full h-full',
            'bg-dialog text-dialog-foreground backdrop-blur-sm',
            'shadow-lg outline-none transition-all',
            'data-[swiping]:transition-none',
            'flex flex-col',
            className,
          )}
        >
          {children}
        </BaseDrawer.Popup>
      </BaseDrawer.Viewport>
    </BaseDrawer.Portal>
  );
}

export function DrawerHeader({
  className,
  children,
  ...props
}: React.ComponentProps<'header'>) {
  return (
    <header
      data-slot="drawer-header"
      {...props}
      className={cn('px-6 pt-4.5 flex items-center justify-between gap-3.5', className)}
    >
      {children}
    </header>
  );
}

export function DrawerTitle({
  className,
  children,
  ...props
}: React.ComponentProps<typeof BaseDrawer.Title>) {
  return (
    <BaseDrawer.Title
      data-slot="drawer-title"
      {...props}
      className={cn('text-xl font-semibold', className)}
    >
      {children}
    </BaseDrawer.Title>
  );
}

export function DrawerBody({
  className,
  children,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="drawer-body"
      {...props}
      className={cn('px-6 py-4.5 space-y-1.5 flex-1 overflow-y-auto', className)}
    >
      {children}
    </div>
  );
}

export function DrawerDescription({
  className,
  children,
  ...props
}: React.ComponentProps<typeof BaseDrawer.Description>) {
  return (
    <BaseDrawer.Description
      data-slot="drawer-description"
      {...props}
      className={cn('text-muted leading-relaxed', className)}
    >
      {children}
    </BaseDrawer.Description>
  );
}

export function DrawerFooter({
  className,
  children,
  ...props
}: React.ComponentProps<'footer'>) {
  return (
    <footer
      data-slot="drawer-footer"
      {...props}
      className={cn(
        'flex items-center justify-end gap-1.5',
        'px-6 py-3.5 bg-dialog-footer border-t border-dialog-border rounded-b-xl',
        className,
      )}
    >
      {children}
    </footer>
  );
}

export function DrawerClose({
  className,
  children,
  render,
  ...props
}: React.ComponentProps<typeof BaseDrawer.Close>) {
  return (
    <BaseDrawer.Close
      data-slot="drawer-close"
      render={render}
      {...props}
      className={cn(!render && buttonVariants({ variant: 'plain' }), className)}
    >
      {children || <XIcon className="size-5" />}
    </BaseDrawer.Close>
  );
}
