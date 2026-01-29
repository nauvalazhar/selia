import { Heading } from 'components/selia/heading';
import { Text } from 'components/selia/text';

export default function StatsBlock() {
  const stats = [
    {
      number: '100K+',
      label: 'Active Users',
      description: 'Teams building with our platform',
    },
    {
      number: '99.9%',
      label: 'Uptime',
      description: 'Industry-leading reliability',
    },
    {
      number: '$2B+',
      label: 'Value Created',
      description: 'Worth of projects built',
    },
    {
      number: '150+',
      label: 'Countries',
      description: 'Users across the globe',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="mb-16 text-center">
        <Heading className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Trusted by Teams Worldwide
        </Heading>
        <Text className="text-xl text-dimmed max-w-2xl mx-auto">
          Join thousands of companies building with our platform.
        </Text>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-6xl mx-auto">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="text-6xl md:text-7xl font-bold text-blue-500 mb-3">
              {stat.number}
            </div>
            <Heading className="text-2xl font-bold mb-2">{stat.label}</Heading>
            <Text className="text-dimmed">{stat.description}</Text>
          </div>
        ))}
      </div>

      <div className="mt-16 pt-16 border-t border-separator">
        <div className="text-center">
          <Heading className="text-2xl font-bold mb-4">
            Growing every day
          </Heading>
          <Text className="text-lg text-dimmed max-w-md mx-auto">
            Our platform is trusted by leading companies and startups to power
            their most important work.
          </Text>
        </div>
      </div>
    </div>
  );
}
