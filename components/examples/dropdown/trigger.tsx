import {
  Dropdown,
  DropdownContent,
  DropdownItem,
  DropdownTrigger,
  DropdownSeparator,
} from 'components/selia/dropdown';
import { Button } from 'components/selia/button';
import { ChevronDownIcon } from 'lucide-react';

export default function DropdownTriggerExample() {
  return (
    <>
      <Dropdown>
        <DropdownTrigger
          render={
            <Button variant="secondary">
              Dropdown <ChevronDownIcon />
            </Button>
          }
        />
        <DropdownContent>
          <DropdownItem>Add to library</DropdownItem>
          <DropdownItem>Add to queue</DropdownItem>
          <DropdownSeparator />
          <DropdownItem>Play next</DropdownItem>
          <DropdownItem>Play last</DropdownItem>
        </DropdownContent>
      </Dropdown>
    </>
  );
}
