import {
  Dropdown,
  DropdownContent,
  DropdownTrigger,
  DropdownSeparator,
  DropdownGroup,
  DropdownGroupLabel,
  DropdownRadioGroup,
  DropdownRadioItem,
  DropdownCheckboxItem,
} from 'components/selia/dropdown';
import { Button } from 'components/selia/button';
import { ChevronDownIcon } from 'lucide-react';

export default function DropdownRadioExample() {
  return (
    <Dropdown>
      <DropdownTrigger
        render={
          <Button variant="tertiary">
            Dropdown <ChevronDownIcon />
          </Button>
        }
      />
      <DropdownContent className="min-w-40">
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
  );
}
