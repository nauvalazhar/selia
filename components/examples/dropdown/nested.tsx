import {
  Dropdown,
  DropdownContent,
  DropdownItem,
  DropdownSubmenu,
  DropdownSubmenuTrigger,
  DropdownTrigger,
  DropdownSeparator,
} from 'components/selia/dropdown';
import { Button } from 'components/selia/button';
import { ChevronDownIcon } from 'lucide-react';

export default function DropdownNestedExample() {
  return (
    <>
      <Dropdown>
        <DropdownTrigger
          render={
            <Button>
              Dropdown <ChevronDownIcon />
            </Button>
          }
        />
        <DropdownContent>
          <DropdownItem>Add to library</DropdownItem>
          <DropdownSubmenu>
            <DropdownSubmenuTrigger>Add to playlist</DropdownSubmenuTrigger>
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
    </>
  );
}
