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
import { Field, FieldLabel } from 'components/selia/field';
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

export default function ContactBlock() {
  const [pending, setPending] = useState(false);

  return (
    <div className="w-full lg:min-h-screen flex items-center justify-center p-4 py-20">
      <div className="container max-w-6xl grid lg:grid-cols-2 gap-10 items-start">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Heading size="lg" className="text-4xl md:text-5xl tracking-tight">
              Get in touch
            </Heading>
            <Text className="text-dimmed text-lg max-w-md">
              Have a question or just want to say hi? We'd love to hear from
              you. Fill out the form and our team will get back to you shortly.
            </Text>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex items-start gap-4">
              <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <MailIcon className="size-5 text-primary" />
              </div>
              <div>
                <Heading level={4} size="sm">
                  Email
                </Heading>
                <Text className="text-dimmed">hello@selia.earth</Text>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <PhoneIcon className="size-5 text-primary" />
              </div>
              <div>
                <Heading level={4} size="sm">
                  Phone
                </Heading>
                <Text className="text-dimmed">+62 (822) 000-0000</Text>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <MapPinIcon className="size-5 text-primary" />
              </div>
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
          <CardHeader>
            <CardTitle>Send us a message</CardTitle>
            <CardDescription>We'll respond as soon as we can.</CardDescription>
          </CardHeader>
          <CardBody className="flex flex-col gap-5">
            <div className="grid md:grid-cols-2 gap-5">
              <Field>
                <FieldLabel htmlFor="first-name">First Name</FieldLabel>
                <Input id="first-name" placeholder="John" />
              </Field>
              <Field>
                <FieldLabel htmlFor="last-name">Last Name</FieldLabel>
                <Input id="last-name" placeholder="Doe" />
              </Field>
            </div>
            <Field>
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <Input id="email" type="email" placeholder="john@example.com" />
            </Field>
            <Field>
              <FieldLabel>Subject</FieldLabel>
              <Select defaultValue="general">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectPopup>
                  <SelectList>
                    <SelectItem value="general">General Inquiry</SelectItem>
                    <SelectItem value="support">Technical Support</SelectItem>
                    <SelectItem value="billing">Billing</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectList>
                </SelectPopup>
              </Select>
            </Field>
            <Field>
              <FieldLabel htmlFor="message">Message</FieldLabel>
              <Textarea id="message" placeholder="How can we help you?" />
            </Field>
            <Button
              variant="primary"
              block
              size="lg"
              progress={pending}
              onClick={() => {
                setPending(true);
                setTimeout(() => setPending(false), 2000);
              }}
            >
              Send Message
            </Button>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
