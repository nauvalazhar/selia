import {
  Combobox,
  ComboboxPopup,
  ComboboxEmpty,
  ComboboxItem,
  ComboboxList,
  ComboboxSearch,
  ComboboxTrigger,
  ComboboxValue,
} from 'components/selia/combobox';

export default function Basic() {
  return (
    <Combobox items={options} defaultValue={options[0]}>
      <ComboboxTrigger className="w-64">
        <ComboboxValue />
      </ComboboxTrigger>
      <ComboboxPopup>
        <ComboboxSearch />
        <ComboboxEmpty>No results found</ComboboxEmpty>
        <ComboboxList>
          {(item) => (
            <ComboboxItem key={item.value} value={item}>
              {item.label}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxPopup>
    </Combobox>
  );
}

const options = [
  { value: 'software-engineering', label: 'Software Engineering' },
  { value: 'machine-learning', label: 'Machine Learning' },
  { value: 'data-science', label: 'Data Science' },
  { value: 'artificial-intelligence', label: 'Artificial Intelligence' },
  { value: 'cybersecurity', label: 'Cybersecurity' },
  { value: 'network-engineering', label: 'Network Engineering' },
  { value: 'database-management', label: 'Database Management' },
];
