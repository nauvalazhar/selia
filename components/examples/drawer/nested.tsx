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

export default function DrawerNestedExample() {
  const [showNested, setShowNested] = useState(false);

  return (
    <Drawer>
      <DrawerTrigger render={<Button>Open Parent Drawer</Button>} />
      <DrawerPopup>
        <DrawerHeader>
          <DrawerTitle>Parent Drawer</DrawerTitle>
          <DrawerClose />
        </DrawerHeader>
        <DrawerBody>
          <DrawerDescription>
            This drawer can contain nested drawers. Click the button below to open a nested drawer.
          </DrawerDescription>
          <div className="mt-6">
            <Drawer open={showNested} onOpenChange={setShowNested}>
              <DrawerTrigger render={<Button className="w-full">Open Nested Drawer</Button>} />
              <DrawerPopup>
                <DrawerHeader>
                  <DrawerTitle>Nested Drawer</DrawerTitle>
                  <DrawerClose />
                </DrawerHeader>
                <DrawerBody>
                  <DrawerDescription>
                    You can stack multiple drawers for complex workflows.
                  </DrawerDescription>
                  <div className="mt-4 p-3 bg-muted rounded-lg">
                    <p className="text-sm font-medium">This is a nested drawer</p>
                    <p className="text-xs text-muted mt-1">
                      It appears on top of the parent drawer. Close this to return to the parent.
                    </p>
                  </div>
                </DrawerBody>
                <DrawerFooter>
                  <Button
                    variant="secondary"
                    onClick={() => setShowNested(false)}
                  >
                    Close Nested
                  </Button>
                </DrawerFooter>
              </DrawerPopup>
            </Drawer>
          </div>
        </DrawerBody>
        <DrawerFooter>
          <DrawerClose render={<Button variant="secondary">Close</Button>} />
        </DrawerFooter>
      </DrawerPopup>
    </Drawer>
  );
}
