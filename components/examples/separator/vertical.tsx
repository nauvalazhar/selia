import { Separator } from 'components/selia/separator';
export default function SeparatorVerticalExample() {
  return (
    <div className="flex items-center gap-2.5">
      <span>Home</span>
      <span>About</span>
      <span>Services</span>
      <Separator orientation="vertical" />
      <span>Login</span>
    </div>
  );
}
