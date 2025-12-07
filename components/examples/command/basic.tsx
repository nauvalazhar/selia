import {
  Command,
  CommandTrigger,
  CommandContent,
  CommandBody,
  CommandFooter,
  CommandFooterItem,
  CommandFooterText,
} from 'components/selia/command';
import { Kbd, KbdGroup } from 'components/selia/kbd';
import {
  Autocomplete,
  AutocompleteInput,
  AutocompleteEmpty,
  AutocompleteList,
  AutocompleteGroup,
  AutocompleteGroupLabel,
  AutocompleteCollection,
  AutocompleteItem,
} from 'components/selia/autocomplete';
import { Button } from 'components/selia/button';
import { InputGroup, InputGroupAddon } from 'components/selia/input-group';
import { SearchIcon } from 'lucide-react';
import { useState } from 'react';

export default function CommandBasicExample() {
  const [open, setOpen] = useState(false);

  return (
    <Command open={open} onOpenChange={setOpen}>
      <CommandTrigger render={<Button>Open Command</Button>} />
      <CommandContent>
        <CommandBody>
          <Autocomplete items={items} autoHighlight open>
            <InputGroup variant="plain">
              <InputGroupAddon>
                <SearchIcon />
              </InputGroupAddon>
              <AutocompleteInput
                placeholder="Search apps or commands..."
                variant="plain"
                onKeyDown={(e) => {
                  if (e.key === 'Escape') {
                    setOpen(false);
                  }
                }}
              />
            </InputGroup>
            <AutocompleteEmpty>No results found.</AutocompleteEmpty>
            <AutocompleteList>
              {(group) => (
                <AutocompleteGroup key={group.label} items={group.items}>
                  <AutocompleteGroupLabel>{group.label}</AutocompleteGroupLabel>
                  <AutocompleteCollection>
                    {(item) => (
                      <AutocompleteItem
                        key={item.value}
                        value={item.value}
                        onClick={() => console.log(item)}
                      >
                        {item.icon}
                        {item.label}
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

const items = [
  {
    label: 'Suggestions',
    items: [
      {
        label: 'Figma',
        value: 'figma',
      },
      {
        label: 'Adobe XD',
        value: 'adobe-xd',
      },
      {
        label: 'Sketch',
        value: 'sketch',
      },
    ],
  },
  {
    label: 'File Management',
    items: [
      {
        label: 'File Explorer',
        value: 'file-explorer',
      },
      {
        label: 'File Search',
        value: 'file-search',
      },
      {
        label: 'File Transfer',
        value: 'file-transfer',
      },
    ],
  },
  {
    label: 'Settings',
    items: [
      {
        label: 'General',
        value: 'general',
      },
      {
        label: 'Appearance',
        value: 'appearance',
      },
      {
        label: 'Accessibility',
        value: 'accessibility',
      },
    ],
  },
];
