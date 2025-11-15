import { Button } from 'components/selia/button';
import { toast } from 'components/selia/toast';

export default function ToastBasicExample() {
  return (
    <Button
      variant="primary"
      onClick={() =>
        toast.success('Added to cart', {
          description: 'You have added 1 item to your cart',
        })
      }
    >
      Add to cart
    </Button>
  );
}
