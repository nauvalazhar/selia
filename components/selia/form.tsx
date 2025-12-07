import { Form as BaseForm } from '@base-ui-components/react/form';
import { cn } from 'lib/utils';

export function Form({
  className,
  ...props
}: React.ComponentProps<typeof BaseForm>) {
  return (
    <BaseForm
      data-slot="form"
      className={cn('flex flex-col gap-6', className)}
      {...props}
    />
  );
}
