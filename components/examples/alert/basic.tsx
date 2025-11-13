import { Alert, AlertTitle, AlertDescription } from 'components/selia/alert';
import { InfoIcon } from 'lucide-react';

export default function AlertExample() {
  return (
    <>
      <Alert>
        <InfoIcon />
        Some neutral message here.
      </Alert>
      <Alert variant="tertiary">
        <InfoIcon />
        <AlertTitle>Alert Title</AlertTitle>
        <AlertDescription>Alert Description</AlertDescription>
      </Alert>
    </>
  );
}
