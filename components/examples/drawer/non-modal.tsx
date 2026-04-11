import { Button } from 'components/selia/button';
import {
  Drawer,
  DrawerBody,
  DrawerClose,
  DrawerDescription,
  DrawerHeader,
  DrawerPopup,
  DrawerTitle,
  DrawerTrigger,
} from 'components/selia/drawer';

export default function DrawerNonModalExample() {
  return (
    <Drawer modal={false} disablePointerDismissal>
      <DrawerTrigger render={<Button>Open Non-Modal Drawer</Button>} />
      <DrawerPopup backdrop={false}>
        <DrawerHeader>
          <DrawerTitle>Non-Modal Drawer</DrawerTitle>
        </DrawerHeader>
        <DrawerBody>
          <DrawerDescription>
            This drawer does not trap focus and ignores outside clicks. Use the
            close button or swipe to dismiss it.
          </DrawerDescription>
          <div className="flex justify-end pt-3">
            <DrawerClose render={<Button variant="secondary">Close</Button>} />
          </div>
        </DrawerBody>
      </DrawerPopup>
    </Drawer>
  );
}
