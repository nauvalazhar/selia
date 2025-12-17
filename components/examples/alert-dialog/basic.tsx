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

export default function AlertDialogBasicExample() {
  return (
    <AlertDialog>
      <AlertDialogTrigger
        render={<Button variant="danger">Delete File</Button>}
      />
      <AlertDialogPopup>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete File</AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogBody>
          <AlertDialogDescription>
            Are you sure you want to delete this file?
          </AlertDialogDescription>
        </AlertDialogBody>
        <AlertDialogFooter>
          <AlertDialogClose>Cancel</AlertDialogClose>
          <AlertDialogClose
            render={<Button variant="danger">Delete File</Button>}
          />
        </AlertDialogFooter>
      </AlertDialogPopup>
    </AlertDialog>
  );
}
