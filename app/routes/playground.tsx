import { Button } from 'components/selia/button';
import { Pagination, PaginationItem } from 'components/selia/pagination';
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
  BookIcon,
  ChartAreaIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  HelpCircleIcon,
  HomeIcon,
  LifeBuoyIcon,
  LogOutIcon,
  MessageCircleIcon,
  MoreHorizontalIcon,
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
import { useRef } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from 'components/selia/avatar';
import { Chip } from 'components/selia/chip';

export default function Playground() {
  const anchorRef = useRef<HTMLAnchorElement>(null);

  return (
    <div className="flex items-center justify-center h-screen gap-4">
      <Sidebar className="w-64 fixed top-0 left-0 bottom-0 border-r border-border00">
        <SidebarHeader>
          <SidebarLogo>
            <div className="size-8 rounded-xl bg-gradient-primary text-white flex items-center justify-center">
              S
            </div>
            <span className="font-semibold">Selia</span>
          </SidebarLogo>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            <SidebarGroup>
              <SidebarGroupTitle>Navigation</SidebarGroupTitle>
              <SidebarGroupAction>
                <button>
                  <PlusIcon className="size-5" />
                </button>
              </SidebarGroupAction>
              <SidebarList>
                <SidebarItem href="#">
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
                  <Chip className="ml-auto" size="sm" pill variant="info">
                    10
                  </Chip>
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
            <SidebarGroup>
              <SidebarGroupTitle>Support</SidebarGroupTitle>
              <SidebarList>
                <SidebarItem href="#">
                  <MessageCircleIcon />
                  Tickets
                </SidebarItem>
                <SidebarItem href="#">
                  <HelpCircleIcon />
                  FAQ
                </SidebarItem>
              </SidebarList>
            </SidebarGroup>
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter>
          <SidebarMenu>
            <SidebarList>
              <SidebarItem href="#">
                <BookIcon />
                Documentation
              </SidebarItem>
              <SidebarItem href="#">
                <LifeBuoyIcon />
                Support
              </SidebarItem>

              <Dropdown>
                <DropdownTrigger
                  render={
                    <SidebarItem href="#" className="mt-2">
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
                      <ChevronRightIcon />
                    </SidebarItem>
                  }
                />
                <DropdownContent className="w-40" side="right">
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
    </div>
  );
}
