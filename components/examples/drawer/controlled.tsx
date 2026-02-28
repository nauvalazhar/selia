'use client';

import { useState } from 'react';
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

export default function DrawerControlledExample() {
  const [open, setOpen] = useState(false);

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger render={<Button>Open Controlled Drawer</Button>} />
      <DrawerPopup>
        <DrawerHeader>
          <DrawerTitle>Drawer State</DrawerTitle>
          <DrawerClose />
        </DrawerHeader>
        <DrawerBody>
          <DrawerDescription>
            This drawer's state is managed externally using React state.
          </DrawerDescription>
          <div className="mt-4 p-4 bg-muted rounded-lg">
            <p className="text-sm">
              <strong>Open state:</strong> {open ? 'Open' : 'Closed'}
            </p>
            <p className="text-sm text-muted mt-2">
              You can control when the drawer opens/closes from your application.
            </p>
          </div>
        </DrawerBody>
        <DrawerFooter>
          <Button
            variant="secondary"
            onClick={() => setOpen(false)}
          >
            Close Drawer
          </Button>
          <Button onClick={() => setOpen(false)}>
            Confirm & Close
          </Button>
        </DrawerFooter>
      </DrawerPopup>
    </Drawer>
  );
}
