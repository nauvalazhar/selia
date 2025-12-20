import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogClose,
  AlertDialogPopup,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from 'components/selia/alert-dialog';
import {
  Dialog,
  DialogPopup,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
  DialogTrigger,
  DialogBody,
} from 'components/selia/dialog';
import { Button } from 'components/selia/button';
import { useState } from 'react';
import { Textarea } from 'components/selia/textarea';

export default function AlertDialogBasicExample() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [confirmationOpen, setConfirmationOpen] = useState(false);
  const [feedback, setFeedback] = useState('');

  return (
    <Dialog
      open={dialogOpen}
      onOpenChange={(open) => {
        if (!open && feedback) {
          setConfirmationOpen(true);
          return;
        }

        setFeedback('');
        setDialogOpen(open);
      }}
    >
      <DialogTrigger render={<Button>Feedback</Button>} />
      <DialogPopup>
        <DialogHeader>
          <DialogTitle>Feedback</DialogTitle>
        </DialogHeader>
        <DialogBody>
          <DialogDescription>Please provide your feedback.</DialogDescription>
          <Textarea
            placeholder="Enter your feedback"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          />
        </DialogBody>
        <DialogFooter>
          <DialogClose>Cancel</DialogClose>
          <Button onClick={() => setDialogOpen(false)}>Submit</Button>
        </DialogFooter>
      </DialogPopup>

      <AlertDialog open={confirmationOpen} onOpenChange={setConfirmationOpen}>
        <AlertDialogPopup>
          <AlertDialogHeader>
            <AlertDialogTitle>Discard Feedback?</AlertDialogTitle>
          </AlertDialogHeader>
          <AlertDialogBody>
            <AlertDialogDescription>
              Your feedback will be lost.
            </AlertDialogDescription>
          </AlertDialogBody>
          <AlertDialogFooter>
            <AlertDialogClose>Cancel</AlertDialogClose>
            <Button
              variant="danger"
              onClick={() => {
                setConfirmationOpen(false);
                setDialogOpen(false);
              }}
            >
              Discard
            </Button>
          </AlertDialogFooter>
        </AlertDialogPopup>
      </AlertDialog>
    </Dialog>
  );
}
