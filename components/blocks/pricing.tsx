import { Button } from 'components/selia/button';
import { Card, CardBody } from 'components/selia/card';
import { Heading } from 'components/selia/heading';
import { Text } from 'components/selia/text';
import { CheckIcon } from 'lucide-react';

export default function PricingBlock() {
  const plans = [
    {
      name: 'Starter',
      price: '$29',
      period: 'per month',
      description: 'Perfect for getting started',
      features: [
        'Up to 10 projects',
        '5 GB storage',
        'Community support',
        'Basic analytics',
      ],
      cta: 'Get Started',
      popular: false,
    },
    {
      name: 'Professional',
      price: '$79',
      period: 'per month',
      description: 'For growing teams',
      features: [
        'Unlimited projects',
        '100 GB storage',
        'Priority email support',
        'Advanced analytics',
        'Custom integrations',
        'Team collaboration',
      ],
      cta: 'Start Free Trial',
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large organizations',
      features: [
        'Everything in Professional',
        'Dedicated support',
        'Custom contracts',
        'SLA guarantee',
        'Advanced security',
        'SSO & SAML',
      ],
      cta: 'Contact Sales',
      popular: false,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="mb-16 text-center">
        <Heading className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Simple, Transparent Pricing
        </Heading>
        <Text className="text-xl text-dimmed max-w-2xl mx-auto">
          Choose the perfect plan for your needs. Always flexible to scale up or
          down.
        </Text>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <Card
            key={index}
            className={`border ${
              plan.popular
                ? 'border-blue-500 ring-2 ring-blue-500/20'
                : 'border-slate-200 dark:border-slate-800'
            } overflow-hidden`}
          >
            {plan.popular && (
              <div className="bg-blue-500 text-white text-center py-2 text-xs tracking-wider font-semibold uppercase">
                Most Popular
              </div>
            )}
            <CardBody className="p-8">
              <Heading className="text-2xl font-bold mb-2">{plan.name}</Heading>
              <Text className="text-dimmed text-sm mb-6">
                {plan.description}
              </Text>

              <div className="mb-6">
                <div className="text-5xl font-bold">{plan.price}</div>
                {plan.period && (
                  <Text className="text-dimmed text-sm">{plan.period}</Text>
                )}
              </div>

              <Button
                className="w-full mb-8"
                variant={plan.popular ? 'primary' : 'outline'}
                size="lg"
              >
                {plan.cta}
              </Button>

              <div className="space-y-2.5">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex gap-3">
                    <CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <Text className="text-sm">{feature}</Text>
                  </div>
                ))}
              </div>
            </CardBody>
          </Card>
        ))}
      </div>

      <div className="text-center mt-12">
        <Text className="text-dimmed text-sm">
          All plans include a 14-day free trial. No credit card required.
        </Text>
      </div>
    </div>
  );
}
