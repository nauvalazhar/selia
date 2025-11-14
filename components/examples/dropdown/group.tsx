import {
  Dropdown,
  DropdownContent,
  DropdownItem,
  DropdownSubmenu,
  DropdownSubmenuTrigger,
  DropdownTrigger,
  DropdownSeparator,
  DropdownGroup,
  DropdownGroupLabel,
  DropdownRadioGroup,
  DropdownRadioItem,
} from 'components/selia/dropdown';
import { Button } from 'components/selia/button';
import {
  ChevronDownIcon,
  UserIcon,
  RocketIcon,
  Settings2Icon,
} from 'lucide-react';
import { Kbd } from 'components/selia/kbd';

export default function DropdownGroupExample() {
  return (
    <Dropdown>
      <DropdownTrigger
        render={
          <Button variant="tertiary">
            Dropdown <ChevronDownIcon />
          </Button>
        }
      />
      <DropdownContent className="min-w-40">
        <DropdownGroup>
          <DropdownGroupLabel>Account</DropdownGroupLabel>
          <DropdownItem>
            <UserIcon />
            Profile
          </DropdownItem>
          <DropdownItem>
            <RocketIcon />
            Upgrade Plan
          </DropdownItem>
          <DropdownItem>
            <Settings2Icon />
            Settings
          </DropdownItem>
        </DropdownGroup>
        <DropdownSeparator />
        <DropdownGroup>
          <DropdownGroupLabel>Appearances</DropdownGroupLabel>
          <DropdownSubmenu>
            <DropdownSubmenuTrigger>Theme</DropdownSubmenuTrigger>
            <DropdownContent>
              <DropdownItem>Light</DropdownItem>
              <DropdownItem>Dark</DropdownItem>
              <DropdownItem>System</DropdownItem>
            </DropdownContent>
          </DropdownSubmenu>
          <DropdownItem>
            Toggle Sidebar
            <Kbd className="ml-auto">⌘ B</Kbd>
          </DropdownItem>
          <DropdownSubmenu>
            <DropdownSubmenuTrigger>Sidebar Position</DropdownSubmenuTrigger>
            <DropdownContent>
              <DropdownRadioGroup defaultValue="left">
                <DropdownRadioItem value="left">Left</DropdownRadioItem>
                <DropdownRadioItem value="right">Right</DropdownRadioItem>
              </DropdownRadioGroup>
            </DropdownContent>
          </DropdownSubmenu>
        </DropdownGroup>
        <DropdownSeparator />
        <DropdownItem className="text-destructive">
          Quit App
          <Kbd className="ml-auto">⌘ Q</Kbd>
        </DropdownItem>
      </DropdownContent>
    </Dropdown>
  );
}
