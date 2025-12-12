import { Field, FieldLabel } from 'components/selia/field';
import {
  Select,
  SelectPopup,
  SelectItem,
  SelectList,
  SelectTrigger,
  SelectValue,
} from 'components/selia/select';

export default function FieldSelectExample() {
  return (
    <div className="lg:w-6/12 w-full">
      <Field>
        <FieldLabel htmlFor="name">Name</FieldLabel>
        <Select>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectPopup>
            <SelectList>
              <SelectItem value="option1">Option 1</SelectItem>
              <SelectItem value="option2">Option 2</SelectItem>
              <SelectItem value="option3">Option 3</SelectItem>
            </SelectList>
          </SelectPopup>
        </Select>
      </Field>
    </div>
  );
}
