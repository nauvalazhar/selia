import { Card, CardBody } from 'components/selia/card';
import { Heading } from 'components/selia/heading';
import { IconBox } from 'components/selia/icon-box';
import { Text } from 'components/selia/text';
import { CheckCircle2Icon } from 'lucide-react';

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
        <Text className="text-xl text-dimmed max-w-xl mx-auto">
          We provide everything you need to build modern, accessible web
          applications with ease.
        </Text>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {features.map((feature, index) => (
          <Card key={index}>
            <CardBody>
              <div className="flex gap-4">
                <IconBox variant="success" circle>
                  <CheckCircle2Icon />
                </IconBox>
                <div>
                  <Heading className="text-lg font-semibold mb-2">
                    {feature.title}
                  </Heading>
                  <Text className="text-dimmed">{feature.description}</Text>
                </div>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
}
