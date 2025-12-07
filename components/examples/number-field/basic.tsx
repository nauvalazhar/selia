import { Field, FieldLabel } from 'components/selia/field';
import {
  NumberField,
  NumberFieldDecrement,
  NumberFieldGroup,
  NumberFieldIncrement,
  NumberFieldInput,
  NumberFieldScrubArea,
} from 'components/selia/number-field';
import { MinusIcon, PlusIcon } from 'lucide-react';

export default function NumberFieldBasic() {
  return (
    <Field>
      <NumberField defaultValue={1} min={1} max={1000}>
        <NumberFieldScrubArea>
          <FieldLabel>Instances</FieldLabel>
        </NumberFieldScrubArea>
        <NumberFieldGroup>
          <NumberFieldDecrement>
            <MinusIcon />
          </NumberFieldDecrement>
          <NumberFieldInput />
          <NumberFieldIncrement>
            <PlusIcon />
          </NumberFieldIncrement>
        </NumberFieldGroup>
      </NumberField>
    </Field>
  );
}
