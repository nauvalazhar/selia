import { Button } from 'components/selia/button';
import { Heading } from 'components/selia/heading';
import { Text } from 'components/selia/text';
import { ArrowRightIcon } from 'lucide-react';

export default function CTASectionBlock() {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-700 dark:to-blue-800 px-8 py-20 md:px-16 md:py-32">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -mr-48 -mt-48" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full -ml-48 -mb-48" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center max-w-2xl mx-auto text-white">
          <Heading className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Ready to Get Started?
          </Heading>
          <Text className="text-lg text-blue-100 mb-8">
            Join thousands of teams building beautiful interfaces with our blocks and components. Start your free trial today.
          </Text>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              pill
              className="gap-2 bg-white text-blue-600 hover:bg-blue-50"
            >
              Start Free Trial
              <ArrowRightIcon className="w-5 h-5" />
            </Button>
            <Button
              size="lg"
              pill
              variant="outline"
              className="text-white border-white hover:bg-white/10"
            >
              Schedule Demo
            </Button>
          </div>

          <Text className="text-sm text-blue-100 mt-6">
            No credit card required. 14-day free trial.
          </Text>
        </div>
      </div>
    </div>
  );
}
