import { cn } from 'lib/utils';
import { Dialog, DialogBody, DialogContent } from './dialog';

export function Command({ ...props }: React.ComponentProps<typeof Dialog>) {
  return <Dialog open {...props}></Dialog>;
}

export function CommandContent({
  className,
  ...props
}: React.ComponentProps<typeof DialogContent>) {
  return (
    <DialogContent
      {...props}
      className={cn(
        'p-1 bg-dialog-footer/90',
        '**:data-[slot=autocomplete-list]:h-[min(27rem,50dvh)]',
        '**:data-[slot=autocomplete-empty]:h-[min(27rem,50dvh)]',
        '**:data-[slot=autocomplete-input]:h-11',
        className,
      )}
    ></DialogContent>
  );
}

export function CommandBody({
  className,
  ...props
}: React.ComponentProps<typeof DialogBody>) {
  return (
    <DialogBody
      {...props}
      className={cn(
        'space-y-0 bg-dialog border border-dialog-border rounded-xl',
        'bg-dialog shadow p-0',
        '**:data-[slot=autocomplete-list]:px-2.5 **:data-[slot=autocomplete-list]:py-1.5',
        className,
      )}
    ></DialogBody>
  );
}

export function CommandFooter({
  className,
  ...props
}: React.ComponentProps<'footer'>) {
  return (
    <footer
      data-slot="command-footer"
      {...props}
      className={cn('px-3 py-2.5 flex items-center gap-6', className)}
    />
  );
}

export function CommandFooterItem({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="command-footer-item"
      {...props}
      className={cn('flex items-center gap-2.5', className)}
    />
  );
}

export function CommandFooterText({
  className,
  ...props
}: React.ComponentProps<'span'>) {
  return (
    <span
      data-slot="command-footer-text"
      {...props}
      className={cn('text-sm text-muted font-medium', className)}
    />
  );
}
