import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogClose,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from 'components/selia/alert-dialog';
import { Button } from 'components/selia/button';
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxSearch,
  ComboboxTrigger,
  ComboboxValue,
} from 'components/selia/combobox';
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
import {
  Dropdown,
  DropdownContent,
  DropdownItem,
  DropdownTrigger,
} from 'components/selia/dropdown';
import { IconBox } from 'components/selia/icon-box';
import { Input } from 'components/selia/input';
import { Slider, SliderThumb } from 'components/selia/slider';
import { Switch } from 'components/selia/switch';
import { Textarea } from 'components/selia/textarea';
import {
  ChevronDownIcon,
  MessageCircleIcon,
  Trash2Icon,
  TriangleAlertIcon,
  UsersIcon,
} from 'lucide-react';
import { useRef, useState } from 'react';

const items = [
  { value: 'pink-floyd', label: 'Pink Floyd' },
  { value: 'the-beatles', label: 'The Beatles' },
  { value: 'led-zeppelin', label: 'Led Zeppelin' },
  { value: 'queen', label: 'Queen' },
  { value: 'oasis', label: 'Oasis' },
  { value: 'blur', label: 'Blur' },
];

export default function Playground() {
  const [open, setOpen] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [confirmation, setConfirmation] = useState(false);
  const [progress, setProgress] = useState(false);

  return (
    <div className="flex items-center justify-center h-screen gap-4">
      <AlertDialog>
        <AlertDialogTrigger
          render={<Button variant="destructive">Delete</Button>}
        />
        <AlertDialogContent className="max-w-md w-full">
          <AlertDialogHeader>
            <IconBox variant="destructive">
              <Trash2Icon />
            </IconBox>
            <AlertDialogTitle>Delete Item</AlertDialogTitle>
          </AlertDialogHeader>
          <AlertDialogBody>
            <AlertDialogDescription>
              Are you sure you want to delete this item? This action cannot be
              undone.
            </AlertDialogDescription>
          </AlertDialogBody>
          <AlertDialogFooter>
            <AlertDialogClose>Cancel</AlertDialogClose>
            <Button variant="destructive">Delete Item</Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <Dialog
        open={openDialog}
        onOpenChange={(open) => {
          if (!open && feedback) {
            setConfirmation(true);
            return;
          }

          setFeedback('');
          setOpenDialog(open);
        }}
      >
        <DialogTrigger render={<Button variant="secondary">Feedback</Button>} />
        <DialogContent className="max-w-md w-full">
          <DialogHeader>
            <IconBox variant="secondary">
              <MessageCircleIcon />
            </IconBox>
            <DialogTitle>Write Feedback</DialogTitle>
          </DialogHeader>
          <DialogBody>
            <Textarea
              placeholder="Write your feedback here..."
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
            />
          </DialogBody>
          <DialogFooter>
            <DialogClose>Cancel</DialogClose>
            <Button
              variant="primary"
              progress={progress}
              onClick={() => {
                setProgress(true);

                setTimeout(() => {
                  setProgress(false);
                  setFeedback('');
                  setOpenDialog(false);
                }, 2000);
              }}
            >
              Send Feedback
            </Button>
          </DialogFooter>
        </DialogContent>

        <AlertDialog open={confirmation} onOpenChange={setConfirmation}>
          <AlertDialogContent className="max-w-md w-full">
            <AlertDialogHeader>
              <IconBox variant="secondary">
                <TriangleAlertIcon />
              </IconBox>
              <AlertDialogTitle>Discard Feedback?</AlertDialogTitle>
            </AlertDialogHeader>
            <AlertDialogBody>
              <AlertDialogDescription>
                Are you sure you want to discard your feedback? You will lose
                your feedback if you discard it.
              </AlertDialogDescription>
            </AlertDialogBody>
            <AlertDialogFooter>
              <AlertDialogClose>Back</AlertDialogClose>
              <Button variant="destructive">Discard Feedback</Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </Dialog>

      <Dialog>
        <DialogTrigger
          render={<Button variant="secondary">Nested Dialog</Button>}
        />
        <DialogContent>
          <DialogHeader>
            <IconBox variant="secondary">
              <MessageCircleIcon />
            </IconBox>
            <DialogTitle>Nested Dialog</DialogTitle>
          </DialogHeader>
          <DialogBody>
            <DialogDescription>
              This is a nested dialog. It is used to display a nested dialog.
            </DialogDescription>
          </DialogBody>
          <DialogFooter className="justify-between">
            <Dialog>
              <DialogTrigger
                render={<Button variant="secondary-subtle">Customize</Button>}
              />
              <DialogContent className="max-w-md w-full">
                <DialogHeader>
                  <DialogTitle>Customize</DialogTitle>
                </DialogHeader>
                <DialogBody>
                  <DialogDescription>
                    Customize the nested dialog.
                  </DialogDescription>
                </DialogBody>
                <DialogFooter className="justify-end">
                  <Dialog>
                    <DialogTrigger
                      render={
                        <Button variant="secondary-subtle">Customize</Button>
                      }
                    />
                    <DialogContent className="max-w-md w-full">
                      <DialogHeader>
                        <DialogTitle>Customize</DialogTitle>
                      </DialogHeader>
                      <DialogBody>
                        <DialogDescription>
                          Customize the nested dialog.
                        </DialogDescription>
                      </DialogBody>
                      <DialogFooter>
                        <Button variant="primary">Save</Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                  <Button variant="primary">Save</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
            <Button variant="primary">Save</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dropdown>
        <DropdownTrigger
          render={
            <Button variant="tertiary">
              Options <ChevronDownIcon />
            </Button>
          }
        />
        <DropdownContent>
          <DropdownItem>Play Next</DropdownItem>
          <DropdownItem>Play Last</DropdownItem>
          <DropdownItem>Add to Queue</DropdownItem>
          <DropdownItem onClick={() => setOpen(true)}>
            Add to Playlist
          </DropdownItem>
        </DropdownContent>
      </Dropdown>

      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogContent className="max-w-md w-full">
          <AlertDialogHeader>
            <AlertDialogTitle>Add to Playlist</AlertDialogTitle>
          </AlertDialogHeader>
          <AlertDialogBody>
            <Input placeholder="Enter playlist name" />
          </AlertDialogBody>
          <AlertDialogFooter>
            <AlertDialogClose>Cancel</AlertDialogClose>
            <Button variant="primary">Add to Playlist</Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
