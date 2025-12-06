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
  SidebarItemAction,
  SidebarItemButton,
  SidebarList,
  SidebarLogo,
  SidebarMenu,
  SidebarSubmenu,
} from 'components/selia/sidebar';
import {
  ArchiveIcon,
  ChevronRightIcon,
  ChevronsUpDownIcon,
  CodeIcon,
  CodeSquareIcon,
  EllipsisIcon,
  EllipsisVerticalIcon,
  FileIcon,
  FolderIcon,
  FolderPlusIcon,
  HardDriveIcon,
  LogOutIcon,
  MessageSquareIcon,
  PaletteIcon,
  PencilIcon,
  PinIcon,
  PlusIcon,
  SearchIcon,
  SettingsIcon,
  ShareIcon,
  SidebarCloseIcon,
  SparklesIcon,
  StoreIcon,
  TrashIcon,
  UserIcon,
} from 'lucide-react';
import {
  Dropdown,
  DropdownContent,
  DropdownItem,
  DropdownSeparator,
  DropdownTrigger,
} from 'components/selia/dropdown';
import { Avatar, AvatarFallback, AvatarImage } from 'components/selia/avatar';
import { InputGroup, InputGroupAddon } from 'components/selia/input-group';
import { Input } from 'components/selia/input';
import { Kbd } from 'components/selia/kbd';
import { cn } from 'lib/utils';
import { Button } from 'components/selia/button';

export default function Playground() {
  return (
    <div className="flex h-dvh gap-4 p-10">
      <Sidebar
        className={cn('w-72 h-full bg-card shadow-card rounded-xl')}
        size="compact"
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
              <SidebarGroupTitle>Opened</SidebarGroupTitle>
              <SidebarList>
                {openedFiles.map((file, index) => (
                  <SidebarItem key={file}>
                    <SidebarItemButton active={index === 0}>
                      <FileIcon />
                      {file}
                    </SidebarItemButton>
                  </SidebarItem>
                ))}
              </SidebarList>
            </SidebarGroup>
            <SidebarGroup>
              <SidebarGroupTitle>Files</SidebarGroupTitle>
              <SidebarGroupAction>
                <button>
                  <PlusIcon />
                </button>
                <button>
                  <FolderPlusIcon />
                </button>
              </SidebarGroupAction>
              <SidebarList>
                <FileTree tree={tree} />
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
                          <AvatarImage
                            src="https://pbs.twimg.com/profile_images/1881314507865411584/aXlN8o5e_400x400.jpg"
                            alt="Avatar"
                          />
                          <AvatarFallback>BS</AvatarFallback>
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

      <Sidebar
        className={cn('w-72 h-full bg-card shadow-card rounded-xl')}
        size="compact"
      >
        <SidebarHeader>
          <div className="flex items-center justify-between">
            <SidebarLogo>
              <img src="/selia.png" alt="Selia" className="size-8" />
              <span className="font-semibold text-lg">Selia</span>
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
                      <Dropdown>
                        <DropdownTrigger
                          className={cn(
                            'text-foreground size-full flex justify-center items-center',
                          )}
                        >
                          <EllipsisIcon />
                        </DropdownTrigger>
                        <DropdownContent className="w-52">
                          <DropdownItem>
                            <PinIcon />
                            Pin
                          </DropdownItem>
                          <DropdownItem>
                            <ShareIcon />
                            Share
                          </DropdownItem>
                          <DropdownItem>
                            <PencilIcon />
                            Rename
                          </DropdownItem>
                          <DropdownItem>
                            <ArchiveIcon />
                            Archive
                          </DropdownItem>
                          <DropdownSeparator />
                          <DropdownItem className="text-danger *:[svg]:text-danger">
                            <TrashIcon />
                            Delete
                          </DropdownItem>
                        </DropdownContent>
                      </Dropdown>
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
                <Dropdown>
                  <DropdownTrigger
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
                  <DropdownContent className="w-(--anchor-width)" side="top">
                    <DropdownItem>
                      <SparklesIcon />
                      Upgrade Plan
                    </DropdownItem>
                    <DropdownItem>
                      <PaletteIcon />
                      Personalization
                    </DropdownItem>
                    <DropdownItem>
                      <SettingsIcon />
                      Settings
                    </DropdownItem>
                    <DropdownSeparator />
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
    </div>
  );
}

function FileTree({ tree }: { tree?: Tree[] }) {
  if (!tree) return null;

  return (
    <>
      {tree.map((item) => {
        if (item.type === 'file') {
          return (
            <SidebarItem key={item.name}>
              <SidebarItemButton>
                <FileIcon />
                {item.name}
              </SidebarItemButton>
            </SidebarItem>
          );
        }

        return (
          <SidebarItem key={item.name}>
            <SidebarCollapsible defaultOpen>
              <SidebarCollapsibleTrigger
                data-slot="sidebar-item-button"
                render={
                  <SidebarItemButton
                    expandableIndicator={false}
                    className='data-panel-open:[&_[data-slot="expandable-indicator"]]:rotate-90'
                  >
                    <ChevronRightIcon data-slot="expandable-indicator" />
                    {item.name}
                  </SidebarItemButton>
                }
              />
              <SidebarCollapsiblePanel>
                <SidebarSubmenu>
                  <SidebarList>
                    <FileTree tree={item.children} />
                  </SidebarList>
                </SidebarSubmenu>
              </SidebarCollapsiblePanel>
            </SidebarCollapsible>
          </SidebarItem>
        );
      })}
    </>
  );
}

type Tree = {
  name: string;
  type: 'file' | 'folder';
  active?: boolean;
  children?: Tree[];
};

const tree: Tree[] = [
  {
    name: 'src',
    type: 'folder',
    children: [
      {
        name: 'components',
        type: 'folder',
        children: [
          { name: 'Button.tsx', type: 'file', active: true },
          { name: 'Header.tsx', type: 'file' },
          { name: 'Sidebar.tsx', type: 'file' },
        ],
      },
      {
        name: 'pages',
        type: 'folder',
        children: [
          { name: 'index.tsx', type: 'file' },
          { name: 'about.tsx', type: 'file' },
          {
            name: 'api',
            type: 'folder',
            children: [{ name: 'user.ts', type: 'file' }],
          },
        ],
      },
      { name: 'App.tsx', type: 'file' },
      { name: 'main.tsx', type: 'file' },
    ],
  },
  { name: 'package.json', type: 'file' },
  { name: 'tsconfig.json', type: 'file' },
  { name: 'README.md', type: 'file' },
];

const openedFiles = ['src/components/Button.tsx', 'src/pages/index.tsx'];

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
