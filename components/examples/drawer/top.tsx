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

export default function DrawerTopExample() {
  return (
    <Drawer swipeDirection="up">
      <DrawerTrigger render={<Button>Open Top Drawer</Button>} />
      <DrawerPopup direction="top" className="mx-auto max-w-lg">
        <DrawerHeader>
          <DrawerTitle>System Update</DrawerTitle>
        </DrawerHeader>
        <DrawerBody>
          <DrawerDescription>
            A new version is available. Update now to get the latest features and
            security improvements.
          </DrawerDescription>
        </DrawerBody>
        <DrawerFooter>
          <DrawerClose>Dismiss</DrawerClose>
          <DrawerClose render={<Button>Update Now</Button>} />
        </DrawerFooter>
      </DrawerPopup>
    </Drawer>
  );
}
