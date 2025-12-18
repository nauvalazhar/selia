import { Input } from 'components/selia/input';
import { InputGroup, InputGroupAddon } from 'components/selia/input-group';
import { SearchIcon } from 'lucide-react';

export default function InputGroupIconExample() {
  return (
    <InputGroup>
      <InputGroupAddon>
        <SearchIcon />
      </InputGroupAddon>
      <Input placeholder="Search" />
    </InputGroup>
  );
}
