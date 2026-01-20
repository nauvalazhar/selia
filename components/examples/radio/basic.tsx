import { Label } from 'components/selia/label';
import { Radio, RadioGroup, RadioGroupLabel } from 'components/selia/radio';

export default function RadioBasicExample() {
  return (
    <RadioGroup defaultValue="pink-floyd" aria-labelledby="radio-example">
      <RadioGroupLabel id="radio-example">
        Select your favorite band
      </RadioGroupLabel>
      <Label>
        <Radio value="pink-floyd" />
        Pink Floyd
      </Label>
      <Label>
        <Radio value="the-beatles" />
        The Beatles
      </Label>
      <Label>
        <Radio value="led-zeppelin" />
        Led Zeppelin
      </Label>
    </RadioGroup>
  );
}
