import { Card, CardHeader, CardTitle, CardBody } from 'components/selia/card';
import { Text } from 'components/selia/text';

export default function Alternative() {
  return (
    <Card variant="alternative">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
      </CardHeader>
      <CardBody>
        <Text>This is a card component with an alternative color scheme.</Text>
      </CardBody>
    </Card>
  );
}
