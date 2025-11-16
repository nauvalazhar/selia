import { Input } from 'components/selia/input';
import { Label } from 'components/selia/label';

export default function LabelBasicExample() {
  return (
    <div className="lg:w-8/12 w-full space-y-2.5">
      <Label htmlFor="name">Name</Label>
      <Input id="name" placeholder="Enter your name" />
    </div>
  );
}
