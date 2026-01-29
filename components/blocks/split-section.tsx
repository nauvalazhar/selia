import { Button } from 'components/selia/button';
import { Heading } from 'components/selia/heading';
import { IconBox } from 'components/selia/icon-box';
import { Text } from 'components/selia/text';
import {
  CheckCircleIcon,
  ArrowRightIcon,
  CheckCircle2Icon,
} from 'lucide-react';

export default function SplitSectionBlock() {
  const features = [
    'Fast and responsive design',
    'Built with accessibility in mind',
    'Mobile-first approach',
    'Dark mode support included',
  ];

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
        <div>
          <Heading className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Beautiful & Fast
          </Heading>
          <Text className="text-lg leading-relaxed text-dimmed mb-8">
            Our blocks are designed to look stunning out of the box while
            maintaining lightning-fast performance and excellent accessibility
            standards.
          </Text>

          <div className="space-y-2.5 mb-8">
            {features.map((feature, index) => (
              <div key={index} className="flex gap-3 items-center">
                <IconBox variant="success-subtle" circle size="sm">
                  <CheckCircle2Icon />
                </IconBox>
                <Text className="text-base">{feature}</Text>
              </div>
            ))}
          </div>

          <Button size="lg" pill>
            Learn More
            <ArrowRightIcon />
          </Button>
        </div>

        <div className="bg-gradient-to-b from-accent to-accent/50 rounded-lg p-12 flex items-center justify-center min-h-96">
          <div className="text-center">
            <Text className="text-6xl mb-4">📱</Text>
            <Heading className="text-2xl font-bold mb-2">
              Responsive Design
            </Heading>
            <Text className="text-dimmed">Works perfectly on all devices</Text>
          </div>
        </div>
      </div>
    </div>
  );
}
