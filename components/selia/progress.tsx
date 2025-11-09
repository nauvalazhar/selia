import { Progress as BaseProgress } from '@base-ui-components/react/progress';
import { cn } from 'lib/utils';

export function Progress({
  className,
  children,
  ...props
}: React.ComponentProps<typeof BaseProgress.Root>) {
  return (
    <BaseProgress.Root
      {...props}
      className={cn('flex flex-wrap gap-1.5 justify-between', className)}
    >
      {children}
      <BaseProgress.Track className="h-1.5 w-full rounded-full bg-input">
        <BaseProgress.Indicator className="rounded-full bg-primary transition-all duration-500" />
      </BaseProgress.Track>
    </BaseProgress.Root>
  );
}

export function ProgressLabel({
  className,
  ...props
}: React.ComponentProps<typeof BaseProgress.Label>) {
  return (
    <BaseProgress.Label
      {...props}
      className={cn('font-semibold text-foreground', className)}
    />
  );
}

export function ProgressValue({
  className,
  ...props
}: React.ComponentProps<typeof BaseProgress.Value>) {
  return (
    <BaseProgress.Value
      {...props}
      className={cn('text-sm text-dimmed', className)}
    />
  );
}
