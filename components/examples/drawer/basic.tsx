import { Button } from 'components/selia/button';
import {
  Drawer,
  DrawerBody,
  DrawerClose,
  DrawerPopup,
  DrawerDescription,
  DrawerFooter,
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

export default function DrawerBasicExample() {
  return (
    <Drawer>
      <DrawerTrigger render={<Button>Open Drawer</Button>} />
      <DrawerPopup>
        <DrawerHeader>
          <DrawerTitle>Notifications</DrawerTitle>
        </DrawerHeader>
        <DrawerBody>
          <DrawerDescription>
            You have 3 unread notifications. Review them below.
          </DrawerDescription>
          <div className="space-y-3 pt-3">
            <Item size="sm">
              <ItemContent>
                <ItemTitle>New comment on your post</ItemTitle>
                <ItemDescription>2 minutes ago</ItemDescription>
              </ItemContent>
            </Item>
            <Item size="sm">
              <ItemContent>
                <ItemTitle>Your report is ready</ItemTitle>
                <ItemDescription>1 hour ago</ItemDescription>
              </ItemContent>
            </Item>
            <Item size="sm">
              <ItemContent>
                <ItemTitle>Welcome to Selia</ItemTitle>
                <ItemDescription>2 days ago</ItemDescription>
              </ItemContent>
            </Item>
          </div>
        </DrawerBody>
        <DrawerFooter>
          <DrawerClose>Close</DrawerClose>
          <DrawerClose render={<Button>Mark all as read</Button>} />
        </DrawerFooter>
      </DrawerPopup>
    </Drawer>
  );
}
