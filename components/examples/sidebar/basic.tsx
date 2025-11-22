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
  ChartAreaIcon,
  ChevronsUpDownIcon,
  HomeIcon,
  LogOutIcon,
  Package2Icon,
  PlusIcon,
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
import { Badge } from 'components/selia/badge';

export default function SidebarBasicExample() {
  return (
    <Sidebar className="lg:w-72">
      <SidebarHeader>
        <SidebarLogo>
          <img src="/selia.png" alt="Selia" className="size-8" />
          <span className="font-semibold">Selia</span>
        </SidebarLogo>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          <SidebarGroup>
            <SidebarGroupTitle>Navigation</SidebarGroupTitle>
            <SidebarGroupAction>
              <button>
                <PlusIcon />
              </button>
            </SidebarGroupAction>
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
          <SidebarGroup>
            <SidebarGroupTitle>Settings</SidebarGroupTitle>
            <SidebarList>
              <SidebarItem href="#">
                <SettingsIcon />
                Settings
              </SidebarItem>
              <SidebarItem href="#">
                <UserIcon />
                Profile
              </SidebarItem>
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
