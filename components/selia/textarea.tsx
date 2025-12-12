import { cn } from 'lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

export const textareaVariants = cva(
  [
    'w-full text-foreground placeholder:text-dimmed transition-all shadow-input rounded',
    'ring ring-input-border hover:ring-input-accent-border focus:outline-0 focus:ring-primary focus:ring-2',
    'disabled:opacity-70',
  ],
  {
    variants: {
      variant: {
        default: 'bg-input',
        subtle: 'bg-input/60',
      },
      size: {
        md: 'min-h-24 p-2.5',
        lg: 'min-h-28 p-3.5',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  },
);

export function Textarea({
  className,
  variant,
  size,
  ...props
}: React.ComponentProps<'textarea'> & VariantProps<typeof textareaVariants>) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(textareaVariants({ variant, size, className }))}
      {...props}
    />
  );
}
