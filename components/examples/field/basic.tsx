import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from 'components/selia/field';
import { Input } from 'components/selia/input';

export default function FieldExample() {
  return (
    <div className="lg:w-6/12 w-full">
      <Field>
        <FieldLabel htmlFor="name">Name</FieldLabel>
        <Input id="name" placeholder="Enter your name" required />
        <FieldError match="valueMissing">This is required</FieldError>
        <FieldDescription>
          Try to input something, clear it and leave the field.
        </FieldDescription>
      </Field>
    </div>
  );
}
