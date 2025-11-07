import { Button } from 'components/selia/button';

export default function ButtonExample() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <Button variant="primary">Default</Button>
        <Button variant="primary-subtle">Subtle</Button>
        <Button variant="primary-outline">Outline</Button>
        <Button variant="primary-plain">Plain</Button>
      </div>
      <div className="flex items-center gap-2">
        <Button variant="secondary">Default</Button>
        <Button variant="secondary-subtle">Subtle</Button>
        <Button variant="secondary-outline">Outline</Button>
        <Button variant="secondary-plain">Plain</Button>
      </div>
      <div className="flex items-center gap-2">
        <Button variant="tertiary">Default</Button>
        <Button variant="tertiary-subtle">Subtle</Button>
        <Button variant="tertiary-outline">Outline</Button>
        <Button variant="tertiary-plain">Plain</Button>
      </div>
      <div className="flex items-center gap-2">
        <Button variant="destructive">Default</Button>
        <Button variant="destructive-subtle">Subtle</Button>
        <Button variant="destructive-outline">Outline</Button>
        <Button variant="destructive-plain">Plain</Button>
      </div>
    </div>
  );
}
