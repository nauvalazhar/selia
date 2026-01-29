import { Card, CardBody } from 'components/selia/card';
import { Heading } from 'components/selia/heading';
import { IconBox } from 'components/selia/icon-box';
import { Text } from 'components/selia/text';
import {
  LightbulbIcon,
  BoltIcon,
  ShieldIcon,
  BarChartIcon,
  UsersIcon,
  PlugIcon,
} from 'lucide-react';

export default function FeaturesDetailedBlock() {
  const features = [
    {
      icon: LightbulbIcon,
      title: 'Intuitive Design',
      description:
        'Clean, modern interfaces that users love. Built on design system principles for consistency across your product.',
    },
    {
      icon: BoltIcon,
      title: 'Lightning Fast',
      description:
        'Optimized for performance with minimal dependencies. Load times under 100ms guaranteed.',
    },
    {
      icon: ShieldIcon,
      title: 'Enterprise Security',
      description:
        'SOC 2 certified with end-to-end encryption. Your data is protected with industry-leading security standards.',
    },
    {
      icon: BarChartIcon,
      title: 'Advanced Analytics',
      description:
        'Real-time insights and detailed reporting. Understand user behavior and optimize your product with data.',
    },
    {
      icon: UsersIcon,
      title: 'Collaboration Tools',
      description:
        'Built for teams. Real-time updates, commenting, and sharing make teamwork seamless.',
    },
    {
      icon: PlugIcon,
      title: 'Integrations',
      description:
        'Connect with your favorite tools. Native integrations with 100+ popular platforms out of the box.',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="mb-16 text-center">
        <Heading className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Powerful Features
        </Heading>
        <Text className="text-xl text-dimmed max-w-2xl mx-auto">
          Everything you need to build modern, scalable applications with
          confidence.
        </Text>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <Card
              key={index}
              className="hover:ring-primary transition-[colors,box-shadow]"
            >
              <CardBody className="p-8">
                <IconBox variant="primary" size="lg">
                  <Icon />
                </IconBox>
                <Heading className="text-xl font-semibold mb-2 mt-4">
                  {feature.title}
                </Heading>
                <Text className="text-dimmed">{feature.description}</Text>
              </CardBody>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
