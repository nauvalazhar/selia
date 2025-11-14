import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
} from 'components/selia/input-group';
import { Input } from 'components/selia/input';
import { SearchIcon } from 'lucide-react';

export default function InputGroupBasicExample() {
  return (
    <div className="flex flex-col gap-4 lg:w-8/12">
      <InputGroup>
        <InputGroupAddon>
          <InputGroupText>https://</InputGroupText>
        </InputGroupAddon>
        <Input placeholder="example.com" />
      </InputGroup>
      <InputGroup>
        <Input placeholder="yourname" />
        <InputGroupAddon align="end">
          <InputGroupText>@company.com</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupAddon align="start">
          <SearchIcon />
        </InputGroupAddon>
        <Input placeholder="Search" />
      </InputGroup>
    </div>
  );
}
