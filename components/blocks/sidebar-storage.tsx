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
import {
  Menu,
  MenuTrigger,
  MenuPopup,
  MenuItem,
  MenuSeparator,
} from 'components/selia/menu';
import { Button } from 'components/selia/button';
import {
  PlusIcon,
  FolderIcon,
  UploadIcon,
  FolderUpIcon,
  FileIcon,
  HomeIcon,
  ClockIcon,
  ShareIcon,
  SettingsIcon,
  ShieldIcon,
  SparklesIcon,
} from 'lucide-react';

export default function SidebarStorage() {
  return (
    <Sidebar className="w-72 bg-card shadow-card rounded-xl fixed top-4 bottom-4 left-1/2 -translate-x-1/2">
      <SidebarHeader>
        <SidebarLogo>
          <img src="/selia.png" alt="Selia" className="size-8" />
          <span className="font-semibold">Storage</span>
        </SidebarLogo>
        <Menu>
          <MenuTrigger
            render={
              <Button variant="secondary" className="mt-4">
                <PlusIcon />
                New
              </Button>
            }
          />
          <MenuPopup className="min-w-40" align="start">
            <MenuItem>
              <FolderIcon />
              New Folder
            </MenuItem>
            <MenuItem>
              <FileIcon />
              New File
            </MenuItem>
            <MenuSeparator />
            <MenuItem>
              <UploadIcon />
              Upload File
            </MenuItem>
            <MenuItem>
              <FolderUpIcon />
              Upload Folder
            </MenuItem>
          </MenuPopup>
        </Menu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          <SidebarGroup>
            <SidebarList>
              <SidebarItem>
                <SidebarItemButton active>
                  <HomeIcon />
                  My Drive
                </SidebarItemButton>
              </SidebarItem>
              <SidebarItem>
                <SidebarItemButton>
                  <ClockIcon />
                  Recent
                </SidebarItemButton>
              </SidebarItem>
              <SidebarItem>
                <SidebarItemButton>
                  <ShareIcon />
                  Shared by me
                </SidebarItemButton>
              </SidebarItem>
            </SidebarList>
          </SidebarGroup>
          <SidebarGroup>
            <SidebarGroupTitle>Folders</SidebarGroupTitle>
            <SidebarList>
              <SidebarItem>
                <SidebarItemButton>
                  <FolderIcon />
                  Work
                </SidebarItemButton>
              </SidebarItem>
              <SidebarItem>
                <SidebarItemButton>
                  <FolderIcon />
                  Personal
                </SidebarItemButton>
              </SidebarItem>
              <SidebarItem>
                <SidebarItemButton>
                  <FolderIcon />
                  Projects
                </SidebarItemButton>
              </SidebarItem>
              <SidebarItem>
                <SidebarItemButton>
                  <FolderIcon />
                  Archive
                </SidebarItemButton>
              </SidebarItem>
            </SidebarList>
          </SidebarGroup>
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarGroup>
            <SidebarList>
              <SidebarItem>
                <SidebarItemButton>
                  <SettingsIcon />
                  Settings
                </SidebarItemButton>
              </SidebarItem>
              <SidebarItem>
                <SidebarItemButton>
                  <ShieldIcon />
                  Privacy
                </SidebarItemButton>
              </SidebarItem>
              <SidebarItem>
                <SidebarItemButton>
                  <SparklesIcon />
                  Upgrade Storage
                </SidebarItemButton>
              </SidebarItem>
            </SidebarList>
          </SidebarGroup>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
