import { Separator } from 'components/selia/separator';

export default function SeparatorBasicExample() {
  return (
    <div>
      <span>This is some text above the separator.</span>
      <Separator orientation="horizontal" className="my-4" />
      <span>This is some text below the separator.</span>
    </div>
  );
}
