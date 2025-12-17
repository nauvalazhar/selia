import { Alert, AlertAction } from 'components/selia/alert';
import { Button } from 'components/selia/button';
import { CheckCircle2Icon, InfoIcon } from 'lucide-react';

export default function AlertExample() {
  return (
    <>
      <Alert>
        <InfoIcon />
        Message deleted successfully.
        <AlertAction>
          <Button variant="tertiary" size="xs">
            Undo
          </Button>
        </AlertAction>
      </Alert>
    </>
  );
}
