import { useLayoutStore } from '~/lib/layout-store';
import { useShallow } from 'zustand/react/shallow';
import { useNavigate } from 'react-router';
import { useHotkeys } from 'react-hotkeys-hook';
import { Command, CommandContent, CommandBody } from './selia/command';
import {
  Autocomplete,
  AutocompleteInput,
  AutocompleteEmpty,
  AutocompleteList,
  AutocompleteGroup,
  AutocompleteGroupLabel,
  AutocompleteCollection,
  AutocompleteItem,
  AutocompleteFooter,
  AutocompleteFooterItem,
  AutocompleteFooterText,
} from './selia/autocomplete';
import { SearchIcon } from 'lucide-react';
import { Kbd, KbdGroup } from './selia/kbd';
import { useThemeStore } from '~/lib/theme-store';

type Item = {
  value: string;
  label: string;
  meta?: string;
};

type Group = {
  value: string;
  items: Item[];
};

export function Cmdk({ items }: { items: Group[] }) {
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

  return (
    <Command open={isCmdkOpen} onOpenChange={toggleCmdk}>
      <CommandContent>
        <Autocomplete open items={items} autoHighlight>
          <CommandBody>
            <div className="flex items-center border-b border-dialog-border px-5 gap-1">
              <SearchIcon className="size-4 text-muted" />
              <AutocompleteInput placeholder="Search for pages..." />
            </div>

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
          </CommandBody>

          <AutocompleteFooter className="px-5 pt-3 pb-2.5">
            <AutocompleteFooterItem>
              <Kbd>↵</Kbd>
              <AutocompleteFooterText>Select Item</AutocompleteFooterText>
            </AutocompleteFooterItem>
            <AutocompleteFooterItem>
              <KbdGroup>
                <Kbd>↑</Kbd>
                <Kbd>↓</Kbd>
              </KbdGroup>
              <AutocompleteFooterText>Navigate</AutocompleteFooterText>
            </AutocompleteFooterItem>
          </AutocompleteFooter>
        </Autocomplete>
      </CommandContent>
    </Command>
  );
}
