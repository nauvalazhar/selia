import { Card, CardBody } from 'components/selia/card';
import { Avatar, AvatarImage } from 'components/selia/avatar';
import { Heading } from 'components/selia/heading';
import { Text } from 'components/selia/text';
import { Button } from 'components/selia/button';
import { Separator } from 'components/selia/separator';

export default function ProfileBlock() {
  return (
    <div className="flex gap-4 h-screen items-center justify-center p-8">
      <Card className="w-full max-w-80 p-1.5">
        <div className="w-full h-40 bg-muted rounded-xl overflow-hidden border border-card-border">
          <img
            src="https://images.unsplash.com/photo-1517024785852-498ab0c02de5?q=80&w=1161&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="size-full object-cover object-top"
          />
        </div>
        <CardBody>
          <Avatar className="size-20 -mt-18 mx-auto ring-3 ring-card">
            <AvatarImage
              src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=880&auto=format&fit=crop"
              alt="John Morton"
            />
          </Avatar>

          <Heading size="md" level={2} className="text-center mt-2">
            John Morton
          </Heading>

          <Text className="text-center text-dimmed w-8/12 mx-auto mb-4">
            UI/UX designer with 6+ years experience.
          </Text>

          <div className="flex items-center justify-center gap-4">
            <div className="text-center flex-1">
              <Text className="text-xl font-medium">12k</Text>
              <Text className="text-dimmed">Followers</Text>
            </div>
            <Separator orientation="vertical" />
            <div className="text-center flex-1">
              <Text className="text-xl font-medium">785</Text>
              <Text className="text-dimmed">Following</Text>
            </div>
            <Separator orientation="vertical" />
            <div className="text-center flex-1">
              <Text className="text-xl font-medium">137</Text>
              <Text className="text-dimmed">Posts</Text>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 mt-4">
            <Button variant="secondary-subtle" size="lg" block>
              Message
            </Button>
            <Button variant="tertiary" size="lg" block>
              Follow
            </Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
