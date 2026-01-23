'use client';

import * as React from 'react';
import { useRender } from '@base-ui/react/use-render';
import { cn } from '#utils';

export function Breadcrumb({ ...props }: React.ComponentProps<'nav'>) {
  return <nav aria-label="breadcrumb" data-slot="breadcrumb" {...props} />;
}

export function BreadcrumbList({
  className,
  ...props
}: React.ComponentProps<'ol'>) {
  return (
    <ol
      data-slot="breadcrumb-list"
      className={cn(
        'flex flex-wrap items-center gap-1.5 break-words',
        className,
      )}
      {...props}
    />
  );
}

export function BreadcrumbItem({
  className,
  ...props
}: React.ComponentProps<'li'>) {
  return (
    <li
      data-slot="breadcrumb-item"
      className={cn(
        'inline-flex items-center gap-1.5 group/breadcrumb-item',
        className,
      )}
      {...props}
    />
  );
}

export function BreadcrumbButton({
  active,
  className,
  render,
  ...props
}: useRender.ComponentProps<'button'> & {
  active?: boolean;
}) {
  return useRender({
    defaultTagName: 'button',
    render,
    props: {
      'data-slot': 'breadcrumb-button',
      'aria-current': active ? 'page' : undefined,
      'aria-disabled': active ? true : undefined,
      'data-active': active ? true : undefined,
      type: render ? undefined : 'button',
      tabIndex: active ? -1 : undefined,
      className: cn(
        'transition-colors hover:not-[[data-disabled]]:text-foreground',
        'focus:outline-0 focus-visible:outline-2 focus-visible:outline-offset-2 outline-primary',
        active
          ? 'text-foreground pointer-events-none font-medium'
          : 'text-muted cursor-pointer',
        className,
      ),
      ...props,
    },
  });
}

export function BreadcrumbSeparator({
  children,
  className,
  ...props
}: React.ComponentProps<'li'>) {
  return (
    <li
      data-slot="breadcrumb-separator"
      role="presentation"
      aria-hidden="true"
      className={cn('[&>svg]:size-3.5 text-muted', className)}
      {...props}
    >
      {children ?? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
      )}
    </li>
  );
}

export function BreadcrumbEllipsis({
  className,
  ...props
}: React.ComponentProps<'span'>) {
  return (
    <span
      data-slot="breadcrumb-ellipsis"
      role="presentation"
      aria-hidden="true"
      className={cn(
        'size-8.5 flex items-center justify-center',
        'text-muted group-hover/breadcrumb-item:text-foreground',
        className,
      )}
      {...props}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-4.5"
      >
        <circle cx="12" cy="12" r="1" />
        <circle cx="19" cy="12" r="1" />
        <circle cx="5" cy="12" r="1" />
      </svg>
    </span>
  );
}
