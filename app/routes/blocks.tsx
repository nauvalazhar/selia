import { Button } from 'components/selia/button';
import { Text } from 'components/selia/text';
import { ArrowDownCircleIcon, ExternalLinkIcon } from 'lucide-react';
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

      <div id="blocks" className="py-10 flex flex-col gap-20">
        {Object.entries(blocks).map(
          ([key, { name, description, pathIndex }]) => (
            <BlockPreview
              key={key}
              name={key}
              title={name}
              description={description}
              codeIndex={pathIndex}
              code={sources[key as keyof typeof sources]}
            />
          ),
        )}
      </div>
    </div>
  );
}
