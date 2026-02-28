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
import { cn } from '#utils';

export default function DrawerLeftExample() {
  return (
    <Drawer>
      <DrawerTrigger render={<Button variant="secondary">Open Left Drawer</Button>} />
      <DrawerPopup
        className={cn(
          '!fixed !inset-y-0 !left-0 !right-auto !top-0 !w-full !max-w-md',
          'data-[starting-style]:-translate-x-full data-[ending-style]:-translate-x-full',
        )}
      >
        <DrawerHeader>
          <DrawerTitle>Navigation Menu</DrawerTitle>
          <DrawerClose />
        </DrawerHeader>
        <DrawerBody>
          <DrawerDescription>Select a page to navigate</DrawerDescription>
          <nav className="space-y-2 mt-4">
            {[
              { label: 'Dashboard', icon: '📊' },
              { label: 'Analytics', icon: '📈' },
              { label: 'Reports', icon: '📋' },
              { label: 'Settings', icon: '⚙️' },
              { label: 'Help', icon: '❓' },
            ].map((item) => (
              <button
                key={item.label}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-muted transition-colors text-left font-medium"
              >
                <span className="text-lg">{item.icon}</span>
                {item.label}
              </button>
            ))}
          </nav>
        </DrawerBody>
      </DrawerPopup>
    </Drawer>
  );
}
