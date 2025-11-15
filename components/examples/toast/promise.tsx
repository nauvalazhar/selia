import { Button } from 'components/selia/button';
import { toast } from 'components/selia/toast';

export default function ToastPromiseExample() {
  return (
    <Button
      variant="primary"
      onClick={() => {
        const promise = new Promise<{ name: string }>((resolve) => {
          setTimeout(() => {
            resolve({
              name: 'MacBook Pro',
            });
          }, 1000);
        });

        toast.promise(promise, {
          loading: 'Adding to cart...',
          success: (data: { name: string }) => {
            return {
              message: 'Added to cart',
              description: `You have added ${data.name} to your cart!`,
            };
          },
        });
      }}
    >
      Add to cart
    </Button>
  );
}
