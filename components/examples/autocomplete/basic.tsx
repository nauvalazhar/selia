import {
  Autocomplete,
  AutocompletePopup,
  AutocompleteEmpty,
  AutocompleteInput,
  AutocompleteItem,
  AutocompleteList,
  AutocompleteGroup,
  AutocompleteGroupLabel,
  AutocompleteCollection,
} from 'components/selia/autocomplete';

export default function AutocompleteBasicExample() {
  return (
    <Autocomplete items={items}>
      <AutocompleteInput
        placeholder="Search for bands..."
        className="lg:w-64 w-full"
      />
      <AutocompletePopup>
        <AutocompleteEmpty>No results found</AutocompleteEmpty>
        <AutocompleteList>
          {(group) => (
            <AutocompleteGroup key={group.group} items={group.items}>
              <AutocompleteGroupLabel>{group.group}</AutocompleteGroupLabel>
              <AutocompleteCollection>
                {(item) => (
                  <AutocompleteItem key={item.value} value={item}>
                    {item.label}
                  </AutocompleteItem>
                )}
              </AutocompleteCollection>
            </AutocompleteGroup>
          )}
        </AutocompleteList>
      </AutocompletePopup>
    </Autocomplete>
  );
}

const items = [
  {
    group: 'Rock',
    items: [
      { value: 'radiohead', label: 'Radiohead' },
      { value: 'deftones', label: 'Deftones' },
      { value: 'tool', label: 'Tool' },
      { value: 'blur', label: 'Blur' },
      { value: 'nirvana', label: 'Nirvana' },
      { value: 'soundgarden', label: 'Soundgarden' },
      { value: 'foo-fighters', label: 'Foo Fighters' },
      { value: 'pearl-jam', label: 'Pearl Jam' },
    ],
  },
  {
    group: 'Classic Rock',
    items: [
      { value: 'pink-floyd', label: 'Pink Floyd' },
      { value: 'led-zeppelin', label: 'Led Zeppelin' },
      { value: 'the-beatles', label: 'The Beatles' },
    ],
  },
];
