import { DividerText } from 'components/selia/divider';

export default function DividerTextExample() {
  return (
    <div className="lg:w-6/12 w-full">
      <DividerText className="my-4">Text on the left</DividerText>
      <DividerText className="my-4" variant="center">
        Text on the center
      </DividerText>
      <DividerText className="my-4" variant="right">
        Text on the right
      </DividerText>
    </div>
  );
}
