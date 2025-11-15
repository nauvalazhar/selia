import { buttonVariants } from 'components/selia/button';
import { cn } from 'lib/utils';
import {
  Toaster,
  toast as sonnerToast,
  type ToastClassnames,
  type ToasterProps,
} from 'sonner';

const toastClasses: ToastClassnames = {
  toast: cn(
    'bg-toast/90 border border-toast-border rounded p-4 w-(--width) gap-0.5',
    'flex items-start gap-2.5 overflow-hidden backdrop-blur-sm',
    'data-[type=success]:**:data-icon:*:[svg]:fill-success/20',
    'data-[type=success]:**:data-icon:*:[svg]:stroke-success',
    'data-[type=info]:**:data-icon:*:[svg]:fill-info/20',
    'data-[type=info]:**:data-icon:*:[svg]:stroke-info',
    'data-[type=warning]:**:data-icon:*:[svg]:fill-warning/20',
    'data-[type=warning]:**:data-icon:*:[svg]:stroke-warning',
    'data-[type=error]:**:data-icon:*:[svg]:fill-destructive/20',
    'data-[type=error]:**:data-icon:*:[svg]:stroke-destructive',
    '*:data-[slot=button]:ml-auto',
    '*:data-[slot=button]:self-center',
    '**:data-[slot=item]:p-0',
  ),
  icon: '*:[svg]:size-5 relative has-[.sonner-loader]:size-5',
  title: 'text-toast-foreground font-medium',
  description: 'text-muted',
  actionButton: buttonVariants({
    variant: 'tertiary-subtle',
    size: 'xs',
    className: 'ml-auto self-center',
  }),
};

const icons: ToasterProps['icons'] = {
  loading: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-4.5 animate-spin"
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  ),
  success: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  ),
  info: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  ),
  warning: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
      <path d="M12 9v4" />
      <path d="M12 17h.01" />
    </svg>
  ),
  error: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m15 9-6 6" />
      <path d="m9 9 6 6" />
    </svg>
  ),
};

export function Toast() {
  return (
    <Toaster
      position="top-center"
      icons={icons}
      toastOptions={{
        unstyled: true,
        classNames: toastClasses,
      }}
    />
  );
}

export { sonnerToast as toast };
