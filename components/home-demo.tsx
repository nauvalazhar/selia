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
  FileSearchIcon,
  TrashIcon,
  SendIcon,
  CogIcon,
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
import { ScrollArea } from 'components/selia/scroll-area';

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
            <AutocompleteEmpty className="h-64">
              No results found.
            </AutocompleteEmpty>
            <AutocompleteList
              className="h-64 overflow-hidden px-2 data-empty:hidden"
              render={<ScrollArea data-slot="autocomplete-list" />}
            >
              {(group) => (
                <AutocompleteGroup key={group.label} items={group.items}>
                  <AutocompleteGroupLabel>{group.label}</AutocompleteGroupLabel>
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
        icon: (
          <svg
            width="256px"
            height="384px"
            viewBox="0 0 256 384"
            preserveAspectRatio="xMidYMid"
          >
            <g>
              <path
                d="M64,384 C99.328,384 128,355.328 128,320 L128,256 L64,256 C28.672,256 0,284.672 0,320 C0,355.328 28.672,384 64,384 Z"
                fill="#0ACF83"
              ></path>
              <path
                d="M0,192 C0,156.672 28.672,128 64,128 L128,128 L128,256 L64,256 C28.672,256 0,227.328 0,192 Z"
                fill="#A259FF"
              ></path>
              <path
                d="M0,64 C0,28.672 28.672,0 64,0 L128,0 L128,128 L64,128 C28.672,128 0,99.328 0,64 Z"
                fill="#F24E1E"
              ></path>
              <path
                d="M128,0 L192,0 C227.328,0 256,28.672 256,64 C256,99.328 227.328,128 192,128 L128,128 L128,0 Z"
                fill="#FF7262"
              ></path>
              <path
                d="M256,192 C256,227.328 227.328,256 192,256 C156.672,256 128,227.328 128,192 C128,156.672 156.672,128 192,128 C227.328,128 256,156.672 256,192 Z"
                fill="#1ABCFE"
              ></path>
            </g>
          </svg>
        ),
      },
      {
        label: 'Adobe XD',
        value: 'adobe-xd',
        icon: (
          <svg
            width="256px"
            height="250px"
            viewBox="0 0 256 250"
            preserveAspectRatio="xMidYMid"
          >
            <g>
              <rect
                fill="#470137"
                x="0"
                y="0"
                width="256"
                height="249.6"
                rx="42.5"
              ></rect>
              <path
                d="M134.578133,65.6408853 L102.635424,118.363019 L136.810432,174.348181 C137.029651,174.739874 137.091124,175.200462 136.982304,175.635936 C136.928938,175.821753 136.815106,175.867791 136.640451,175.874581 L136.445508,175.872011 L136.445508,175.872011 L136.209936,175.865615 C136.081979,175.865185 135.938757,175.871696 135.780224,175.897717 L111.140494,175.897136 L111.140494,175.897136 L110.656117,175.890176 C109.327539,175.855153 108.371439,175.665362 107.787509,174.691403 C105.49584,170.226564 103.206084,165.790194 100.91824,161.382293 C98.9130293,157.526824 96.7997573,153.604363 94.578424,149.614912 L93.619808,147.901045 C91.0437582,143.32346 88.4963556,138.686652 85.9776,133.990624 L85.805728,133.990624 C83.5140587,138.571097 81.1383644,143.150699 78.6786453,147.729429 C76.2156267,152.309895 73.782816,156.86085 71.3802133,161.382293 C68.9760391,165.906254 66.5145778,170.399918 63.9958293,174.863285 C63.5909729,175.772518 62.918479,175.962208 61.9805021,175.994256 L61.5911573,176 L61.5911573,176 L38.0640747,176 L37.9623079,176.002835 L37.9623079,176.002835 L37.6257244,176.033532 C37.4389385,176.044408 37.3273781,176.004245 37.2911573,175.721877 C37.2265383,175.303102 37.3183092,174.875192 37.5489707,174.519744 L70.6932373,120.080171 L38.4073067,65.4690133 C38.0640747,65.0130276 38.0067804,64.6409778 38.235424,64.352864 C38.4925019,64.0558021 38.8742056,63.8967743 39.2661547,63.9234347 L63.480224,63.9234347 C64.0082058,63.8946657 64.5360896,63.9823693 65.026048,64.181248 C65.4366522,64.4138741 65.7889492,64.7368699 66.0562667,65.1257813 C68.1171947,69.7059911 70.4069511,74.285504 72.925536,78.86432 C75.44272,83.4447929 77.9901156,87.967104 80.5677227,92.4312533 C83.1437653,96.89632 85.5194596,101.418631 87.6948053,105.998187 L87.8666667,105.998187 C90.1552142,101.30496 92.4736178,96.7254471 94.8218773,92.259648 C97.1671858,87.7945387 99.5713529,83.3007893 102.034379,78.7784 C104.495321,74.2570489 106.871015,69.7633849 109.161461,65.297408 C109.29311,64.8735909 109.529349,64.4897425 109.848395,64.1812587 C110.272399,63.9659767 110.749152,63.8765178 111.222357,63.9234453 L133.719232,63.9234453 C134.165996,63.813171 134.629537,64.0271926 134.835356,64.4387718 C135.022464,64.8129347 134.951168,65.2595589 134.669007,65.5565198 L134.578133,65.6408853 Z M185.048434,178.113476 L183.863552,178.126304 C175.959037,178.24652 168.127061,176.603848 160.936992,173.317707 C154.239007,170.217724 148.639881,165.157461 144.880224,158.806251 C141.088945,152.50951 139.143458,144.664432 139.045081,135.271016 L139.041152,134.505995 C138.976542,126.624105 140.990548,118.864419 144.880224,112.008853 C148.775515,105.219831 154.453013,99.6307005 161.292731,95.842664 L161.881824,95.5224 C169.32245,91.4008 178.309778,89.3400356 188.843808,89.3401067 L189.30471,89.3454773 L189.30471,89.3454773 L189.830392,89.3615893 L189.830392,89.3615893 L190.420854,89.3884427 L190.420854,89.3884427 L191.076096,89.4260373 L191.076096,89.4260373 L192.178393,89.5036413 L192.178393,89.5036413 L193.426292,89.6040213 L193.426292,89.6040213 L194.339115,89.6835947 L194.339115,89.6835947 L194.339115,55.852128 C194.339115,55.052384 194.682869,54.6499947 195.369845,54.6499947 L217.007861,54.6499947 C217.291644,54.609431 217.577967,54.7048189 217.780723,54.9074719 C217.983479,55.1101249 218.079012,55.3963992 218.038592,55.6802027 L218.038592,157.174731 C218.038592,158.879383 218.104255,160.714092 218.23558,162.678859 L218.555825,167.134312 L218.555825,167.134312 L218.725579,169.711157 L218.725579,169.711157 C218.768646,170.441321 218.359445,171.12315 217.694848,171.428608 C212.112545,173.75678 206.298158,175.483792 200.350059,176.580427 C195.299845,177.512577 190.181843,178.025231 185.048434,178.113476 L185.048434,178.113476 Z M194.339072,156.831253 L194.339072,109.948181 C193.410867,109.696725 192.463037,109.524319 191.505739,109.432811 C190.335852,109.315209 189.160685,109.257928 187.984907,109.261195 C183.817558,109.219732 179.699105,110.161067 175.963573,112.008853 C172.325303,113.817427 169.218794,116.539433 166.947947,119.908587 C164.680998,123.224817 163.50876,127.554974 163.431232,132.89906 L163.427115,133.47552 C163.343491,137.219133 163.95487,140.945791 165.23024,144.466453 C166.26813,147.303211 167.908773,149.881192 170.039093,152.02272 C172.078385,153.993041 174.547415,155.462817 177.251595,156.316213 C180.10798,157.241076 183.093514,157.704791 186.095861,157.690588 C187.697952,157.690588 189.186308,157.632704 190.560928,157.518293 C191.657999,157.435609 192.745059,157.254619 193.809056,156.977697 L194.339072,156.831253 Z"
                fill="#FF61F6"
              ></path>
            </g>
          </svg>
        ),
      },
      {
        label: 'Sketch',
        value: 'sketch',
        icon: (
          <svg
            width="256px"
            height="232px"
            viewBox="0 0 256 232"
            preserveAspectRatio="xMidYMid"
          >
            <g>
              <polygon
                fill="#FDB300"
                points="127.9998 0.0002 55.8548 7.6282 -0.0002 82.6072 127.9998 231.6622 255.9998 82.6072 200.1458 7.6282"
              ></polygon>
              <polygon
                fill="#EB6C00"
                points="0 82.6076 128 231.6616 51.846 82.6076"
              ></polygon>
              <polygon
                fill="#EB6C00"
                points="204.1533 82.6076 128.0003 231.6616 255.9993 82.6076"
              ></polygon>
              <polygon
                fill="#FDAD00"
                points="51.8463 82.6076 128.0003 231.6616 204.1543 82.6076"
              ></polygon>
              <polygon
                fill="#FDD231"
                points="55.8548 7.6282 51.8458 82.6072 127.9998 0.0002"
              ></polygon>
              <polygon
                fill="#FDD231"
                points="204.1533 82.6076 200.1453 7.6276 128.0003 0.0006"
              ></polygon>
              <polygon
                fill="#FDAD00"
                points="204.1542 82.6076 255.9992 82.6076 200.1452 7.6276"
              ></polygon>
              <polygon
                fill="#FDAD00"
                points="0 82.6076 51.846 82.6076 55.855 7.6276"
              ></polygon>
              <polygon
                fill="#FEEEB7"
                points="127.9998 0.0002 51.8458 82.6072 204.1538 82.6072"
              ></polygon>
            </g>
          </svg>
        ),
      },
    ],
  },
  {
    label: 'File Management',
    items: [
      {
        label: 'File Search',
        value: 'file-search',
        icon: <FileSearchIcon />,
      },
      {
        label: 'Send File',
        value: 'send-file',
        icon: <SendIcon />,
      },
      {
        label: 'Trash',
        value: 'trash',
        icon: <TrashIcon />,
      },
    ],
  },
  {
    label: 'Settings',
    items: [
      {
        label: 'General',
        value: 'general',
        icon: <CogIcon />,
      },
      {
        label: 'Appearance',
        value: 'appearance',
        icon: <CogIcon />,
      },
      {
        label: 'Accessibility',
        value: 'accessibility',
        icon: <CogIcon />,
      },
    ],
  },
];
