import {
  Menu,
  MenuPopup,
  MenuItem,
  MenuSubmenu,
  MenuSubmenuTrigger,
  MenuTrigger,
  MenuSeparator,
} from 'components/selia/menu';
import { Button } from 'components/selia/button';
import { ChevronDownIcon } from 'lucide-react';

export default function MenuNestedExample() {
  return (
    <>
      <Menu>
        <MenuTrigger
          render={
            <Button>
              Menu <ChevronDownIcon />
            </Button>
          }
        />
        <MenuPopup>
          <MenuItem>Add to library</MenuItem>
          <MenuSubmenu>
            <MenuSubmenuTrigger>Add to playlist</MenuSubmenuTrigger>
            <MenuPopup>
              <MenuItem>Recently added</MenuItem>
              <MenuItem>Recently played</MenuItem>
              <MenuItem>Rock Playlist</MenuItem>
            </MenuPopup>
          </MenuSubmenu>
          <MenuItem>Add to queue</MenuItem>
          <MenuSeparator />
          <MenuItem>Play next</MenuItem>
          <MenuItem>Play last</MenuItem>
        </MenuPopup>
      </Menu>
    </>
  );
}
