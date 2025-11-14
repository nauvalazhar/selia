import { Button } from 'components/selia/button';
import { PlayIcon, Trash2Icon } from 'lucide-react';

export default function ButtonIconExample() {
  return (
    <>
      <Button variant="secondary" size="icon">
        <PlayIcon />
      </Button>
      <Button variant="destructive">
        <Trash2Icon /> Delete
      </Button>
    </>
  );
}
