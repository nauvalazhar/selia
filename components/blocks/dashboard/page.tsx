import { Layout } from './layout';
import { AppSidebar } from './app-sidebar';
import { StatCard } from './stat-card';
import { Chart } from './chart';
import {
  ArrowRightCircleIcon,
  ArrowRightIcon,
  Package2Icon,
  ShoppingBagIcon,
  TagsIcon,
  Users2Icon,
} from 'lucide-react';
import { Badge } from 'components/selia/badge';
import { Button } from 'components/selia/button';
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardHeaderAction,
  CardTitle,
} from 'components/selia/card';
import { Text } from 'components/selia/text';
import { Stack } from 'components/selia/stack';
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemMeta,
  ItemTitle,
} from 'components/selia/item';
import { Separator } from 'components/selia/separator';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableHeader,
  TableRow,
} from 'components/selia/table';

export default function Dashboard() {
  return (
    <Layout sidebar={<AppSidebar />}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          icon={<ShoppingBagIcon />}
          title="Total Sales"
          value="$12,340"
          change="+8.2%"
          changeType="increase"
        />
        <StatCard
          icon={<Users2Icon />}
          title="Customers"
          value="3,210"
          change="+4.1%"
          changeType="increase"
        />
        <StatCard
          icon={<Package2Icon />}
          title="Orders"
          value="1,520"
          change="-2.3%"
          changeType="decrease"
        />
        <StatCard
          icon={<TagsIcon />}
          title="Revenue"
          value="$24,580"
          change="+6.9%"
          changeType="increase"
        />
      </div>
      <div className="flex gap-4 lg:flex-nowrap flex-wrap">
        <div className="w-full lg:w-8/12">
          <Chart />
        </div>
        <div className="w-full lg:w-4/12">
          <Card>
            <CardHeader>
              <CardTitle>Best Selling</CardTitle>
            </CardHeader>
            <CardBody>
              <Stack>
                <Item render={<a href="#" />} variant="plain">
                  <ItemMedia>
                    <img
                      src="https://images.unsplash.com/photo-1545127398-14699f92334b"
                      alt="Product"
                      className="size-11 rounded"
                    />
                  </ItemMedia>
                  <ItemContent>
                    <ItemTitle>Golden Beats Headphones</ItemTitle>
                    <ItemDescription>$120.00</ItemDescription>
                  </ItemContent>
                  <ItemMeta className="ml-auto shrink-0">40 sales</ItemMeta>
                </Item>
                <Separator />
                <Item render={<a href="#" />} variant="plain">
                  <ItemMedia>
                    <img
                      src="https://images.unsplash.com/photo-1516962126636-27ad087061cc"
                      alt="Product"
                      className="size-11 rounded"
                    />
                  </ItemMedia>
                  <ItemContent>
                    <ItemTitle>Polaroid Pronto 600 Instant Camera</ItemTitle>
                    <ItemDescription>$730.00</ItemDescription>
                  </ItemContent>
                  <ItemMeta className="ml-auto shrink-0">40 sales</ItemMeta>
                </Item>
                <Separator />
                <Item render={<a href="#" />} variant="plain">
                  <ItemMedia>
                    <img
                      src="https://images.unsplash.com/photo-1549482199-bc1ca6f58502"
                      alt="Product"
                      className="size-11 rounded"
                    />
                  </ItemMedia>
                  <ItemContent>
                    <ItemTitle>Black Leather Strap Smartwatch</ItemTitle>
                    <ItemDescription>$600.00</ItemDescription>
                  </ItemContent>
                  <ItemMeta className="ml-auto shrink-0">12 sales</ItemMeta>
                </Item>
                <Separator />
                <Item render={<a href="#" />} variant="plain">
                  <ItemMedia>
                    <img
                      src="https://images.unsplash.com/photo-1619008054959-921a896885c7"
                      alt="Product"
                      className="size-11 rounded"
                    />
                  </ItemMedia>
                  <ItemContent>
                    <ItemTitle>DJI Remote Controller</ItemTitle>
                    <ItemDescription>$350.00</ItemDescription>
                  </ItemContent>
                  <ItemMeta className="ml-auto shrink-0">21 sales</ItemMeta>
                </Item>
                <Separator />
                <Item render={<a href="#" />} variant="plain">
                  <ItemMedia>
                    <img
                      src="https://images.unsplash.com/photo-1605034313761-73ea4a0cfbf3"
                      alt="Product"
                      className="size-11 rounded"
                    />
                  </ItemMedia>
                  <ItemContent>
                    <ItemTitle>PUMA Suede Classic Grey Sneakers</ItemTitle>
                    <ItemDescription>$120.00</ItemDescription>
                  </ItemContent>
                  <ItemMeta className="ml-auto shrink-0">28 sales</ItemMeta>
                </Item>
              </Stack>
            </CardBody>
            <CardFooter>
              <Button variant="secondary" block size="lg">
                View All <ArrowRightCircleIcon />
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Recent Orders</CardTitle>
          <CardHeaderAction>
            <Button variant="secondary" render={<a href="#" />}>
              View All
              <ArrowRightIcon />
            </Button>
          </CardHeaderAction>
        </CardHeader>
        <CardBody>
          <TableContainer>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Order ID</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Total</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <a href="#">
                      <Text className="text-muted">5678</Text>
                    </a>
                  </TableCell>
                  <TableCell>
                    <a href="#">Jessica Pearson</a>
                  </TableCell>
                  <TableCell>
                    <a href="#">2025-06-01</a>
                  </TableCell>
                  <TableCell>
                    <a href="#">$532.44</a>
                  </TableCell>
                  <TableCell>
                    <a href="#">
                      <Badge variant="success">Completed</Badge>
                    </a>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <a href="#">
                      <Text className="text-muted">5683</Text>
                    </a>
                  </TableCell>
                  <TableCell>
                    <a href="#">Michael Ross</a>
                  </TableCell>
                  <TableCell>
                    <a href="#">2025-06-02</a>
                  </TableCell>
                  <TableCell>
                    <a href="#">$89.99</a>
                  </TableCell>
                  <TableCell>
                    <a href="#">
                      <Badge variant="warning">Pending</Badge>
                    </a>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <a href="#">
                      <Text className="text-muted">5690</Text>
                    </a>
                  </TableCell>
                  <TableCell>
                    <a href="#">Rachel Zane</a>
                  </TableCell>
                  <TableCell>
                    <a href="#">2025-06-04</a>
                  </TableCell>
                  <TableCell>
                    <a href="#">$250.00</a>
                  </TableCell>
                  <TableCell>
                    <a href="#">
                      <Badge variant="danger">Canceled</Badge>
                    </a>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <a href="#">
                      <Text className="text-muted">5765</Text>
                    </a>
                  </TableCell>
                  <TableCell>
                    <a href="#">Harvey Specter</a>
                  </TableCell>
                  <TableCell>
                    <a href="#">2025-06-06</a>
                  </TableCell>
                  <TableCell>
                    <a href="#">$1,732.10</a>
                  </TableCell>
                  <TableCell>
                    <a href="#">
                      <Badge variant="success">Completed</Badge>
                    </a>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <a href="#">
                      <Text className="text-muted">5892</Text>
                    </a>
                  </TableCell>
                  <TableCell>
                    <a href="#">Donna Paulsen</a>
                  </TableCell>
                  <TableCell>
                    <a href="#">2025-06-08</a>
                  </TableCell>
                  <TableCell>
                    <a href="#">$423.67</a>
                  </TableCell>
                  <TableCell>
                    <a href="#">
                      <Badge variant="info">Processing</Badge>
                    </a>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <a href="#">
                      <Text className="text-muted">5921</Text>
                    </a>
                  </TableCell>
                  <TableCell>
                    <a href="#">Larry Litt</a>
                  </TableCell>
                  <TableCell>
                    <a href="#">2025-06-09</a>
                  </TableCell>
                  <TableCell>
                    <a href="#">$205.49</a>
                  </TableCell>
                  <TableCell>
                    <a href="#">
                      <Badge variant="warning">Pending</Badge>
                    </a>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <a href="#">
                      <Text className="text-muted">6002</Text>
                    </a>
                  </TableCell>
                  <TableCell>
                    <a href="#">Katrina Bennett</a>
                  </TableCell>
                  <TableCell>
                    <a href="#">2025-06-10</a>
                  </TableCell>
                  <TableCell>
                    <a href="#">$1,225.00</a>
                  </TableCell>
                  <TableCell>
                    <a href="#">
                      <Badge variant="success">Completed</Badge>
                    </a>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </CardBody>
      </Card>
    </Layout>
  );
}
