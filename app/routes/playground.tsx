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
      <div className="w-96">
        <Slider defaultValue={[40, 60]} className="w-full">
          <SliderThumb index={0} />
          <SliderThumb index={1} />
        </Slider>
      </div>
    </div>
  );
}
