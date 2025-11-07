import { Input } from 'components/selia/input';

export default function InputExample() {
  return (
    <div className="w-6/12 space-y-4">
      <Input placeholder="Default input" />
      <Input placeholder="Subtle input" variant="subtle" />
    </div>
  );
}
