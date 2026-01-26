import { Button } from 'components/selia/button';
import { Text } from 'components/selia/text';
import {
  ExternalLinkIcon,
  MessageCircleIcon,
  MenuIcon,
  UserIcon,
  FileTextIcon,
  LayoutDashboardIcon,
  GridIcon,
} from 'lucide-react';
import { blocks } from 'components/blocks';
import { categoryToSlug } from '~/lib/utils';

const categoryIconMap: Record<string, React.ReactNode> = {
  Chat: <MessageCircleIcon className="size-6" />,
  Sidebar: <MenuIcon className="size-6" />,
  Profile: <UserIcon className="size-6" />,
  Forms: <FileTextIcon className="size-6" />,
  Dashboard: <LayoutDashboardIcon className="size-6" />,
};

export async function loader() {
  return null;
}

export default function Blocks() {
  const categories = [...new Set(Object.values(blocks).map(b => b.category))].sort();

  const blockCountByCategory = categories.reduce(
    (acc, category) => {
      acc[category] = Object.values(blocks).filter(b => b.category === category).length;
      return acc;
    },
    {} as Record<string, number>,
  );

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
            render={<a href="/blocks/browse" />}
            size="lg"
            pill
            variant="secondary"
          >
            Browse All <GridIcon />
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

      <div id="categories" className="py-10">
        <h2 className="text-3xl font-semibold tracking-tight mb-12 text-center">
          Explore by Category
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
          {categories.map((category) => (
            <a
              key={category}
              href={`/blocks/${categoryToSlug(category)}`}
              className="group flex flex-col items-center justify-center rounded-lg border border-slate-200 bg-white p-5 transition-all duration-200 hover:border-slate-300 dark:border-slate-700 dark:bg-transparent dark:hover:border-slate-600"
            >
              <div className="mb-2 text-slate-600 group-hover:text-slate-700 transition-colors dark:text-slate-400 dark:group-hover:text-slate-300">
                {categoryIconMap[category]}
              </div>
              <h3 className="text-base font-semibold text-slate-900 text-center dark:text-white">
                {category}
              </h3>
              <p className="mt-1 text-xs text-slate-500 text-center dark:text-slate-400">
                {blockCountByCategory[category]} block{blockCountByCategory[category] !== 1 ? 's' : ''}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
