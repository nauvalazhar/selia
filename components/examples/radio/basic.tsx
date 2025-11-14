import { Radio, RadioGroup, RadioGroupLabel } from 'components/selia/radio';
import { Text } from 'components/selia/text';

export default function RadioExample() {
  return (
    <RadioGroup defaultValue="pink-floyd" aria-labelledby="radio-example">
      <RadioGroupLabel id="radio-example">Your favorite band?</RadioGroupLabel>
      <label className="flex items-center gap-x-2.5">
        <Radio value="pink-floyd" />
        <Text render={<span />}>Pink Floyd</Text>
      </label>
      <label className="flex items-center gap-x-2.5">
        <Radio value="the-beatles" />
        <Text render={<span />}>The Beatles</Text>
      </label>
      <label className="flex items-center gap-x-2.5">
        <Radio value="led-zeppelin" />
        <Text render={<span />}>Led Zeppelin</Text>
      </label>
    </RadioGroup>
  );
}
