import { Card, CardBody } from 'components/selia/card';
import { Avatar, AvatarImage, AvatarIndicator } from 'components/selia/avatar';
import { Heading } from 'components/selia/heading';
import { Text } from 'components/selia/text';
import { Button } from 'components/selia/button';
import { Separator } from 'components/selia/separator';
import { LinkIcon, MessageCircleIcon, ShareIcon, StarIcon } from 'lucide-react';
import { Badge } from 'components/selia/badge';

export default function ProfileBlock() {
  return (
    <div className="flex gap-8 gap-y-12 items-start p-4 flex-wrap justify-center lg:py-12">
      <Card className="w-full max-w-80 p-1">
        <div className="w-full h-40 rounded-xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1517024785852-498ab0c02de5?q=80&w=1161&auto=format&fit=crop"
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
          <Text className="text-center text-dimmed lg:w-8/12 w-10/12 mx-auto mb-4">
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

      <Card className="w-full max-w-80 p-1 dark">
        <div className="w-full h-40 rounded-xl overflow-hidden">
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
          <Text className="text-center text-dimmed lg:w-8/12 w-10/12 mx-auto mb-4">
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

      <div className="w-full" />

      <Card className="w-full max-w-80 p-1">
        <div className="w-full h-40 rounded-xl overflow-hidden relative">
          <img
            src="https://images.unsplash.com/photo-1517024785852-498ab0c02de5?q=80&w=1161&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="size-full object-cover object-top"
          />
        </div>
        <CardBody>
          <Avatar className="size-20 -mt-18 ring-3 ring-card">
            <AvatarImage
              src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=880&auto=format&fit=crop"
              alt="John Morton"
            />
          </Avatar>
          <Heading size="md" level={2} className="mt-2">
            John Morton
          </Heading>
          <Text className="text-dimmed lg:w-8/12 w-10/12">
            UI/UX designer with 6+ years experience.
          </Text>
          <div className="flex items-center gap-1.5 my-4">
            <Badge variant="secondary-outline" size="sm">
              Figma
            </Badge>
            <Badge variant="secondary-outline" size="sm">
              UX/UI Designer
            </Badge>
            <Badge variant="secondary-outline" size="sm">
              +4 more
            </Badge>
          </div>
          <div className="flex items-center justify-center gap-4">
            <div className="flex-1">
              <Text className="text-xl font-medium">12k</Text>
              <Text className="text-dimmed">Followers</Text>
            </div>
            <Separator orientation="vertical" />
            <div className="flex-1">
              <Text className="text-xl font-medium">785</Text>
              <Text className="text-dimmed">Following</Text>
            </div>
            <Separator orientation="vertical" />
            <div className="flex-1">
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

      <Card className="w-full max-w-80 p-1 dark">
        <div className="w-full h-40 rounded-xl overflow-hidden relative">
          <img
            src="https://images.unsplash.com/photo-1517024785852-498ab0c02de5?q=80&w=1161&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="size-full object-cover object-top"
          />
        </div>
        <CardBody>
          <Avatar className="size-20 -mt-18 ring-3 ring-card">
            <AvatarImage
              src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=880&auto=format&fit=crop"
              alt="John Morton"
            />
          </Avatar>
          <Heading size="md" level={2} className="mt-2">
            John Morton
          </Heading>
          <Text className="text-dimmed lg:w-8/12 w-10/12">
            UI/UX designer with 6+ years experience.
          </Text>
          <div className="flex items-center gap-1.5 my-4">
            <Badge variant="secondary-outline" size="sm">
              Figma
            </Badge>
            <Badge variant="secondary-outline" size="sm">
              UX/UI Designer
            </Badge>
            <Badge variant="secondary-outline" size="sm">
              +4 more
            </Badge>
          </div>
          <div className="flex items-center justify-center gap-4">
            <div className="flex-1">
              <Text className="text-xl font-medium">12k</Text>
              <Text className="text-dimmed">Followers</Text>
            </div>
            <Separator orientation="vertical" />
            <div className="flex-1">
              <Text className="text-xl font-medium">785</Text>
              <Text className="text-dimmed">Following</Text>
            </div>
            <Separator orientation="vertical" />
            <div className="flex-1">
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

      <div className="w-full" />

      <Card className="w-full max-w-80 p-1">
        <CardBody>
          <div className="flex items-center gap-4">
            <Avatar className="size-16 outline-1 outline-foreground outline-offset-2">
              <AvatarImage
                src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=880&auto=format&fit=crop"
                alt="John Morton"
              />
            </Avatar>
            <div>
              <Heading size="md" level={2}>
                John Morton
              </Heading>
              <Text className="text-dimmed col-start-2 row-span-2">
                @johnmorton
              </Text>
            </div>
          </div>
          <Text className="text-dimmed mt-4">
            UI/UX designer with 6+ years experience.
          </Text>
          <Text
            render={<a href="#" />}
            className="my-2 text-primary font-medium"
          >
            <LinkIcon />
            example.com
          </Text>
          <div className="flex items-center justify-center gap-4">
            <div className="flex-1">
              <Text className="text-xl font-medium">12k</Text>
              <Text className="text-dimmed">Followers</Text>
            </div>
            <Separator orientation="vertical" />
            <div className="flex-1">
              <Text className="text-xl font-medium">785</Text>
              <Text className="text-dimmed">Following</Text>
            </div>
            <Separator orientation="vertical" />
            <div className="flex-1">
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

      <Card className="w-full max-w-80 p-1 dark">
        <CardBody>
          <div className="flex items-center gap-4">
            <Avatar className="size-16 outline-1 outline-foreground outline-offset-2">
              <AvatarImage
                src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=880&auto=format&fit=crop"
                alt="John Morton"
              />
            </Avatar>
            <div>
              <Heading size="md" level={2}>
                John Morton
              </Heading>
              <Text className="text-dimmed col-start-2 row-span-2">
                @johnmorton
              </Text>
            </div>
          </div>
          <Text className="text-dimmed mt-4">
            UI/UX designer with 6+ years experience.
          </Text>
          <Text
            render={<a href="#" />}
            className="my-2 text-primary font-medium"
          >
            <LinkIcon />
            example.com
          </Text>
          <div className="flex items-center justify-center gap-4">
            <div className="flex-1">
              <Text className="text-xl font-medium">12k</Text>
              <Text className="text-dimmed">Followers</Text>
            </div>
            <Separator orientation="vertical" />
            <div className="flex-1">
              <Text className="text-xl font-medium">785</Text>
              <Text className="text-dimmed">Following</Text>
            </div>
            <Separator orientation="vertical" />
            <div className="flex-1">
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

      <div className="w-full" />

      <Card className="w-full max-w-80 p-1">
        <CardBody>
          <div className="flex items-center gap-4">
            <Avatar className="size-16 outline-2 outline-green-600 outline-offset-2">
              <AvatarImage
                src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=880&auto=format&fit=crop"
                alt="John Morton"
              />
              <AvatarIndicator
                position="bottom"
                className="bg-green-500 outline-2 outline-card"
                size="md"
              />
            </Avatar>
            <div>
              <Heading size="md" level={2}>
                John Morton
              </Heading>
              <Text className="text-dimmed col-start-2 row-span-2">
                @johnmorton
              </Text>
            </div>
          </div>
          <Text className="text-dimmed my-4">
            UI/UX designer with 6+ years experience.
          </Text>
          <div className="flex items-center justify-center gap-4">
            <div className="flex-1 text-center">
              <Text className="text-xl font-medium">
                <StarIcon className="fill-yellow-500 stroke-yellow-500" />
                4.5
              </Text>
              <Text className="text-dimmed">Rating</Text>
            </div>
            <Separator orientation="vertical" />
            <div className="flex-1 text-center">
              <Text className="text-xl font-medium">34</Text>
              <Text className="text-dimmed">Projects</Text>
            </div>
            <Separator orientation="vertical" />
            <div className="flex-1 text-center">
              <Text className="text-xl font-medium">$60/hr</Text>
              <Text className="text-dimmed">Rate</Text>
            </div>
          </div>
          <div className="grid grid-cols-[1fr_auto] gap-2 mt-4">
            <Button variant="tertiary" size="lg" block>
              Get In Touch
            </Button>
            <Button variant="secondary-subtle" size="lg-icon">
              <ShareIcon />
            </Button>
          </div>
        </CardBody>
      </Card>

      <Card className="w-full max-w-80 p-1 dark">
        <CardBody>
          <div className="flex items-center gap-4">
            <Avatar className="size-16 outline-2 outline-green-600 outline-offset-2">
              <AvatarImage
                src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=880&auto=format&fit=crop"
                alt="John Morton"
              />
              <AvatarIndicator
                position="bottom"
                className="bg-green-500 outline-2 outline-card"
                size="md"
              />
            </Avatar>
            <div>
              <Heading size="md" level={2}>
                John Morton
              </Heading>
              <Text className="text-dimmed col-start-2 row-span-2">
                @johnmorton
              </Text>
            </div>
          </div>
          <Text className="text-dimmed my-4">
            UI/UX designer with 6+ years experience.
          </Text>
          <div className="flex items-center justify-center gap-4">
            <div className="flex-1 text-center">
              <Text className="text-xl font-medium">
                <StarIcon className="fill-yellow-500 stroke-yellow-500" />
                4.5
              </Text>
              <Text className="text-dimmed">Rating</Text>
            </div>
            <Separator orientation="vertical" />
            <div className="flex-1 text-center">
              <Text className="text-xl font-medium">34</Text>
              <Text className="text-dimmed">Projects</Text>
            </div>
            <Separator orientation="vertical" />
            <div className="flex-1 text-center">
              <Text className="text-xl font-medium">$60/hr</Text>
              <Text className="text-dimmed">Rate</Text>
            </div>
          </div>
          <div className="grid grid-cols-[1fr_auto] gap-2 mt-4">
            <Button variant="tertiary" size="lg" block>
              Get In Touch
            </Button>
            <Button variant="secondary-subtle" size="lg-icon">
              <ShareIcon />
            </Button>
          </div>
        </CardBody>
      </Card>

      <div className="w-full" />

      <Card className="w-full max-w-80 p-1 relative h-[520px]">
        <img
          src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=880&auto=format&fit=crop"
          className="size-full absolute inset-0 object-cover rounded-xl"
        />
        <div className="bg-linear-to-b from-card/0 to-card/100 absolute inset-x-0 bottom-0 h-3/4 rounded-[calc(var(--radius-xl)-3px)]" />
        <CardBody className="absolute bottom-0">
          <Heading size="md" level={2}>
            John Morton
          </Heading>
          <Text className="text-muted my-4">
            UI/UX designer with 6+ years experience.
          </Text>
          <div className="flex gap-4 mt-4 items-center">
            <Text className="font-medium">
              <StarIcon className="fill-yellow-500 stroke-yellow-500" />
              4.5
            </Text>
            <Text className="font-medium">$60/hr</Text>
            <Button variant="tertiary" size="lg" className="ml-auto" pill>
              <MessageCircleIcon />
              Message
            </Button>
          </div>
        </CardBody>
      </Card>
      <Card className="w-full max-w-80 p-1 relative h-[520px] dark">
        <img
          src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=880&auto=format&fit=crop"
          className="size-full absolute inset-0 object-cover rounded-xl"
        />
        <div className="bg-linear-to-b from-card/0 to-card/100 absolute inset-x-0 bottom-0 h-3/4 rounded-xl" />
        <CardBody className="absolute bottom-0">
          <Heading size="md" level={2}>
            John Morton
          </Heading>
          <Text className="text-muted my-4">
            UI/UX designer with 6+ years experience.
          </Text>
          <div className="flex gap-4 mt-4 items-center">
            <Text className="font-medium">
              <StarIcon className="fill-yellow-500 stroke-yellow-500" />
              4.5
            </Text>
            <Text className="font-medium">$60/hr</Text>
            <Button variant="tertiary" size="lg" className="ml-auto" pill>
              <MessageCircleIcon />
              Message
            </Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
