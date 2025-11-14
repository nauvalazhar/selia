import { Chip, ChipButton } from 'components/selia/chip';
import { PlusIcon, XIcon } from 'lucide-react';

export default function ChipExample() {
  return (
    <>
      <Chip>
        Software Engineering
        <ChipButton>
          <XIcon />
        </ChipButton>
      </Chip>
      <Chip>
        Machine Learning
        <ChipButton>
          <XIcon />
        </ChipButton>
      </Chip>
    </>
  );
}
