import { Badge } from 'components/selia/badge';

export default function Pill() {
  return (
    <>
      <Badge pill>Default</Badge>
      <Badge pill variant="primary">
        Primary
      </Badge>
    </>
  );
}
