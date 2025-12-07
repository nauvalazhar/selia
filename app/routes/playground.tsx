import { Card, CardBody, CardHeader, CardTitle } from 'components/selia/card';
import {
  Accordion,
  AccordionTrigger,
  AccordionPanel,
  AccordionItem,
  AccordionHeader,
} from 'components/selia/accordion';
import { Text } from 'components/selia/text';
import {
  AtomIcon,
  HeartIcon,
  PlusIcon,
  TextAlignStart,
  TextAlignCenter,
  TextAlignEnd,
  BookIcon,
  BoxIcon,
  CodeIcon,
  Code2Icon,
} from 'lucide-react';
import { Toggle } from 'components/selia/toggle';
import { Button } from 'components/selia/button';
import { ToggleGroup } from 'components/selia/toggle-group';
import {
  Autocomplete,
  AutocompleteCollection,
  AutocompleteContent,
  AutocompleteEmpty,
  AutocompleteGroup,
  AutocompleteGroupLabel,
  AutocompleteInput,
  AutocompleteItem,
  AutocompleteList,
} from 'components/selia/autocomplete';
import {
  Dropdown,
  DropdownContent,
  DropdownItem,
  DropdownTrigger,
} from 'components/selia/dropdown';

export default function Playground() {
  return (
    <div className="flex items-center justify-center min-h-screen gap-8">
      <div className="w-96">
        <Autocomplete items={items} autoHighlight open>
          <AutocompleteInput placeholder="Search for pages..." />
          <AutocompleteContent>
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
          </AutocompleteContent>
        </Autocomplete>
      </div>
      <Dropdown>
        <DropdownTrigger render={<Button>Dropdown</Button>} className="w-96" />
        <DropdownContent className="w-(--anchor-width)">
          <DropdownItem>Item 1</DropdownItem>
          <DropdownItem>Item 2</DropdownItem>
          <DropdownItem>Item 3</DropdownItem>
        </DropdownContent>
      </Dropdown>
    </div>
  );
}

const items = [
  {
    label: 'Suggestions',
    items: [
      {
        value: 'docs/getting-started',
        label: 'Getting Started',
        icon: <BookIcon />,
      },
      {
        value: 'docs/components',
        label: 'Components',
        icon: <BoxIcon />,
      },
      {
        value: 'docs/hooks',
        label: 'Hooks',
        icon: <CodeIcon />,
      },
      {
        value: 'docs/utilities',
        label: 'Utilities',
        icon: <Code2Icon />,
      },
    ],
  },
  {
    label: 'Pages',
    items: [
      {
        value: '/blocks',
        label: 'Blocks',
      },
    ],
  },
  {
    label: 'Themes',
    items: [
      {
        value: 'toggle-light',
        label: 'Light Mode',
      },
    ],
  },
];
