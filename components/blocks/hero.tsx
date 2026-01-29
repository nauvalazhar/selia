import { Button } from 'components/selia/button';
import { Text } from 'components/selia/text';
import { Heading } from 'components/selia/heading';
import { ArrowRightIcon } from 'lucide-react';

export default function HeroBlock() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white dark:from-background dark:to-primary/10 min-h-dvh">
      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <Heading className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Build Beautiful Interfaces
          </Heading>

          <Text className="text-xl md:text-2xl text-dimmed font-light mb-8">
            Create stunning user experiences with our collection of pre-built
            blocks and components. Drag, drop, and customize to your needs.
          </Text>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" pill className="gap-2">
              Get Started
              <ArrowRightIcon />
            </Button>

            <Button size="lg" pill variant="outline">
              Learn More
            </Button>
          </div>

          <div className="mt-16 pt-12 border-t border-slate-200 dark:border-slate-800">
            <Text className="text-sm text-dimmed mb-8">
              Trusted by designers and developers worldwide
            </Text>
            <div className="flex flex-wrap justify-center gap-8 opacity-60">
              <span className="font-semibold">Company A</span>
              <span className="font-semibold">Company B</span>
              <span className="font-semibold">Company C</span>
              <span className="font-semibold">Company D</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
