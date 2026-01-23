import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbButton,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
} from 'components/selia/breadcrumb';
import { Button } from 'components/selia/button';
import { Menu, MenuItem, MenuPopup, MenuTrigger } from 'components/selia/menu';
import { Link } from 'react-router';

export default function BreadcrumbEllipsisMenuExample() {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbButton render={<Link to="/" />}>Home</BreadcrumbButton>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <Menu>
            <MenuTrigger
              render={
                <Button variant="plain" size="sm-icon">
                  <BreadcrumbEllipsis />
                </Button>
              }
            />
            <MenuPopup size="compact">
              <MenuItem>React</MenuItem>
              <MenuItem>Vue</MenuItem>
              <MenuItem>Svelte</MenuItem>
              <MenuItem>Solid</MenuItem>
            </MenuPopup>
          </Menu>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbButton render={<Link to="/docs/introduction" />}>
            Components
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
