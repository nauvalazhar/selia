import { Card, CardBody } from 'components/selia/card';
import { IconBox } from 'components/selia/icon-box';
import { Heading } from 'components/selia/heading';
import { Text } from 'components/selia/text';
import { Badge } from 'components/selia/badge';

export function StatCard({
  icon,
  title,
  value,
  change,
  changeType,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  change: string;
  changeType: 'increase' | 'decrease';
}) {
  return (
    <Card>
      <CardBody>
        <IconBox size="lg" variant="info-subtle" className="mb-4">
          {icon}
        </IconBox>
        <Heading size="sm" className="font-medium text-dimmed">
          {title}
        </Heading>
        <Text className="text-4xl font-semibold mt-2">{value}</Text>
        <div className="flex items-center gap-2 mt-2">
          <Badge
            variant={
              changeType === 'increase' ? 'success-subtle' : 'danger-subtle'
            }
            className="mt-2"
          >
            {change}
          </Badge>
          <Text className="text-sm text-dimmed mt-2">
            {changeType === 'increase'
              ? 'Compared to last month'
              : 'Compared to last week'}
          </Text>
        </div>
      </CardBody>
    </Card>
  );
}
