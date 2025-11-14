import {
  Dropdown,
  DropdownContent,
  DropdownItem,
  DropdownSubmenu,
  DropdownSubmenuTrigger,
  DropdownTrigger,
  DropdownSeparator,
} from 'components/selia/dropdown';
import {
  CameraIcon,
  ChevronDownIcon,
  FolderIcon,
  Layers2Icon,
  VideoIcon,
} from 'lucide-react';
import { Button } from 'components/selia/button';

export default function DropdownIconExample() {
  return (
    <Dropdown>
      <DropdownTrigger
        render={
          <Button variant="secondary">
            Dropdown <ChevronDownIcon />
          </Button>
        }
      />
      <DropdownContent>
        <DropdownItem>
          <FolderIcon />
          Upload File
        </DropdownItem>
        <DropdownSubmenu>
          <DropdownSubmenuTrigger>
            <Layers2Icon />
            Select Project
          </DropdownSubmenuTrigger>
          <DropdownContent>
            <DropdownItem>Acme Inc.</DropdownItem>
            <DropdownItem>Widgets Corp.</DropdownItem>
            <DropdownItem>Demo Project</DropdownItem>
            <DropdownSeparator />
            <DropdownItem>New Project</DropdownItem>
          </DropdownContent>
        </DropdownSubmenu>
        <DropdownItem>
          <CameraIcon />
          Screenshot
        </DropdownItem>
        <DropdownItem>
          <VideoIcon />
          Webcam
        </DropdownItem>
      </DropdownContent>
    </Dropdown>
  );
}
