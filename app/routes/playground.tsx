import { Button } from 'components/selia/button';
import { Pagination, PaginationItem } from 'components/selia/pagination';
import {
  Sidebar,
  SidebarCollapsible,
  SidebarCollapsibleTrigger,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupTitle,
  SidebarHeader,
  SidebarItem,
  SidebarList,
  SidebarLogo,
  SidebarMenu,
  SidebarSubmenu,
} from 'components/selia/sidebar';
import {
  AlignLeftIcon,
  BookIcon,
  ChartAreaIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  FileIcon,
  HelpCircleIcon,
  HomeIcon,
  LifeBuoyIcon,
  LogOutIcon,
  MessageCircleIcon,
  MoreHorizontalIcon,
  Package2Icon,
  PlusIcon,
  SearchIcon,
  SettingsIcon,
  ShipIcon,
  ShoppingBagIcon,
  TagsIcon,
  UserIcon,
} from 'lucide-react';
import {
  Dropdown,
  DropdownContent,
  DropdownItem,
  DropdownTrigger,
} from 'components/selia/dropdown';
import { useRef } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from 'components/selia/avatar';
import { Chip } from 'components/selia/chip';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupBar,
  InputGroupSeparator,
  InputGroupText,
} from 'components/selia/input-group';
import { Kbd } from 'components/selia/kbd';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from 'components/selia/select';
import { Input } from 'components/selia/input';
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxItem,
  ComboboxList,
  ComboboxSearch,
  ComboboxTrigger,
  ComboboxValue,
} from 'components/selia/combobox';
import { Textarea } from 'components/selia/textarea';

const options = [
  { value: 'jne', label: 'JNE' },
  { value: 'pos', label: 'POS' },
  { value: 'tiki', label: 'Tiki' },
];

export default function Playground() {
  const anchorRef = useRef<HTMLAnchorElement>(null);

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <InputGroup>
        <InputGroupAddon>
          <InputGroupText>https://</InputGroupText>
        </InputGroupAddon>
        <Input placeholder="example.com" />
      </InputGroup>
      <InputGroup>
        <Input placeholder="yourname" />
        <InputGroupAddon align="end">
          <InputGroupText>@company.com</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupAddon>
          <FileIcon />
        </InputGroupAddon>
        <Input type="file" />
      </InputGroup>
      <InputGroup>
        <InputGroupAddon>
          <SearchIcon />
        </InputGroupAddon>
        <Input placeholder="Search" />
        <InputGroupAddon align="end">
          <Kbd>⌘ K</Kbd>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupAddon>
          <MessageCircleIcon />
        </InputGroupAddon>
        <Input placeholder="Message" />
        <InputGroupAddon align="end">
          <HelpCircleIcon />
          <Button variant="primary" pill>
            Send
          </Button>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <Input placeholder="Amount" />
        <InputGroupAddon align="end">
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="USD">USD</SelectItem>
              <SelectItem value="EUR">EUR</SelectItem>
              <SelectItem value="GBP">GBP</SelectItem>
              <SelectItem value="JPY">JPY</SelectItem>
              <SelectItem value="CNY">CNY</SelectItem>
              <SelectItem value="INR">INR</SelectItem>
              <SelectItem value="BRL">BRL</SelectItem>
              <SelectItem value="ARS">ARS</SelectItem>
              <SelectItem value="MXN">MXN</SelectItem>
            </SelectContent>
          </Select>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <Input placeholder="Message" />
        <InputGroupAddon align="end">
          <Dropdown>
            <DropdownTrigger
              render={
                <Button variant="tertiary-subtle" size="xs" pill>
                  Options <ChevronDownIcon />
                </Button>
              }
            />
            <DropdownContent>
              <DropdownItem>Option 1</DropdownItem>
              <DropdownItem>Option 2</DropdownItem>
              <DropdownItem>Option 3</DropdownItem>
            </DropdownContent>
          </Dropdown>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <Input placeholder="Message" />
        <InputGroupAddon align="end">
          <Combobox>
            <ComboboxTrigger>
              <ComboboxValue placeholder="Select" />
            </ComboboxTrigger>
            <ComboboxContent className="w-40">
              <ComboboxSearch />
              <ComboboxEmpty>No results found</ComboboxEmpty>
              <ComboboxList>
                <ComboboxItem value="option1">Option 1</ComboboxItem>
                <ComboboxItem value="option2">Option 2</ComboboxItem>
                <ComboboxItem value="option3">Option 3</ComboboxItem>
              </ComboboxList>
            </ComboboxContent>
          </Combobox>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupAddon>
          <ShipIcon />
        </InputGroupAddon>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Courier" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="jne">JNE</SelectItem>
            <SelectItem value="pos">POS</SelectItem>
            <SelectItem value="tiki">Tiki</SelectItem>
          </SelectContent>
        </Select>
      </InputGroup>
      <InputGroup>
        <InputGroupAddon>
          <ShipIcon />
        </InputGroupAddon>
        <Combobox items={options}>
          <ComboboxTrigger>
            <ComboboxValue placeholder="Courier" />
          </ComboboxTrigger>
          <ComboboxContent className="w-40">
            <ComboboxSearch />
            <ComboboxEmpty>No results found</ComboboxEmpty>
            <ComboboxList>
              {(item) => (
                <ComboboxItem key={item.value} value={item}>
                  {item.label}
                </ComboboxItem>
              )}
            </ComboboxList>
          </ComboboxContent>
        </Combobox>
      </InputGroup>
      <InputGroup variant="subtle">
        <InputGroupAddon className="items-start">
          <AlignLeftIcon />
        </InputGroupAddon>
        <Textarea placeholder="Message" />
        <InputGroupSeparator />
        <InputGroupBar>
          <InputGroupText>Max. 1000 characters</InputGroupText>
          <Select>
            <SelectTrigger className="ml-auto w-auto mr-2" variant="plain">
              <SelectValue placeholder="Courier" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="jne">JNE</SelectItem>
              <SelectItem value="pos">POS</SelectItem>
              <SelectItem value="tiki">Tiki</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="tertiary-subtle">Send</Button>
        </InputGroupBar>
      </InputGroup>
      <Textarea placeholder="Your message" className="w-64" />
    </div>
  );
}
