import { cn } from 'lib/utils';

export function Table({ ...props }: React.ComponentProps<'table'>) {
  return (
    <table
      {...props}
      className={cn('w-full text-foreground text-left', props.className)}
    />
  );
}

export function TableContainer({ ...props }: React.ComponentProps<'div'>) {
  return <div {...props} className={cn('overflow-x-auto', props.className)} />;
}

export function TableHeader({ ...props }: React.ComponentProps<'thead'>) {
  return <thead {...props} className={cn(props.className)} />;
}

export function TableHead({ ...props }: React.ComponentProps<'th'>) {
  return (
    <th
      {...props}
      className={cn(
        'px-6 py-3.5 text-muted font-medium bg-surface03 border-y border-border04',
        props.className,
      )}
    />
  );
}

export function TableBody({ ...props }: React.ComponentProps<'tbody'>) {
  return <tbody {...props} className={cn(props.className)} />;
}

export function TableRow({ ...props }: React.ComponentProps<'tr'>) {
  return (
    <tr
      {...props}
      className={cn(
        'border-b border-border02 last:border-none hover:bg-accent01',
        props.className,
      )}
    />
  );
}

export function TableCell({ ...props }: React.ComponentProps<'td'>) {
  return <td {...props} className={cn('px-6 py-3.5', props.className)} />;
}

export function TableFooter({ ...props }: React.ComponentProps<'tfoot'>) {
  return (
    <tfoot
      {...props}
      className={cn('text-xs text-muted-foreground', props.className)}
    />
  );
}

export function TableCaption({
  side,
  ...props
}: React.ComponentProps<'caption'> & {
  side?: 'top' | 'bottom';
}) {
  return (
    <caption
      {...props}
      className={cn(
        'text-sm text-muted my-4',
        side === 'top' ? 'caption-top' : 'caption-bottom',
        props.className,
      )}
    />
  );
}
