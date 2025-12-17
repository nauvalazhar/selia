import { Input } from 'components/selia/input';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
} from 'components/selia/input-group';

export default function InputGroupLabelExample() {
  return (
    <InputGroup>
      <InputGroupAddon render={<label htmlFor="url" />}>
        <InputGroupText>https://</InputGroupText>
      </InputGroupAddon>
      <Input id="url" placeholder="example.com" />
    </InputGroup>
  );
}
