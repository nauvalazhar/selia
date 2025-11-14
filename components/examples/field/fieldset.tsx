import { Fieldset, FieldsetLegend } from 'components/selia/fieldset';
import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from 'components/selia/field';
import { Input } from 'components/selia/input';

export default function FieldsetExample() {
  return (
    <div className="w-6/12">
      <Fieldset>
        <FieldsetLegend>Personal Information</FieldsetLegend>
        <Field>
          <FieldLabel htmlFor="name1">Name</FieldLabel>
          <Input id="name1" placeholder="Enter your name" required />
          <FieldError match="valueMissing">This is required</FieldError>
        </Field>
        <Field>
          <FieldLabel htmlFor="email1">Email</FieldLabel>
          <Input id="email1" placeholder="Enter your email" required />
          <FieldError match="valueMissing">This is required</FieldError>
        </Field>
        <Field>
          <FieldLabel htmlFor="password1">Password</FieldLabel>
          <Input
            id="password1"
            type="password"
            placeholder="Enter your password"
            required
          />
          <FieldError match="valueMissing">This is required</FieldError>
          <FieldDescription>
            Password must be at least 8 characters long.
          </FieldDescription>
        </Field>
      </Fieldset>
    </div>
  );
}
