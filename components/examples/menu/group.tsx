import {
  Menu,
  MenuPopup,
  MenuItem,
  MenuSubmenu,
  MenuSubmenuTrigger,
  MenuTrigger,
  MenuSeparator,
  MenuGroup,
  MenuGroupLabel,
  MenuRadioGroup,
  MenuRadioItem,
} from 'components/selia/menu';
import { Button } from 'components/selia/button';
import {
  ChevronDownIcon,
  UserIcon,
  RocketIcon,
  Settings2Icon,
} from 'lucide-react';
import { Kbd } from 'components/selia/kbd';

export default function MenuGroupExample() {
  return (
    <Menu>
      <MenuTrigger
        render={
          <Button variant="tertiary">
            Menu <ChevronDownIcon />
          </Button>
        }
      />
      <MenuPopup className="min-w-40">
        <MenuGroup>
          <MenuGroupLabel>Account</MenuGroupLabel>
          <MenuItem>
            <UserIcon />
            Profile
          </MenuItem>
          <MenuItem>
            <RocketIcon />
            Upgrade Plan
          </MenuItem>
          <MenuItem>
            <Settings2Icon />
            Settings
          </MenuItem>
        </MenuGroup>
        <MenuSeparator />
        <MenuGroup>
          <MenuGroupLabel>Appearances</MenuGroupLabel>
          <MenuSubmenu>
            <MenuSubmenuTrigger>Theme</MenuSubmenuTrigger>
            <MenuPopup>
              <MenuItem>Light</MenuItem>
              <MenuItem>Dark</MenuItem>
              <MenuItem>System</MenuItem>
            </MenuPopup>
          </MenuSubmenu>
          <MenuItem>
            Toggle Sidebar
            <Kbd className="ml-auto">⌘ B</Kbd>
          </MenuItem>
          <MenuSubmenu>
            <MenuSubmenuTrigger>Sidebar Position</MenuSubmenuTrigger>
            <MenuPopup>
              <MenuRadioGroup defaultValue="left">
                <MenuRadioItem value="left">Left</MenuRadioItem>
                <MenuRadioItem value="right">Right</MenuRadioItem>
              </MenuRadioGroup>
            </MenuPopup>
          </MenuSubmenu>
        </MenuGroup>
        <MenuSeparator />
        <MenuItem className="text-danger">
          Quit App
          <Kbd className="ml-auto">⌘ Q</Kbd>
        </MenuItem>
      </MenuPopup>
    </Menu>
  );
}
