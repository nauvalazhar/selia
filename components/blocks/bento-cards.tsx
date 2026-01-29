import { Card, CardBody } from 'components/selia/card';
import { Heading } from 'components/selia/heading';
import { IconBox } from 'components/selia/icon-box';
import { Text } from 'components/selia/text';
import {
  SparklesIcon,
  ZapIcon,
  TrendingUpIcon,
  ShieldCheckIcon,
  LayersIcon,
  CodeIcon,
} from 'lucide-react';

export default function BentoCardsBlock() {
  const cards = [
    {
      icon: SparklesIcon,
      title: 'Beautiful Design',
      description:
        'Crafted with attention to detail and user experience in mind.',
      span: 'md:col-span-2',
    },
    {
      icon: ZapIcon,
      title: 'Lightning Fast',
      description: 'Optimized for performance.',
      span: '',
    },
    {
      icon: TrendingUpIcon,
      title: 'Scalable',
      description: 'Grows with your project.',
      span: '',
    },
    {
      icon: ShieldCheckIcon,
      title: 'Secure',
      description: 'Built with security best practices.',
      span: '',
    },
    {
      icon: LayersIcon,
      title: 'Well Organized',
      description: 'Easy to navigate and understand.',
      span: '',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="mb-16 text-center">
        <Heading className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Key Features
        </Heading>
        <Text className="text-xl text-dimmed max-w-2xl mx-auto">
          Everything you need to build exceptional web experiences.
        </Text>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr max-w-6xl mx-auto">
        {cards.map((card, index) => {
          const Icon = card.icon;

          return (
            <Card
              key={index}
              className={`border border-slate-200 dark:border-slate-800 ${card.span}`}
            >
              <CardBody className="p-8 flex flex-col">
                <IconBox variant="primary" size="lg">
                  <Icon />
                </IconBox>
                <Heading className="text-xl font-semibold mb-2 mt-4">
                  {card.title}
                </Heading>
                <Text className="text-dimmed">{card.description}</Text>
              </CardBody>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
