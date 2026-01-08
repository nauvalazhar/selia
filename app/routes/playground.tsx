import { Button } from 'components/selia/button';
import {
  Combobox,
  ComboboxCollection,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxGroupLabel,
  ComboboxItem,
  ComboboxList,
  ComboboxPopup,
  ComboboxSearch,
  ComboboxTrigger,
  ComboboxValue,
} from 'components/selia/combobox';
import {
  Menu,
  MenuItem,
  MenuPopup,
  MenuSeparator,
  MenuSubmenu,
  MenuSubmenuTrigger,
  MenuSubPopup,
  MenuTrigger,
} from 'components/selia/menu';
import { Menubar } from 'components/selia/menubar';
import { InputGroup, InputGroupAddon } from 'components/selia/input-group';
import { SearchIcon } from 'lucide-react';

export default function Playground() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Combobox items={items}>
        <ComboboxTrigger className="w-md">
          <ComboboxValue />
        </ComboboxTrigger>
        <ComboboxPopup>
          <InputGroup variant="plain">
            <InputGroupAddon>
              <SearchIcon />
            </InputGroupAddon>
            <ComboboxSearch placeholder="Search models..." />
          </InputGroup>
          <ComboboxEmpty>No results found</ComboboxEmpty>
          <ComboboxList>
            {(group) => (
              <ComboboxGroup items={group.items} key={group.label}>
                <ComboboxGroupLabel>{group.label}</ComboboxGroupLabel>
                <ComboboxCollection>
                  {(item) => (
                    <ComboboxItem key={item.value} value={item}>
                      {item.label}
                    </ComboboxItem>
                  )}
                </ComboboxCollection>
              </ComboboxGroup>
            )}
          </ComboboxList>
        </ComboboxPopup>
      </Combobox>
    </div>
  );
}

const items = [
  {
    label: 'Rock',
    items: [
      {
        label: 'Pink Floyd',
        value: 'pink-floyd',
      },
      {
        label: 'Led Zeppelin',
        value: 'led-zeppelin',
      },
      {
        label: 'The Beatles',
        value: 'the-beatles',
      },
    ],
  },
  {
    label: 'Metal',
    items: [
      {
        label: 'Metallica',
        value: 'metallica',
      },
      {
        label: 'Megadeth',
        value: 'megadeth',
      },
    ],
  },
];
