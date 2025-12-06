import { Toggle } from 'components/selia/toggle';
import { ToggleGroup } from 'components/selia/toggle-group';
import { AlignLeft, AlignCenter, AlignRight } from 'lucide-react';

export default function ToggleGroupBasicExample() {
  return (
    <ToggleGroup defaultValue={['start']}>
      <Toggle size="md-icon" value="left">
        <AlignLeft />
      </Toggle>
      <Toggle size="md-icon" value="center">
        <AlignCenter />
      </Toggle>
      <Toggle size="md-icon" value="end">
        <AlignRight />
      </Toggle>
    </ToggleGroup>
  );
}
