import { Input } from 'components/selia/input';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
} from 'components/selia/input-group';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from 'components/selia/select';
import { GuitarIcon, SearchIcon } from 'lucide-react';

export default function InputGroupIconExample() {
  return (
    <div className="flex flex-col gap-4 2xl:w-8/12 xl:w-10/12 w-full">
      <InputGroup>
        <InputGroupAddon>
          <SearchIcon />
        </InputGroupAddon>
        <Input placeholder="Search" />
      </InputGroup>
      <InputGroup>
        <InputGroupAddon>
          <GuitarIcon />
        </InputGroupAddon>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Guitar model" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="telecaster">Telecaster</SelectItem>
            <SelectItem value="les-paul">Les Paul</SelectItem>
            <SelectItem value="gibson">Gibson</SelectItem>
            <SelectItem value="fender">Fender</SelectItem>
            <SelectItem value="rickenbacker">Rickenbacker</SelectItem>
            <SelectItem value="ibanez">Ibanez</SelectItem>
            <SelectItem value="esp">ESP</SelectItem>
            <SelectItem value="prs">PRS</SelectItem>
            <SelectItem value="taylor">Taylor</SelectItem>
          </SelectContent>
        </Select>
      </InputGroup>
    </div>
  );
}
