import { Card, CardBody } from 'components/selia/card';
import { Heading } from 'components/selia/heading';
import { Text } from 'components/selia/text';
import { Avatar } from 'components/selia/avatar';
import { StarIcon } from 'lucide-react';

export default function TestimonialBlock() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Product Designer',
      content:
        'These blocks have transformed how we build interfaces. The quality and attention to detail is unmatched.',
      avatar: 'SJ',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Frontend Developer',
      content:
        'Love the clean code and accessibility features. Makes building fast and easy.',
      avatar: 'MC',
      rating: 5,
    },
    {
      name: 'Emma Davis',
      role: 'Startup Founder',
      content:
        'Saved us weeks of development time. Great for rapid prototyping and building production-ready UIs.',
      avatar: 'ED',
      rating: 5,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="mb-16 text-center">
        <Heading className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Loved by Teams
        </Heading>
        <Text className="text-xl text-dimmed max-w-2xl mx-auto">
          See what designers and developers are saying about our blocks.
        </Text>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <Card
            key={index}
            className="border border-slate-200 dark:border-slate-800"
          >
            <CardBody className="p-8 flex flex-col h-full">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon
                    key={i}
                    className="w-4 h-4 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>

              <Text className="mb-6 flex-grow">"{testimonial.content}"</Text>

              <div className="flex items-center gap-3">
                <Avatar className="w-10 h-10" slot="avatar">
                  {testimonial.avatar}
                </Avatar>
                <div>
                  <Text className="font-semibold text-sm">
                    {testimonial.name}
                  </Text>
                  <Text className="text-sm text-dimmed">
                    {testimonial.role}
                  </Text>
                </div>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
}
