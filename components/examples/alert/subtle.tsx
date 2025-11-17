import { Alert } from 'components/selia/alert';
import {
  CheckCircle2Icon,
  InfoIcon,
  TriangleAlertIcon,
  XCircleIcon,
} from 'lucide-react';

export default function AlertExample() {
  return (
    <>
      <Alert variant="secondary-subtle">
        <InfoIcon />
        Some neutral message here.
      </Alert>
      <Alert variant="tertiary-subtle">
        <InfoIcon />
        Some neutral message here.
      </Alert>
      <Alert variant="danger-subtle">
        <XCircleIcon />
        Payment failed. Check your card details.
      </Alert>
      <Alert variant="info-subtle">
        <InfoIcon />
        Some useful information here.
      </Alert>
      <Alert variant="success-subtle">
        <CheckCircle2Icon />
        Your changes have been saved successfully.
      </Alert>
      <Alert variant="warning-subtle">
        <TriangleAlertIcon />
        Some features may not work.
      </Alert>
    </>
  );
}
