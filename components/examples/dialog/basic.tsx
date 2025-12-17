import { Button } from 'components/selia/button';
import {
  Dialog,
  DialogBody,
  DialogClose,
  DialogPopup,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from 'components/selia/dialog';
import { Textarea } from 'components/selia/textarea';

export default function DialogBasicExample() {
  return (
    <Dialog>
      <DialogTrigger render={<Button>Open Dialog</Button>} />
      <DialogPopup>
        <DialogHeader>
          <DialogTitle>Feedback</DialogTitle>
        </DialogHeader>
        <DialogBody>
          <DialogDescription>Please provide your feedback.</DialogDescription>
          <Textarea placeholder="Enter your feedback" />
        </DialogBody>
        <DialogFooter>
          <DialogClose>Close</DialogClose>
          <DialogClose render={<Button>Send Feedback</Button>} />
        </DialogFooter>
      </DialogPopup>
    </Dialog>
  );
}
