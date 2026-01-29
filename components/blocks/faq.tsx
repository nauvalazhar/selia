import { useState } from 'react';
import { Heading } from 'components/selia/heading';
import { Text, TextLink } from 'components/selia/text';
import { ChevronDownIcon } from 'lucide-react';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionPanel,
} from 'components/selia/accordion';

export default function FAQBlock() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How do I get started?',
      answer:
        'Getting started is simple! Sign up for a free account, choose your plan, and you can start building immediately. We offer a 14-day free trial with full access to all features.',
    },
    {
      question: 'Can I change my plan anytime?',
      answer:
        'Yes! You can upgrade, downgrade, or cancel your plan at any time. Changes take effect on your next billing cycle.',
    },
    {
      question: 'Is there a free tier?',
      answer:
        'We offer a 14-day free trial of our Professional plan. After that, you can switch to our Starter plan which has free access with limited features.',
    },
    {
      question: 'What payment methods do you accept?',
      answer:
        'We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and bank transfers for enterprise customers.',
    },
    {
      question: 'Do you offer refunds?',
      answer:
        "We offer a 30-day money-back guarantee on all plans. If you're not satisfied, contact our support team for a full refund.",
    },
    {
      question: 'How is my data secured?',
      answer:
        'We use industry-standard encryption (SSL/TLS) to protect your data in transit. All data is encrypted at rest and backed up regularly. We comply with GDPR, SOC 2, and ISO 27001.',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="mb-16 text-center">
        <Heading className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Frequently Asked Questions
        </Heading>
        <Text className="text-xl text-dimmed max-w-2xl mx-auto">
          Find answers to common questions about our service.
        </Text>
      </div>

      <div className="max-w-2xl mx-auto">
        <Accordion
          value={openIndex !== null ? [String(openIndex)] : undefined}
          onValueChange={(value) => {
            setOpenIndex(value !== undefined ? Number(value) : null);
          }}
        >
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={String(index)}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionPanel>
                <Text className="text-dimmed">{faq.answer}</Text>
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <div className="text-center mt-12">
        <Text className="text-dimmed">
          Can't find what you're looking for?{' '}
          <TextLink href="#">Contact our support team</TextLink>
        </Text>
      </div>
    </div>
  );
}
