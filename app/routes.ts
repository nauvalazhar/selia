import {
  type RouteConfig,
  index,
  layout,
  route,
} from '@react-router/dev/routes';
import { flatRoutes } from '@react-router/fs-routes';

export default [
  layout('routes/layout.tsx', [
    index('routes/_index.tsx'),
    layout('routes/docs.tsx', [route('docs/:path', 'routes/docs.view.tsx')]),
    route('blocks', 'routes/blocks.tsx'),
  ]),
  route('block/:path', 'routes/blocks.view.tsx'),
  route('playground', 'routes/playground.tsx'),
] satisfies RouteConfig;

// export default flatRoutes();
