import { Button } from 'components/selia/button';
import { Input } from 'components/selia/input';
import { InputGroup, InputGroupAddon } from 'components/selia/input-group';

export default function InputGroupButtonExample() {
  return (
    <InputGroup>
      <Input placeholder="Search" />
      <InputGroupAddon align="end">
        <Button variant="tertiary" size="xs">
          Search
        </Button>
      </InputGroupAddon>
    </InputGroup>
  );
}
