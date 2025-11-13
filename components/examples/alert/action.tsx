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
          <Button variant="tertiary" size="xs" pill>
            Undo
          </Button>
        </AlertAction>
      </Alert>

      <Alert variant="success">
        <CheckCircle2Icon />
        Your changes have been saved successfully.
        <AlertAction>
          <Button variant="secondary-plain" size="xs" pill>
            Refresh
          </Button>
        </AlertAction>
      </Alert>
    </>
  );
}
