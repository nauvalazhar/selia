import {
  Menu,
  MenuPopup,
  MenuItem,
  MenuTrigger,
  MenuSeparator,
} from 'components/selia/menu';
import { Button } from 'components/selia/button';
import { ChevronDownIcon, Laptop2Icon, MoonIcon, SunIcon } from 'lucide-react';

export default function MenuCompactExample() {
  return (
    <Menu>
      <MenuTrigger
        render={
          <Button variant="secondary" size="sm">
            Theme <ChevronDownIcon />
          </Button>
        }
      />
      <MenuPopup size="compact">
        <MenuItem>
          <SunIcon />
          Light
        </MenuItem>
        <MenuItem>
          <MoonIcon />
          Dark
        </MenuItem>
        <MenuItem>
          <Laptop2Icon />
          System
        </MenuItem>
      </MenuPopup>
    </Menu>
  );
}
