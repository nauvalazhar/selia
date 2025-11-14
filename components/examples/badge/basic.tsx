import { Badge } from 'components/selia/badge';
import { CheckCircle2Icon } from 'lucide-react';

export default function Basic() {
  return (
    <>
      <Badge>Default</Badge>
      <Badge variant="destructive">20</Badge>
      <Badge variant="success">
        <CheckCircle2Icon /> Verified
      </Badge>
    </>
  );
}
