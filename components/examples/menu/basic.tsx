import {
  Menu,
  MenuPopup,
  MenuItem,
  MenuTrigger,
  MenuSeparator,
} from 'components/selia/menu';
import { Button } from 'components/selia/button';
import { ChevronDownIcon } from 'lucide-react';

export default function MenuExample() {
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
          <MenuItem>Add to queue</MenuItem>
          <MenuSeparator />
          <MenuItem>Play next</MenuItem>
          <MenuItem>Play last</MenuItem>
        </MenuPopup>
      </Menu>
    </>
  );
}
