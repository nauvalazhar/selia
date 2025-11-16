import {
  type RouteConfig,
  index,
  layout,
  route,
} from '@react-router/dev/routes';
import { flatRoutes } from '@react-router/fs-routes';

export default [
  index('routes/_index.tsx'),
  layout('routes/docs.tsx', [route('docs/:path', 'routes/docs.view.tsx')]),
] satisfies RouteConfig;

// export default flatRoutes();
