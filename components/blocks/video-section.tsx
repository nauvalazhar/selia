import { Heading } from 'components/selia/heading';
import { Text } from 'components/selia/text';
import { PlayIcon } from 'lucide-react';

export default function VideoSectionBlock() {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="mb-16 text-center">
        <Heading className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          See It in Action
        </Heading>
        <Text className="text-xl text-dimmed max-w-2xl mx-auto">
          Watch a quick demo of how our platform works and how it can transform your workflow.
        </Text>
      </div>

      <div className="relative max-w-4xl mx-auto group">
        {/* Video Container */}
        <div className="relative bg-black rounded-xl overflow-hidden aspect-video">
          {/* Placeholder for video */}
          <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
            <Text className="text-white/40">
              Video Embed Here
            </Text>
          </div>

          {/* Play Button Overlay */}
          <button className="absolute inset-0 flex items-center justify-center group-hover:bg-black/20 transition-colors">
            <div className="w-20 h-20 bg-white/90 group-hover:bg-white rounded-full flex items-center justify-center transition-all transform group-hover:scale-110">
              <PlayIcon className="w-8 h-8 text-black fill-black ml-1" />
            </div>
          </button>

          {/* Border Glow */}
          <div className="absolute inset-0 rounded-xl border-2 border-white/10 group-hover:border-white/20 transition-colors" />
        </div>

        {/* Shadow Effect */}
        <div className="absolute inset-0 rounded-xl -z-10 -m-4 bg-gradient-to-br from-blue-600/20 to-purple-600/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            title: 'Get Started',
            description: 'Learn the basics and start building in minutes',
          },
          {
            title: 'Advanced Features',
            description: 'Master powerful features to scale your projects',
          },
          {
            title: 'Best Practices',
            description: 'Learn pro tips and industry best practices',
          },
        ].map((resource, index) => (
          <div key={index} className="text-center">
            <Heading className="text-lg font-bold mb-2">
              {resource.title}
            </Heading>
            <Text className="text-dimmed">
              {resource.description}
            </Text>
          </div>
        ))}
      </div>
    </div>
  );
}
