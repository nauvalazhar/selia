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
  PlusIcon,
  SettingsIcon,
  ShoppingBagIcon,
  TagsIcon,
  UserIcon,
} from 'lucide-react';
import { Menu, MenuPopup, MenuItem, MenuTrigger } from 'components/selia/menu';
import { Avatar, AvatarFallback, AvatarImage } from 'components/selia/avatar';

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
              <SidebarItem>
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
              </SidebarItem>
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
              <Menu>
                <MenuTrigger
                  data-slot="sidebar-item-button"
                  render={
                    <SidebarItemButton>
                      <Avatar size="sm">
                        <AvatarImage
                          src="https://pbs.twimg.com/profile_images/1881314507865411584/aXlN8o5e_400x400.jpg"
                          alt="Avatar"
                        />
                        <AvatarFallback>RF</AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col">
                        <span className="font-medium">Rizal Fakhri</span>
                        <span className="text-sm text-muted">
                          rizal@yayan.com
                        </span>
                      </div>
                      <ChevronsUpDownIcon className="ml-auto" />
                    </SidebarItemButton>
                  }
                />
                <MenuPopup className="w-(--anchor-width)" side="top">
                  <MenuItem>
                    <UserIcon />
                    Profile
                  </MenuItem>
                  <MenuItem>
                    <SettingsIcon />
                    Settings
                  </MenuItem>
                  <MenuItem>
                    <LogOutIcon />
                    Logout
                  </MenuItem>
                </MenuPopup>
              </Menu>
            </SidebarItem>
          </SidebarList>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
