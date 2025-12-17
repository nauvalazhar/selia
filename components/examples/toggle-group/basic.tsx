import { Toggle } from 'components/selia/toggle';
import { ToggleGroup } from 'components/selia/toggle-group';
import {
  AlignLeftIcon,
  AlignCenterIcon,
  AlignRightIcon,
  BoldIcon,
  ItalicIcon,
  UnderlineIcon,
} from 'lucide-react';

export default function ToggleGroupBasicExample() {
  return (
    <>
      <ToggleGroup defaultValue={['start']} size="md-icon">
        <Toggle value="left" aria-label="Left">
          <AlignLeftIcon />
        </Toggle>
        <Toggle value="center" aria-label="Center">
          <AlignCenterIcon />
        </Toggle>
        <Toggle value="right" aria-label="Right">
          <AlignRightIcon />
        </Toggle>
      </ToggleGroup>
      <ToggleGroup multiple size="md-icon">
        <Toggle value="bold" aria-label="Bold">
          <BoldIcon />
        </Toggle>
        <Toggle value="italic" aria-label="Italic">
          <ItalicIcon />
        </Toggle>
        <Toggle value="underline" aria-label="Underline">
          <UnderlineIcon />
        </Toggle>
      </ToggleGroup>
    </>
  );
}
