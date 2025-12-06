import { useRender } from '@base-ui-components/react/use-render';
import { cn } from 'lib/utils';
import { Collapsible as BaseCollapsible } from '@base-ui-components/react/collapsible';
import { cva, type VariantProps } from 'class-variance-authority';

export const sidebarVariants = cva('flex flex-col gap-2.5', {
  variants: {
    size: {
      default: [
        '**:data-[slot=sidebar-item-button]:min-h-8.5',
        '**:data-[slot=sidebar-item-button]:px-2.5',
        '**:data-[slot=sidebar-item-button]:py-2',
        '**:data-[slot=sidebar-item-button]:rounded',
        '**:data-[slot=sidebar-item-action]:size-8.5',
        '[&_[data-slot=sidebar-item-button]:has(+[data-slot=sidebar-item-action])]:pr-7',
        '**:data-[slot=sidebar-header]:px-4',
        '**:data-[slot=sidebar-header]:pt-4',
        '**:data-[slot=sidebar-content]:px-4',
        '**:data-[slot=sidebar-content]:pb-4',
        'has-[>[data-slot=sidebar-header]]:[&_[data-slot=sidebar-content]]:pt-4',
        '**:data-[slot=sidebar-group-title]:px-2.5',
        '**:data-[slot=sidebar-group-action]:px-2.5',
        '**:data-[slot=sidebar-footer]:px-4',
        '**:data-[slot=sidebar-footer]:pb-4',
        '**:data-[slot=sidebar-submenu]:pl-2',
        '**:data-[slot=sidebar-submenu]:ml-4.5',
      ],
      compact: [
        '**:data-[slot=sidebar-item-button]:min-h-8',
        '**:data-[slot=sidebar-item-button]:px-2.5',
        '**:data-[slot=sidebar-item-button]:py-1.5',
        '**:data-[slot=sidebar-item-button]:rounded',
        '**:data-[slot=sidebar-item-action]:size-8',
        '[&_[data-slot=sidebar-item-button]:has(+[data-slot=sidebar-item-action])]:pr-7',
        '**:data-[slot=sidebar-header]:px-3.5',
        '**:data-[slot=sidebar-header]:pt-3.5',
        '**:data-[slot=sidebar-content]:px-3.5',
        '**:data-[slot=sidebar-content]:pb-3.5',
        'has-[>[data-slot=sidebar-header]]:[&_[data-slot=sidebar-content]]:pt-3.5',
        '**:data-[slot=sidebar-group-title]:px-2.5',
        '**:data-[slot=sidebar-group-action]:px-2.5',
        '**:data-[slot=sidebar-footer]:px-3.5',
        '**:data-[slot=sidebar-footer]:pb-3.5',
        '**:data-[slot=sidebar-submenu]:pl-1.5',
        '**:data-[slot=sidebar-submenu]:ml-4.5',
      ],
      loose: [
        '**:data-[slot=sidebar-item-button]:min-h-10',
        '**:data-[slot=sidebar-item-button]:px-3',
        '**:data-[slot=sidebar-item-button]:py-2',
        '**:data-[slot=sidebar-item-button]:rounded',
        '**:data-[slot=sidebar-item-action]:size-10',
        '[&_[data-slot=sidebar-item-button]:has(+[data-slot=sidebar-item-action])]:pr-7.5',
        '**:data-[slot=sidebar-header]:px-4.5',
        '**:data-[slot=sidebar-header]:pt-4.5',
        '**:data-[slot=sidebar-content]:px-4.5',
        '**:data-[slot=sidebar-content]:pb-4.5',
        'has-[>[data-slot=sidebar-header]]:[&_[data-slot=sidebar-content]]:pt-4.5',
        '**:data-[slot=sidebar-group-title]:px-3',
        '**:data-[slot=sidebar-group-action]:px-3',
        '**:data-[slot=sidebar-footer]:px-4.5',
        '**:data-[slot=sidebar-footer]:pb-4.5',
        '**:data-[slot=sidebar-submenu]:pl-1.5',
        '**:data-[slot=sidebar-submenu]:ml-5',
      ],
    },
  },
  defaultVariants: {
    size: 'default',
  },
});

export function Sidebar({
  size,
  className,
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
    <header data-slot="sidebar-header" {...props} className={cn(className)}>
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
      className: cn('flex flex-col gap-2.5 h-full overflow-y-auto', className),
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
      className={cn(
        'flex items-center gap-2.5 select-none text-lg text-foreground',
        className,
      )}
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
      className={cn('mt-auto', className)}
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
      className={cn('flex flex-col gap-4.5', className)}
      {...props}
    />
  );
}

export function SidebarList({
  className,
  children,
  ...props
}: React.ComponentProps<'ul'>) {
  return (
    <ul
      data-slot="sidebar-list"
      className={cn('flex flex-col gap-0.5 w-full', className)}
      {...props}
    >
      {children}
    </ul>
  );
}

export function SidebarItem({
  className,
  children,
}: React.ComponentProps<'li'>) {
  return (
    <li
      data-slot="sidebar-item"
      className={cn(
        'group/sidebar-item',
        '**:data-[slot=sidebar-submenu]:w-auto relative flex',
        className,
      )}
    >
      {children}
    </li>
  );
}

export function SidebarItemAction({
  className,
  children,
  showOnHover,
}: React.ComponentProps<'div'> & {
  showOnHover?: boolean;
}) {
  return (
    <div
      data-slot="sidebar-item-action"
      className={cn(
        'absolute right-0 shrink-0 z-10 **:[svg]:size-4',
        '*:[button]:cursor-pointer',
        'transition-all duration-100',
        showOnHover && 'opacity-0 group-hover/sidebar-item:opacity-100',
        className,
      )}
    >
      {children}
    </div>
  );
}

export function SidebarItemButton({
  className,
  render,
  active,
  expandableIndicator = true,
  ...props
}: useRender.ComponentProps<'button'> & {
  active?: boolean;
  expandableIndicator?: boolean;
}) {
  return useRender({
    defaultTagName: 'button',
    render,
    props: {
      'data-slot': 'sidebar-item-button',
      'data-active': active ? true : undefined,
      className: cn(
        'flex items-center gap-2.5 w-full relative z-10',
        'text-foreground cursor-pointer text-left',
        'transition-colors duration-75 hover:bg-accent',
        '**:[svg]:size-4 **:[svg]:text-muted',
        'focus-visible:outline-2 focus-visible:outline-offset-2 outline-primary',
        'data-popup-open:bg-accent',
        expandableIndicator && [
          'data-expandable:after:bg-chevron-down-dark dark:data-expandable:after:bg-chevron-down data-expandable:after:size-4 data-expandable:after:ml-auto',
          'data-expandable:after:transition-transform data-expandable:after:duration-100',
          'data-expandable:data-[panel-open]:after:rotate-180',
        ],
        active && 'bg-accent',
        className,
      ),
      ...props,
    },
  });
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
      className={cn(
        'flex flex-wrap gap-0.5 *:data-[slot=sidebar-list]:p-0',
        className,
      )}
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
      className={cn(
        'inline-flex items-center text-sm font-medium text-dimmed',
        '**:[svg]:size-3.5',
        className,
      )}
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
        'ml-auto flex items-center gap-1.5 **:[svg]:size-3.5',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function SidebarSubmenu({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="sidebar-submenu"
      {...props}
      className={cn('py-0.5 border-l border-border w-full', className)}
    />
  );
}

export function SidebarCollapsible({
  className,
  ...props
}: React.ComponentProps<typeof BaseCollapsible.Root>) {
  return (
    <BaseCollapsible.Root
      data-slot="sidebar-collapsible"
      className={cn('w-full', className)}
      {...props}
    />
  );
}

export function SidebarCollapsibleTrigger({
  className,
  ...props
}: React.ComponentProps<typeof BaseCollapsible.Trigger>) {
  return (
    <BaseCollapsible.Trigger
      data-expandable
      {...props}
      className={cn(
        '**:data-[slot=expandable-indicator]:transition-all',
        '**:data-[slot=expandable-indicator]:duration-100',
        'outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary',
        className,
      )}
    />
  );
}

export function SidebarCollapsiblePanel({
  className,
  ...props
}: React.ComponentProps<typeof BaseCollapsible.Panel>) {
  return (
    <BaseCollapsible.Panel
      data-slot="sidebar-collapsible-panel"
      {...props}
      className={cn(
        'transition-all duration-100',
        'h-(--collapsible-panel-height) overflow-hidden',
        'data-[ending-style]:h-0 data-[starting-style]:h-0',
        className,
      )}
    />
  );
}
