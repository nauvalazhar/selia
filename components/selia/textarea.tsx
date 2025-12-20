import { cn } from 'lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

export const textareaVariants = cva(
  [
    'w-full px-3.5 py-3.5 text-foreground placeholder:text-dimmed transition-[border-color,box-shadow] shadow-input rounded',
    'ring ring-input-border hover:ring-input-accent-border focus:outline-0 focus:ring-primary focus:ring-2 min-h-24',
    'disabled:opacity-70',
  ],
  {
    variants: {
      variant: {
        default: 'bg-input',
        subtle: 'bg-input/60',
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
      data-slot="textarea"
      className={cn(textareaVariants({ variant, className }))}
      {...props}
    />
  );
}
