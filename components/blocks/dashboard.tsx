import {
  Sidebar,
  SidebarCollapsible,
  SidebarCollapsibleTrigger,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupTitle,
  SidebarHeader,
  SidebarItem,
  SidebarList,
  SidebarLogo,
  SidebarMenu,
  SidebarSubmenu,
} from 'components/selia/sidebar';
import {
  ArrowRightCircleIcon,
  ArrowRightIcon,
  ChartAreaIcon,
  ChartPieIcon,
  ChevronsUpDownIcon,
  ClockIcon,
  EyeIcon,
  HomeIcon,
  LogOutIcon,
  MenuIcon,
  Package2Icon,
  PlusIcon,
  SearchIcon,
  SettingsIcon,
  ShoppingBagIcon,
  SidebarCloseIcon,
  SidebarOpenIcon,
  TagsIcon,
  User2Icon,
  UserIcon,
  Users2Icon,
} from 'lucide-react';
import {
  Dropdown,
  DropdownContent,
  DropdownItem,
  DropdownTrigger,
} from 'components/selia/dropdown';
import { Avatar, AvatarFallback, AvatarImage } from 'components/selia/avatar';
import { Badge } from 'components/selia/badge';
import { Button } from 'components/selia/button';
import { Heading } from 'components/selia/heading';
import { useState } from 'react';
import { cn } from 'lib/utils';
import {
  Card,
  CardBody,
  CardDescription,
  CardFooter,
  CardHeader,
  CardHeaderAction,
  CardTitle,
} from 'components/selia/card';
import { IconBox } from 'components/selia/icon-box';
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
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectList,
  SelectTrigger,
  SelectValue,
} from 'components/selia/select';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from 'components/selia/table';
import { Input } from 'components/selia/input';
import { InputGroup, InputGroupAddon } from 'components/selia/input-group';

const data = [
  {
    name: 'Mon',
    orders: 800,
  },
  {
    name: 'Tue',
    orders: 1250,
  },
  {
    name: 'Wed',
    orders: 1120,
  },
  {
    name: 'Thu',
    orders: 1500,
  },
  {
    name: 'Fri',
    orders: 1850,
  },
  {
    name: 'Sat',
    orders: 1420,
  },
  {
    name: 'Sun',
    orders: 1700,
  },
];

export default function Dashboard() {
  return (
    <Layout sidebar={<AppSidebar />}>
      <div className="grid grid-cols-4 gap-4">
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
      <div className="flex gap-4">
        <div className="w-8/12">
          <Card>
            <CardHeader>
              <CardTitle>Sales</CardTitle>
              <CardHeaderAction>
                <Select defaultValue="Last Week">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectList>
                      <SelectItem value="Last Week">Last Week</SelectItem>
                      <SelectItem value="Last Month">Last Month</SelectItem>
                      <SelectItem value="Last Year">Last Year</SelectItem>
                    </SelectList>
                  </SelectContent>
                </Select>
              </CardHeaderAction>
            </CardHeader>
            <CardBody>
              <div
                className={cn(
                  'w-full h-[480px] [&_*]:outline-none',
                  '[&_.recharts-cartesian-axis-tick-value]:text-sm [&_.recharts-cartesian-axis-tick-value]:fill-dimmed',
                )}
              >
                <ResponsiveContainer>
                  <AreaChart
                    data={data}
                    margin={{
                      top: 8,
                      right: 0,
                      left: 20,
                      bottom: 0,
                    }}
                  >
                    <defs>
                      <linearGradient
                        id="colorSeries1"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="5%"
                          stopColor="#60a5fa"
                          stopOpacity={0.38}
                        />
                        <stop
                          offset="95%"
                          stopColor="#60a5fa"
                          stopOpacity={0.08}
                        />
                      </linearGradient>
                      <linearGradient
                        id="colorSeries2"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="5%"
                          stopColor="var(--color-primary)"
                          stopOpacity={0.25}
                        />
                        <stop
                          offset="95%"
                          stopColor="var(--color-primary)"
                          stopOpacity={0.07}
                        />
                      </linearGradient>
                    </defs>
                    <CartesianGrid
                      vertical={false}
                      stroke="var(--color-separator)"
                    />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} />
                    <YAxis axisLine={false} width={32} tickLine={false} />
                    <Tooltip
                      contentStyle={{
                        borderRadius: 'var(--radius)',
                        boxShadow: '0 3px 8px rgba(0,0,0,0.08)',
                        background: 'var(--color-popover)',
                        border: 'none',
                      }}
                      itemStyle={{
                        color: 'var(--color-muted)',
                        fontSize: 'var(--text-sm)',
                        display: 'flex',
                      }}
                      labelStyle={{
                        color: 'var(--color-foreground)',
                        fontSize: 'var(--text-sm)',
                        fontWeight: 600,
                        marginBottom: 4,
                      }}
                      cursor={false}
                    />
                    <Area
                      type="monotone"
                      dataKey="orders"
                      name="Orders"
                      stroke="var(--color-primary)"
                      fillOpacity={1}
                      fill="url(#colorSeries2)"
                      strokeWidth={2}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardBody>
          </Card>
        </div>
        <div className="w-4/12">
          <Card>
            <CardHeader>
              <CardTitle>Best Selling</CardTitle>
            </CardHeader>
            <CardBody>
              <Stack>
                <Item render={<a href="#" />}>
                  <ItemMedia>
                    <img
                      src="https://images.unsplash.com/photo-1545127398-14699f92334b"
                      alt="Product"
                    />
                  </ItemMedia>
                  <ItemContent>
                    <ItemTitle>Golden Beats Headphones</ItemTitle>
                    <ItemDescription>$120.00</ItemDescription>
                  </ItemContent>
                  <ItemMeta className="ml-auto">40 sales</ItemMeta>
                </Item>
                <Separator />
                <Item render={<a href="#" />}>
                  <ItemMedia>
                    <img
                      src="https://images.unsplash.com/photo-1516962126636-27ad087061cc"
                      alt="Product"
                    />
                  </ItemMedia>
                  <ItemContent>
                    <ItemTitle>Polaroid Pronto 600 Instant Camera</ItemTitle>
                    <ItemDescription>$730.00</ItemDescription>
                  </ItemContent>
                  <ItemMeta className="ml-auto">40 sales</ItemMeta>
                </Item>
                <Separator />
                <Item render={<a href="#" />}>
                  <ItemMedia>
                    <img
                      src="https://images.unsplash.com/photo-1549482199-bc1ca6f58502"
                      alt="Product"
                    />
                  </ItemMedia>
                  <ItemContent>
                    <ItemTitle>Black Leather Strap Smartwatch</ItemTitle>
                    <ItemDescription>$600.00</ItemDescription>
                  </ItemContent>
                  <ItemMeta className="ml-auto">12 sales</ItemMeta>
                </Item>
                <Separator />
                <Item render={<a href="#" />}>
                  <ItemMedia>
                    <img
                      src="https://images.unsplash.com/photo-1619008054959-921a896885c7"
                      alt="Product"
                    />
                  </ItemMedia>
                  <ItemContent>
                    <ItemTitle>DJI Remote Controller</ItemTitle>
                    <ItemDescription>$350.00</ItemDescription>
                  </ItemContent>
                  <ItemMeta className="ml-auto">21 sales</ItemMeta>
                </Item>
                <Separator />
                <Item render={<a href="#" />}>
                  <ItemMedia>
                    <img
                      src="https://images.unsplash.com/photo-1605034313761-73ea4a0cfbf3"
                      alt="Product"
                    />
                  </ItemMedia>
                  <ItemContent>
                    <ItemTitle>PUMA Suede Classic Grey Sneakers</ItemTitle>
                    <ItemDescription>$120.00</ItemDescription>
                  </ItemContent>
                  <ItemMeta className="ml-auto">28 sales</ItemMeta>
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

function Layout({
  children,
  sidebar,
}: {
  children: React.ReactNode;
  sidebar: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  function handleSidebarOpen() {
    setSidebarOpen(!sidebarOpen);
  }

  return (
    <div>
      <div
        className={cn(
          'fixed top-0 w-72 h-dvh *:h-full transition-all',
          sidebarOpen ? 'left-0' : '-left-full',
        )}
      >
        {sidebar}
      </div>
      <main className={cn('transition-all', sidebarOpen ? 'ml-72' : 'ml-0')}>
        <nav
          className={cn(
            'h-16 flex items-center gap-2.5',
            sidebarOpen ? 'pr-2.5' : 'px-2.5',
          )}
        >
          <Button
            variant="secondary-plain"
            size="sm-icon"
            onClick={handleSidebarOpen}
          >
            {sidebarOpen ? <SidebarCloseIcon /> : <SidebarOpenIcon />}
          </Button>
          <Heading size="sm">Dashboard</Heading>
        </nav>
        <div
          className={cn(
            'min-h-[calc(100vh-4rem)] flex flex-col gap-6',
            sidebarOpen ? 'pr-4' : 'px-4',
          )}
        >
          {children}
        </div>
      </main>
    </div>
  );
}

function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarLogo>
          <img src="/selia.png" alt="Selia" className="size-8" />
          <span className="font-semibold">Selia</span>
        </SidebarLogo>
        <InputGroup className="mt-4 mb-2">
          <InputGroupAddon>
            <SearchIcon />
          </InputGroupAddon>
          <Input placeholder="Search" />
        </InputGroup>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          <SidebarGroup>
            <SidebarGroupTitle>Navigation</SidebarGroupTitle>
            <SidebarList>
              <SidebarItem href="#" active>
                <HomeIcon />
                Dashboard
              </SidebarItem>
              <SidebarItem href="#">
                <ShoppingBagIcon />
                Products
              </SidebarItem>
              <SidebarItem>
                <TagsIcon />
                Categories
              </SidebarItem>
              <SidebarItem>
                <Package2Icon />
                Orders
                <Badge className="ml-auto" size="sm" pill variant="info">
                  10
                </Badge>
              </SidebarItem>
              <SidebarCollapsible>
                <SidebarCollapsibleTrigger>
                  <ChartAreaIcon />
                  Reports
                </SidebarCollapsibleTrigger>
                <SidebarSubmenu>
                  <SidebarList>
                    <SidebarItem href="#">Sales</SidebarItem>
                    <SidebarItem href="#">Traffic</SidebarItem>
                    <SidebarItem href="#">Conversion</SidebarItem>
                  </SidebarList>
                </SidebarSubmenu>
              </SidebarCollapsible>
            </SidebarList>
          </SidebarGroup>
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarList>
            <Dropdown>
              <DropdownTrigger
                data-slot="sidebar-item"
                nativeButton={false}
                render={
                  <SidebarItem>
                    <Avatar size="sm">
                      <AvatarImage src="/avatar05.png" alt="Avatar" />
                      <AvatarFallback>BS</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                      <span className="font-medium">John Doe</span>
                      <span className="text-sm text-muted">
                        john.doe@example.com
                      </span>
                    </div>
                    <ChevronsUpDownIcon className="ml-auto" />
                  </SidebarItem>
                }
              />
              <DropdownContent className="w-(--anchor-width)" side="top">
                <DropdownItem>
                  <UserIcon />
                  Profile
                </DropdownItem>
                <DropdownItem>
                  <SettingsIcon />
                  Settings
                </DropdownItem>
                <DropdownItem>
                  <LogOutIcon />
                  Logout
                </DropdownItem>
              </DropdownContent>
            </Dropdown>
          </SidebarList>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}

function StatCard({
  icon,
  title,
  value,
  change,
  changeType,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  change: string;
  changeType: 'increase' | 'decrease';
}) {
  return (
    <Card>
      <CardBody>
        <IconBox size="xl" variant="info-subtle" className="mb-4">
          {icon}
        </IconBox>
        <Heading size="sm" className="font-medium text-dimmed">
          {title}
        </Heading>
        <Text className="text-4xl font-semibold mt-2">{value}</Text>
        <div className="flex items-center gap-2 mt-2">
          <Badge
            variant={
              changeType === 'increase' ? 'success-subtle' : 'danger-subtle'
            }
            className="mt-2"
          >
            {change}
          </Badge>
          <Text className="text-sm text-dimmed mt-2">
            {changeType === 'increase'
              ? 'Compared to last month'
              : 'Compared to last week'}
          </Text>
        </div>
      </CardBody>
    </Card>
  );
}
