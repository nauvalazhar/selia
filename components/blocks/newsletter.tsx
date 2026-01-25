import { useState } from 'react';
import { Button } from 'components/selia/button';
import { Input } from 'components/selia/input';
import { Heading } from 'components/selia/heading';
import { Text } from 'components/selia/text';
import { CheckCircleIcon, SendIcon } from 'lucide-react';

export default function NewsletterBlock() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-2xl mx-auto text-center">
        <Heading className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Stay Updated
        </Heading>
        <Text className="text-xl text-dimmed mb-8">
          Get the latest news, updates, and exclusive offers delivered to your inbox. No spam, unsubscribe anytime.
        </Text>

        {submitted ? (
          <div className="flex items-center justify-center gap-3 p-6 bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg">
            <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0" />
            <Text className="text-green-700 dark:text-green-200 font-medium">
              Thanks for subscribing! Check your email for confirmation.
            </Text>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1"
            />
            <Button
              type="submit"
              className="gap-2"
            >
              <SendIcon className="w-4 h-4" />
              Subscribe
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
