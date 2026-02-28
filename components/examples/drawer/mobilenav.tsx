import { Button } from 'components/selia/button';
import {
  Drawer,
  DrawerBody,
  DrawerClose,
  DrawerPopup,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from 'components/selia/drawer';
import { cn } from '#utils';
import { XIcon } from 'lucide-react';

export default function DrawerMobileNavExample() {
  const navItems = [
    { label: 'Home', icon: '🏠' },
    { label: 'Products', icon: '📦' },
    { label: 'Services', icon: '🔧' },
    { label: 'About', icon: 'ℹ️' },
    { label: 'Contact', icon: '📞' },
  ];

  const socialLinks = [
    { label: 'Twitter', icon: '𝕏' },
    { label: 'GitHub', icon: '🐙' },
    { label: 'LinkedIn', icon: '💼' },
  ];

  return (
    <Drawer>
      <DrawerTrigger render={<Button>≡ Menu</Button>} />
      <DrawerPopup
        className={cn(
          '!fixed !inset-y-0 !left-0 !right-auto !top-0 !w-full !max-w-xs',
          'data-[starting-style]:-translate-x-full data-[ending-style]:-translate-x-full',
        )}
      >
        <DrawerHeader className="border-b flex items-center justify-between">
          <DrawerTitle>Navigation</DrawerTitle>
          <DrawerClose render={<XIcon className="size-5" />} />
        </DrawerHeader>
        <DrawerBody className="px-0 py-4">
          <nav className="space-y-1">
            {navItems.map((item) => (
              <button
                key={item.label}
                className="w-full flex items-center gap-3 px-6 py-3 hover:bg-muted transition-colors text-left font-medium"
              >
                <span className="text-lg">{item.icon}</span>
                {item.label}
              </button>
            ))}
          </nav>
        </DrawerBody>
        <DrawerFooter className="!flex-col gap-4 border-t">
          <div className="w-full">
            <p className="text-xs font-semibold text-muted mb-3">FOLLOW US</p>
            <div className="flex gap-2">
              {socialLinks.map((link) => (
                <button
                  key={link.label}
                  className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-muted rounded-lg hover:bg-muted/80 transition-colors text-sm font-medium"
                >
                  <span>{link.icon}</span>
                  <span className="hidden sm:inline">{link.label}</span>
                </button>
              ))}
            </div>
          </div>
          <DrawerClose render={<Button className="w-full">Close</Button>} />
        </DrawerFooter>
      </DrawerPopup>
    </Drawer>
  );
}
