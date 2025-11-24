import { useRender } from '@base-ui-components/react/use-render';
import { cn } from 'lib/utils';
import { Collapsible as BaseCollapsible } from '@base-ui-components/react/collapsible';
import { cva, type VariantProps } from 'class-variance-authority';

export const sidebarVariants = cva('flex flex-col gap-2.5', {
  variants: {
    size: {
      default: [
        '**:data-[slot=sidebar-item]:min-h-8.5',
        '**:data-[slot=sidebar-item]:px-2.5',
        '**:data-[slot=sidebar-item]:py-2',
        '**:data-[slot=sidebar-item]:rounded',
        '**:data-[slot=sidebar-header]:px-2.5',
        '**:data-[slot=sidebar-content]:px-2.5',
        '**:data-[slot=sidebar-group-title]:px-2.5',
        '**:data-[slot=sidebar-group-action]:px-2.5',
        '**:data-[slot=sidebar-footer]:px-2.5',
      ],
      compact: [
        '**:data-[slot=sidebar-item]:min-h-8',
        '**:data-[slot=sidebar-item]:px-2.5',
        '**:data-[slot=sidebar-item]:py-1.5',
        '**:data-[slot=sidebar-item]:rounded',
        '**:data-[slot=sidebar-header]:px-2.5',
        '**:data-[slot=sidebar-content]:px-2.5',
        '**:data-[slot=sidebar-group-title]:px-2.5',
        '**:data-[slot=sidebar-group-action]:px-2.5',
        '**:data-[slot=sidebar-footer]:px-2.5',
        2,
      ],
      loose: [
        '**:data-[slot=sidebar-item]:min-h-10',
        '**:data-[slot=sidebar-item]:px-3',
        '**:data-[slot=sidebar-item]:py-2',
        '**:data-[slot=sidebar-item]:rounded',
        '**:data-[slot=sidebar-header]:px-4',
        '**:data-[slot=sidebar-content]:px-4',
        '**:data-[slot=sidebar-group-title]:px-3',
        '**:data-[slot=sidebar-group-action]:px-3',
        '**:data-[slot=sidebar-footer]:px-4',
        '**:data-line:before:left-4',
        '**:data-line:**:data-[slot=sidebar-item]:pl-7.5',
        '**:data-line:**:data-[slot=sidebar-item]:data-active:before:left-4',
      ],
    },
  },
  defaultVariants: {
    size: 'default',
  },
});

export function Sidebar({
  className,
  size,
  ...props
}: React.ComponentProps<'aside'> & VariantProps<typeof sidebarVariants>) {
  return (
    <aside
      data-slot="sidebar"
      className={cn(sidebarVariants({ size, className }))}
      {...props}
    />
  );
}

export function SidebarHeader({
  className,
  children,
  ...props
}: React.ComponentProps<'header'>) {
  return (
    <header
      data-slot="sidebar-header"
      {...props}
      className={cn('pt-4', className)}
    >
      {children}
    </header>
  );
}

export function SidebarContent({
  className,
  render,
  ...props
}: useRender.ComponentProps<'div'>) {
  return useRender({
    defaultTagName: 'div',
    render,
    props: {
      'data-slot': 'sidebar-content',
      className: cn(
        'flex flex-col gap-2.5 h-full overflow-y-auto py-4',
        className,
      ),
      ...props,
    },
  });
}

export function SidebarLogo({
  className,
  children,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="sidebar-logo"
      className={cn('flex items-center gap-2.5 select-none', className)}
      {...props}
    >
      {children}
    </div>
  );
}

export function SidebarFooter({
  className,
  children,
  ...props
}: React.ComponentProps<'footer'>) {
  return (
    <footer
      data-slot="sidebar-footer"
      className={cn('mt-auto pb-4', className)}
      {...props}
    >
      {children}
    </footer>
  );
}

export function SidebarMenu({
  className,
  ...props
}: React.ComponentProps<'nav'>) {
  return (
    <nav
      data-slot="sidebar-menu"
      className={cn('flex flex-col gap-6', className)}
      {...props}
    />
  );
}

export const sidebarListVariants = cva('flex flex-col gap-0.5 w-full', {
  variants: {
    line: {
      true: [
        'relative before:absolute before:top-0 before:bottom-1',
        'before:left-3.5 before:w-px before:bg-border',
        '**:data-[slot=sidebar-item]:pl-7',
        '**:data-[slot=sidebar-item]:hover:bg-accent/60',
        '**:data-[slot=sidebar-item]:data-active:bg-accent/60',
        '**:data-[slot=sidebar-item]:data-active:before:absolute',
        '**:data-[slot=sidebar-item]:data-active:before:w-0.5',
        '**:data-[slot=sidebar-item]:data-active:before:left-3.5',
        '**:data-[slot=sidebar-item]:data-active:before:rounded-full',
        '**:data-[slot=sidebar-item]:data-active:before:h-4',
        '**:data-[slot=sidebar-item]:data-active:before:bg-primary',
      ],
    },
  },
  defaultVariants: {
    line: false,
  },
});

export function SidebarList({
  className,
  line,
  children,
  ...props
}: React.ComponentProps<'ul'> & VariantProps<typeof sidebarListVariants>) {
  return (
    <ul
      data-slot="sidebar-list"
      data-line={line ? true : undefined}
      className={cn(sidebarListVariants({ line, className }))}
      {...props}
    >
      {children}
    </ul>
  );
}

const sidebarItemClasses = [
  'flex items-center gap-2.5 w-full relative z-10',
  'text-foreground cursor-pointer',
  'transition-colors duration-75 hover:bg-accent',
  '**:[svg]:size-4 **:[svg]:text-muted',
  'focus-visible:outline-2 focus-visible:outline-offset-2 outline-primary',
  'data-popup-open:bg-accent',
];

export function SidebarItem({
  className,
  render,
  active,
  ...props
}: useRender.ComponentProps<'a'> & { active?: boolean }) {
  return (
    <li>
      {useRender({
        defaultTagName: 'a',
        render,
        props: {
          'data-slot': 'sidebar-item',
          'data-active': active ? true : undefined,
          className: cn(sidebarItemClasses, active && 'bg-accent', className),
          ...props,
        },
      })}
    </li>
  );
}

export function SidebarGroup({
  className,
  children,
  ...props
}: React.ComponentProps<'section'>) {
  return (
    <section
      role="group"
      data-slot="sidebar-group"
      className={cn('flex flex-wrap gap-0.5', className)}
      {...props}
    >
      {children}
    </section>
  );
}

export function SidebarGroupTitle({
  className,
  children,
  ...props
}: React.ComponentProps<'span'>) {
  return (
    <span
      data-slot="sidebar-group-title"
      className={cn('text-sm font-medium text-dimmed', className)}
      {...props}
    >
      {children}
    </span>
  );
}

export function SidebarGroupAction({
  className,
  children,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="sidebar-group-action"
      className={cn(
        'ml-auto flex items-center gap-1.5 **:[svg]:size-4',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function SidebarCollapsible({
  ...props
}: React.ComponentProps<typeof BaseCollapsible.Root>) {
  return <BaseCollapsible.Root data-slot="sidebar-collapsible" {...props} />;
}

export function SidebarCollapsibleTrigger({
  className,
  ...props
}: React.ComponentProps<typeof BaseCollapsible.Trigger>) {
  return (
    <BaseCollapsible.Trigger
      data-slot="sidebar-item"
      className={cn(
        sidebarItemClasses,
        'after:bg-chevron-down-dark dark:after:bg-chevron-down after:size-4 after:ml-auto',
        'after:transition-transform after:duration-100',
        'data-[panel-open]:after:rotate-180',
        className,
      )}
      {...props}
    />
  );
}

export function SidebarSubmenu({
  className,
  ...props
}: React.ComponentProps<typeof BaseCollapsible.Panel>) {
  return (
    <BaseCollapsible.Panel
      data-slot="sidebar-submenu"
      render={<nav />}
      {...props}
      className={cn(
        'relative pl-6.5 py-0.5 transition-all duration-100',
        'h-(--collapsible-panel-height) overflow-hidden',
        'data-[ending-style]:h-0 data-[starting-style]:h-0',
        '**:data-[slot=sidebar-list]:before:left-2.5',
        className,
      )}
    />
  );
}
