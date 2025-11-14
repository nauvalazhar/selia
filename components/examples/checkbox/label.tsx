import { Checkbox } from 'components/selia/checkbox';
import { Text } from 'components/selia/text';

export default function CheckboxLabelExample() {
  return (
    <label className="flex items-center gap-2.5">
      <Checkbox />
      <Text render={<span />}>Accept terms and conditions</Text>
    </label>
  );
}
