import { useState } from 'react';
import { Button } from 'components/selia/button';
import { Input } from 'components/selia/input';
import { Heading } from 'components/selia/heading';
import { Text } from 'components/selia/text';
import { CheckCircle2Icon, CheckCircleIcon, SendIcon } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from 'components/selia/alert';
import { IconBox } from 'components/selia/icon-box';

export default function NewsletterBlock() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
      // setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-2xl mx-auto text-center">
        <Heading className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Stay Updated
        </Heading>
        <Text className="text-xl text-dimmed mb-8">
          Get the latest news, updates, and exclusive offers delivered to your
          inbox. No spam, unsubscribe anytime.
        </Text>

        {submitted ? (
          <Alert variant="success" className="max-w-md mx-auto text-left">
            <CheckCircle2Icon />
            <AlertTitle>Thanks for subscribing!</AlertTitle>
            <AlertDescription>
              Check your email for confirmation.
            </AlertDescription>
          </Alert>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1"
            />
            <Button type="submit" className="gap-2">
              Subscribe
              <SendIcon />
            </Button>
          </form>
        )}

        <Text className="text-sm text-dimmed mt-6">
          We respect your privacy. No spam ever.
        </Text>
      </div>
    </div>
  );
}
