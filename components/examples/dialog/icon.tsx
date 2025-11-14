import { Button } from 'components/selia/button';
import {
  Dialog,
  DialogBody,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from 'components/selia/dialog';
import { IconBox } from 'components/selia/icon-box';
import { Textarea } from 'components/selia/textarea';
import { MessageSquareIcon } from 'lucide-react';

export default function DialogIconExample() {
  return (
    <Dialog>
      <DialogTrigger render={<Button>Open Dialog</Button>} />
      <DialogContent>
        <DialogHeader>
          <IconBox variant="secondary">
            <MessageSquareIcon />
          </IconBox>
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
      </DialogContent>
    </Dialog>
  );
}
