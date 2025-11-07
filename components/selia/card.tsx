import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from 'lib/utils';

export const cardVariants = cva(
  ['text-foreground ring ring-card-border rounded-3xl'],
  {
    variants: {
      variant: {
        default: 'bg-card',
        gradient: 'bg-gradient-card',
      },
    },
    defaultVariants: { variant: 'default' },
  },
);

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

export function Card({ variant, className, ...props }: CardProps) {
  return (
    <div className={cn(cardVariants({ variant, className }))} {...props} />
  );
}

export const cardHeaderVariants = cva(
  'p-6 flex gap-1.5 border-b border-card-border',
  {
    variants: {
      align: {
        default: 'justify-start',
        center: 'justify-center text-center',
        right: 'justify-end',
      },
    },
    defaultVariants: {
      align: 'default',
    },
  },
);

export interface CardHeaderProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardHeaderVariants> {}

export function CardHeader({ align, className, ...props }: CardHeaderProps) {
  return (
    <div className={cn(cardHeaderVariants({ align, className }))} {...props} />
  );
}

export interface CardHeaderContentProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export function CardHeaderContent({
  className,
  ...props
}: CardHeaderContentProps) {
  return <div className={cn('flex flex-col gap-2', className)} {...props} />;
}

export interface CardHeaderActionsProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export function CardHeaderActions({
  className,
  ...props
}: CardHeaderActionsProps) {
  return (
    <div
      className={cn('ml-auto flex items-center gap-2', className)}
      {...props}
    />
  );
}

export interface CardTitleProps
  extends React.HTMLAttributes<HTMLHeadingElement> {}

export function CardTitle({ className, ...props }: CardTitleProps) {
  return (
    <h3
      className={cn('text-lg font-semibold leading-none', className)}
      {...props}
    />
  );
}

export interface CardDescriptionProps
  extends React.HTMLAttributes<HTMLParagraphElement> {}

export function CardDescription({ className, ...props }: CardDescriptionProps) {
  return <p className={cn('text-muted', className)} {...props} />;
}

export interface CardBodyProps extends React.HTMLAttributes<HTMLDivElement> {}

export function CardBody({ className, ...props }: CardBodyProps) {
  return <div className={cn('p-6', className)} {...props} />;
}

export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {}

export function CardFooter({ className, ...props }: CardFooterProps) {
  return (
    <div
      className={cn(
        'p-6 bg-card-footer border-t border-card-border rounded-b-3xl',
        className,
      )}
      {...props}
    />
  );
}
