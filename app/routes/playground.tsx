import { Button } from 'components/selia/button';
import { useEffect, useState } from 'react';
import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from 'components/selia/field';
import { Input } from 'components/selia/input';
import { Fieldset, FieldsetLegend } from 'components/selia/fieldset';
import { Checkbox } from 'components/selia/checkbox';
import { Separator } from 'components/selia/separator';
import { Text } from 'components/selia/text';
import { Radio, RadioGroup } from 'components/selia/radio';
import {
  Card,
  CardBody,
  CardDescription,
  CardFooter,
  CardHeader,
  CardHeaderContent,
  CardTitle,
} from 'components/selia/card';

export default function Playground() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) =>
        Math.min(100, Math.round(prev + Math.random() * 25)),
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center min-h-screen gap-4 py-20">
      <div className="w-md">
        <Card>
          <CardHeader>
            <CardHeaderContent>
              <CardTitle>User Settings</CardTitle>
              <CardDescription>
                Your personal information and settings.
              </CardDescription>
            </CardHeaderContent>
          </CardHeader>
          <CardBody>
            <Fieldset>
              <FieldsetLegend>Personal Information</FieldsetLegend>
              <Text>
                We need your name and email to create your account. You can
                always change this information later.
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
              <Text>
                Set up your security preferences to protect your account.
              </Text>
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
                <FieldLabel htmlFor="confirm-password">
                  Confirm Password
                </FieldLabel>
                <Input
                  id="confirm-password"
                  type="password"
                  placeholder="Confirm your password"
                  required
                />
                <FieldError match="valueMissing">This is required</FieldError>
                <FieldError match="valueMissing">
                  Passwords do not match
                </FieldError>
              </Field>
            </Fieldset>
            <Separator />
            <Fieldset>
              <FieldsetLegend>Notifications</FieldsetLegend>
              <Text>
                We'll send you notifications about your account and important
                updates. Choose the ones you want to receive.
              </Text>
              <Field inline>
                <Checkbox name="notifications" id="notifications-email" />
                <FieldLabel htmlFor="notifications-email">Email</FieldLabel>
              </Field>
              <Field inline>
                <Checkbox name="notifications" id="sms" />
                <FieldLabel htmlFor="sms">SMS</FieldLabel>
              </Field>
              <Field inline>
                <Checkbox name="notifications" id="push" />
                <FieldLabel htmlFor="push">Push</FieldLabel>
              </Field>
            </Fieldset>
            <Separator />
            <Fieldset>
              <FieldsetLegend>Theme</FieldsetLegend>
              <Text>Choose your preferred theme for the interface.</Text>
              <RadioGroup defaultValue="system">
                <Field inline>
                  <Radio name="theme" id="system" value="system" />
                  <FieldLabel htmlFor="system">System</FieldLabel>
                </Field>
                <Field inline>
                  <Radio name="theme" id="light" value="light" />
                  <FieldLabel htmlFor="light">Light</FieldLabel>
                </Field>
                <Field inline>
                  <Radio name="theme" id="dark" value="dark" />
                  <FieldLabel htmlFor="dark">Dark</FieldLabel>
                </Field>
              </RadioGroup>
            </Fieldset>
          </CardBody>
          <CardFooter>
            <Button className="ml-auto">Save Changes</Button>
          </CardFooter>
        </Card>
      </div>
      {/**<div className="w-md bg-surface01 p-2 rounded-3xl">
        <div className="flex items-center gap-2.5 p-1.5 mb-2">
          <Chip variant="secondary" size="sm">
            How to make a website
          </Chip>
          <Chip variant="secondary" size="sm">
            Write a love letter
          </Chip>
          <Chip variant="secondary" size="sm">
            Write a poem
          </Chip>
        </div>
        <InputGroup variant="subtle" size="lg" className="shadow">
          <Textarea
            placeholder="Ask AI anything"
            className="min-h-14 resize-none"
          />
          <InputGroupBar>
            <Button size="sm-icon" variant="secondary">
              <PlusIcon />
            </Button>
            <Select defaultValue="gpt-4o">
              <SelectTrigger className="ml-auto w-auto mr-2" variant="plain">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="gpt-4o">GPT-4o</SelectItem>
                <SelectItem value="gpt-4o-mini">GPT-4o Mini</SelectItem>
                <SelectItem value="gpt-4">GPT-4</SelectItem>
                <SelectItem value="gpt-3.5-turbo">GPT-3.5 Turbo</SelectItem>
              </SelectContent>
            </Select>
            <Button size="sm-icon">
              <ArrowUpIcon />
            </Button>
          </InputGroupBar>
        </InputGroup>
      </div> */}
    </div>
  );
}
