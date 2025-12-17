import {
  Menu,
  MenuPopup,
  MenuTrigger,
  MenuSeparator,
  MenuGroup,
  MenuGroupLabel,
  MenuRadioGroup,
  MenuRadioItem,
  MenuCheckboxItem,
} from 'components/selia/menu';
import { Button } from 'components/selia/button';
import { ChevronDownIcon } from 'lucide-react';

export default function MenuRadioExample() {
  return (
    <Menu>
      <MenuTrigger
        render={
          <Button variant="secondary">
            Menu <ChevronDownIcon />
          </Button>
        }
      />
      <MenuPopup className="min-w-40">
        <MenuGroup>
          <MenuGroupLabel>Sort By</MenuGroupLabel>
          <MenuRadioGroup defaultValue="name">
            <MenuRadioItem value="name">Name</MenuRadioItem>
            <MenuRadioItem value="date">Date</MenuRadioItem>
            <MenuRadioItem value="size">Size</MenuRadioItem>
          </MenuRadioGroup>
        </MenuGroup>
        <MenuSeparator />
        <MenuGroup>
          <MenuGroupLabel>Columns</MenuGroupLabel>
          <MenuCheckboxItem>Name</MenuCheckboxItem>
          <MenuCheckboxItem>Date</MenuCheckboxItem>
          <MenuCheckboxItem>Size</MenuCheckboxItem>
        </MenuGroup>
      </MenuPopup>
    </Menu>
  );
}
