import { Button } from 'components/selia/button';
import {
  Drawer,
  DrawerBody,
  DrawerClose,
  DrawerPopup,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from 'components/selia/drawer';
import {
  Item,
  ItemContent,
  ItemTitle,
  ItemDescription,
} from 'components/selia/item';

export default function DrawerLeftExample() {
  return (
    <Drawer swipeDirection="left">
      <DrawerTrigger render={<Button>Open Left Drawer</Button>} />
      <DrawerPopup direction="left">
        <DrawerHeader>
          <DrawerTitle>Navigation</DrawerTitle>
        </DrawerHeader>
        <DrawerBody>
          <div className="space-y-1.5">
            <Item size="sm" variant="plain">
              <ItemContent>
                <ItemTitle>Dashboard</ItemTitle>
                <ItemDescription>Overview and analytics</ItemDescription>
              </ItemContent>
            </Item>
            <Item size="sm" variant="plain">
              <ItemContent>
                <ItemTitle>Projects</ItemTitle>
                <ItemDescription>Manage your projects</ItemDescription>
              </ItemContent>
            </Item>
            <Item size="sm" variant="plain">
              <ItemContent>
                <ItemTitle>Settings</ItemTitle>
                <ItemDescription>Account preferences</ItemDescription>
              </ItemContent>
            </Item>
          </div>
        </DrawerBody>
      </DrawerPopup>
    </Drawer>
  );
}
