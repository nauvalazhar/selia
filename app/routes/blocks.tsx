import type { Route } from './+types/blocks';
import { Button } from 'components/selia/button';
import { Text } from 'components/selia/text';
import { ArrowDownCircleIcon } from 'lucide-react';
import { useLoaderData } from 'react-router';
import { getBlocks } from '~/lib/source';
import { blocks } from 'components/blocks';
import { BlockPreview } from 'components/block-preview';

export async function loader() {
  const sources = await getBlocks();

  return { sources };
}

export default function Blocks() {
  const { sources } = useLoaderData<typeof loader>();

  return (
    <div className="container mx-auto px-4 md:px-2.5 py-8">
      <title>Blocks - Selia</title>
      <div className="py-20">
        <h1 className="text-6xl font-medium tracking-tight">
          User Interface Blocks
        </h1>
        <Text className="text-muted lg:w-8/12 xl:w-4/12 mt-2 text-lg">
          Blocks is a collection of prebuilt user interface elements and
          layouts, constructed using the core Selia components.
        </Text>
        <Button className="mt-6" render={<a href="#blocks" />}>
          Browse <ArrowDownCircleIcon />
        </Button>
      </div>

      <div id="blocks" className="py-10 flex flex-col gap-20">
        {Object.entries(blocks).map(([key, { name, description }]) => (
          <BlockPreview
            key={key}
            name={key}
            title={name}
            description={description}
            code={sources[key as keyof typeof sources]}
          />
        ))}
      </div>
    </div>
  );
}
