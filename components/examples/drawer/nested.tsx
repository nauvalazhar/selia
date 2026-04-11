import { Button } from 'components/selia/button';
import {
  Drawer,
  DrawerBody,
  DrawerClose,
  DrawerDescription,
  DrawerHandle,
  DrawerHeader,
  DrawerPopup,
  DrawerTitle,
  DrawerTrigger,
} from 'components/selia/drawer';

export default function DrawerNestedExample() {
  return (
    <Drawer swipeDirection="down">
      <DrawerTrigger render={<Button>Open Drawer Stack</Button>} />
      <DrawerPopup direction="bottom" className="max-w-lg">
        <DrawerHandle />
        <DrawerHeader className="justify-center">
          <DrawerTitle>Account</DrawerTitle>
        </DrawerHeader>
        <DrawerBody>
          <DrawerDescription className="text-center">
            Nested drawers stack visually, while each remains independently
            focus managed.
          </DrawerDescription>

          <div className="flex items-center justify-end gap-1.5 pt-3">
            <div className="mr-auto">
              <Drawer swipeDirection="down">
                <DrawerTrigger
                  render={
                    <Button variant="plain" className="text-primary">
                      Security settings
                    </Button>
                  }
                />
                <DrawerPopup direction="bottom" className="max-w-lg">
                  <DrawerHandle />
                  <DrawerHeader className="justify-center">
                    <DrawerTitle>Security</DrawerTitle>
                  </DrawerHeader>
                  <DrawerBody>
                    <DrawerDescription className="text-center">
                      Review sign-in activity and update your security
                      preferences.
                    </DrawerDescription>

                    <ul className="list-disc pl-5 text-muted space-y-1 pt-3">
                      <li>Passkeys enabled</li>
                      <li>2FA via authenticator app</li>
                      <li>3 signed-in devices</li>
                    </ul>

                    <div className="flex items-center justify-end gap-1.5 pt-3">
                      <div className="mr-auto">
                        <Drawer swipeDirection="down">
                          <DrawerTrigger
                            render={
                              <Button variant="plain" className="text-primary">
                                Advanced options
                              </Button>
                            }
                          />
                          <DrawerPopup direction="bottom" className="max-w-lg">
                            <DrawerHandle />
                            <DrawerHeader className="justify-center">
                              <DrawerTitle>Advanced</DrawerTitle>
                            </DrawerHeader>
                            <DrawerBody>
                              <DrawerDescription className="text-center">
                                This drawer is taller to demonstrate
                                variable-height stacking.
                              </DrawerDescription>

                              <div className="flex justify-end pt-3">
                                <DrawerClose render={<Button>Done</Button>} />
                              </div>
                            </DrawerBody>
                          </DrawerPopup>
                        </Drawer>
                      </div>
                      <DrawerClose>Close</DrawerClose>
                    </div>
                  </DrawerBody>
                </DrawerPopup>
              </Drawer>
            </div>
            <DrawerClose>Close</DrawerClose>
          </div>
        </DrawerBody>
      </DrawerPopup>
    </Drawer>
  );
}
