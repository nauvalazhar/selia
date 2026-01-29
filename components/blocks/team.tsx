import { Card, CardBody } from 'components/selia/card';
import { Heading } from 'components/selia/heading';
import { Text } from 'components/selia/text';
import { Avatar } from 'components/selia/avatar';
import { LinkedinIcon, TwitterIcon, GithubIcon } from 'lucide-react';

export default function TeamBlock() {
  const team = [
    {
      name: 'Sarah Anderson',
      role: 'CEO & Co-founder',
      bio: 'Design enthusiast with 10+ years of experience building products.',
      avatar: 'SA',
      social: [
        { icon: LinkedinIcon, href: '#' },
        { icon: TwitterIcon, href: '#' },
      ],
    },
    {
      name: 'Michael Chen',
      role: 'CTO & Co-founder',
      bio: 'Full-stack engineer passionate about accessibility and performance.',
      avatar: 'MC',
      social: [
        { icon: LinkedinIcon, href: '#' },
        { icon: GithubIcon, href: '#' },
      ],
    },
    {
      name: 'Emma Davis',
      role: 'Head of Design',
      bio: 'Creative director focused on user-centered design and innovation.',
      avatar: 'ED',
      social: [
        { icon: LinkedinIcon, href: '#' },
        { icon: TwitterIcon, href: '#' },
      ],
    },
    {
      name: 'James Wilson',
      role: 'Lead Engineer',
      bio: 'Open-source enthusiast and advocate for clean, maintainable code.',
      avatar: 'JW',
      social: [
        { icon: LinkedinIcon, href: '#' },
        { icon: GithubIcon, href: '#' },
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="mb-16 text-center">
        <Heading className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Meet the Team
        </Heading>
        <Text className="text-xl text-dimmed max-w-2xl mx-auto">
          Talented individuals dedicated to building the best tools for
          designers and developers.
        </Text>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {team.map((member, index) => (
          <Card key={index} className="text-center">
            <CardBody className="p-8">
              <Avatar className="size-20 text-2xl mb-6 mx-auto">
                {member.avatar}
              </Avatar>

              <Heading className="text-lg font-semibold mb-1">
                {member.name}
              </Heading>
              <Text className="text-sm text-primary font-semibold mb-3">
                {member.role}
              </Text>
              <Text className="text-sm text-dimmed mb-6 leading-relaxed">
                {member.bio}
              </Text>

              <div className="flex gap-3 justify-center">
                {member.social.map((social, i) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={i}
                      href={social.href}
                      className="text-dimmed hover:text-primary transition-colors"
                    >
                      <Icon className="size-5" />
                    </a>
                  );
                })}
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
}
