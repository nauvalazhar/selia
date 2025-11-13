import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertTitle,
} from 'components/selia/alert';
import { Button } from 'components/selia/button';
import { InfoIcon } from 'lucide-react';

export default function AlertDescriptionExample() {
  return (
    <>
      <Alert>
        <InfoIcon />
        <AlertTitle>Alert Title</AlertTitle>
        <AlertDescription>Alert Description</AlertDescription>
        <AlertAction>
          <Button variant="tertiary" size="xs" pill>
            Button
          </Button>
        </AlertAction>
      </Alert>
    </>
  );
}
