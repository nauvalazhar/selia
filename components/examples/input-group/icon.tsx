import { Input } from 'components/selia/input';
import { InputGroup, InputGroupAddon } from 'components/selia/input-group';
import { SearchIcon } from 'lucide-react';

export default function InputGroupIconExample() {
  return (
    <div className="flex flex-col gap-4 2xl:w-8/12 xl:w-10/12 w-full">
      <InputGroup>
        <InputGroupAddon>
          <SearchIcon />
        </InputGroupAddon>
        <Input placeholder="Search" />
      </InputGroup>
    </div>
  );
}
