import {
  Menu,
  MenuPopup,
  MenuItem,
  MenuTrigger,
  MenuSeparator,
  MenuSubmenu,
  MenuSubmenuTrigger,
  MenuSubPopup,
} from 'components/selia/menu';
import { Button } from 'components/selia/button';
import {
  ChevronDownIcon,
  ChevronRightIcon,
  Laptop2Icon,
  MoonIcon,
  PaletteIcon,
  SunIcon,
} from 'lucide-react';

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
        <MenuSeparator />
        <MenuSubmenu>
          <MenuSubmenuTrigger>
            <PaletteIcon />
            Custom
          </MenuSubmenuTrigger>
          <MenuSubPopup size="compact">
            <MenuItem>
              <PaletteIcon />
              Tokyo Night
            </MenuItem>
            <MenuItem>
              <PaletteIcon />
              Dracula
            </MenuItem>
            <MenuItem>
              <PaletteIcon />
              Nord
            </MenuItem>
            <MenuItem>
              <PaletteIcon />
              Gruvbox
            </MenuItem>
            <MenuItem>
              <PaletteIcon />
              Catppuccin
            </MenuItem>
          </MenuSubPopup>
        </MenuSubmenu>
      </MenuPopup>
    </Menu>
  );
}
