import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from 'components/selia/field';
import { Input } from 'components/selia/input';
import { Fieldset, FieldsetLegend } from 'components/selia/fieldset';
import { Checkbox, CheckboxGroup } from 'components/selia/checkbox';
import { Separator } from 'components/selia/separator';
import { Text } from 'components/selia/text';
import { Radio, RadioGroup } from 'components/selia/radio';
import { Label } from 'components/selia/label';

export default function FieldsetComplexExample() {
  return (
    <div className="2xl:w-8/12 xl:w-10/12">
      <Fieldset>
        <FieldsetLegend>Personal Information</FieldsetLegend>
        <Text>
          We need your name and email to create your account. You can always
          change this information later.
        </Text>
        <Field>
          <FieldLabel htmlFor="name">Name</FieldLabel>
          <Input id="name" placeholder="Enter your name" required />
          <FieldError match="valueMissing">This is required</FieldError>
        </Field>
        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input id="email" placeholder="Enter your email" required />
          <FieldError match="valueMissing">This is required</FieldError>
        </Field>
      </Fieldset>
      <Separator />
      <Fieldset>
        <FieldsetLegend>Security</FieldsetLegend>
        <Text>Set up your security preferences to protect your account.</Text>
        <Field>
          <FieldLabel htmlFor="password">Password</FieldLabel>
          <Input
            id="password"
            type="password"
            placeholder="Enter your password"
            required
          />
          <FieldError match="valueMissing">This is required</FieldError>
          <FieldDescription>
            Password must be at least 8 characters long.
          </FieldDescription>
        </Field>
        <Field>
          <FieldLabel htmlFor="confirm-password">Confirm Password</FieldLabel>
          <Input
            id="confirm-password"
            type="password"
            placeholder="Confirm your password"
            required
          />
          <FieldError match="valueMissing">This is required</FieldError>
          <FieldError match="valueMissing">Passwords do not match</FieldError>
        </Field>
      </Fieldset>
      <Separator />
      <Fieldset>
        <FieldsetLegend>Notifications</FieldsetLegend>
        <Text>
          We'll send you notifications about your account and important updates.
          Choose the ones you want to receive.
        </Text>
        <CheckboxGroup defaultValue={['email']}>
          <Label>
            <Checkbox
              name="notifications"
              id="notifications-email"
              value="email"
            />
            Email
          </Label>
          <Label>
            <Checkbox name="notifications" id="sms" value="sms" />
            SMS
          </Label>
          <Label>
            <Checkbox name="notifications" id="push" value="push" />
            Push
          </Label>
        </CheckboxGroup>
      </Fieldset>
      <Separator />
      <Fieldset>
        <FieldsetLegend>Theme</FieldsetLegend>
        <Text>Choose your preferred theme for the interface.</Text>
        <Field>
          <RadioGroup defaultValue="system">
            <Label>
              <Radio name="theme" id="system" value="system" />
              System
            </Label>
            <Label>
              <Radio name="theme" id="light" value="light" />
              Light
            </Label>
            <Label>
              <Radio name="theme" id="dark" value="dark" />
              Dark
            </Label>
          </RadioGroup>
          <FieldError match="valueMissing">This is required</FieldError>
          <FieldDescription>
            System theme will use the system default theme.
          </FieldDescription>
        </Field>
      </Fieldset>
    </div>
  );
}
