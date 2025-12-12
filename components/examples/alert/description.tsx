import { Alert, AlertDescription, AlertTitle } from 'components/selia/alert';
import { InfoIcon } from 'lucide-react';

export default function AlertDescriptionExample() {
  return (
    <Alert>
      <InfoIcon />
      <AlertTitle>Alert Title</AlertTitle>
      <AlertDescription>Alert Description</AlertDescription>
    </Alert>
  );
}
