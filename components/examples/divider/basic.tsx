import { Divider } from 'components/selia/divider';

export default function DividerTextExample() {
  return (
    <div className="lg:w-6/12 w-full">
      <Divider className="my-4">Text on the left</Divider>
      <Divider className="my-4" variant="center">
        Text on the center
      </Divider>
      <Divider className="my-4" variant="right">
        Text on the right
      </Divider>
    </div>
  );
}
