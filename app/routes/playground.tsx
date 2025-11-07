import { Button } from 'components/selia/button';
import {
  Dropdown,
  DropdownArrow,
  DropdownCheckboxItem,
  DropdownContent,
  DropdownGroup,
  DropdownGroupLabel,
  DropdownItem,
  DropdownRadioGroup,
  DropdownRadioItem,
  DropdownSeparator,
  DropdownSubmenu,
  DropdownSubmenuTrigger,
  DropdownTrigger,
} from 'components/selia/dropdown';
import { Kbd } from 'components/selia/kbd';
import {
  CameraIcon,
  ChevronDownIcon,
  FolderIcon,
  Layers2Icon,
  PlusIcon,
  RocketIcon,
  Settings2Icon,
  UserIcon,
  VideoIcon,
} from 'lucide-react';

export default function Playground() {
  return (
    <div className="flex items-center justify-center h-screen gap-4">
      <Dropdown>
        <DropdownTrigger
          render={
            <Button>
              Dropdown <ChevronDownIcon />
            </Button>
          }
        />
        <DropdownContent sideOffset={8}>
          <DropdownArrow />
          <DropdownItem>Add to library</DropdownItem>
          <DropdownSubmenu>
            <DropdownSubmenuTrigger
              render={<DropdownItem>Add to playlist</DropdownItem>}
            />
            <DropdownContent>
              <DropdownItem>Recently added</DropdownItem>
              <DropdownItem>Recently played</DropdownItem>
              <DropdownItem>Rock Playlist</DropdownItem>
            </DropdownContent>
          </DropdownSubmenu>
          <DropdownItem>Add to queue</DropdownItem>
          <DropdownSeparator />
          <DropdownItem>Play next</DropdownItem>
          <DropdownItem>Play last</DropdownItem>
        </DropdownContent>
      </Dropdown>

      <Dropdown>
        <DropdownTrigger
          render={
            <Button variant="secondary">
              Dropdown <ChevronDownIcon />
            </Button>
          }
        />
        <DropdownContent sideOffset={8}>
          <DropdownArrow />
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

      <Dropdown>
        <DropdownTrigger
          render={
            <Button variant="tertiary">
              Dropdown <ChevronDownIcon />
            </Button>
          }
        />
        <DropdownContent sideOffset={8} className="min-w-40">
          <DropdownArrow />
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

      <Dropdown>
        <DropdownTrigger
          render={
            <Button variant="tertiary">
              Dropdown <ChevronDownIcon />
            </Button>
          }
        />
        <DropdownContent sideOffset={8} className="min-w-40">
          <DropdownArrow />
          <DropdownGroup>
            <DropdownGroupLabel>Sort By</DropdownGroupLabel>
            <DropdownRadioGroup defaultValue="name">
              <DropdownRadioItem value="name">Name</DropdownRadioItem>
              <DropdownRadioItem value="date">Date</DropdownRadioItem>
              <DropdownRadioItem value="size">Size</DropdownRadioItem>
            </DropdownRadioGroup>
          </DropdownGroup>
          <DropdownSeparator />
          <DropdownGroup>
            <DropdownGroupLabel>Columns</DropdownGroupLabel>
            <DropdownCheckboxItem>Name</DropdownCheckboxItem>
            <DropdownCheckboxItem>Date</DropdownCheckboxItem>
            <DropdownCheckboxItem>Size</DropdownCheckboxItem>
          </DropdownGroup>
        </DropdownContent>
      </Dropdown>
    </div>
  );
}
