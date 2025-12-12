import {
  Menu,
  MenuPopup,
  MenuItem,
  MenuSubmenu,
  MenuSubmenuTrigger,
  MenuTrigger,
  MenuSeparator,
} from 'components/selia/menu';
import {
  CameraIcon,
  ChevronDownIcon,
  FolderIcon,
  Layers2Icon,
  VideoIcon,
} from 'lucide-react';
import { Button } from 'components/selia/button';

export default function MenuIconExample() {
  return (
    <Menu>
      <MenuTrigger
        render={
          <Button variant="secondary">
            Menu <ChevronDownIcon />
          </Button>
        }
      />
      <MenuPopup>
        <MenuItem>
          <FolderIcon />
          Upload File
        </MenuItem>
        <MenuSubmenu>
          <MenuSubmenuTrigger>
            <Layers2Icon />
            Select Project
          </MenuSubmenuTrigger>
          <MenuPopup>
            <MenuItem>Acme Inc.</MenuItem>
            <MenuItem>Widgets Corp.</MenuItem>
            <MenuItem>Demo Project</MenuItem>
            <MenuSeparator />
            <MenuItem>New Project</MenuItem>
          </MenuPopup>
        </MenuSubmenu>
        <MenuItem>
          <CameraIcon />
          Screenshot
        </MenuItem>
        <MenuItem>
          <VideoIcon />
          Webcam
        </MenuItem>
      </MenuPopup>
    </Menu>
  );
}
