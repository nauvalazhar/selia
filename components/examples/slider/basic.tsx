import { Slider, SliderThumb } from 'components/selia/slider';

export default function SliderBasicExample() {
  return (
    <div className="w-64 flex flex-col gap-6">
      <Slider className="w-64">
        <SliderThumb />
      </Slider>
      <Slider defaultValue={[33, 66]}>
        <SliderThumb index={0} />
        <SliderThumb index={1} />
      </Slider>
    </div>
  );
}
