import { Alert, AlertAction, AlertButton } from 'components/selia/alert';
import { CheckCircle2Icon, InfoIcon } from 'lucide-react';

export default function AlertExample() {
  return (
    <>
      <Alert>
        <InfoIcon />
        Message deleted successfully.
        <AlertAction>
          <AlertButton>Undo</AlertButton>
        </AlertAction>
      </Alert>

      <Alert variant="tertiary">
        <InfoIcon />
        Some neutral message here.
        <AlertAction>
          <AlertButton>Action</AlertButton>
        </AlertAction>
      </Alert>

      <Alert variant="success">
        <CheckCircle2Icon />
        Your changes have been saved successfully.
        <AlertAction>
          <AlertButton>Refresh</AlertButton>
        </AlertAction>
      </Alert>
    </>
  );
}
