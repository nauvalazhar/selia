'use client';

import { Button } from 'components/selia/button';
import {
  Drawer,
  DrawerBody,
  DrawerClose,
  DrawerDescription,
  DrawerHandle,
  DrawerPopup,
  DrawerTitle,
  DrawerTrigger,
} from 'components/selia/drawer';

const snapPoints = ['31rem', 1];

export default function DrawerSnapPointsExample() {
  return (
    <Drawer swipeDirection="down" snapPoints={snapPoints}>
      <DrawerTrigger render={<Button>Open Snap Drawer</Button>} />
      <DrawerPopup direction="bottom" className="max-w-lg">
        <div className="shrink-0 border-b border-drawer-border px-6 pt-3.5 pb-3 touch-none">
          <DrawerHandle className="mt-0 mb-2.5" />
          <DrawerTitle className="text-center">Snap Points</DrawerTitle>
        </div>
        <DrawerBody>
          <DrawerDescription className="text-center">
            Drag the sheet to snap between a compact peek and a near
            full-height view.
          </DrawerDescription>
          <div className="grid gap-3 pt-3" aria-hidden>
            {Array.from({ length: 20 }, (_, index) => (
              <div
                key={index}
                className="h-12 rounded-xl border border-drawer-border bg-accent"
              />
            ))}
          </div>
          <div className="flex items-center justify-end pt-3">
            <DrawerClose render={<Button variant="secondary">Close</Button>} />
          </div>
        </DrawerBody>
      </DrawerPopup>
    </Drawer>
  );
}
