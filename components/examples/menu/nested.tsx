import {
  Menu,
  MenuPopup,
  MenuItem,
  MenuSubmenu,
  MenuSubmenuTrigger,
  MenuTrigger,
  MenuSeparator,
  MenuSubPopup,
} from 'components/selia/menu';
import { Button } from 'components/selia/button';
import { ChevronDownIcon } from 'lucide-react';

export default function MenuNestedExample() {
  return (
    <>
      <Menu>
        <MenuTrigger
          render={
            <Button variant="secondary">
              Menu <ChevronDownIcon />
            </Button>
          }
        />
        <MenuPopup>
          <MenuItem>Add to library</MenuItem>
          <MenuSubmenu>
            <MenuSubmenuTrigger>Add to playlist</MenuSubmenuTrigger>
            <MenuSubPopup>
              <MenuItem>Recently added</MenuItem>
              <MenuItem>Recently played</MenuItem>
              <MenuSeparator />
              <MenuSubmenu>
                <MenuSubmenuTrigger>More</MenuSubmenuTrigger>
                <MenuSubPopup>
                  <MenuItem>Rock Playlist</MenuItem>
                  <MenuItem>Pop Playlist</MenuItem>
                  <MenuItem>Country Playlist</MenuItem>
                  <MenuItem>Indie Playlist</MenuItem>
                </MenuSubPopup>
              </MenuSubmenu>
            </MenuSubPopup>
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
