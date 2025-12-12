import { Button } from 'components/selia/button';
import { Card, CardBody, CardHeader, CardTitle } from 'components/selia/card';
import { Field, FieldLabel } from 'components/selia/field';
import { Fieldset } from 'components/selia/fieldset';
import { Input } from 'components/selia/input';

export default function CardExample() {
  return (
    <Card className="2xl:w-8/12 xl:w-10/12 w-full">
      <CardHeader>
        <CardTitle>User Settings</CardTitle>
      </CardHeader>
      <CardBody>
        <Fieldset>
          <Field>
            <FieldLabel>Name</FieldLabel>
            <Input placeholder="Enter your name" />
          </Field>
          <Field>
            <FieldLabel>Email</FieldLabel>
            <Input placeholder="Enter your email" />
          </Field>
          <Field>
            <FieldLabel>Password</FieldLabel>
            <Input placeholder="Enter your password" />
          </Field>
        </Fieldset>
        <Button variant="primary" size="lg" block className="mt-6">
          Save Changes
        </Button>
      </CardBody>
    </Card>
  );
}
