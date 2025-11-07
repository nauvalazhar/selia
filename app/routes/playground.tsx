import { Badge } from 'components/selia/badge';
import { Button } from 'components/selia/button';
import {
  Card,
  CardBody,
  CardDescription,
  CardHeader,
  CardHeaderContent,
  CardTitle,
} from 'components/selia/card';
import { Chip } from 'components/selia/chip';
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
      </Card>
    </div>
  );
}
