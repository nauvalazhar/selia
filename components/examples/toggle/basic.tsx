import { Toggle } from 'components/selia/toggle';
import { HeartIcon, StarIcon } from 'lucide-react';

export default function ToggleBasicExample() {
  return (
    <>
      <Toggle
        aria-label="Favorite"
        className="data-pressed:*:[svg]:fill-red-500 data-pressed:*:[svg]:stroke-red-500"
      >
        <HeartIcon />
        Favorite
      </Toggle>
      <Toggle
        aria-label="Star"
        className="data-pressed:*:[svg]:fill-yellow-500 data-pressed:*:[svg]:stroke-yellow-500"
        size="md-icon"
      >
        <StarIcon />
      </Toggle>
    </>
  );
}
