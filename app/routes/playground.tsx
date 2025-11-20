import * as React from 'react';
import { cn } from 'lib/utils';
import { Kbd, KbdGroup } from 'components/selia/kbd';
import { Dialog, DialogBody, DialogContent } from 'components/selia/dialog';
import {
  AutocompleteCollection,
  AutocompleteEmpty,
  AutocompleteFooter,
  AutocompleteFooterItem,
  AutocompleteFooterText,
  AutocompleteGroup,
  AutocompleteGroupLabel,
  AutocompleteInput,
  AutocompleteItem,
  AutocompleteList,
  Autocomplete,
} from 'components/selia/autocomplete';
import { Command, CommandBody, CommandContent } from 'components/selia/command';
import { SearchIcon } from 'lucide-react';

export default function ExampleCommandPalette() {
  const [open, setOpen] = React.useState(false);

  function handleItemClick(item: Item) {
    console.log('Command executed:', item);
    setOpen(false);
  }

  return (
    <Command>
      <CommandContent>
        <Autocomplete open items={groupedItems} autoHighlight>
          <CommandBody>
            <div className="flex items-center border-b border-dialog-border px-2.5">
              <SearchIcon className="size-4 text-muted" />
              <AutocompleteInput placeholder="Search for apps and commands..." />
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
                        <span className="">{item.label}</span>
                        <span className="ml-auto text-sm text-dimmed">
                          {group.value === 'Suggestions'
                            ? 'Application'
                            : 'Command'}
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

export interface Item {
  value: string;
  label: string;
}

export interface Group {
  value: string;
  items: Item[];
}

export const suggestions: Item[] = [
  { value: 'linear', label: 'Linear' },
  { value: 'figma', label: 'Figma' },
  { value: 'slack', label: 'Slack' },
  { value: 'youtube', label: 'YouTube' },
  { value: 'raycast', label: 'Raycast' },
];

export const commands: Item[] = [
  { value: 'clipboard-history', label: 'Clipboard History' },
  { value: 'import-extension', label: 'Import Extension' },
  { value: 'create-snippet', label: 'Create Snippet' },
  { value: 'system-preferences', label: 'System Preferences' },
  { value: 'window-management', label: 'Window Management' },
];

export const groupedItems: Group[] = [
  { value: 'Suggestions', items: suggestions },
  { value: 'Commands', items: commands },
];
