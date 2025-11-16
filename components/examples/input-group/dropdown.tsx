import { Button } from 'components/selia/button';
import {
  Dropdown,
  DropdownContent,
  DropdownItem,
  DropdownTrigger,
} from 'components/selia/dropdown';
import { InputGroup, InputGroupAddon } from 'components/selia/input-group';
import { Input } from 'components/selia/input';
import { ChevronDownIcon, MoreHorizontalIcon } from 'lucide-react';

export default function InputGroupDropdownExample() {
  return (
    <InputGroup className="w-full 2xl:w-8/12 xl:w-10/12">
      <Input placeholder="Message" />
      <InputGroupAddon align="end">
        <Dropdown>
          <DropdownTrigger
            render={
              <Button variant="tertiary-plain" size="xs" pill>
                <MoreHorizontalIcon />
              </Button>
            }
          />
          <DropdownContent>
            <DropdownItem>Send Now</DropdownItem>
            <DropdownItem>Send Later</DropdownItem>
            <DropdownItem>Send to All</DropdownItem>
          </DropdownContent>
        </Dropdown>
      </InputGroupAddon>
    </InputGroup>
  );
}
