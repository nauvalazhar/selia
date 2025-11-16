import {
  Select,
  SelectContent,
  SelectItem,
  SelectList,
  SelectTrigger,
  SelectValue,
} from 'components/selia/select';
import { BookIcon, PencilIcon, Gamepad2Icon } from 'lucide-react';

export default function SelectIconExample() {
  return (
    <Select items={optionsWithIcon}>
      <SelectTrigger className="lg:w-64">
        <SelectValue placeholder="Your hobby" />
      </SelectTrigger>
      <SelectContent>
        <SelectList>
          {optionsWithIcon.map((option) => (
            <SelectItem key={option.value} value={option}>
              {option.icon}
              {option.label}
            </SelectItem>
          ))}
        </SelectList>
      </SelectContent>
    </Select>
  );
}

const optionsWithIcon = [
  { value: 'reading', label: 'Readingj', icon: <BookIcon /> },
  { value: 'writing', label: 'Writing', icon: <PencilIcon /> },
  { value: 'gaming', label: 'Gaming', icon: <Gamepad2Icon /> },
];
