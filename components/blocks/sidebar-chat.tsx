import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupTitle,
  SidebarHeader,
  SidebarItem,
  SidebarItemButton,
  SidebarItemAction,
  SidebarList,
  SidebarLogo,
  SidebarMenu,
} from 'components/selia/sidebar';
import {
  SearchIcon,
  PlusIcon,
  StoreIcon,
  HardDriveIcon,
  CodeSquareIcon,
  FolderIcon,
  EllipsisIcon,
  PencilIcon,
  ArchiveIcon,
  TrashIcon,
  ShareIcon,
  PinIcon,
  ChevronsUpDownIcon,
  LogOutIcon,
  SparklesIcon,
  PaletteIcon,
  SettingsIcon,
} from 'lucide-react';
import { Button } from 'components/selia/button';
import {
  Menu,
  MenuTrigger,
  MenuPopup,
  MenuItem,
  MenuSeparator,
} from 'components/selia/menu';
import { Avatar, AvatarFallback, AvatarImage } from 'components/selia/avatar';
import { SidebarCloseIcon } from 'lucide-react';

export default function SidebarChat() {
  return (
    <Sidebar
      className="w-72 bg-card shadow-card rounded-xl fixed top-4 bottom-4 left-1/2 -translate-x-1/2"
      size="compact"
    >
      <SidebarHeader>
        <div className="flex items-center justify-between">
          <SidebarLogo>
            <img src="/selia.png" alt="Selia" className="size-8" />
            <span className="font-semibold text-lg">Chat</span>
          </SidebarLogo>
          <Button variant="secondary-plain" size="sm-icon">
            <SidebarCloseIcon />
          </Button>
        </div>
        <SidebarMenu className="mt-4.5">
          <Button variant="primary" block>
            <PlusIcon />
            New Chat
          </Button>
          <SidebarGroup>
            <SidebarList>
              <SidebarItem>
                <SidebarItemButton>
                  <SearchIcon />
                  Search
                </SidebarItemButton>
              </SidebarItem>
              <SidebarItem>
                <SidebarItemButton>
                  <StoreIcon />
                  Marketplace
                </SidebarItemButton>
              </SidebarItem>
              <SidebarItem>
                <SidebarItemButton>
                  <HardDriveIcon />
                  Storage
                </SidebarItemButton>
              </SidebarItem>
              <SidebarItem>
                <SidebarItemButton>
                  <CodeSquareIcon />
                  Artifacts
                </SidebarItemButton>
              </SidebarItem>
            </SidebarList>
          </SidebarGroup>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          <SidebarGroup>
            <SidebarGroupTitle>Projects</SidebarGroupTitle>
            <SidebarList>
              <SidebarItem>
                <SidebarItemButton>
                  <FolderIcon />
                  Programming
                </SidebarItemButton>
              </SidebarItem>
              <SidebarItem>
                <SidebarItemButton>
                  <FolderIcon />
                  Design
                </SidebarItemButton>
              </SidebarItem>
              <SidebarItem>
                <SidebarItemButton>
                  <PlusIcon />
                  New Project
                </SidebarItemButton>
              </SidebarItem>
            </SidebarList>
          </SidebarGroup>
          <SidebarGroup>
            <SidebarGroupTitle>Recent</SidebarGroupTitle>
            <SidebarList>
              {recentChats.map((chat, index) => (
                <SidebarItem key={index}>
                  <SidebarItemButton active={index === 0}>
                    {chat.pinned && <PinIcon />}
                    <span className="truncate flex-1 text-left">
                      {chat.title}
                    </span>
                  </SidebarItemButton>
                  <SidebarItemAction showOnHover>
                    <Menu>
                      <MenuTrigger className="text-foreground size-full flex justify-center items-center">
                        <EllipsisIcon />
                      </MenuTrigger>
                      <MenuPopup className="w-52">
                        <MenuItem>
                          <PinIcon />
                          Pin
                        </MenuItem>
                        <MenuItem>
                          <ShareIcon />
                          Share
                        </MenuItem>
                        <MenuItem>
                          <PencilIcon />
                          Rename
                        </MenuItem>
                        <MenuItem>
                          <ArchiveIcon />
                          Archive
                        </MenuItem>
                        <MenuSeparator />
                        <MenuItem className="text-danger *:[svg]:text-danger">
                          <TrashIcon />
                          Delete
                        </MenuItem>
                      </MenuPopup>
                    </Menu>
                  </SidebarItemAction>
                </SidebarItem>
              ))}
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
                  nativeButton={false}
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
                        <span className="text-sm text-muted">Free plan</span>
                      </div>
                      <ChevronsUpDownIcon className="ml-auto" />
                    </SidebarItemButton>
                  }
                />
                <MenuPopup className="w-(--anchor-width)" side="top">
                  <MenuItem>
                    <SparklesIcon />
                    Upgrade Plan
                  </MenuItem>
                  <MenuItem>
                    <PaletteIcon />
                    Personalization
                  </MenuItem>
                  <MenuItem>
                    <SettingsIcon />
                    Settings
                  </MenuItem>
                  <MenuSeparator />
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

const recentChats = [
  { title: 'Atomic CSS vs Utility-first CSS', pinned: true },
  { title: 'React Server Components basic example', pinned: true },
  { title: 'Next.js dynamic routing gotchas', pinned: false },
  { title: 'Better folder structure for reusable UI', pinned: false },
  { title: 'State management with Zustand pattern', pinned: false },
  { title: 'Collapsible sidebar accessibility best practices', pinned: false },
  { title: 'Optimizing React rendering performance', pinned: false },
  { title: 'Dark mode implementation overview', pinned: false },
  { title: 'Vite vs Webpack build speeds', pinned: false },
  { title: 'Shared form validation rules in React', pinned: false },
  { title: 'Comparing tRPC and REST for API design', pinned: false },
  { title: 'Tips for CSS-in-JS migration', pinned: false },
  { title: 'React context and prop drilling explained', pinned: false },
  { title: 'Keyboard shortcuts in web apps', pinned: false },
  { title: 'TypeScript generics for UI components', pinned: false },
  { title: 'Testing React components with RTL', pinned: false },
  { title: 'Deploying fullstack apps on Vercel', pinned: false },
  { title: 'Animating list reordering in Framer Motion', pinned: false },
  { title: 'Responsive design with Tailwind CSS', pinned: false },
  { title: 'Handling errors in async React flows', pinned: false },
  { title: 'Managing complex state with reducers', pinned: false },
  { title: 'Component-driven design workflows', pinned: false },
  { title: 'Integration testing in monorepos', pinned: false },
  { title: 'Mocking API responses for frontend dev', pinned: false },
];
