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
      <Alert variant="light">
        <InfoIcon />
        Some neutral message here.
      </Alert>
      <Alert variant="tertiary-light">
        <InfoIcon />
        Some neutral message here.
      </Alert>
      <Alert variant="destructive-light">
        <XCircleIcon />
        Payment failed. Check your card details.
      </Alert>
      <Alert variant="info-light">
        <InfoIcon />
        Some useful information here.
      </Alert>
      <Alert variant="success-light">
        <CheckCircle2Icon />
        Your changes have been saved successfully.
      </Alert>
      <Alert variant="warning-light">
        <TriangleAlertIcon />
        Some features may not work.
      </Alert>
    </>
  );
}
