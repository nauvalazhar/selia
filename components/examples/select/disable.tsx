import {
  Select,
  SelectPopup,
  SelectItem,
  SelectList,
  SelectTrigger,
  SelectValue,
} from 'components/selia/select';

export default function SelectBasicExample() {
  return (
    <Select items={options}>
      <SelectTrigger className="lg:w-64">
        <SelectValue placeholder="Football club" />
      </SelectTrigger>
      <SelectPopup>
        <SelectList>
          {options.map((option) => (
            <SelectItem
              key={option.value}
              value={option}
              disabled={option.disabled}
            >
              {option.label}
            </SelectItem>
          ))}
        </SelectList>
      </SelectPopup>
    </Select>
  );
}

const options = [
  { value: 'liverpool', label: 'Liverpool' },
  { value: 'man-city', label: 'Manchester City' },
  { value: 'chelsea', label: 'Chelsea' },
  { value: 'arsenal', label: 'Arsenal' },
  { value: 'manchester-united', label: 'Manchester United', disabled: true },
];
