import { useState, useEffect } from 'react';
import { Button } from 'components/selia/button';
import { Text } from 'components/selia/text';
import { ArrowDownCircleIcon, ExternalLinkIcon, ArrowUpIcon } from 'lucide-react';
import { useLoaderData } from 'react-router';
import { getBlockSources } from '~/lib/source';
import { blocks } from 'components/blocks';
import { BlockPreview } from 'components/block-preview';

export async function loader() {
  const sources = await getBlockSources();

  return { sources };
}

export default function Blocks() {
  const { sources } = useLoaderData<typeof loader>();
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const categorizedBlocks = Object.entries(blocks).reduce(
    (acc, [key, block]) => {
      const category = block.category || 'Uncategorized';
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push([key, block]);
      return acc;
    },
    {} as Record<string, [string, typeof blocks[keyof typeof blocks]][]>,
  );

  const categories = Object.keys(categorizedBlocks);

  return (
    <div className="container mx-auto py-8">
      <title>Blocks - Selia</title>
      <meta property="og:title" content="Blocks - Selia" />
      <div className="py-10 md:py-20">
        <div className="text-center lg:w-6/12 mx-auto">
          <h1 className="text-6xl/12 font-semibold tracking-tight pb-2">
            Build Faster with Pre-Built Blocks
          </h1>
          <Text className="text-dimmed font-light text-xl/6.5 md:text-2xl/7 mb-4 lg:w-9/12 mt-4 mx-auto">
            Blocks is a collection of prebuilt user interface elements and
            layouts, constructed using the core Selia components.
          </Text>
          <Button
            className="mt-6"
            render={<a href="#blocks" />}
            size="lg"
            pill
            variant="secondary"
          >
            Browse <ArrowDownCircleIcon />
          </Button>
          <Button
            className="mt-6 ml-2.5"
            render={
              <a
                href="https://github.com/nauvalazhar/selia/issues"
                target="_blank"
                rel="noopener noreferrer"
              />
            }
            size="lg"
            pill
            variant="plain"
          >
            Suggest a Block
            <ExternalLinkIcon />
          </Button>
        </div>
      </div>

      <div id="blocks" className="py-10">
        <div className="mb-12 flex flex-wrap gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              render={<a href={`#category-${category.toLowerCase()}`} />}
              variant="outline"
              size="sm"
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="flex flex-col gap-20">
          {Object.entries(categorizedBlocks).map(([category, categoryBlocks]) => (
            <div key={category} id={`category-${category.toLowerCase()}`}>
              <h2 className="text-3xl font-semibold tracking-tight mb-8">
                {category}
              </h2>
              <div className="flex flex-col gap-20">
                {categoryBlocks.map(([key, { name, description, pathIndex }]) => (
                  <BlockPreview
                    key={key}
                    name={key}
                    title={name}
                    description={description}
                    codeIndex={pathIndex}
                    code={sources[key as keyof typeof sources]}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Go to Top Button */}
      {showScrollToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transition-all duration-200 z-50 flex items-center justify-center"
          aria-label="Scroll to top"
        >
          <ArrowUpIcon className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}
