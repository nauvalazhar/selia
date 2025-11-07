import {
  Card,
  CardBody,
  CardDescription,
  CardFooter,
  CardHeader,
  CardHeaderContent,
  CardTitle,
} from 'components/selia/card';
import { Button } from 'components/selia/button';
import { Text } from 'components/selia/text';
import { Avatar, AvatarFallback, AvatarImage } from 'components/selia/avatar';
import { Divider } from 'components/selia/divider';

export default function TeamCardExample() {
  return (
    <Card className="w-full lg:w-7/12">
      <CardHeader>
        <CardHeaderContent>
          <CardTitle>Team Members</CardTitle>
          <CardDescription>Member can access this workspace.</CardDescription>
        </CardHeaderContent>
      </CardHeader>
      <CardBody className="p-0">
        <div className="flex items-center px-6 py-4">
          <Avatar className="shrink-0">
            <AvatarImage src="/avatar01.png" alt="Avatar" />
            <AvatarFallback>MB</AvatarFallback>
          </Avatar>
          <div className="ml-3">
            <Text className="font-medium">Marina Brown</Text>
            <Text className="text-sm text-muted">marina.brown@example.com</Text>
          </div>
          <div className="ml-auto">
            <Button variant="secondary" size="sm">
              Edit
            </Button>
          </div>
        </div>
        <Divider />
        <div className="flex items-center px-6 py-4">
          <Avatar className="shrink-0">
            <AvatarImage src="/avatar02.png" alt="Avatar" />
            <AvatarFallback>SO</AvatarFallback>
          </Avatar>
          <div className="ml-3">
            <Text className="font-medium">Sarah O'Connor</Text>
            <Text className="text-sm text-muted">
              sarah.oconnor@example.com
            </Text>
          </div>
          <div className="ml-auto">
            <Button variant="secondary" size="sm">
              Edit
            </Button>
          </div>
        </div>
        <Divider />
        <div className="flex items-center px-6 py-4">
          <Avatar className="shrink-0">
            <AvatarImage src="/avatar03.png" alt="Avatar" />
            <AvatarFallback>WM</AvatarFallback>
          </Avatar>
          <div className="ml-3">
            <Text className="font-medium">William Martin</Text>
            <Text className="text-sm text-muted">
              william.martin@example.com
            </Text>
          </div>
          <div className="ml-auto">
            <Button variant="secondary" size="sm">
              Edit
            </Button>
          </div>
        </div>
        <Divider />
        <div className="flex items-center px-6 py-4">
          <Avatar className="shrink-0">
            <AvatarImage src="/avatar04.png" alt="Avatar" />
            <AvatarFallback>AJ</AvatarFallback>
          </Avatar>
          <div className="ml-3">
            <Text className="font-medium">Adam Johnson</Text>
            <Text className="text-sm text-muted">adam.johnson@example.com</Text>
          </div>
          <div className="ml-auto">
            <Button variant="secondary" size="sm">
              Edit
            </Button>
          </div>
        </div>
        <Divider />
        <div className="flex items-center px-6 py-4">
          <Avatar className="shrink-0">
            <AvatarImage src="/avatar05.png" alt="Avatar" />
            <AvatarFallback>SA</AvatarFallback>
          </Avatar>
          <div className="ml-3">
            <Text className="font-medium">Sarah Adams</Text>
            <Text className="text-sm text-muted">sarah.adams@example.com</Text>
          </div>
          <div className="ml-auto">
            <Button variant="secondary" size="sm">
              Edit
            </Button>
          </div>
        </div>
      </CardBody>
      <CardFooter className="p-0">
        <Button
          variant="secondary-plain"
          block
          className="p-4 h-auto rounded-b-3xl rounded-t-none"
          render={<a href="#" />}
        >
          View More
        </Button>
      </CardFooter>
    </Card>
  );
}
