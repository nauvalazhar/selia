import { useLayoutStore } from '~/lib/layout-store';
import { useShallow } from 'zustand/react/shallow';
import { useNavigate } from 'react-router';
import { useHotkeys } from 'react-hotkeys-hook';
import {
  Command,
  CommandContent,
  CommandBody,
  CommandFooterText,
  CommandFooterItem,
  CommandFooter,
} from './selia/command';
import {
  Autocomplete,
  AutocompleteInput,
  AutocompleteEmpty,
  AutocompleteList,
  AutocompleteGroup,
  AutocompleteGroupLabel,
  AutocompleteCollection,
  AutocompleteItem,
} from './selia/autocomplete';
import { MoonIcon, SearchIcon, SunIcon } from 'lucide-react';
import { Kbd, KbdGroup } from './selia/kbd';
import { useThemeStore } from '~/lib/theme-store';
import { InputGroup, InputGroupAddon } from './selia/input-group';

type Item = {
  value: string;
  label: string;
  meta?: string;
  icon?: React.ReactNode;
};

type Group = {
  value: string;
  items: Item[];
};

export function Cmdk({ items: _items }: { items: Group[] }) {
  const { isCmdkOpen, openCmdk, closeCmdk, toggleCmdk } = useLayoutStore(
    useShallow((state) => ({
      isCmdkOpen: state.isCmdkOpen,
      openCmdk: state.openCmdk,
      closeCmdk: state.closeCmdk,
      toggleCmdk: state.toggleCmdk,
    })),
  );
  const setTheme = useThemeStore((state) => state.setTheme);
  const navigate = useNavigate();

  useHotkeys(['meta+k', 'ctrl+k'], (e: KeyboardEvent) => {
    e.preventDefault();
    toggleCmdk();
  });
  useHotkeys(['esc'], () => {
    closeCmdk();
  });

  function handleItemClick(item: Item) {
    closeCmdk();

    switch (item.value) {
      case 'toggle-light':
        setTheme('light');
        break;
      case 'toggle-dark':
        setTheme('dark');
        break;
      default:
        navigate(item.value);
        break;
    }
  }

  const items = [
    ..._items,
    {
      value: 'Installation',
      label: 'Installation',
      items: [
        {
          value: '/docs/installation/vite',
          label: 'Vite',
          meta: 'Framework Guide',
        },
        {
          value: '/docs/installation/react-router',
          label: 'React Router',
          meta: 'Framework Guide',
        },
        {
          value: '/docs/installation/tanstack-start',
          label: 'TanStack Start',
          meta: 'Framework Guide',
        },
        {
          value: '/docs/installation/tanstack-router',
          label: 'TanStack Router',
          meta: 'Framework Guide',
        },
        {
          value: '/docs/installation/next',
          label: 'Next.js',
          meta: 'Framework Guide',
        },
        {
          value: '/docs/installation/manual',
          label: 'Manual',
          meta: 'Framework Guide',
        },
      ],
    },
    {
      value: 'Themes',
      label: 'Themes',
      items: [
        {
          icon: <SunIcon />,
          value: 'toggle-light',
          label: 'Light Mode',
          meta: 'Theme',
        },
        {
          icon: <MoonIcon />,
          value: 'toggle-dark',
          label: 'Dark Mode',
          meta: 'Theme',
        },
      ],
    },
  ];

  return (
    <Command open={isCmdkOpen} onOpenChange={toggleCmdk}>
      <CommandContent>
        <CommandBody>
          <Autocomplete open items={items} autoHighlight>
            <InputGroup variant="plain">
              <InputGroupAddon>
                <SearchIcon className="size-4 text-muted" />
              </InputGroupAddon>
              <AutocompleteInput
                placeholder="Search for pages..."
                variant="plain"
                onKeyDown={(e) => {
                  if (e.key === 'Escape') {
                    closeCmdk();
                  }
                }}
              />
            </InputGroup>

            <AutocompleteEmpty>No results found.</AutocompleteEmpty>

            <AutocompleteList>
              {(group: Group) => (
                <AutocompleteGroup key={group.value} items={group.items}>
                  <AutocompleteGroupLabel>{group.value}</AutocompleteGroupLabel>
                  <AutocompleteCollection>
                    {(item: Item) => (
                      <AutocompleteItem
                        key={item.value}
                        value={item.value}
                        onClick={() => handleItemClick(item)}
                      >
                        {item.icon}
                        <span>{item.label}</span>
                        <span className="ml-auto text-xs text-dimmed">
                          {item.meta}
                        </span>
                      </AutocompleteItem>
                    )}
                  </AutocompleteCollection>
                </AutocompleteGroup>
              )}
            </AutocompleteList>
          </Autocomplete>
        </CommandBody>

        <CommandFooter>
          <CommandFooterItem>
            <Kbd>↵</Kbd>
            <CommandFooterText>Select Item</CommandFooterText>
          </CommandFooterItem>
          <CommandFooterItem>
            <KbdGroup>
              <Kbd>↑</Kbd>
              <Kbd>↓</Kbd>
            </KbdGroup>
            <CommandFooterText>Navigate</CommandFooterText>
          </CommandFooterItem>
        </CommandFooter>
      </CommandContent>
    </Command>
  );
}
