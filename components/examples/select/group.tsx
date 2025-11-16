import {
  Select,
  SelectContent,
  SelectGroup,
  SelectGroupLabel,
  SelectItem,
  SelectList,
  SelectTrigger,
  SelectValue,
} from 'components/selia/select';

export default function SelectGroupExample() {
  return (
    <Select>
      <SelectTrigger className="lg:w-64">
        <SelectValue placeholder="Your favorite football club" />
      </SelectTrigger>
      <SelectContent>
        <SelectList>
          {optionsGrouped.map((group) => (
            <SelectGroup key={group.label}>
              <SelectGroupLabel>{group.label}</SelectGroupLabel>
              {group.options.map((option) => (
                <SelectItem key={option.value} value={option}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectGroup>
          ))}
        </SelectList>
      </SelectContent>
    </Select>
  );
}

const optionsGrouped = [
  {
    label: 'Premier League',
    options: [
      { value: 'liverpool', label: 'Liverpool' },
      { value: 'man-city', label: 'Manchester City' },
      { value: 'chelsea', label: 'Chelsea' },
      { value: 'arsenal', label: 'Arsenal' },
    ],
  },
  {
    label: 'La Liga',
    options: [
      { value: 'real-madrid', label: 'Real Madrid' },
      { value: 'barcelona', label: 'Barcelona' },
      { value: 'atletico-madrid', label: 'Atletico Madrid' },
    ],
  },
  {
    label: 'Bundesliga',
    options: [
      { value: 'bayern-munich', label: 'Bayern Munich' },
      { value: 'borussia-dortmund', label: 'Borussia Dortmund' },
      { value: 'leverkusen', label: 'Leverkusen' },
    ],
  },
];
