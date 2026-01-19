import { Button } from 'components/selia/button';
import { toastManager } from 'components/selia/toast';

export default function ToastBasicExample() {
  return (
    <>
      <Button
        variant="secondary"
        onClick={() =>
          toastManager.add({
            title: 'Default Toast',
            description: 'This is a default toast',
          })
        }
      >
        Default
      </Button>
      <Button
        variant="secondary"
        onClick={() =>
          toastManager.add({
            title: 'Info Toast',
            description: 'This is a info toast',
            type: 'info',
          })
        }
      >
        Info
      </Button>
      <Button
        variant="secondary"
        onClick={() =>
          toastManager.add({
            title: 'Success Toast',
            description: 'This is a success toast',
            type: 'success',
          })
        }
      >
        Success
      </Button>
      <Button
        variant="secondary"
        onClick={() =>
          toastManager.add({
            title: 'Warning Toast',
            description: 'This is a warning toast',
            type: 'warning',
          })
        }
      >
        Warning
      </Button>
      <Button
        variant="secondary"
        onClick={() =>
          toastManager.add({
            title: 'Error Toast',
            description: 'This is a error toast',
            type: 'error',
          })
        }
      >
        Error
      </Button>
    </>
  );
}
