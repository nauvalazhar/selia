import { Button } from 'components/selia/button';
import {
  Drawer,
  DrawerBody,
  DrawerClose,
  DrawerPopup,
  DrawerDescription,
  DrawerFooter,
  DrawerHandle,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from 'components/selia/drawer';

export default function DrawerBottomExample() {
  return (
    <Drawer swipeDirection="down">
      <DrawerTrigger render={<Button>Open Bottom Drawer</Button>} />
      <DrawerPopup direction="bottom" className="mx-auto max-w-lg">
        <DrawerHandle />
        <DrawerHeader>
          <DrawerTitle>Confirm Action</DrawerTitle>
        </DrawerHeader>
        <DrawerBody>
          <DrawerDescription>
            Are you sure you want to proceed? This action cannot be undone.
          </DrawerDescription>
        </DrawerBody>
        <DrawerFooter>
          <DrawerClose>Cancel</DrawerClose>
          <DrawerClose render={<Button>Confirm</Button>} />
        </DrawerFooter>
      </DrawerPopup>
    </Drawer>
  );
}
