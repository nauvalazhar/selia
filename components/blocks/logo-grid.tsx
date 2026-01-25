import { Heading } from 'components/selia/heading';
import { Text } from 'components/selia/text';

export default function LogoGridBlock() {
  const companies = [
    'Acme Corp',
    'TechVenture',
    'CloudSync',
    'DataFlow',
    'NovaAI',
    'Velocity',
    'Quantum',
    'Stellar',
  ];

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="mb-16 text-center">
        <Text className="text-sm font-semibold text-blue-500 uppercase tracking-wide mb-3">
          Trusted Partners
        </Text>
        <Heading className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          Used by Leading Companies
        </Heading>
        <Text className="text-lg text-dimmed max-w-2xl mx-auto">
          Join hundreds of companies who trust us with their most important projects.
        </Text>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {companies.map((company, index) => (
          <div
            key={index}
            className="flex items-center justify-center p-8 border border-slate-200 dark:border-slate-800 rounded-lg hover:border-slate-300 dark:hover:border-slate-700 transition-colors bg-slate-50 dark:bg-slate-900"
          >
            <Text className="font-semibold text-slate-700 dark:text-slate-300">
              {company}
            </Text>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <Text className="text-dimmed">
          and 500+ more companies building with us
        </Text>
      </div>
    </div>
  );
}
