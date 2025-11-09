import { useRender } from '@base-ui-components/react';
import { cn } from 'lib/utils';
import { Collapsible as BaseCollapsible } from '@base-ui-components/react/collapsible';

export function Sidebar({
  className,
  ...props
}: React.ComponentProps<'aside'>) {
  return (
    <aside className={cn('flex flex-col gap-2.5', className)} {...props} />
  );
}

export function SidebarHeader({
  className,
  children,
  ...props
}: React.ComponentProps<'header'>) {
  return (
    <header className={cn('py-4 px-2.5', className)} {...props}>
      {children}
    </header>
  );
}

export function SidebarContent({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn(
        'flex flex-col gap-2.5 px-2.5 h-full overflow-y-auto',
        className,
      )}
      {...props}
    />
  );
}

export function SidebarLogo({
  className,
  children,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn('flex items-center gap-2.5 px-2.5', className)}
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
    <footer className={cn('mt-auto py-4 px-2.5', className)} {...props}>
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
      aria-label="Sidebar Menu"
      className={cn('flex flex-col gap-2.5', className)}
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
    <ul className={cn('flex flex-col gap-0.5 w-full', className)} {...props}>
      {children}
    </ul>
  );
}

const sidebarItemClasses = [
  'flex items-center gap-2.5 min-h-8.5 px-2.5 py-1.5 rounded-xl w-full',
  'text-foreground font-medium cursor-pointer',
  'transition-colors duration-75 hover:bg-accent01',
  '[&_svg]:size-4 [&_svg]:text-muted',
  'focus-visible:outline-2 focus-visible:outline-offset-2 outline-primary',
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
          className: cn(sidebarItemClasses, active && 'bg-accent01', className),
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
      className={cn('text-sm font-medium text-dimmed px-2.5', className)}
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
      className={cn('ml-auto flex items-center gap-1.5 px-2.5', className)}
      {...props}
    >
      {children}
    </div>
  );
}

export function SidebarCollapsible({
  ...props
}: React.ComponentProps<typeof BaseCollapsible.Root>) {
  return <BaseCollapsible.Root {...props} />;
}

export function SidebarCollapsibleTrigger({
  className,
  ...props
}: React.ComponentProps<typeof BaseCollapsible.Trigger>) {
  return (
    <BaseCollapsible.Trigger
      className={cn(
        sidebarItemClasses,
        'after:bg-chevron-right after:size-4 after:ml-auto',
        'after:transition-transform after:duration-100',
        'data-[panel-open]:after:rotate-90',
        className,
      )}
      {...props}
    />
  );
}

export function SidebarSubmenu({
  className,
  indicator,
  ...props
}: React.ComponentProps<typeof BaseCollapsible.Panel> & {
  indicator?: boolean;
}) {
  return (
    <BaseCollapsible.Panel
      render={<nav />}
      {...props}
      className={cn(
        'relative pl-6.5 py-1 transition-all duration-100',
        'h-(--collapsible-panel-height) overflow-hidden',
        'data-[ending-style]:h-0 data-[starting-style]:h-0',
        indicator && [
          'before:absolute before:top-0 before:bottom-1',
          'before:left-4.5 before:w-px before:bg-border01',
        ],
        className,
      )}
    />
  );
}
