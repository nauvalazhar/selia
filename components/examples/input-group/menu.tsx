import { Button } from 'components/selia/button';
import { Menu, MenuPopup, MenuItem, MenuTrigger } from 'components/selia/menu';
import { InputGroup, InputGroupAddon } from 'components/selia/input-group';
import { Input } from 'components/selia/input';
import { MoreHorizontalIcon } from 'lucide-react';

export default function InputGroupMenuExample() {
  return (
    <InputGroup className="w-full 2xl:w-8/12 xl:w-10/12">
      <Input placeholder="Message" />
      <InputGroupAddon align="end">
        <Menu>
          <MenuTrigger
            render={
              <Button variant="plain" size="xs" pill>
                <MoreHorizontalIcon />
              </Button>
            }
          />
          <MenuPopup>
            <MenuItem>Send Now</MenuItem>
            <MenuItem>Send Later</MenuItem>
            <MenuItem>Send to All</MenuItem>
          </MenuPopup>
        </Menu>
      </InputGroupAddon>
    </InputGroup>
  );
}
