import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbButton,
  BreadcrumbSeparator,
} from 'components/selia/breadcrumb';
import { Link } from 'react-router';

export default function BreadcrumbBasic() {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbButton render={<Link to="/" />}>Home</BreadcrumbButton>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbButton render={<Link to="/docs/introduction" />}>
            Docs
          </BreadcrumbButton>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbButton active>Breadcrumb</BreadcrumbButton>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
