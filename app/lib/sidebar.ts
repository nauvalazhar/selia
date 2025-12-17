import { getComponents } from '~/lib/components';
import { componentName } from '~/lib/utils';

export async function getSidebarMenu() {
  const components = await getComponents();

  return [
    {
      title: 'Prologue',
      items: [
        {
          name: 'Introduction',
          path: '/docs/introduction',
        },
        {
          name: 'Installation',
          path: '/docs/installation',
        },
        {
          name: 'Composition',
          path: '/docs/composition',
        },
        {
          name: 'Customization',
          path: '/docs/customization',
        },
      ],
    },
    {
      title: 'Components',
      items: components
        .map((component) => {
          return {
            name: componentName(component),
            path: `/docs/${component.replace('.tsx', '')}`,
          };
        })
        .sort((a, b) => a.name.localeCompare(b.name)),
    },
  ];
}

export async function getSidebarMenuNextPrev(path: string) {
  const menu = await getSidebarMenu();
  const menuList = menu.flatMap((group) => group.items);

  const currentIndex = menuList.findIndex((item) => item.path === path);
  const next = menuList[currentIndex + 1];
  const prev = menuList[currentIndex - 1];

  return { next, prev };
}
