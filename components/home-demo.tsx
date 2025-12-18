import { InputGroup, InputGroupAddon } from 'components/selia/input-group';
import { Textarea } from 'components/selia/textarea';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectPopup,
  SelectItem,
  SelectList,
} from 'components/selia/select';
import { Button } from 'components/selia/button';
import {
  ArrowUpIcon,
  PaperclipIcon,
  PlusIcon,
  ShareIcon,
  StarIcon,
  SearchIcon,
} from 'lucide-react';
import { Menu, MenuItem, MenuPopup, MenuTrigger } from 'components/selia/menu';
import { useState } from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardBody,
} from 'components/selia/card';
import { Heading } from './selia/heading';
import { Field, FieldLabel, FieldError } from 'components/selia/field';
import { Text, TextLink } from 'components/selia/text';
import { Separator } from './selia/separator';
import { Avatar, AvatarIndicator, AvatarImage } from './selia/avatar';
import {
  Autocomplete,
  AutocompleteInput,
  AutocompleteEmpty,
  AutocompleteList,
  AutocompleteGroup,
  AutocompleteGroupLabel,
  AutocompleteCollection,
  AutocompleteItem,
} from 'components/selia/autocomplete';
import { Fieldset, FieldsetLegend } from 'components/selia/fieldset';
import { Form } from 'components/selia/form';
import { Input } from 'components/selia/input';
import {
  Item,
  ItemAction,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from 'components/selia/item';

export function HomeDemo() {
  const [pending, setPending] = useState(false);
  return (
    <div className="flex justify-end h-full">
      <div className="w-6/12 border-x border-dashed border-border/30 p-4 2xl:p-8 flex flex-col gap-8">
        <div className="bg-card rounded-2xl border border-card-border shadow-card">
          <Autocomplete items={items} autoHighlight open>
            <InputGroup
              variant="plain"
              className="p-2 border-b border-separator"
            >
              <InputGroupAddon>
                <SearchIcon />
              </InputGroupAddon>
              <AutocompleteInput
                placeholder="Search apps or commands..."
                variant="plain"
              />
            </InputGroup>
            <div className="p-2">
              <AutocompleteEmpty className="h-64">
                No results found.
              </AutocompleteEmpty>
              <AutocompleteList className="h-64">
                {(group) => (
                  <AutocompleteGroup key={group.label} items={group.items}>
                    <AutocompleteGroupLabel>
                      {group.label}
                    </AutocompleteGroupLabel>
                    <AutocompleteCollection>
                      {(item) => (
                        <AutocompleteItem
                          key={item.value}
                          value={item.value}
                          onClick={() => console.log(item)}
                        >
                          {item.icon}
                          {item.label}
                        </AutocompleteItem>
                      )}
                    </AutocompleteCollection>
                  </AutocompleteGroup>
                )}
              </AutocompleteList>
            </div>
          </Autocomplete>
        </div>
        <Item className="items-center">
          <ItemMedia>
            <img src="https://bun.com/logo.svg" alt="Avatar" />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>Bun</ItemTitle>
            <ItemDescription>JavaScript Runtime</ItemDescription>
          </ItemContent>
          <ItemAction>
            <Button size="sm" pill>
              Install
            </Button>
          </ItemAction>
        </Item>
        <Card>
          <CardBody>
            <Form>
              <Fieldset>
                <FieldsetLegend>Personal Information</FieldsetLegend>
                <Text>We need your name and email to create your account.</Text>
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

              <Button type="submit" block>
                Create Account
              </Button>
            </Form>
          </CardBody>
        </Card>
      </div>
      <div className="w-6/12 border-x border-dashed border-border/30 p-4 2xl:p-8 flex flex-col gap-8">
        <Card className="w-full">
          <CardHeader align="center">
            <CardTitle>Sign in to your account</CardTitle>
            <CardDescription>
              Login with your Google or GitHub account
            </CardDescription>
          </CardHeader>
          <CardBody className="flex flex-col gap-5">
            <Field>
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <Input id="email" type="email" placeholder="Enter your email" />
            </Field>
            <Field>
              <div className="flex items-center">
                <FieldLabel htmlFor="password">Password</FieldLabel>
                <TextLink href="#" className="ml-auto">
                  Forgot password?
                </TextLink>
              </div>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
              />
            </Field>
            <Button
              variant="primary"
              block
              size="lg"
              progress={pending}
              onClick={() => {
                setPending(true);
                setTimeout(() => setPending(false), 2000);
              }}
            >
              Sign In
            </Button>
            <Text className="text-center">
              Don't have an account? <TextLink href="#">Sign up</TextLink>
            </Text>
          </CardBody>
        </Card>
        <InputGroup variant="subtle" className="shadow-card ring-card-border">
          <Textarea placeholder="Ask AI anything ..." className="resize-none" />
          <InputGroupAddon align="block-end">
            <Menu>
              <MenuTrigger
                render={
                  <Button size="sm-icon" variant="outline" pill>
                    <PlusIcon />
                  </Button>
                }
              />
              <MenuPopup align="start" className="w-48">
                <MenuItem>
                  <PaperclipIcon /> Add from local files
                </MenuItem>
                <MenuItem>
                  <svg viewBox="0 0 87.3 78" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="m6.6 66.85 3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3l13.75-23.8h-27.5c0 1.55.4 3.1 1.2 4.5z"
                      fill="#0066da"
                    />
                    <path
                      d="m43.65 25-13.75-23.8c-1.35.8-2.5 1.9-3.3 3.3l-25.4 44a9.06 9.06 0 0 0 -1.2 4.5h27.5z"
                      fill="#00ac47"
                    />
                    <path
                      d="m73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5h-27.502l5.852 11.5z"
                      fill="#ea4335"
                    />
                    <path
                      d="m43.65 25 13.75-23.8c-1.35-.8-2.9-1.2-4.5-1.2h-18.5c-1.6 0-3.15.45-4.5 1.2z"
                      fill="#00832d"
                    />
                    <path
                      d="m59.8 53h-32.3l-13.75 23.8c1.35.8 2.9 1.2 4.5 1.2h50.8c1.6 0 3.15-.45 4.5-1.2z"
                      fill="#2684fc"
                    />
                    <path
                      d="m73.4 26.5-12.7-22c-.8-1.4-1.95-2.5-3.3-3.3l-13.75 23.8 16.15 28h27.45c0-1.55-.4-3.1-1.2-4.5z"
                      fill="#ffba00"
                    />
                  </svg>
                  Open Google Drive
                </MenuItem>
              </MenuPopup>
            </Menu>
            <Select defaultValue={models[1]} items={models}>
              <SelectTrigger className="ml-auto w-auto mr-2" variant="plain">
                <SelectValue placeholder="Model" />
              </SelectTrigger>
              <SelectPopup>
                <SelectList>
                  {models.map((model) => (
                    <SelectItem key={model.value} value={model}>
                      {model.label}
                    </SelectItem>
                  ))}
                </SelectList>
              </SelectPopup>
            </Select>
            <Button size="sm-icon" pill>
              <ArrowUpIcon />
            </Button>
          </InputGroupAddon>
        </InputGroup>
        <Card className="w-full p-1">
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
              <Button variant="secondary" size="lg-icon">
                <ShareIcon />
              </Button>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

const models = [
  {
    value: 'gpt',
    label: 'GPT',
  },
  {
    value: 'gemini',
    label: 'Gemini',
  },
  {
    value: 'claude',
    label: 'Claude',
  },
  {
    value: 'llama',
    label: 'Llama',
  },
  {
    value: 'grok',
    label: 'Grok',
  },
];

const items = [
  {
    label: 'Suggestions',
    items: [
      {
        label: 'Figma',
        value: 'figma',
      },
      {
        label: 'Adobe XD',
        value: 'adobe-xd',
      },
      {
        label: 'Sketch',
        value: 'sketch',
      },
    ],
  },
  {
    label: 'File Management',
    items: [
      {
        label: 'File Explorer',
        value: 'file-explorer',
      },
      {
        label: 'File Search',
        value: 'file-search',
      },
      {
        label: 'File Transfer',
        value: 'file-transfer',
      },
    ],
  },
  {
    label: 'Settings',
    items: [
      {
        label: 'General',
        value: 'general',
      },
      {
        label: 'Appearance',
        value: 'appearance',
      },
      {
        label: 'Accessibility',
        value: 'accessibility',
      },
    ],
  },
];
