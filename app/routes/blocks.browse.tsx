import { useLoaderData, useSearchParams } from 'react-router';
import { getBlockSources } from '~/lib/source';
import { blocks } from 'components/blocks';
import { BlockPreview } from 'components/block-preview';
import { Button } from 'components/selia/button';
import { ArrowLeftIcon } from 'lucide-react';

export async function loader() {
  const sources = await getBlockSources();
  return { sources };
}

export default function BlocksBrowse() {
  const { sources } = useLoaderData<typeof loader>();
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedCategory = searchParams.get('category');

  const categories = [...new Set(Object.values(blocks).map(b => b.category))].sort();

  const filteredBlocks = Object.entries(blocks).filter(([_, block]) => {
    if (selectedCategory) {
      return block.category === selectedCategory;
    }
    return true;
  });

  const handleCategoryFilter = (category: string | null) => {
    const newParams = new URLSearchParams(searchParams);
    if (category) {
      newParams.set('category', category);
    } else {
      newParams.delete('category');
    }
    setSearchParams(newParams);
  };

  return (
    <div className="container mx-auto py-8">
      <title>Browse Blocks - Selia</title>
      <meta property="og:title" content="Browse All Blocks - Selia" />

      <div className="mb-8 flex items-center justify-between">
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
        All Blocks
      </h1>

      <div className="mb-8">
        <p className="text-sm text-slate-400 mb-4">Filter by category:</p>
        <div className="flex flex-wrap gap-3">
          <Button
            onClick={() => handleCategoryFilter(null)}
            variant={!selectedCategory ? 'default' : 'outline'}
            size="sm"
          >
            All Categories
          </Button>
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => handleCategoryFilter(category)}
              variant={selectedCategory === category ? 'default' : 'outline'}
              size="sm"
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-20">
        {filteredBlocks.map(([key, { name, description, pathIndex }]) => (
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
