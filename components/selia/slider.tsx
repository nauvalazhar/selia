'use client';

import { Slider as BaseSlider } from '@base-ui/react/slider';
import { cn } from '#utils';

export function Slider({
  className,
  children,
  ...props
}: React.ComponentProps<typeof BaseSlider.Root>) {
  return (
    <BaseSlider.Root data-slot="slider" {...props}>
      <BaseSlider.Control className={cn('touch-none select-none', className)}>
        <BaseSlider.Track className="h-1.5 w-full rounded-full bg-track">
          <BaseSlider.Indicator className="rounded-full bg-primary" />
          {children}
        </BaseSlider.Track>
      </BaseSlider.Control>
    </BaseSlider.Root>
  );
}

export function SliderThumb({
  className,
  ...props
}: React.ComponentProps<typeof BaseSlider.Thumb>) {
  return (
    <BaseSlider.Thumb
      data-slot="slider-thumb"
      className={cn(
        'size-4 bg-white ring ring-primary rounded-full shadow',
        'has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-foreground',
      )}
      {...props}
    />
  );
}
