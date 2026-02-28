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

export default function DrawerBottomExample() {
  return (
    <Drawer>
      <DrawerTrigger render={<Button>Open Bottom Sheet</Button>} />
      <DrawerPopup
        className={cn(
          '!fixed !inset-x-0 !right-auto !left-0 !top-auto !bottom-0 !w-full !max-w-none !rounded-t-2xl',
          'max-h-[80vh]'
        )}
      >
        <DrawerHeader className="border-b">
          <DrawerTitle>Choose an Action</DrawerTitle>
          <DrawerClose />
        </DrawerHeader>
        <DrawerBody>
          <DrawerDescription>Select one of the options below</DrawerDescription>
          <div className="space-y-2 mt-4">
            {[
              { icon: '✓', label: 'Approve Request', desc: 'Accept this action' },
              { icon: '✎', label: 'Edit Details', desc: 'Modify information' },
              { icon: '⊕', label: 'Add Comment', desc: 'Leave feedback' },
              { icon: '⌛', label: 'Postpone', desc: 'Defer until later' },
            ].map((action) => (
              <button
                key={action.label}
                className="w-full flex items-center gap-3 p-3.5 rounded-lg hover:bg-muted transition-colors text-left"
              >
                <span className="text-xl">{action.icon}</span>
                <div>
                  <div className="font-medium">{action.label}</div>
                  <div className="text-sm text-muted">{action.desc}</div>
                </div>
              </button>
            ))}
          </div>
        </DrawerBody>
        <DrawerFooter className="border-t">
          <DrawerClose render={<Button variant="secondary">Cancel</Button>} />
        </DrawerFooter>
      </DrawerPopup>
    </Drawer>
  );
}
