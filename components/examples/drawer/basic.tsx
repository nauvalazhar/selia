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
import { Label } from 'components/selia/label';
import { Input } from 'components/selia/input';

export default function DrawerBasicExample() {
  return (
    <Drawer>
      <DrawerTrigger render={<Button>Open Drawer</Button>} />
      <DrawerPopup>
        <DrawerHeader>
          <DrawerTitle>Edit Profile</DrawerTitle>
          <DrawerClose />
        </DrawerHeader>
        <DrawerBody>
          <DrawerDescription>Update your profile information.</DrawerDescription>
          <div className="space-y-4 mt-4">
            <div>
              <Label>Full Name</Label>
              <Input placeholder="John Doe" className="mt-1.5" />
            </div>
            <div>
              <Label>Email</Label>
              <Input type="email" placeholder="john@example.com" className="mt-1.5" />
            </div>
          </div>
        </DrawerBody>
        <DrawerFooter>
          <Button variant="secondary">Cancel</Button>
          <Button>Save Profile</Button>
        </DrawerFooter>
      </DrawerPopup>
    </Drawer>
  );
}
