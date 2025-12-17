import { Button } from 'components/selia/button';
import { toastManager } from 'components/selia/toast';
import { anchoredToastManager } from 'components/selia/toast';
import { useRef, useState } from 'react';

export default function ToastBasicExample() {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [copied, setCopied] = useState(false);

  return (
    <>
      <Button
        variant="primary"
        onClick={() =>
          toastManager.add({
            title: 'Added to cart',
            description: 'Item has been added to your cart',
            type: 'success',
            actionProps: {
              children: 'View Cart',
              onClick: () => {
                console.log('View Cart');
              },
            },
          })
        }
      >
        Add to cart
      </Button>

      <Button
        ref={buttonRef}
        variant="secondary"
        onClick={() => {
          setCopied(true);

          anchoredToastManager.add({
            description: 'Copied',
            positionerProps: {
              anchor: buttonRef.current,
              sideOffset: 8,
            },
            data: {
              size: 'sm',
            },
            onClose() {
              setCopied(false);
            },
            timeout: 1500,
          });
        }}
        disabled={copied}
      >
        Copy Link
      </Button>
    </>
  );
}
