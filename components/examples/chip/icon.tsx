import { Chip } from 'components/selia/chip';
import { Code2Icon } from 'lucide-react';

export default function Icon() {
  return (
    <>
      <Chip>
        <Code2Icon />
        Software Engineering
      </Chip>
      <Chip>
        <Code2Icon />
        Machine Learning
      </Chip>
    </>
  );
}
