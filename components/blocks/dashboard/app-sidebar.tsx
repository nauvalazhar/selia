import {
  Sidebar,
  SidebarCollapsible,
  SidebarCollapsiblePanel,
  SidebarCollapsibleTrigger,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupTitle,
  SidebarHeader,
  SidebarItem,
  SidebarItemButton,
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
              <SidebarItem>
                <SidebarItemButton active>
                  <HomeIcon />
                  Dashboard
                </SidebarItemButton>
              </SidebarItem>
              <SidebarItem>
                <SidebarItemButton>
                  <ShoppingBagIcon />
                  Products
                </SidebarItemButton>
              </SidebarItem>
              <SidebarItem>
                <SidebarItemButton>
                  <TagsIcon />
                  Categories
                </SidebarItemButton>
              </SidebarItem>
              <SidebarItem>
                <SidebarItemButton>
                  <Package2Icon />
                  Orders
                </SidebarItemButton>
              </SidebarItem>
              <SidebarCollapsible>
                <SidebarCollapsibleTrigger
                  render={
                    <SidebarItemButton>
                      <ChartAreaIcon />
                      Reports
                    </SidebarItemButton>
                  }
                />
                <SidebarCollapsiblePanel>
                  <SidebarSubmenu>
                    <SidebarList>
                      <SidebarItem>
                        <SidebarItemButton>Sales</SidebarItemButton>
                      </SidebarItem>
                      <SidebarItem>
                        <SidebarItemButton>Traffic</SidebarItemButton>
                      </SidebarItem>
                      <SidebarItem>
                        <SidebarItemButton>Conversion</SidebarItemButton>
                      </SidebarItem>
                    </SidebarList>
                  </SidebarSubmenu>
                </SidebarCollapsiblePanel>
              </SidebarCollapsible>
            </SidebarList>
          </SidebarGroup>
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarList>
            <SidebarItem>
              <Dropdown>
                <DropdownTrigger
                  data-slot="sidebar-item-button"
                  nativeButton={false}
                  render={
                    <SidebarItemButton className="border border-border">
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
                    </SidebarItemButton>
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
            </SidebarItem>
          </SidebarList>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
