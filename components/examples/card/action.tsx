import {
  Card,
  CardBody,
  CardDescription,
  CardFooter,
  CardHeader,
  CardHeaderAction,
  CardTitle,
} from 'components/selia/card';
import { Button } from 'components/selia/button';
import { Text } from 'components/selia/text';
import { Settings2Icon } from 'lucide-react';

export default function CardActionExample() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>User Profile</CardTitle>
        <CardDescription>
          Your personal information and settings.
        </CardDescription>
        <CardHeaderAction>
          <Button variant="secondary" size="icon">
            <Settings2Icon />
          </Button>
        </CardHeaderAction>
      </CardHeader>
      <CardBody>
        <Text>This is a card component with a description and footer.</Text>
      </CardBody>
      <CardFooter>
        <Text>This is the footer of the card.</Text>
      </CardFooter>
    </Card>
  );
}
