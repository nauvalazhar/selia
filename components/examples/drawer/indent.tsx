'use client';

import * as React from 'react';
import { Button } from 'components/selia/button';
import {
  Drawer,
  DrawerBody,
  DrawerClose,
  DrawerDescription,
  DrawerHandle,
  DrawerHeader,
  DrawerIndent,
  DrawerIndentBackground,
  DrawerPopup,
  DrawerProvider,
  DrawerTitle,
  DrawerTrigger,
} from 'components/selia/drawer';

export default function DrawerIndentExample() {
  const [portalContainer, setPortalContainer] =
    React.useState<HTMLDivElement | null>(null);

  return (
    <DrawerProvider>
      <div
        ref={setPortalContainer}
        className="relative w-full overflow-hidden"
      >
        <DrawerIndentBackground />
        <DrawerIndent className="min-h-[320px] border border-border p-4">
          <div className="flex min-h-[320px] items-center justify-center">
            <Drawer swipeDirection="down" modal={false}>
              <DrawerTrigger render={<Button>Open Drawer</Button>} />
              <DrawerPopup
                direction="bottom"
                className="max-w-lg"
                portalContainer={portalContainer}
              >
                <DrawerHandle />
                <DrawerHeader className="justify-center">
                  <DrawerTitle>Notifications</DrawerTitle>
                </DrawerHeader>
                <DrawerBody>
                  <DrawerDescription className="text-center">
                    You are all caught up. Good job!
                  </DrawerDescription>
                  <div className="flex justify-center pt-3">
                    <DrawerClose
                      render={<Button variant="secondary">Close</Button>}
                    />
                  </div>
                </DrawerBody>
              </DrawerPopup>
            </Drawer>
          </div>
        </DrawerIndent>
      </div>
    </DrawerProvider>
  );
}
