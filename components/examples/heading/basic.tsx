import { Heading } from 'components/selia/heading';

export default function HeadingExample() {
  return (
    <div className="flex flex-col gap-4">
      <Heading size="lg">This is a large heading</Heading>
      <Heading size="md">This is a medium heading</Heading>
      <Heading size="sm">This is a small heading</Heading>
    </div>
  );
}
