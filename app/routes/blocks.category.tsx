import type { Route } from './+types/blocks.category';
import { useEffect } from 'react';
import { useLoaderData } from 'react-router';
import { getBlockSources } from '~/lib/source';
import { blocks } from 'components/blocks';
import { BlockPreview } from 'components/block-preview';
import { slugToCategory } from '~/lib/utils';
import { Button } from 'components/selia/button';
import { ArrowLeftIcon } from 'lucide-react';

export async function loader({ params }: Route.LoaderArgs) {
  const categorySlug = params.category;
  const category = slugToCategory(categorySlug);

  if (!category) {
    throw new Response('Category not found', { status: 404 });
  }

  const categoryBlocks = Object.entries(blocks).filter(
    ([_, block]) => block.category === category,
  );

  const sources = await getBlockSources();

  return { category, categoryBlocks, sources };
}

export default function BlocksCategory() {
  const { category, categoryBlocks, sources } =
    useLoaderData<typeof loader>();

  useEffect(() => {
    document.title = `${category} Blocks - Selia`;
  }, [category]);

  return (
    <div className="container mx-auto py-8">
      <title>{`${category} Blocks - Selia`}</title>
      <meta property="og:title" content={`${category} Blocks - Selia`} />

      <div className="mb-8 flex items-center gap-4">
        <Button
          render={<a href="/blocks" />}
          variant="outline"
          size="sm"
        >
          <ArrowLeftIcon className="size-4" />
          Back to Categories
        </Button>
      </div>

      <h1 className="text-4xl font-semibold tracking-tight mb-8">
        {category} Blocks
      </h1>

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
  );
}
