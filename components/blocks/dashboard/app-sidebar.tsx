import {
  Sidebar,
  SidebarCollapsible,
  SidebarCollapsibleTrigger,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupTitle,
  SidebarHeader,
  SidebarItem,
  SidebarList,
  SidebarLogo,
  SidebarMenu,
  SidebarSubmenu,
} from 'components/selia/sidebar';
import {
  ChartAreaIcon,
  ChevronsUpDownIcon,
  HomeIcon,
  LogOutIcon,
  Package2Icon,
  SearchIcon,
  SettingsIcon,
  ShoppingBagIcon,
  TagsIcon,
  UserIcon,
} from 'lucide-react';
import {
  Dropdown,
  DropdownContent,
  DropdownItem,
  DropdownTrigger,
} from 'components/selia/dropdown';
import { Avatar, AvatarFallback, AvatarImage } from 'components/selia/avatar';
import { InputGroup, InputGroupAddon } from 'components/selia/input-group';
import { Input } from 'components/selia/input';
import { Kbd } from 'components/selia/kbd';

export function AppSidebar() {
  return (
    <Sidebar
      size="loose"
      className="bg-background xl:bg-transparent max-lg:border-r border-border"
    >
      <SidebarHeader>
        <SidebarLogo>
          <img src="/selia.png" alt="Selia" className="size-8" />
          <span className="font-semibold">Selia</span>
        </SidebarLogo>
        <InputGroup className="mt-4">
          <InputGroupAddon>
            <SearchIcon />
          </InputGroupAddon>
          <Input placeholder="Search" />
          <InputGroupAddon align="end">
            <Kbd>/</Kbd>
          </InputGroupAddon>
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
                  <SidebarItem className="border border-border">
                    <Avatar>
                      <AvatarImage src="/human01.jpg" alt="Avatar" />
                      <AvatarFallback>BS</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                      <span className="font-medium">Anna Thompson</span>
                      <span className="text-sm text-muted">
                        anna@example.com
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
