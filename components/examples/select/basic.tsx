import {
  Select,
  SelectContent,
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
      <SelectContent>
        <SelectList>
          {options.map((option) => (
            <SelectItem key={option.value} value={option}>
              {option.label}
            </SelectItem>
          ))}
        </SelectList>
      </SelectContent>
    </Select>
  );
}

const options = [
  { value: 'liverpool', label: 'Liverpool' },
  { value: 'man-city', label: 'Manchester City' },
  { value: 'chelsea', label: 'Chelsea' },
  { value: 'arsenal', label: 'Arsenal' },
];
