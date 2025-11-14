import { IconBox } from 'components/selia/icon-box';
import { PlayIcon } from 'lucide-react';

export default function IconBoxSizeExample() {
  return (
    <>
      <IconBox size="sm">
        <PlayIcon />
      </IconBox>
      <IconBox size="md">
        <PlayIcon />
      </IconBox>
      <IconBox size="lg">
        <PlayIcon />
      </IconBox>
    </>
  );
}
