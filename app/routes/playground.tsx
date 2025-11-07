import { Badge } from 'components/selia/badge';
import { Button } from 'components/selia/button';
import {
  Card,
  CardBody,
  CardDescription,
  CardFooter,
  CardHeader,
  CardHeaderContent,
  CardTitle,
} from 'components/selia/card';
import { Chip } from 'components/selia/chip';
import {
  Pagination,
  PaginationItem,
  PaginationLink,
  PaginationList,
} from 'components/selia/pagination';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableContainer,
  TableHead,
  TableHeader,
  TableRow,
} from 'components/selia/table';
import { ChevronLeft, ChevronRight, MoreHorizontalIcon } from 'lucide-react';

export default function Playground() {
  return (
    <div className="flex items-center justify-center h-screen gap-4">
      <Card>
        <CardHeader>
          <CardHeaderContent>
            <CardTitle>Users</CardTitle>
            <CardDescription>
              Manage users and their roles in this workspace.
            </CardDescription>
          </CardHeaderContent>
        </CardHeader>
        <CardBody>
          <TableContainer className="-m-6">
            <Table>
              <TableCaption>A list of users in the workspace.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>John Doe</TableCell>
                  <TableCell>john.doe@example.com</TableCell>
                  <TableCell>Admin</TableCell>
                  <TableCell>
                    <Badge variant="success">Active</Badge>
                  </TableCell>
                  <TableCell>
                    <Button variant="secondary" size="sm">
                      Edit
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Jane Doe</TableCell>
                  <TableCell>jane.doe@example.com</TableCell>
                  <TableCell>User</TableCell>
                  <TableCell>
                    <Badge variant="destructive">Blocked</Badge>
                  </TableCell>
                  <TableCell>
                    <Button variant="secondary" size="sm">
                      Edit
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Jim Beam</TableCell>
                  <TableCell>jim.beam@example.com</TableCell>
                  <TableCell>User</TableCell>
                  <TableCell>
                    <Badge variant="warning">Suspended</Badge>
                  </TableCell>
                  <TableCell>
                    <Button variant="secondary" size="sm">
                      Edit
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Jill Smith</TableCell>
                  <TableCell>jill.smith@example.com</TableCell>
                  <TableCell>User</TableCell>
                  <TableCell>
                    <Badge variant="info">Pending</Badge>
                  </TableCell>
                  <TableCell>
                    <Button variant="secondary" size="sm">
                      Edit
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </CardBody>
        <CardFooter className="text-center">
          <Pagination>
            <PaginationList>
              <PaginationItem>
                <PaginationLink disabled>
                  <ChevronLeft />
                  Previous
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink active>1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink>2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink>3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink>4</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink>
                  <MoreHorizontalIcon />
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink>
                  Next
                  <ChevronRight />
                </PaginationLink>
              </PaginationItem>
            </PaginationList>
          </Pagination>
        </CardFooter>
      </Card>
    </div>
  );
}
