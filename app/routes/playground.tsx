import { Button } from 'components/selia/button';
import {
  Menu,
  MenuItem,
  MenuPopup,
  MenuSeparator,
  MenuSubmenu,
  MenuSubmenuTrigger,
  MenuSubPopup,
  MenuTrigger,
} from 'components/selia/menu';
import { Menubar } from 'components/selia/menubar';

export default function Playground() {
  return (
    <Menubar>
      <Menu>
        <MenuTrigger
          render={
            <Button size="xs" variant="plain">
              File
            </Button>
          }
        />
        <MenuPopup>
          <MenuItem>New File</MenuItem>
          <MenuItem>Open</MenuItem>
          <MenuItem>Save</MenuItem>
          <MenuSubmenu>
            <MenuSubmenuTrigger render={<MenuItem>Export</MenuItem>} />
            <MenuSubPopup>
              <MenuItem>PNG</MenuItem>
              <MenuItem>JPG</MenuItem>
              <MenuItem>PDF</MenuItem>
            </MenuSubPopup>
          </MenuSubmenu>
          <MenuSeparator />
          <MenuItem>Exit App</MenuItem>
        </MenuPopup>
      </Menu>
      <Menu>
        <MenuTrigger
          render={
            <Button size="xs" variant="plain">
              Edit
            </Button>
          }
        />
        <MenuPopup>
          <MenuItem>Cut</MenuItem>
          <MenuItem>Copy</MenuItem>
          <MenuItem>Paste</MenuItem>
        </MenuPopup>
      </Menu>
      <Menu>
        <MenuTrigger
          render={
            <Button size="xs" variant="plain">
              View
            </Button>
          }
        />
        <MenuPopup>
          <MenuItem>Zoom In</MenuItem>
          <MenuItem>Zoom Out</MenuItem>
          <MenuSubmenu>
            <MenuSubmenuTrigger render={<MenuItem>Layout</MenuItem>} />
            <MenuSubPopup>
              <MenuItem>Single Page</MenuItem>
              <MenuItem>Two Pages</MenuItem>
              <MenuItem>Continous</MenuItem>
            </MenuSubPopup>
          </MenuSubmenu>
          <MenuSeparator />
          <MenuItem>Full Screen</MenuItem>
        </MenuPopup>
      </Menu>
    </Menubar>
  );
}
