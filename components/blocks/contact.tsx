import { useState } from 'react';
import { Button } from 'components/selia/button';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardBody,
} from 'components/selia/card';
import { Input } from 'components/selia/input';
import {
  Field,
  FieldControl,
  FieldError,
  FieldLabel,
} from 'components/selia/field';
import { Textarea } from 'components/selia/textarea';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectPopup,
  SelectList,
  SelectItem,
} from 'components/selia/select';
import { Heading } from 'components/selia/heading';
import { Text } from 'components/selia/text';
import { MailIcon, PhoneIcon, MapPinIcon } from 'lucide-react';
import { IconBox } from 'components/selia/icon-box';
import { Form } from 'components/selia/form';
import { toastManager } from 'components/selia/toast';

export default function ContactBlock() {
  const [pending, setPending] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    setPending(true);

    setTimeout(() => {
      setPending(false);

      toastManager.add({
        title: 'Message sent',
        description: 'We will get back to you shortly.',
        type: 'success',
      });

      form.reset();
    }, 2000);
  };

  return (
    <div className="w-full lg:min-h-screen flex items-center justify-center p-4 py-20">
      <div className="container max-w-6xl 2xl:max-w-5xl grid lg:grid-cols-2 gap-10 items-start">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Heading size="lg">Get in touch</Heading>
            <Text className="text-dimmed lg:max-w-md">
              Have a question or just want to say hi? We'd love to hear from
              you. Fill out the form and our team will get back to you shortly.
            </Text>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex items-start gap-4">
              <IconBox variant="primary-subtle" circle>
                <MailIcon />
              </IconBox>
              <div>
                <Heading level={4} size="sm">
                  Email
                </Heading>
                <Text className="text-dimmed">hello@selia.earth</Text>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <IconBox variant="primary-subtle" circle>
                <PhoneIcon />
              </IconBox>
              <div>
                <Heading level={4} size="sm">
                  Phone
                </Heading>
                <Text className="text-dimmed">+62 (822) 000-0000</Text>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <IconBox variant="primary-subtle" circle>
                <MapPinIcon />
              </IconBox>
              <div>
                <Heading level={4} size="sm">
                  Office
                </Heading>
                <Text className="text-dimmed">
                  123 Design St, Jakarta, ID 90210
                </Text>
              </div>
            </div>
          </div>
        </div>

        <Card className="w-full">
          <CardHeader align="center">
            <CardTitle>Send us a message</CardTitle>
            <CardDescription>We'll respond as soon as we can.</CardDescription>
          </CardHeader>
          <CardBody className="flex flex-col gap-5">
            <Form onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-5">
                <Field>
                  <FieldLabel htmlFor="first-name">First Name</FieldLabel>
                  <Input id="first-name" placeholder="John" required />
                  <FieldError match="valueMissing">This is required</FieldError>
                </Field>
                <Field>
                  <FieldLabel htmlFor="last-name">Last Name</FieldLabel>
                  <Input id="last-name" placeholder="Doe" required />
                  <FieldError match="valueMissing">This is required</FieldError>
                </Field>
              </div>
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  required
                />
                <FieldError match="valueMissing">This is required</FieldError>
              </Field>
              <Field>
                <FieldLabel>Subject</FieldLabel>
                <Select defaultValue={subjectOptions[0]} required>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectPopup>
                    <SelectList>
                      {subjectOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectList>
                  </SelectPopup>
                </Select>
                <FieldError match="valueMissing">This is required</FieldError>
              </Field>
              <Field name="message">
                <FieldLabel htmlFor="message">Message</FieldLabel>
                <FieldControl
                  render={<Textarea data-slot="textarea" />}
                  required
                />
                <FieldError match="valueMissing">This is required</FieldError>
              </Field>
              <Button
                variant="primary"
                block
                size="lg"
                progress={pending}
                type="submit"
              >
                Send Message
              </Button>
            </Form>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

const subjectOptions = [
  {
    label: 'General Inquiry',
    value: 'general',
  },
  {
    label: 'Technical Support',
    value: 'support',
  },
  {
    label: 'Billing',
    value: 'billing',
  },
  {
    label: 'Other',
    value: 'other',
  },
];
