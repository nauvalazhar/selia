import { Button } from 'components/selia/button';
import { Heading } from 'components/selia/heading';
import { Text } from 'components/selia/text';
import { CheckCircleIcon, ArrowRightIcon } from 'lucide-react';

export default function SplitSectionBlock() {
  const features = [
    'Fast and responsive design',
    'Built with accessibility in mind',
    'Mobile-first approach',
    'Dark mode support included',
  ];

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Content */}
        <div>
          <Heading className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Beautiful & Fast
          </Heading>
          <Text className="text-lg text-dimmed mb-8">
            Our blocks are designed to look stunning out of the box while maintaining lightning-fast performance and excellent accessibility standards.
          </Text>

          <div className="space-y-4 mb-8">
            {features.map((feature, index) => (
              <div key={index} className="flex gap-3">
                <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <Text className="text-base">
                  {feature}
                </Text>
              </div>
            ))}
          </div>

          <Button className="gap-2">
            Learn More
            <ArrowRightIcon className="w-4 h-4" />
          </Button>
        </div>

        {/* Right Side - Image/Visual */}
        <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 dark:from-blue-500/5 dark:to-purple-500/5 rounded-lg p-12 flex items-center justify-center min-h-96">
          <div className="text-center">
            <Text className="text-6xl mb-4">📱</Text>
            <Heading className="text-2xl font-bold mb-2">
              Responsive Design
            </Heading>
            <Text className="text-dimmed">
              Works perfectly on all devices
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
}
