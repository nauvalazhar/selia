import { Field, FieldLabel } from 'components/selia/field';
import { Fieldset, FieldsetLegend } from 'components/selia/fieldset';
import { Input } from 'components/selia/input';
import { Tabs, TabsItem, TabsList, TabsPanel } from 'components/selia/tabs';

export default function TabsBasicExample() {
  return (
    <Tabs defaultValue="account" className="lg:w-6/12">
      <TabsList>
        <TabsItem value="account">Account</TabsItem>
        <TabsItem value="password">Password</TabsItem>
      </TabsList>
      <TabsPanel value="account">
        <Fieldset>
          <FieldsetLegend>Account</FieldsetLegend>
          <Field>
            <FieldLabel>Name</FieldLabel>
            <Input id="name" placeholder="Enter your name" required />
          </Field>
          <Field>
            <FieldLabel>Email</FieldLabel>
            <Input id="email" placeholder="Enter your email" required />
          </Field>
        </Fieldset>
      </TabsPanel>
      <TabsPanel value="password">
        <Fieldset>
          <FieldsetLegend>Password</FieldsetLegend>
          <Field>
            <FieldLabel>Password</FieldLabel>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              required
            />
          </Field>
          <Field>
            <FieldLabel>Confirm Password</FieldLabel>
            <Input
              id="confirm-password"
              type="password"
              placeholder="Enter your confirm password"
              required
            />
          </Field>
        </Fieldset>
      </TabsPanel>
    </Tabs>
  );
}
