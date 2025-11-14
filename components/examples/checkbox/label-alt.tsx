import { Checkbox } from 'components/selia/checkbox';
import { Text } from 'components/selia/text';

export default function CheckboxLabelExample() {
  return (
    <div>
      <label className="flex gap-2.5">
        <Checkbox className="mt-px" />
        <div className="flex flex-col">
          <Text render={<span />}>Accept terms and conditions</Text>
          <Text render={<span />} className="text-muted">
            (You must accept the terms and conditions to proceed)
          </Text>
        </div>
      </label>
    </div>
  );
}
