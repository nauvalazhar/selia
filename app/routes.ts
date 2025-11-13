import {
  type RouteConfig,
  index,
  layout,
  route,
} from '@react-router/dev/routes';
import { flatRoutes } from '@react-router/fs-routes';

export default flatRoutes() satisfies RouteConfig;
