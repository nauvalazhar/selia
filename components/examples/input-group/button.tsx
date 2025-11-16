import { Button } from 'components/selia/button';
import { Input } from 'components/selia/input';
import { InputGroup, InputGroupAddon } from 'components/selia/input-group';

export default function InputGroupButtonExample() {
  return (
    <InputGroup className="w-full 2xl:w-8/12 xl:w-10/12">
      <Input placeholder="Search" />
      <InputGroupAddon align="end">
        <Button variant="tertiary-subtle" size="xs" pill>
          Search
        </Button>
      </InputGroupAddon>
    </InputGroup>
  );
}
