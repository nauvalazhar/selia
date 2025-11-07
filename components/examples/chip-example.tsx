import { Chip, ChipAction } from 'components/selia/chip';
import { PlusIcon, XIcon } from 'lucide-react';

export default function ChipExample() {
  return (
    <>
      <Chip size="md">Default</Chip>
      <Chip size="md" variant="primary">
        Add New
        <ChipAction onClick={() => console.log('added')}>
          <PlusIcon />
        </ChipAction>
      </Chip>
      <Chip size="md" variant="secondary">
        Secondary
      </Chip>
      <Chip size="md" variant="tertiary" render={<button />}>
        Clickable
      </Chip>
      <Chip size="md" variant="destructive">
        Destructive
        <ChipAction onClick={() => console.log('dismissed')}>
          <XIcon />
        </ChipAction>
      </Chip>
    </>
  );
}
