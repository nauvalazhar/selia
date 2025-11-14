import { Checkbox } from 'components/selia/checkbox';
import { Label } from 'components/selia/label';

export default function CheckboxExample() {
  return (
    <Label>
      <Checkbox />
      <span>
        I agree that Liverpool is the best football club in the world.
      </span>
    </Label>
  );
}
