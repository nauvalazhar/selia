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
import { Separator } from 'components/selia/separator';

export default function DrawerActionSheetExample() {
  return (
    <Drawer>
      <DrawerTrigger render={<Button>Open Actions</Button>} />
      <DrawerPopup
        className={cn(
          '!fixed !inset-x-0 !right-auto !left-0 !top-auto !bottom-0 !w-full !max-w-none',
          'max-h-fit rounded-t-2xl',
        )}
      >
        <DrawerHeader className="pb-2">
          <DrawerTitle>Choose an action</DrawerTitle>
        </DrawerHeader>
        <DrawerBody className="px-0 py-2">
          {[
            { label: 'Edit', icon: '✎', color: 'text-blue-600' },
            { label: 'Copy', icon: '📋', color: 'text-gray-600' },
            { label: 'Share', icon: '🔗', color: 'text-green-600' },
            { label: 'Archive', icon: '📦', color: 'text-orange-600' },
            { label: 'Delete', icon: '🗑️', color: 'text-red-600' },
          ].map((action, idx) => (
            <div key={action.label}>
              <button className="w-full flex items-center justify-center gap-3 px-6 py-3.5 hover:bg-muted transition-colors text-center font-medium">
                <span className="text-xl">{action.icon}</span>
                <span className={action.color}>{action.label}</span>
              </button>
              {idx < 4 && <Separator />}
            </div>
          ))}
        </DrawerBody>
        <DrawerFooter className="px-0 py-2 border-t">
          <DrawerClose render={<Button className="w-full" variant="secondary">Cancel</Button>} />
        </DrawerFooter>
      </DrawerPopup>
    </Drawer>
  );
}
