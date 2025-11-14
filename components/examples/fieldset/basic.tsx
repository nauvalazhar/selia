import { Fieldset, FieldsetLegend } from 'components/selia/fieldset';
import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from 'components/selia/field';
import { Input } from 'components/selia/input';
import { Text } from 'components/selia/text';

export default function FieldsetExample() {
  return (
    <div className="lg:w-8/12">
      <Fieldset>
        <FieldsetLegend>Personal Information</FieldsetLegend>
        <Text>
          This information will be used to create your account. You can always
          change this information later.
        </Text>
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
