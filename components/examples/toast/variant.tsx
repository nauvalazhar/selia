import { Button } from 'components/selia/button';
import { toast } from 'components/selia/toast';

export default function ToastBasicExample() {
  return (
    <>
      <Button
        variant="secondary"
        onClick={() =>
          toast('Default Toast', {
            description: 'This is a default toast',
          })
        }
      >
        Default
      </Button>
      <Button
        variant="secondary"
        onClick={() =>
          toast.info('Info Toast', {
            description: 'This is a info toast',
          })
        }
      >
        Info
      </Button>
      <Button
        variant="secondary"
        onClick={() =>
          toast.success('Success Toast', {
            description: 'This is a success toast',
          })
        }
      >
        Success
      </Button>
      <Button
        variant="secondary"
        onClick={() =>
          toast.warning('Warning Toast', {
            description: 'This is a warning toast',
          })
        }
      >
        Warning
      </Button>
      <Button
        variant="secondary"
        onClick={() =>
          toast.error('Error Toast', {
            description: 'This is a error toast',
          })
        }
      >
        Error
      </Button>
    </>
  );
}
