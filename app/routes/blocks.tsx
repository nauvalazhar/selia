import { Button } from 'components/selia/button';
import { Text } from 'components/selia/text';
import {
  ExternalLinkIcon,
  FileTextIcon,
  LayoutDashboardIcon,
  LayersIcon,
  ArrowRightIcon,
  SparklesIcon,
  SidebarIcon,
  CircleHelpIcon,
  StarIcon,
} from 'lucide-react';
import { blocks, categories } from 'components/blocks';
import { categoryToSlug } from '~/lib/utils';
import {
  Item,
  ItemAction,
  ItemContent,
  ItemMedia,
  ItemTitle,
} from 'components/selia/item';
import { Link } from 'react-router';
import { IconBox } from 'components/selia/icon-box';
import type { Route } from './+types/blocks';
import { getBlockSources } from '~/lib/source';
import { BlockPreview } from 'components/block-preview';
import { ScrollArea } from 'components/selia/scroll-area';
import { slugToCategory } from '#utils';

const categoryIconMap: Record<string, React.ReactNode> = {
  AI: <SparklesIcon />,
  Sidebar: <SidebarIcon />,
  Misc: <CircleHelpIcon />,
  Forms: <FileTextIcon />,
  Dashboard: <LayoutDashboardIcon />,
};

export async function loader({ params }: Route.LoaderArgs) {
  const { category } = params;

  if (!category) {
    const featuredBlocks = Object.fromEntries(
      Object.entries(blocks).filter(([_, b]) => b.featured),
    );
    const sources = await getBlockSources(featuredBlocks);

    return { filteredBlocks: featuredBlocks, sources };
  }

  const categoryBlocks = Object.fromEntries(
    Object.entries(blocks).filter(
      ([_, b]) => b.category === slugToCategory(category),
    ),
  );

  const sources = await getBlockSources(categoryBlocks);

  return { filteredBlocks: categoryBlocks, sources };
}

export default function Blocks({ loaderData, params }: Route.ComponentProps) {
  const { category: categoryParam } = params;
  const { filteredBlocks, sources } = loaderData;

  return (
    <div className="container mx-auto py-8">
      <title>{`${categoryParam ? `${slugToCategory(categoryParam)} Blocks` : 'Blocks'} - Selia`}</title>
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
            render={<a href="#browse" />}
            size="lg"
            pill
            variant="secondary"
          >
            Browse <LayersIcon />
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

      <ScrollArea className="py-4 mb-4" scrollbar={false}>
        <div className="flex *:shrink-0 *:w-6/12 lg:*:w-2/12 gap-2.5">
          <Item render={<Link to="/blocks" />} className="items-center">
            <ItemMedia>
              <IconBox variant={!categoryParam ? 'primary' : 'secondary'}>
                <StarIcon />
              </IconBox>
            </ItemMedia>
            <ItemContent>
              <ItemTitle>Featured</ItemTitle>
            </ItemContent>
            <ItemAction>
              <ArrowRightIcon />
            </ItemAction>
          </Item>
          {categories.map((category) => (
            <Item
              key={category}
              render={<Link to={`/blocks/${categoryToSlug(category)}`} />}
              className="items-center"
            >
              <ItemMedia>
                <IconBox
                  variant={
                    category === slugToCategory(categoryParam ?? '')
                      ? 'primary'
                      : 'secondary'
                  }
                >
                  {categoryIconMap[category]}
                </IconBox>
              </ItemMedia>
              <ItemContent>
                <ItemTitle>{category}</ItemTitle>
              </ItemContent>
              <ItemAction>
                <ArrowRightIcon />
              </ItemAction>
            </Item>
          ))}
        </div>
      </ScrollArea>

      <div className="flex flex-col gap-20" id="browse">
        {Object.entries(filteredBlocks).map(
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
