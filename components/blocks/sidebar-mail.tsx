import {
  Sidebar,
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
} from 'components/selia/sidebar';
import { Button } from 'components/selia/button';
import {
  PencilIcon,
  InboxIcon,
  StarIcon,
  ClockIcon,
  SendIcon,
  FileTextIcon,
  AlertTriangleIcon,
  TagIcon,
  FilterIcon,
  SettingsIcon,
  UserIcon,
  HelpCircleIcon,
  LogOutIcon,
  ChevronsUpDownIcon,
  PlusIcon,
} from 'lucide-react';
import { Badge } from 'components/selia/badge';
import {
  Menu,
  MenuTrigger,
  MenuPopup,
  MenuItem,
  MenuSeparator,
  MenuGroup,
  MenuGroupLabel,
  MenuRadioGroup,
  MenuRadioItem,
} from 'components/selia/menu';
import { Avatar, AvatarFallback, AvatarImage } from 'components/selia/avatar';
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from 'components/selia/item';

export default function SidebarMail() {
  return (
    <Sidebar className="w-72 bg-card shadow-card rounded-xl fixed top-4 bottom-4 left-1/2 -translate-x-1/2">
      <SidebarHeader>
        <SidebarLogo>
          <img src="/selia.png" alt="Selia" className="size-8" />
          <span className="font-semibold">Mail</span>
        </SidebarLogo>
        <Button variant="tertiary" block className="mt-4">
          <PencilIcon />
          Compose
        </Button>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          <SidebarGroup>
            <SidebarList>
              <SidebarItem>
                <SidebarItemButton active>
                  <InboxIcon />
                  Inbox
                  <Badge className="ml-auto">12</Badge>
                </SidebarItemButton>
              </SidebarItem>
              <SidebarItem>
                <SidebarItemButton>
                  <StarIcon />
                  Starred
                </SidebarItemButton>
              </SidebarItem>
              <SidebarItem>
                <SidebarItemButton>
                  <ClockIcon />
                  Snoozed
                </SidebarItemButton>
              </SidebarItem>
              <SidebarItem>
                <SidebarItemButton>
                  <SendIcon />
                  Sent
                </SidebarItemButton>
              </SidebarItem>
              <SidebarItem>
                <SidebarItemButton>
                  <FileTextIcon />
                  Drafts
                  <Badge className="ml-auto">3</Badge>
                </SidebarItemButton>
              </SidebarItem>
              <SidebarItem>
                <SidebarItemButton>
                  <AlertTriangleIcon />
                  Spam
                  <Badge className="ml-auto">5</Badge>
                </SidebarItemButton>
              </SidebarItem>
            </SidebarList>
          </SidebarGroup>
          <SidebarGroup>
            <SidebarGroupTitle>Labels</SidebarGroupTitle>
            <SidebarList>
              <SidebarItem>
                <SidebarItemButton>
                  <TagIcon />
                  Important
                </SidebarItemButton>
              </SidebarItem>
              <SidebarItem>
                <SidebarItemButton>
                  <TagIcon />
                  Work
                </SidebarItemButton>
              </SidebarItem>
              <SidebarItem>
                <SidebarItemButton>
                  <TagIcon />
                  Personal
                </SidebarItemButton>
              </SidebarItem>
              <SidebarItem>
                <SidebarItemButton>
                  <TagIcon />
                  Travel
                </SidebarItemButton>
              </SidebarItem>
              <SidebarItem>
                <SidebarItemButton>
                  <PlusIcon />
                  Create new label
                </SidebarItemButton>
              </SidebarItem>
            </SidebarList>
          </SidebarGroup>
          <SidebarGroup>
            <SidebarList>
              <SidebarItem>
                <SidebarItemButton>
                  <FilterIcon />
                  Filters
                </SidebarItemButton>
              </SidebarItem>
              <SidebarItem>
                <SidebarItemButton>
                  <SettingsIcon />
                  Settings
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
                    <SidebarItemButton className="border border-border">
                      <Avatar size="sm">
                        <AvatarImage
                          src="https://pbs.twimg.com/profile_images/1881314507865411584/aXlN8o5e_400x400.jpg"
                          alt="Avatar"
                        />
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
                <MenuPopup className="w-(--anchor-width)">
                  <MenuItem>
                    <UserIcon />
                    Profile
                  </MenuItem>
                  <MenuItem>
                    <SettingsIcon />
                    Settings
                  </MenuItem>
                  <MenuItem>
                    <HelpCircleIcon />
                    Help
                  </MenuItem>
                  <MenuSeparator />
                  <MenuGroup>
                    <MenuGroupLabel>Switch Account</MenuGroupLabel>
                    <MenuRadioGroup defaultValue="rizal">
                      <MenuRadioItem
                        value="rizal"
                        variant="alternate"
                        data-slot="menu-radio-item"
                        render={<Item variant="plain" />}
                      >
                        <ItemMedia>
                          <Avatar size="sm">
                            <AvatarImage
                              src="https://pbs.twimg.com/profile_images/1881314507865411584/aXlN8o5e_400x400.jpg"
                              alt="Avatar"
                            />
                            <AvatarFallback>RF</AvatarFallback>
                          </Avatar>
                        </ItemMedia>
                        <ItemContent>
                          <ItemTitle>Rizal Fakhri</ItemTitle>
                          <ItemDescription className="text-sm">
                            rizal@yayan.com
                          </ItemDescription>
                        </ItemContent>
                      </MenuRadioItem>
                      <MenuRadioItem
                        value="nauval"
                        variant="alternate"
                        render={<Item variant="plain" />}
                      >
                        <ItemMedia>
                          <Avatar size="sm">
                            <AvatarImage
                              src="https://pbs.twimg.com/profile_images/1460906228389867522/WxSzgWSs_400x400.jpg"
                              alt="Avatar"
                            />
                            <AvatarFallback>NA</AvatarFallback>
                          </Avatar>
                        </ItemMedia>
                        <ItemContent>
                          <ItemTitle>Nauval Azhar</ItemTitle>
                          <ItemDescription className="text-sm">
                            nauval@azhar.com
                          </ItemDescription>
                        </ItemContent>
                      </MenuRadioItem>
                    </MenuRadioGroup>
                  </MenuGroup>
                  <MenuSeparator />
                  <MenuItem className="text-danger *:[svg]:text-danger">
                    <LogOutIcon />
                    Log Out
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
