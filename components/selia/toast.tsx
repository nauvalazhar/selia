'use client';

import { Toast as BaseToast, type ToastObject } from '@base-ui/react/toast';
import { buttonVariants } from './button';
import { cn } from '#utils';

export const toastManager = BaseToast.createToastManager();
export const anchoredToastManager = BaseToast.createToastManager();

export function Toast() {
  return (
    <>
      <BaseToast.Provider toastManager={toastManager}>
        <StackedToasts />
      </BaseToast.Provider>
      <BaseToast.Provider toastManager={anchoredToastManager}>
        <AnchoredToasts />
      </BaseToast.Provider>
    </>
  );
}

function StackedToasts() {
  const { toasts } = BaseToast.useToastManager();

  return (
    <BaseToast.Portal>
      <BaseToast.Viewport className="fixed top-2 md:top-4 right-0 left-0 mx-2 md:mx-auto flex">
        {toasts.map((toast) => (
          <BaseToast.Root
            key={toast.id}
            toast={toast}
            swipeDirection="up"
            className={cn(
              'absolute right-0 top-0 left-0 z-[calc(1000-var(--toast-index))] mx-auto w-sm max-w-full origin-top',
              'rounded border border-toast-border bg-toast p-4 shadow-lg select-none h-(--height)',
              'after:absolute after:bottom-full after:left-0 after:h-[calc(var(--gap)+1px)] after:w-full',
              '[--gap:0.75rem] [--peek:0.75rem] [--scale:calc(max(0,1-(var(--toast-index)*0.1)))] [--shrink:calc(1-var(--scale))]',
              '[--height:var(--toast-frontmost-height,var(--toast-height))] [--offset-y:calc(var(--toast-offset-y)+(var(--toast-index)*var(--gap))+var(--toast-swipe-movement-y))]',
              '[transform:translateX(var(--toast-swipe-movement-x))_translateY(calc(var(--toast-swipe-movement-y)+(var(--toast-index)*var(--peek))+(var(--shrink)*var(--height))))_scale(var(--scale))]',
              '[transition:transform_0.5s_cubic-bezier(0.22,1,0.36,1),opacity_0.5s,height_0.15s]',
              'data-[starting-style]:[transform:translateY(-150%)]',
              'data-[ending-style]:data-[swipe-direction=down]:[transform:translateY(calc(var(--toast-swipe-movement-y)+150%))]',
              'data-[ending-style]:data-[swipe-direction=left]:[transform:translateX(calc(var(--toast-swipe-movement-x)-150%))_translateY(var(--offset-y))]',
              'data-[ending-style]:data-[swipe-direction=right]:[transform:translateX(calc(var(--toast-swipe-movement-x)+150%))_translateY(var(--offset-y))]',
              'data-[ending-style]:data-[swipe-direction=up]:[transform:translateY(calc(var(--toast-swipe-movement-y)-150%))]',
              '[&[data-ending-style]:not([data-limited]):not([data-swipe-direction])]:[transform:translateY(-150%)]',
              'data-[ending-style]:opacity-0',
              'data-[limited]:opacity-0',
              'data-[expanded]:h-[var(--toast-height)]',
              'data-[expanded]:data-[ending-style]:data-[swipe-direction=down]:[transform:translateY(calc(var(--toast-swipe-movement-y)+150%))]',
              'data-[expanded]:data-[ending-style]:data-[swipe-direction=left]:[transform:translateX(calc(var(--toast-swipe-movement-x)-150%))_translateY(var(--offset-y))]',
              'data-[expanded]:data-[ending-style]:data-[swipe-direction=right]:[transform:translateX(calc(var(--toast-swipe-movement-x)+150%))_translateY(var(--offset-y))]',
              'data-[expanded]:data-[ending-style]:data-[swipe-direction=up]:[transform:translateY(calc(var(--toast-swipe-movement-y)-150%))]',
              'data-[expanded]:[transform:translateX(var(--toast-swipe-movement-x))_translateY(calc(var(--offset-y)))]',
            )}
          >
            <ToastContent toast={toast} />
          </BaseToast.Root>
        ))}
      </BaseToast.Viewport>
    </BaseToast.Portal>
  );
}

function AnchoredToasts() {
  const { toasts } = BaseToast.useToastManager();

  return (
    <BaseToast.Portal>
      <BaseToast.Viewport className="outline-0">
        {toasts.map((toast) => (
          <BaseToast.Positioner
            key={toast.id}
            toast={toast}
            className="z-[calc(1000-var(--toast-index))]"
          >
            <BaseToast.Root
              toast={toast}
              className={cn(
                'group flex w-max origin-(--transform-origin) flex-col outline-none',
                'shadow bg-toast border border-toast-border rounded',
                'transition-[transform,scale,opacity]',
                'data-ending-style:scale-90 data-ending-style:opacity-0',
                'data-starting-style:scale-90 data-starting-style:opacity-0',
                toast.data?.size === 'sm' ? 'p-2' : 'p-4',
              )}
            >
              <ToastContent toast={toast} />
            </BaseToast.Root>
          </BaseToast.Positioner>
        ))}
      </BaseToast.Viewport>
    </BaseToast.Portal>
  );
}

function ToastContent({ toast }: { toast: ToastObject<Object> }) {
  return (
    <BaseToast.Content
      data-slot="toast-content"
      className={cn(
        'overflow-hidden transition-opacity data-behind:pointer-events-none data-behind:opacity-0',
        'data-expanded:opacity-100 data-expanded:pointer-events-auto',
        'flex gap-x-2.5 gap-y-0.5 items-center',
      )}
    >
      {toast.type && (
        <ToastIcon type={toast.type}>{icons[toast.type]}</ToastIcon>
      )}
      <div className="w-full flex justify-between flex-col md:flex-row items-start">
        <div>
          <BaseToast.Title
            data-slot="toast-title"
            className="text-foreground font-medium"
          />
          <BaseToast.Description
            data-slot="toast-description"
            className="text-muted col-start-1"
          />
        </div>
        <BaseToast.Action
          data-slot="toast-action"
          className={cn(
            'text-sm md:ml-auto shrink-0 mt-2 md:mt-0',
            buttonVariants({ variant: 'tertiary', size: 'xs' }),
          )}
        />
      </div>
    </BaseToast.Content>
  );
}

function ToastIcon({
  type,
  children,
}: {
  type?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      data-slot="toast-icon"
      className={cn(
        '*:[svg]:w-4.5 self-start',
        type === 'success' && '*:[svg]:fill-success/20 *:[svg]:stroke-success',
        type === 'info' && '*:[svg]:fill-info/20 *:[svg]:stroke-info',
        type === 'warning' && '*:[svg]:fill-warning/20 *:[svg]:stroke-warning',
        type === 'error' && '*:[svg]:fill-danger/20 *:[svg]:stroke-danger',
      )}
    >
      {children}
    </div>
  );
}

const icons: Record<string, React.ReactNode> = {
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
