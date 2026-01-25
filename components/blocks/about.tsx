import { Card, CardBody } from 'components/selia/card';
import { Heading } from 'components/selia/heading';
import { Text } from 'components/selia/text';
import { CheckCircleIcon } from 'lucide-react';

export default function AboutBlock() {
  const features = [
    {
      title: 'Responsive Design',
      description: 'Works perfectly on all devices and screen sizes.',
    },
    {
      title: 'Dark Mode Support',
      description: 'Built-in support for light and dark themes.',
    },
    {
      title: 'Accessible Components',
      description: 'WCAG compliant components for better accessibility.',
    },
    {
      title: 'Easy Customization',
      description: 'Simple to modify colors, spacing, and styles.',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="mb-16 text-center">
        <Heading className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Why Choose Our Blocks?
        </Heading>
        <Text className="text-xl text-dimmed max-w-2xl mx-auto">
          We provide everything you need to build modern, accessible web applications with ease.
        </Text>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {features.map((feature, index) => (
          <Card key={index} className="border border-slate-200 dark:border-slate-800">
            <CardBody className="p-6">
              <div className="flex gap-4">
                <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <Heading className="text-lg font-semibold mb-2">
                    {feature.title}
                  </Heading>
                  <Text className="text-dimmed">
                    {feature.description}
                  </Text>
                </div>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
}
