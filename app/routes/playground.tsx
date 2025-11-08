import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxSearch,
  ComboboxTrigger,
  ComboboxValue,
} from 'components/selia/combobox';
import { Slider, SliderThumb } from 'components/selia/slider';
import { Switch } from 'components/selia/switch';
import { ChevronDownIcon } from 'lucide-react';
import { useRef } from 'react';

const items = [
  { value: 'pink-floyd', label: 'Pink Floyd' },
  { value: 'the-beatles', label: 'The Beatles' },
  { value: 'led-zeppelin', label: 'Led Zeppelin' },
  { value: 'queen', label: 'Queen' },
  { value: 'oasis', label: 'Oasis' },
  { value: 'blur', label: 'Blur' },
];

export default function Playground() {
  const anchorRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="flex items-center justify-center h-screen gap-4">
      <Switch />
    </div>
  );
}
