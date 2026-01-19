import { Button } from 'components/selia/button';
import { toastManager } from 'components/selia/toast';

export default function ToastPromiseExample() {
  return (
    <Button
      variant="primary"
      onClick={() => {
        toastManager.promise(
          new Promise<string>((resolve, reject) => {
            const shouldSucceed = Math.random() > 0.3;
            setTimeout(() => {
              if (false) {
                resolve('Item added to cart');
              } else {
                reject(new Error('Failed to add item to cart'));
              }
            }, 2000);
          }),
          {
            loading: 'Adding to cart...',
            success: () => ({
              title: 'Item Added',
              description: 'Item has been added to your cart',
              actionProps: {
                children: 'View Cart',
                onClick: () => {
                  console.log('View Cart');
                },
              },
            }),
            error: () => ({
              title: 'Error',
              description: 'Failed to add item to cart',
            }),
          },
        );
      }}
    >
      Add to cart
    </Button>
  );
}
