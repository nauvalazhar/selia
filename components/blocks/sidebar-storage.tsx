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
  Dropdown,
  DropdownTrigger,
  DropdownContent,
  DropdownItem,
  DropdownSeparator,
} from 'components/selia/dropdown';
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
        <Dropdown>
          <DropdownTrigger
            render={
              <Button variant="secondary" className="mt-4">
                <PlusIcon />
                New
              </Button>
            }
          />
          <DropdownContent className="min-w-40" align="start">
            <DropdownItem>
              <FolderIcon />
              New Folder
            </DropdownItem>
            <DropdownItem>
              <FileIcon />
              New File
            </DropdownItem>
            <DropdownSeparator />
            <DropdownItem>
              <UploadIcon />
              Upload File
            </DropdownItem>
            <DropdownItem>
              <FolderUpIcon />
              Upload Folder
            </DropdownItem>
          </DropdownContent>
        </Dropdown>
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
