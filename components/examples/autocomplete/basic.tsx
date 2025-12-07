import {
  Autocomplete,
  AutocompleteContent,
  AutocompleteEmpty,
  AutocompleteInput,
  AutocompleteItem,
  AutocompleteList,
} from 'components/selia/autocomplete';

export default function AutocompleteBasicExample() {
  return (
    <Autocomplete items={items}>
      <AutocompleteInput
        placeholder="Search for bands..."
        className="lg:w-64 w-full"
      />
      <AutocompleteContent>
        <AutocompleteEmpty>No results found</AutocompleteEmpty>
        <AutocompleteList>
          {(item) => (
            <AutocompleteItem key={item.value} value={item}>
              {item.label}
            </AutocompleteItem>
          )}
        </AutocompleteList>
      </AutocompleteContent>
    </Autocomplete>
  );
}

const items = [
  { value: 'radiohead', label: 'Radiohead' },
  { value: 'deftones', label: 'Deftones' },
  { value: 'tool', label: 'Tool' },
  { value: 'pink-floyd', label: 'Pink Floyd' },
  { value: 'led-zeppelin', label: 'Led Zeppelin' },
  { value: 'the-beatles', label: 'The Beatles' },
  { value: 'blur', label: 'Blur' },
  { value: 'nirvana', label: 'Nirvana' },
  { value: 'soundgarden', label: 'Soundgarden' },
  { value: 'pearl-jam', label: 'Pearl Jam' },
  { value: 'foo-fighters', label: 'Foo Fighters' },
];
