import type { Route } from './+types/blocks.view';
import { Suspense } from 'react';
import { Spinner } from 'components/selia/spinner';
import { blocks } from 'components/blocks';

export default function BlocksView({
  params: { path: name },
}: Route.ComponentProps) {
  if (!blocks[name as keyof typeof blocks]) {
    return <div>Block not found</div>;
  }

  const { component: Component } = blocks[name as keyof typeof blocks];

  return (
    <Suspense fallback={<Loader />}>
      <Component />
    </Suspense>
  );
}

function Loader() {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <Spinner className="size-10" />
    </div>
  );
}
