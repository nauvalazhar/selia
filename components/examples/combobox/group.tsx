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

export default function Playground() {
  return (
    <Combobox items={items}>
      <ComboboxTrigger className="w-64">
        <ComboboxValue />
      </ComboboxTrigger>
      <ComboboxPopup>
        <ComboboxSearch placeholder="Search models..." />
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
        label: 'Lamb of God',
        value: 'lamb-of-god',
      },
      {
        label: 'Architects',
        value: 'architects',
      },
    ],
  },
];
