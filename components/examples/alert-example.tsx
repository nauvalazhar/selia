import { Alert } from 'components/selia/alert';
import {
  CheckCircle2Icon,
  InfoIcon,
  TriangleAlertIcon,
  XCircleIcon,
} from 'lucide-react';

export default function AlertExample() {
  return (
    <div className="w-6/12 flex flex-col gap-4">
      <Alert>
        <InfoIcon />
        Some neutral message here.
      </Alert>
      <Alert variant="invert">
        <InfoIcon />
        Some neutral message here.
      </Alert>
      <Alert variant="destructive">
        <XCircleIcon />
        Payment failed. Check your card details.
      </Alert>
      <Alert variant="info">
        <InfoIcon />
        Some useful information here.
      </Alert>
      <Alert variant="success">
        <CheckCircle2Icon />
        Your changes have been saved successfully.
      </Alert>
      <Alert variant="warning">
        <TriangleAlertIcon />
        Some features may not work.
      </Alert>
    </div>
  );
}
