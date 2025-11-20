import { Alert, AlertAction, AlertButton } from 'components/selia/alert';
import { Button } from 'components/selia/button';
import { InfoIcon } from 'lucide-react';

export default function AlertButtonExample() {
  return (
    <Alert>
      <InfoIcon />
      Message deleted successfully.
      <AlertAction>
        <Button variant="tertiary" size="xs" pill>
          Undo
        </Button>
      </AlertAction>
    </Alert>
  );
}
