import {
  Sidebar,
  SidebarCollapsible,
  SidebarCollapsiblePanel,
  SidebarCollapsibleTrigger,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
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
          <SidebarGroup>
            <SidebarGroupTitle>Settings</SidebarGroupTitle>
            <SidebarList>
              <SidebarItem>
                <SidebarItemButton>
                  <SettingsIcon />
                  Settings
                </SidebarItemButton>
              </SidebarItem>
              <SidebarItem>
                <SidebarItemButton>
                  <UserIcon />
                  Profile
                </SidebarItemButton>
              </SidebarItem>
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
                    <SidebarItemButton>
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
