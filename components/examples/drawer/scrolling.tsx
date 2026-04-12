import { Button } from 'components/selia/button';
import {
  Drawer,
  DrawerBody,
  DrawerClose,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerPopup,
  DrawerTitle,
  DrawerTrigger,
} from 'components/selia/drawer';
import {
  Item,
  ItemContent,
  ItemTitle,
  ItemDescription,
} from 'components/selia/item';

export default function DrawerScrollingExample() {
  return (
    <Drawer>
      <DrawerTrigger render={<Button>Open Scrollable Drawer</Button>} />
      <DrawerPopup>
        <DrawerHeader>
          <DrawerTitle>All Notifications</DrawerTitle>
        </DrawerHeader>
        <DrawerBody>
          <DrawerDescription>
            You have 20 notifications. Scroll to see them all.
          </DrawerDescription>
          <div className="space-y-2 pt-3">
            {Array.from({ length: 20 }, (_, i) => (
              <Item key={i} size="sm">
                <ItemContent>
                  <ItemTitle>Notification {i + 1}</ItemTitle>
                  <ItemDescription>
                    This is a notification message to test scrolling behavior.
                  </ItemDescription>
                </ItemContent>
              </Item>
            ))}
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
