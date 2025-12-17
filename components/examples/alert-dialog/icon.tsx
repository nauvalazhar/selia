import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogClose,
  AlertDialogPopup,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from 'components/selia/alert-dialog';
import { Button } from 'components/selia/button';
import { IconBox } from 'components/selia/icon-box';
import { Trash2Icon } from 'lucide-react';

export default function AlertDialogBasicExample() {
  return (
    <AlertDialog>
      <AlertDialogTrigger render={<Button variant="danger">Delete</Button>} />
      <AlertDialogPopup>
        <AlertDialogHeader>
          <IconBox variant="danger">
            <Trash2Icon />
          </IconBox>
          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogBody>
          <AlertDialogDescription>
            This action cannot be undone.
          </AlertDialogDescription>
        </AlertDialogBody>
        <AlertDialogFooter>
          <AlertDialogClose>Cancel</AlertDialogClose>
          <AlertDialogClose render={<Button variant="danger">Delete</Button>} />
        </AlertDialogFooter>
      </AlertDialogPopup>
    </AlertDialog>
  );
}
