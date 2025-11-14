import {
  Select,
  SelectContent,
  SelectItem,
  SelectList,
  SelectTrigger,
  SelectValue,
} from 'components/selia/select';
import { Building2Icon, Users2Icon, UserIcon } from 'lucide-react';

const optionsWithIcon = [
  { value: 'user', label: 'Personal', icon: <UserIcon /> },
  { value: 'organization', label: 'Organization', icon: <Building2Icon /> },
  { value: 'team', label: 'Team', icon: <Users2Icon /> },
];

export default function SelectIconExample() {
  return (
    <div className="w-6/12">
      <Select items={optionsWithIcon}>
        <SelectTrigger>
          <SelectValue />
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
    </div>
  );
}
