import {
  Field,
  FieldDescription,
  FieldError,
  FieldItem,
  FieldLabel,
} from 'components/selia/field';
import { Input } from 'components/selia/input';
import { Fieldset, FieldsetLegend } from 'components/selia/fieldset';
import { Checkbox, CheckboxGroup } from 'components/selia/checkbox';
import { Separator } from 'components/selia/separator';
import { Text } from 'components/selia/text';
import { Radio, RadioGroup } from 'components/selia/radio';
import { Label } from 'components/selia/label';
import { Form } from 'components/selia/form';
import { Button } from 'components/selia/button';
import {
  NumberField,
  NumberFieldDecrement,
  NumberFieldGroup,
  NumberFieldIncrement,
  NumberFieldInput,
  NumberFieldScrubArea,
  NumberFieldScrubAreaCursor,
} from 'components/selia/number-field';
import { MinusIcon, PlusIcon } from 'lucide-react';

export default function FieldsetComplexExample() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Field>
        <NumberField>
          <NumberFieldScrubArea>
            <FieldLabel>Number</FieldLabel>
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
    </div>
  );
}
