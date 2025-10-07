import { Button } from 'components/selia/button';
import {
  Card,
  CardBody,
  CardDescription,
  CardFooter,
  CardHeader,
  CardHeaderActions,
  CardHeaderContent,
  CardTitle,
} from 'components/selia/card';
import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from 'components/selia/field';
import { Code, Strong, Text, TextLink } from 'components/selia/text';
import { Input } from 'components/selia/input';
import {
  ArrowRightCircle,
  Building2Icon,
  EditIcon,
  PlayIcon,
  Settings2Icon,
  Trash2Icon,
  UserIcon,
  Users2Icon,
} from 'lucide-react';
import { useState } from 'react';
import { Fieldset, FieldsetLegend } from 'components/selia/fieldset';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
} from 'components/selia/input-group';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectGroupLabel,
  SelectItem,
  SelectList,
  SelectTrigger,
  SelectValue,
} from 'components/selia/select';
import { Divider, DividerText } from 'components/selia/divider';
import { Avatar, AvatarFallback, AvatarImage } from 'components/selia/avatar';
import { Heading } from 'components/selia/heading';
import { Preview } from 'components/preview';

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
  { value: 'option4', label: 'Option 4' },
  { value: 'option5', label: 'Option 5' },
];

const optionsWithIcon = [
  { value: 'user', label: 'Personal', icon: <UserIcon /> },
  { value: 'organization', label: 'Organization', icon: <Building2Icon /> },
  { value: 'team', label: 'Team', icon: <Users2Icon /> },
];

export default function Home() {
  const [pending, setPending] = useState(false);

  return (
    <div className="container mx-auto py-14">
      <div className="w-6/12 mx-auto">
        <Heading>Selia UI</Heading>
        <Text className="text-xl mt-2">
          A beautiful component library for your React applications.
        </Text>
        <Divider className="my-6" />
        <Heading size="md" className="mb-4">
          Avatars
        </Heading>
        <Preview title="Basic Avatars">
          <Avatar size="sm">
            <AvatarImage src="/avatar01.png" alt="Avatar" />
            <AvatarFallback>BS</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage src="/avatar02.png" alt="Avatar" />
            <AvatarFallback>AB</AvatarFallback>
          </Avatar>
          <Avatar size="lg">
            <AvatarImage src="/avatar03.png" alt="Avatar" />
            <AvatarFallback>TZ</AvatarFallback>
          </Avatar>
        </Preview>
        <Preview title="Initials Avatars">
          <Avatar className="bg-blue-500">PF</Avatar>
          <Avatar className="bg-red-500">TH</Avatar>
          <Avatar className="bg-orange-500">ID</Avatar>
        </Preview>

        <Heading size="md" className="mb-4 mt-24">
          Buttons
        </Heading>
        <Preview title="Buttons">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="invert">Invert</Button>
        </Preview>
        <Preview title="Button Sizes">
          <Button variant="invert" size="sm">
            Small
          </Button>
          <Button variant="invert" size="md">
            Medium
          </Button>
          <Button variant="invert" size="lg">
            Large
          </Button>
        </Preview>
        <Preview title="Button Block">
          <div className="w-8/12">
            <Button variant="primary" size="lg" block>
              Get Started
            </Button>
          </div>
        </Preview>
        <Preview title="Button Pill">
          <Button variant="secondary" pill>
            Play Now
          </Button>
        </Preview>
        <Preview title="Button Progress">
          <div className="flex flex-col items-start justify-center text-center gap-2">
            <Button
              variant="destructive"
              progress={pending}
              onClick={() => {
                setPending(true);
                setTimeout(() => setPending(false), 2000);
              }}
              className="mx-auto"
            >
              Delete Chat
            </Button>
            <Text className="text-sm">
              (Click the button to see the loading)
            </Text>
          </div>
        </Preview>
        <Preview title="Button Icons">
          <Button variant="secondary" size="icon">
            <PlayIcon />
          </Button>
          <Button variant="destructive">
            <Trash2Icon /> Delete
          </Button>
        </Preview>
        <Preview title="Button Icons with Progress">
          <div className="flex flex-col items-start justify-center text-center gap-2">
            <Button
              variant="primary"
              progress={pending}
              onClick={() => {
                setPending(true);
                setTimeout(() => setPending(false), 2000);
              }}
              className="mx-auto"
            >
              Send Message
              <ArrowRightCircle />
            </Button>
            <Text className="text-sm">
              (Click the button to see the loading)
            </Text>
          </div>
        </Preview>

        <Heading size="md" className="mb-4 mt-24">
          Cards
        </Heading>
        <Preview title="Basic Card">
          <Card>
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
            </CardHeader>
            <CardBody>
              <Text>This is a basic card component with a title and body.</Text>
            </CardBody>
          </Card>
        </Preview>
        <Preview title="Card with Description and Footer">
          <Card>
            <CardHeader>
              <CardHeaderContent>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>
                  A beautiful component library for your React applications.
                </CardDescription>
              </CardHeaderContent>
            </CardHeader>
            <CardBody>
              <Text>
                This is a card component with a description and footer.
              </Text>
            </CardBody>
            <CardFooter>
              <Text>This is the footer of the card.</Text>
            </CardFooter>
          </Card>
        </Preview>
        <Preview title="Card with Actions">
          <Card>
            <CardHeader>
              <CardHeaderContent>
                <CardTitle>User Profile</CardTitle>
                <CardDescription>
                  Your personal information and settings.
                </CardDescription>
              </CardHeaderContent>
              <CardHeaderActions>
                <Button variant="secondary" size="icon">
                  <Settings2Icon />
                </Button>
              </CardHeaderActions>
            </CardHeader>
            <CardBody>
              <Text>
                This is a card component with a description and footer.
              </Text>
            </CardBody>
            <CardFooter>
              <Text>This is the footer of the card.</Text>
            </CardFooter>
          </Card>
        </Preview>

        <Heading size="md" className="mb-4 mt-24">
          Divider
        </Heading>
        <Preview title="Divider">
          <div className="w-6/12">
            <Text>This is some text above the divider.</Text>
            <Divider className="my-4" />
            <Text>This is some text below the divider.</Text>
          </div>
        </Preview>
        <Preview title="Divider with Text">
          <div className="w-6/12">
            <DividerText className="my-4">Text on the left</DividerText>
            <DividerText className="my-4" variant="center">
              Text on the center
            </DividerText>
            <DividerText className="my-4" variant="right">
              Text on the right
            </DividerText>
          </div>
        </Preview>

        <Heading size="md" className="mb-4 mt-24">
          Field
        </Heading>
        <Preview title="Field">
          <div className="w-6/12">
            <Field>
              <FieldLabel htmlFor="name">Name</FieldLabel>
              <Input id="name" placeholder="Enter your name" required />
              <FieldError match="valueMissing">This is required</FieldError>
              <FieldDescription>
                Try to input something, clear it and leave the field.
              </FieldDescription>
            </Field>
          </div>
        </Preview>
        <Preview title="Fieldset">
          <div className="w-6/12">
            <Fieldset>
              <FieldsetLegend>Personal Information</FieldsetLegend>
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
            </Fieldset>
          </div>
        </Preview>

        <Text>
          You can find other components like <Code>Select</Code>,{' '}
          <Code>Textarea</Code>, <Code>Checkbox</Code>, <Code>Radio</Code>, and
          more throughout this documentation.
        </Text>

        <Heading size="md" className="mb-4 mt-24">
          Heading
        </Heading>
        <Preview title="Headings">
          <div className="flex flex-col gap-4">
            <Heading size="lg">This is a large heading</Heading>
            <Heading size="md">This is a medium heading</Heading>
            <Heading size="sm">This is a small heading</Heading>
          </div>
        </Preview>
        <Text>
          Heading <Code>lg</Code> will render as <Code>h1</Code>,{' '}
          <Code>md</Code> as <Code>h2</Code>, and <Code>sm</Code> as{' '}
          <Code>h3</Code> by default. However, you can override this by passing
          the <Code>level</Code> prop from 1 to 6.
        </Text>

        <Heading size="md" className="mb-4 mt-24">
          Input
        </Heading>
        <Preview title="Input">
          <div className="w-6/12">
            <Input placeholder="Enter your text" />
          </div>
        </Preview>
        <Preview title="Input File">
          <div className="flex flex-col gap-4 w-6/12">
            <Input type="file" />
          </div>
        </Preview>
        <Preview title="Input Disabled">
          <div className="w-6/12">
            <Input placeholder="Enter your text" disabled />
          </div>
        </Preview>

        <Heading size="md" className="mb-4 mt-24">
          Select
        </Heading>
        <Preview title="Basic Select">
          <div className="w-6/12">
            <Select items={options}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectList>
                  {options.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectList>
              </SelectContent>
            </Select>
          </div>
        </Preview>
        <Preview title="Select with Icons">
          <div className="w-6/12">
            <Select items={optionsWithIcon}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectList>
                  {optionsWithIcon.map((option) => (
                    <SelectItem key={option.value} value={option}>
                      {option.icon}
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectList>
              </SelectContent>
            </Select>
          </div>
        </Preview>
        <Preview title="Select with Custom Render">
          <div className="w-6/12">
            <Select items={optionsWithIcon}>
              <SelectTrigger>
                <SelectValue
                  render={(props, state) =>
                    state.value ? (
                      <span className="text-foreground">
                        {state.value.label}
                      </span>
                    ) : (
                      <span className="text-dim">Select an option</span>
                    )
                  }
                />
              </SelectTrigger>
              <SelectContent>
                <SelectList>
                  {optionsWithIcon.map((option) => (
                    <SelectItem key={option.value} value={option}>
                      {option.icon}
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectList>
              </SelectContent>
            </Select>
          </div>
        </Preview>

        <Heading size="md" className="mb-4 mt-24">
          Text
        </Heading>
        <Preview title="Basic Text">
          <Text>
            This is a simple text component. You can use it to display text in
            your application.
          </Text>
        </Preview>
        <Preview title="Strong">
          <Text>
            ou can also make text <strong>strong</strong>.
          </Text>
        </Preview>
        <Preview title="Links">
          <Text>
            You can also add{' '}
            <TextLink href="https://seliaui.com" target="_blank">
              links
            </TextLink>{' '}
            to your text.
          </Text>
        </Preview>

        <Heading size="md" className="mb-4 mt-24">
          Login Example
        </Heading>
        <Preview title="Login Form">
          <Card className="w-7/12">
            <CardHeader align="center">
              <CardHeaderContent>
                <CardTitle>Sign in to your account</CardTitle>
                <CardDescription>
                  Login with your Google or GitHub account
                </CardDescription>
              </CardHeaderContent>
            </CardHeader>
            <CardBody className="flex flex-col gap-5">
              <div className="flex flex-col gap-2.5">
                <Button variant="secondary" block size="lg">
                  <svg
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_213_6713)">
                      <path
                        d="M6.77029 1.09195C4.97181 1.71586 3.42081 2.90006 2.34509 4.47061C1.26938 6.04116 0.725656 7.91528 0.79379 9.81769C0.861924 11.7201 1.53832 13.5505 2.72364 15.0401C3.90895 16.5297 5.54069 17.5999 7.3792 18.0935C8.86972 18.4781 10.4313 18.495 11.9298 18.1427C13.2873 17.8378 14.5423 17.1856 15.572 16.2499C16.6437 15.2463 17.4216 13.9697 17.822 12.5571C18.2571 11.021 18.3346 9.40562 18.0484 7.83492H9.67842V11.307H14.5258C14.4289 11.8607 14.2213 12.3892 13.9154 12.8609C13.6095 13.3326 13.2116 13.7377 12.7455 14.052C12.1536 14.4436 11.4863 14.7071 10.7865 14.8254C10.0847 14.9559 9.3649 14.9559 8.66311 14.8254C7.95176 14.6785 7.27885 14.3849 6.68732 13.9634C5.73691 13.2906 5.02328 12.3348 4.64826 11.2324C4.26701 10.1094 4.26701 8.89188 4.64826 7.76883C4.91521 6.98163 5.3565 6.26489 5.9392 5.67211C6.60603 4.98128 7.45026 4.48748 8.37926 4.24487C9.30826 4.00226 10.2861 4.02023 11.2056 4.2968C11.9239 4.51719 12.5808 4.90244 13.1237 5.4218C13.6703 4.87805 14.2159 4.33289 14.7606 3.78633C15.0419 3.49242 15.3484 3.21258 15.6254 2.91164C14.7965 2.14034 13.8236 1.54013 12.7623 1.14539C10.8297 0.443657 8.71511 0.424798 6.77029 1.09195Z"
                        fill="white"
                      />
                      <path
                        d="M6.77004 1.09215C8.71469 0.42454 10.8293 0.442902 12.7621 1.14418C13.8235 1.5416 14.796 2.1447 15.6238 2.91887C15.3425 3.2198 15.0458 3.50105 14.7589 3.79355C14.2133 4.33824 13.6682 4.88105 13.1235 5.42199C12.5805 4.90263 11.9237 4.51738 11.2054 4.29699C10.2862 4.01945 9.30835 4.00045 8.3791 4.24207C7.44985 4.48368 6.6051 4.97658 5.93754 5.66668C5.35484 6.25946 4.91354 6.9762 4.6466 7.7634L1.73145 5.50637C2.77489 3.43716 4.58156 1.85437 6.77004 1.09215Z"
                        fill="#E33629"
                      />
                      <path
                        d="M0.958551 7.74229C1.11512 6.96571 1.37526 6.21368 1.73199 5.50635L4.64714 7.769C4.2659 8.89206 4.2659 10.1095 4.64714 11.2326C3.67589 11.9826 2.70418 12.7363 1.73199 13.4938C0.839231 11.7168 0.566956 9.69205 0.958551 7.74229Z"
                        fill="#F8BD00"
                      />
                      <path
                        d="M9.67836 7.8335H18.0484C18.3345 9.40419 18.2571 11.0196 17.822 12.5557C17.4215 13.9682 16.6436 15.2449 15.572 16.2485C14.6312 15.5144 13.6862 14.786 12.7454 14.0519C13.2118 13.7373 13.6099 13.3318 13.9158 12.8596C14.2217 12.3875 14.4292 11.8584 14.5257 11.3041H9.67836C9.67695 10.1482 9.67836 8.99084 9.67836 7.8335Z"
                        fill="#587DBD"
                      />
                      <path
                        d="M1.73047 13.4937C2.70266 12.7437 3.67437 11.9899 4.64562 11.2324C5.02139 12.3352 5.73604 13.291 6.6875 13.9634C7.28087 14.3829 7.95523 14.6741 8.6675 14.8184C9.3693 14.9489 10.0891 14.9489 10.7909 14.8184C11.4907 14.7001 12.158 14.4366 12.7498 14.0449C13.6906 14.779 14.6356 15.5074 15.5764 16.2415C14.5469 17.1777 13.2918 17.8304 11.9342 18.1357C10.4357 18.488 8.87411 18.4711 7.38359 18.0865C6.20474 17.7717 5.10361 17.2169 4.14922 16.4566C3.13915 15.6545 2.31411 14.6439 1.73047 13.4937Z"
                        fill="#319F43"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_213_6713">
                        <rect
                          width="18"
                          height="18"
                          fill="white"
                          transform="translate(0.5 0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  Login with Google
                </Button>
                <Button variant="secondary" block size="lg">
                  <svg
                    width="18"
                    height="19"
                    viewBox="0 0 18 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8.99988 1.21753C4.31045 1.21753 0.507812 5.01933 0.507812 9.70959C0.507812 13.4617 2.94105 16.6448 6.3152 17.7678C6.73947 17.8466 6.89528 17.5836 6.89528 17.3593C6.89528 17.1568 6.88741 16.4879 6.88375 15.7783C4.52125 16.292 4.02273 14.7763 4.02273 14.7763C3.63644 13.7947 3.07984 13.5337 3.07984 13.5337C2.30922 13.0067 3.13792 13.0177 3.13792 13.0177C3.99053 13.0774 4.43969 13.8928 4.43969 13.8928C5.19709 15.1907 6.4263 14.8155 6.91089 14.5987C6.98711 14.0498 7.20719 13.6751 7.45005 13.463C5.56384 13.2486 3.58089 12.5203 3.58089 9.26634C3.58089 8.3392 3.91277 7.58165 4.456 6.98681C4.36769 6.77306 4.07702 5.90934 4.53813 4.73962C4.53813 4.73962 5.25109 4.51139 6.87391 5.61009C7.55144 5.42179 8.27805 5.32715 8.99988 5.32392C9.72128 5.32715 10.4483 5.42151 11.1271 5.60981C12.748 4.51111 13.4601 4.73934 13.4601 4.73934C13.9223 5.90892 13.6316 6.77278 13.5435 6.98653C14.088 7.58137 14.4175 8.33892 14.4175 9.26606C14.4175 12.5277 12.4308 13.2457 10.5399 13.4561C10.8446 13.7197 11.116 14.2366 11.116 15.0287C11.116 16.165 11.1062 17.0795 11.1062 17.3592C11.1062 17.5852 11.2592 17.85 11.6895 17.7666C15.0617 16.6424 17.4921 13.4603 17.4921 9.70959C17.4919 5.01961 13.6897 1.21753 8.99988 1.21753Z"
                      fill="#F7F7F8"
                    />
                    <path
                      d="M3.72465 13.4101C3.70595 13.4523 3.63957 13.465 3.5791 13.4361C3.51723 13.4086 3.48278 13.351 3.50274 13.3087C3.52103 13.2651 3.58754 13.2532 3.64899 13.2823C3.71087 13.31 3.74603 13.3681 3.72451 13.4103L3.72465 13.4101ZM4.06862 13.7939C4.02826 13.8314 3.94909 13.814 3.89537 13.7545C3.83968 13.6954 3.82928 13.6163 3.87048 13.5782C3.91239 13.5408 3.98917 13.5585 4.04485 13.6175C4.10026 13.6774 4.11123 13.7559 4.06876 13.794L4.06862 13.7939ZM4.40359 14.2828C4.35156 14.3191 4.26634 14.2852 4.21374 14.2097C4.16171 14.134 4.16171 14.0433 4.21515 14.0072C4.2676 13.9709 4.35156 14.0037 4.40499 14.0785C4.45674 14.1551 4.45674 14.246 4.40359 14.2828ZM4.86217 14.7555C4.81576 14.8068 4.71648 14.793 4.64392 14.7231C4.56981 14.6546 4.54914 14.5572 4.59568 14.506C4.64293 14.4545 4.74264 14.4689 4.81562 14.5383C4.88973 14.6067 4.91209 14.7043 4.86245 14.7553L4.86217 14.7555ZM5.49498 15.0298C5.47431 15.0963 5.37896 15.1266 5.28264 15.0982C5.18659 15.0691 5.12373 14.9913 5.14342 14.9241C5.1631 14.857 5.25915 14.8256 5.35604 14.8559C5.45209 14.8848 5.51495 14.9622 5.49498 15.0298ZM6.19009 15.0806C6.19248 15.1506 6.11092 15.2086 6.01009 15.21C5.90842 15.2124 5.82615 15.1555 5.82517 15.0866C5.82517 15.0159 5.90504 14.9587 6.00657 14.9567C6.1074 14.9549 6.19023 15.0111 6.19023 15.0805L6.19009 15.0806ZM6.83668 14.9706C6.84878 15.0388 6.7786 15.109 6.67834 15.1277C6.5799 15.146 6.48849 15.1035 6.47584 15.0359C6.46374 14.9658 6.53518 14.8957 6.63362 14.8775C6.73403 14.8602 6.82403 14.9013 6.83668 14.9706Z"
                      fill="#F7F7F8"
                    />
                  </svg>
                  Login with GitHub
                </Button>
              </div>
              <DividerText variant="center" className="my-2">
                Or continue with email
              </DividerText>
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
        </Preview>

        <Heading size="md" className="mb-4 mt-24">
          Team Members Card
        </Heading>
        <Preview title="Team Members Card">
          <Card className="w-7/12">
            <CardHeader>
              <CardHeaderContent>
                <CardTitle>Team Members</CardTitle>
                <CardDescription>
                  Member can access this workspace.
                </CardDescription>
              </CardHeaderContent>
            </CardHeader>
            <CardBody className="p-0">
              <div className="flex items-center px-6 py-4">
                <Avatar className="size-12">
                  <AvatarImage src="/avatar01.png" alt="Avatar" />
                  <AvatarFallback>MB</AvatarFallback>
                </Avatar>
                <div className="ml-3">
                  <Text className="font-medium">Marina Brown</Text>
                  <Text className="text-sm text-muted">
                    marina.brown@example.com
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
                <Avatar className="size-12">
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
                <Avatar className="size-12">
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
                <Avatar className="size-12">
                  <AvatarImage src="/avatar04.png" alt="Avatar" />
                  <AvatarFallback>AJ</AvatarFallback>
                </Avatar>
                <div className="ml-3">
                  <Text className="font-medium">Adam Johnson</Text>
                  <Text className="text-sm text-muted">
                    adam.johnson@example.com
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
                <Avatar className="size-12">
                  <AvatarImage src="/avatar05.png" alt="Avatar" />
                  <AvatarFallback>SA</AvatarFallback>
                </Avatar>
                <div className="ml-3">
                  <Text className="font-medium">Sarah Adams</Text>
                  <Text className="text-sm text-muted">
                    sarah.adams@example.com
                  </Text>
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
                variant="ghost"
                block
                className="p-4 h-auto rounded-b-3xl rounded-t-none"
                render={<a href="#" />}
              >
                View More
              </Button>
            </CardFooter>
          </Card>
        </Preview>
      </div>
    </div>
  );
}
