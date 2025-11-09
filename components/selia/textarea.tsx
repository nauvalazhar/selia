import { cn } from 'lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

export const textareaVariants = cva(
  [
    'px-2.5 py-2.5 w-full min-h-24 text-foreground rounded placeholder:text-dimmed transition-colors',
    'ring ring-input-border hover:ring-border05 focus:outline-0 focus:ring-primary focus:ring-2',
    '[&[type="file"]]:py-2 [&[type="file"]]:text-dimmed',
    'file:h-5.5 file:px-1.5 file:rounded-lg file:text-secondary-foreground file:ring file:ring-border05 file:bg-secondary file:text-sm file:mr-2',
    'disabled:opacity-70',
  ],
  {
    variants: {
      variant: {
        default: 'bg-input',
        subtle: 'bg-input-subtle',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

export function Textarea({
  className,
  variant,
  ...props
}: React.ComponentProps<'textarea'> & VariantProps<typeof textareaVariants>) {
  return (
    <textarea
      className={cn(textareaVariants({ variant, className }))}
      {...props}
    />
  );
}
