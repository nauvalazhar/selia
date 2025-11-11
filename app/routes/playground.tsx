import { Button } from 'components/selia/button';
import { useEffect, useState } from 'react';
import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from 'components/selia/field';
import { Input } from 'components/selia/input';
import { Fieldset, FieldsetLegend } from 'components/selia/fieldset';
import { Checkbox, CheckboxGroup } from 'components/selia/checkbox';
import { Separator } from 'components/selia/separator';
import { Text } from 'components/selia/text';
import { Radio, RadioGroup } from 'components/selia/radio';
import {
  Card,
  CardBody,
  CardDescription,
  CardFooter,
  CardHeader,
  CardHeaderContent,
  CardTitle,
} from 'components/selia/card';
import { IconBox } from 'components/selia/icon-box';
import {
  CheckCircle2Icon,
  ChevronRightIcon,
  HeartIcon,
  InfoIcon,
  MessageCircleIcon,
  ReplyIcon,
  SettingsIcon,
  Trash2Icon,
  TriangleAlertIcon,
  UserIcon,
} from 'lucide-react';
import { Label } from 'components/selia/label';
import {
  Item,
  ItemAction,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from 'components/selia/item';
import { Stack } from 'components/selia/stack';
import {
  Dropdown,
  DropdownContent,
  DropdownItem,
  DropdownTrigger,
} from 'components/selia/dropdown';
import { Avatar, AvatarFallback, AvatarImage } from 'components/selia/avatar';

export default function Playground() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) =>
        Math.min(100, Math.round(prev + Math.random() * 25)),
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center min-h-screen gap-4 py-20">
      <div className="w-2xl mb-10 space-y-4">
        <Stack>
          <Item className="items-center">
            <ItemMedia>
              <img
                src="https://cdn.svglogos.dev/logos/youtube-icon.svg"
                alt="Avatar"
              />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>YouTube</ItemTitle>
              <ItemDescription>Video sharing platform.</ItemDescription>
            </ItemContent>
            <ItemAction>
              <Button size="sm" variant="tertiary" pill>
                Install
              </Button>
            </ItemAction>
          </Item>
          <Item>
            <ItemMedia>
              <IconBox>
                <MessageCircleIcon />
              </IconBox>
            </ItemMedia>
            <ItemContent>
              <ItemTitle>Item Icon</ItemTitle>
              <ItemDescription>
                Use an icon instead of an image.
              </ItemDescription>
            </ItemContent>
            <ItemAction>
              <Button size="sm" variant="tertiary-plain" pill>
                Secondary
              </Button>
              <Button size="sm" variant="primary" pill>
                Action
              </Button>
            </ItemAction>
          </Item>
          <Item variant="destructive">
            <ItemMedia>
              <IconBox variant="destructive">
                <Trash2Icon />
              </IconBox>
            </ItemMedia>
            <ItemContent>
              <ItemTitle>Item Icon</ItemTitle>
              <ItemDescription>
                Use an icon instead of an image.
              </ItemDescription>
            </ItemContent>
            <ItemAction>
              <Button size="sm" variant="destructive" pill>
                Delete
              </Button>
            </ItemAction>
          </Item>
          <Item variant="info">
            <ItemMedia>
              <IconBox variant="info">
                <InfoIcon />
              </IconBox>
            </ItemMedia>
            <ItemContent>
              <ItemTitle>Item Info</ItemTitle>
              <ItemDescription>Some useful information here.</ItemDescription>
            </ItemContent>
            <ItemAction>
              <Button size="sm" variant="info" pill>
                Info
              </Button>
            </ItemAction>
          </Item>
          <Item variant="success">
            <ItemMedia>
              <IconBox variant="success">
                <CheckCircle2Icon />
              </IconBox>
            </ItemMedia>
            <ItemContent>
              <ItemTitle>Item Success</ItemTitle>
              <ItemDescription>
                Your changes have been saved successfully.
              </ItemDescription>
            </ItemContent>
            <ItemAction>
              <Button size="sm" variant="success" pill>
                Success
              </Button>
            </ItemAction>
          </Item>
          <Item variant="warning">
            <ItemMedia>
              <IconBox variant="warning">
                <TriangleAlertIcon />
              </IconBox>
            </ItemMedia>
            <ItemContent>
              <ItemTitle>Item Warning</ItemTitle>
              <ItemDescription>Some features may not work.</ItemDescription>
            </ItemContent>
            <ItemAction>
              <Button size="sm" variant="warning" pill>
                Warning
              </Button>
            </ItemAction>
          </Item>
          <Item render={<a />} size="sm">
            <ItemMedia>
              <MessageCircleIcon />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>Item with only title and action</ItemTitle>
            </ItemContent>
            <ItemAction>
              <ChevronRightIcon />
            </ItemAction>
          </Item>
        </Stack>
        <Stack direction="row" spacing="sm">
          <Item direction="column" size="lg">
            <ItemMedia>
              <img
                src="https://cdn.svglogos.dev/logos/youtube-icon.svg"
                alt="Avatar"
              />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>YouTube</ItemTitle>
              <ItemDescription>Video sharing platform.</ItemDescription>
            </ItemContent>
            <ItemAction>
              <Button size="sm" variant="tertiary" pill>
                Install
              </Button>
            </ItemAction>
          </Item>
          <Item direction="column" size="lg">
            <ItemMedia>
              <IconBox>
                <MessageCircleIcon />
              </IconBox>
            </ItemMedia>
            <ItemContent>
              <ItemTitle>Twitter</ItemTitle>
              <ItemDescription>Social media platform.</ItemDescription>
            </ItemContent>
            <ItemAction>
              <Button size="sm" variant="tertiary" pill>
                Install
              </Button>
            </ItemAction>
          </Item>
        </Stack>
        <Dropdown>
          <DropdownTrigger
            render={
              <Button variant="tertiary" pill>
                Dropdown
              </Button>
            }
          />
          <DropdownContent className="w-xs">
            <DropdownItem>
              <Item variant="plain">
                <ItemMedia>
                  <Avatar>
                    <AvatarImage src="/avatar01.png" alt="Avatar" />
                    <AvatarFallback>BS</AvatarFallback>
                  </Avatar>
                </ItemMedia>
                <ItemContent>
                  <ItemTitle>Item 1</ItemTitle>
                  <ItemDescription>Description</ItemDescription>
                </ItemContent>
              </Item>
            </DropdownItem>
          </DropdownContent>
        </Dropdown>
        <Item>
          <ItemMedia>
            <Avatar>
              <AvatarImage src="/avatar01.png" alt="Avatar" />
              <AvatarFallback>BS</AvatarFallback>
            </Avatar>
          </ItemMedia>
          <ItemContent>
            <ItemTitle>John Doe</ItemTitle>
            <Text className="text-sm text-dimmed mb-2.5">5 minutes ago</Text>
            <ItemDescription>This is an example of comment!</ItemDescription>
            <div className="-mx-2 mt-2.5">
              <Button size="xs" variant="tertiary-plain" pill>
                Reply
              </Button>
            </div>
          </ItemContent>
          <ItemAction>
            <Button size="xs-icon" pill variant="tertiary-plain">
              <HeartIcon />
            </Button>
          </ItemAction>
        </Item>
        <Card className="w-full lg:w-7/12">
          <CardHeader>
            <CardHeaderContent>
              <CardTitle>Team Members</CardTitle>
              <CardDescription>
                Member can access this workspace.
              </CardDescription>
            </CardHeaderContent>
          </CardHeader>
          <CardBody className="p-0">
            <Stack>
              <Item>
                <ItemMedia>
                  <Avatar>
                    <AvatarImage src="/avatar01.png" alt="Avatar" />
                    <AvatarFallback>MB</AvatarFallback>
                  </Avatar>
                </ItemMedia>
                <ItemContent>
                  <ItemTitle>Marina Brown</ItemTitle>
                  <ItemDescription>marina.brown@example.com</ItemDescription>
                </ItemContent>
                <ItemAction>
                  <Button variant="secondary" size="sm">
                    Edit
                  </Button>
                </ItemAction>
              </Item>
              <Separator />
              <Item>
                <ItemMedia>
                  <Avatar>
                    <AvatarImage src="/avatar02.png" alt="Avatar" />
                    <AvatarFallback>SO</AvatarFallback>
                  </Avatar>
                </ItemMedia>
                <ItemContent>
                  <ItemTitle>Sarah O'Connor</ItemTitle>
                  <ItemDescription>sarah.oconnor@example.com</ItemDescription>
                </ItemContent>
                <ItemAction>
                  <Button variant="secondary" size="sm">
                    Edit
                  </Button>
                </ItemAction>
              </Item>
              <Separator />
              <Item>
                <ItemMedia>
                  <Avatar>
                    <AvatarImage src="/avatar03.png" alt="Avatar" />
                    <AvatarFallback>WM</AvatarFallback>
                  </Avatar>
                </ItemMedia>
                <ItemContent>
                  <ItemTitle>William Martin</ItemTitle>
                  <ItemDescription>william.martin@example.com</ItemDescription>
                </ItemContent>
                <ItemAction>
                  <Button variant="secondary" size="sm">
                    Edit
                  </Button>
                </ItemAction>
              </Item>
              <Separator />
              <Item>
                <ItemMedia>
                  <Avatar>
                    <AvatarImage src="/avatar04.png" alt="Avatar" />
                    <AvatarFallback>AJ</AvatarFallback>
                  </Avatar>
                </ItemMedia>
                <ItemContent>
                  <ItemTitle>Adam Johnson</ItemTitle>
                  <ItemDescription>adam.johnson@example.com</ItemDescription>
                </ItemContent>
                <ItemAction>
                  <Button variant="secondary" size="sm">
                    Edit
                  </Button>
                </ItemAction>
              </Item>
              <Separator />
              <Item>
                <ItemMedia>
                  <Avatar>
                    <AvatarImage src="/avatar05.png" alt="Avatar" />
                    <AvatarFallback>SA</AvatarFallback>
                  </Avatar>
                </ItemMedia>
                <ItemContent>
                  <ItemTitle>Sarah Adams</ItemTitle>
                  <ItemDescription>sarah.adams@example.com</ItemDescription>
                </ItemContent>
                <ItemAction>
                  <Button variant="secondary" size="sm">
                    Edit
                  </Button>
                </ItemAction>
              </Item>
            </Stack>
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
      </div>
      <div className="w-md">
        <Fieldset>
          <FieldsetLegend>Personal Information</FieldsetLegend>
          <Text>
            We need your name and email to create your account. You can always
            change this information later.
          </Text>
          <Field>
            <FieldLabel htmlFor="name">Name</FieldLabel>
            <Input id="name" placeholder="Enter your name" required />
            <FieldError match="valueMissing">This is required</FieldError>
          </Field>
          <Field>
            <FieldLabel htmlFor="email">Email</FieldLabel>
            <Input id="email" placeholder="Enter your email" required />
            <FieldError match="valueMissing">This is required</FieldError>
          </Field>
        </Fieldset>
        <Separator />
        <Fieldset>
          <FieldsetLegend>Security</FieldsetLegend>
          <Text>Set up your security preferences to protect your account.</Text>
          <Field>
            <FieldLabel htmlFor="password">Password</FieldLabel>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              required
            />
            <FieldError match="valueMissing">This is required</FieldError>
            <FieldDescription>
              Password must be at least 8 characters long.
            </FieldDescription>
          </Field>
          <Field>
            <FieldLabel htmlFor="confirm-password">Confirm Password</FieldLabel>
            <Input
              id="confirm-password"
              type="password"
              placeholder="Confirm your password"
              required
            />
            <FieldError match="valueMissing">This is required</FieldError>
            <FieldError match="valueMissing">Passwords do not match</FieldError>
          </Field>
        </Fieldset>
        <Separator />
        <Fieldset>
          <FieldsetLegend>Notifications</FieldsetLegend>
          <Text>
            We'll send you notifications about your account and important
            updates. Choose the ones you want to receive.
          </Text>
          <CheckboxGroup defaultValue={['email']}>
            <Label>
              <Checkbox
                name="notifications"
                id="notifications-email"
                value="email"
              />
              Email
            </Label>
            <Label>
              <Checkbox name="notifications" id="sms" value="sms" />
              SMS
            </Label>
            <Label>
              <Checkbox name="notifications" id="push" value="push" />
              Push
            </Label>
          </CheckboxGroup>
        </Fieldset>
        <Separator />
        <Fieldset>
          <FieldsetLegend>Theme</FieldsetLegend>
          <Text>Choose your preferred theme for the interface.</Text>
          <Field>
            <RadioGroup defaultValue="system">
              <Label>
                <Radio name="theme" id="system" value="system" />
                System
              </Label>
              <Label>
                <Radio name="theme" id="light" value="light" />
                Light
              </Label>
              <Label>
                <Radio name="theme" id="dark" value="dark" />
                Dark
              </Label>
            </RadioGroup>
            <FieldError match="valueMissing">This is required</FieldError>
            <FieldDescription>
              System theme will use the system default theme.
            </FieldDescription>
          </Field>
        </Fieldset>
        <Separator />
        <Fieldset>
          <FieldsetLegend>Subcription</FieldsetLegend>
          <Text>Choose your preferred subcription plan.</Text>
          <RadioGroup>
            <Item variant="outline" render={<label />}>
              <ItemContent>
                <ItemTitle>Free</ItemTitle>
                <ItemDescription>For personal use only.</ItemDescription>
              </ItemContent>
              <ItemAction>
                <Radio value="free" />
              </ItemAction>
            </Item>
            <Item variant="outline" render={<label />}>
              <ItemContent>
                <ItemTitle>Pro</ItemTitle>
                <ItemDescription>For professional use.</ItemDescription>
              </ItemContent>
              <ItemAction>
                <Radio value="pro" />
              </ItemAction>
            </Item>
            <Item variant="outline" render={<label />}>
              <ItemContent>
                <ItemTitle>Enterprise</ItemTitle>
                <ItemDescription>For large organizations.</ItemDescription>
              </ItemContent>
              <ItemAction>
                <Radio value="enterprise" />
              </ItemAction>
            </Item>
          </RadioGroup>
        </Fieldset>
      </div>
      {/**<div className="w-md bg-surface01 p-2 rounded-3xl">
        <div className="flex items-center gap-2.5 p-1.5 mb-2">
          <Chip variant="secondary" size="sm">
            How to make a website
          </Chip>
          <Chip variant="secondary" size="sm">
            Write a love letter
          </Chip>
          <Chip variant="secondary" size="sm">
            Write a poem
          </Chip>
        </div>
        <InputGroup variant="subtle" size="lg" className="shadow">
          <Textarea
            placeholder="Ask AI anything"
            className="min-h-14 resize-none"
          />
          <InputGroupBar>
            <Button size="sm-icon" variant="secondary">
              <PlusIcon />
            </Button>
            <Select defaultValue="gpt-4o">
              <SelectTrigger className="ml-auto w-auto mr-2" variant="plain">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="gpt-4o">GPT-4o</SelectItem>
                <SelectItem value="gpt-4o-mini">GPT-4o Mini</SelectItem>
                <SelectItem value="gpt-4">GPT-4</SelectItem>
                <SelectItem value="gpt-3.5-turbo">GPT-3.5 Turbo</SelectItem>
              </SelectContent>
            </Select>
            <Button size="sm-icon">
              <ArrowUpIcon />
            </Button>
          </InputGroupBar>
        </InputGroup>
      </div> */}
    </div>
  );
}
