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
  GitBranchIcon,
  GitCommitIcon,
  GitMergeIcon,
  GitPullRequestIcon,
  TagIcon,
  BookIcon,
  PackageIcon,
  RocketIcon,
  AlertCircleIcon,
  WorkflowIcon,
  CloudIcon,
  StarIcon,
  ClockIcon,
  UploadIcon,
  DownloadIcon,
  ImageIcon,
  VideoIcon,
  MusicIcon,
  FileTextIcon,
  HomeIcon,
  UsersIcon,
  ShieldIcon,
  FolderUpIcon,
  ArrowRightIcon,
  MailIcon,
  InboxIcon,
  SendIcon,
  PaperclipIcon,
  FilterIcon,
  FolderOpenIcon,
  AlertTriangleIcon,
  CheckCircleIcon,
  HelpCircleIcon,
} from 'lucide-react';
import {
  Dropdown,
  DropdownContent,
  DropdownGroup,
  DropdownGroupLabel,
  DropdownItem,
  DropdownRadioGroup,
  DropdownRadioItem,
  DropdownSeparator,
  DropdownTrigger,
} from 'components/selia/dropdown';
import { Avatar, AvatarFallback, AvatarImage } from 'components/selia/avatar';
import { InputGroup, InputGroupAddon } from 'components/selia/input-group';
import { Input } from 'components/selia/input';
import { Kbd } from 'components/selia/kbd';
import { cn } from 'lib/utils';
import { Button } from 'components/selia/button';
import { Badge } from 'components/selia/badge';
import {
  Item,
  ItemAction,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from 'components/selia/item';
import { IconBox } from 'components/selia/icon-box';

export default function Playground() {
  return (
    <div className="flex h-dvh gap-8 p-10">
      <Sidebar
        className={cn('w-72 h-full bg-card shadow-card rounded-xl')}
        size="compact"
      >
        <SidebarHeader>
          <SidebarLogo>
            <img src="/selia.png" alt="Selia" className="size-8" />
            <span className="font-semibold">Code Editor</span>
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
      </Sidebar>

      <Sidebar
        className={cn('w-72 h-full bg-card shadow-card rounded-xl')}
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

      <Sidebar
        className={cn('w-72 h-full bg-card shadow-card rounded-xl')}
        size="compact"
      >
        <SidebarHeader>
          <SidebarLogo>
            <img src="/selia.png" alt="Selia" className="size-8" />
            <div className="flex flex-col">
              <span className="font-semibold text-base">Git</span>
              <span className="text-sm text-muted">nauvalazhar/selia</span>
            </div>
          </SidebarLogo>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            <SidebarGroup>
              <SidebarList>
                <SidebarItem>
                  <SidebarItemButton active>
                    <CodeIcon />
                    Code
                  </SidebarItemButton>
                </SidebarItem>
                <SidebarItem>
                  <SidebarItemButton>
                    <AlertCircleIcon />
                    Issues
                    <Badge className="ml-auto">12</Badge>
                  </SidebarItemButton>
                </SidebarItem>
                <SidebarItem>
                  <SidebarItemButton>
                    <GitCommitIcon />
                    Commits
                  </SidebarItemButton>
                </SidebarItem>
                <SidebarItem>
                  <SidebarItemButton>
                    <GitBranchIcon />
                    Branches
                  </SidebarItemButton>
                </SidebarItem>
                <SidebarItem>
                  <SidebarItemButton>
                    <GitPullRequestIcon />
                    Merge Requests
                    <Badge className="ml-auto">3</Badge>
                  </SidebarItemButton>
                </SidebarItem>
                <SidebarItem>
                  <SidebarItemButton>
                    <TagIcon />
                    Tags
                  </SidebarItemButton>
                </SidebarItem>
                <SidebarItem>
                  <SidebarItemButton>
                    <BookIcon />
                    Wiki
                  </SidebarItemButton>
                </SidebarItem>
                <SidebarItem>
                  <SidebarItemButton>
                    <WorkflowIcon />
                    CI/CD
                  </SidebarItemButton>
                </SidebarItem>
                <SidebarItem>
                  <SidebarItemButton>
                    <PackageIcon />
                    Releases
                  </SidebarItemButton>
                </SidebarItem>
                <SidebarItem>
                  <SidebarItemButton>
                    <RocketIcon />
                    Deployments
                  </SidebarItemButton>
                </SidebarItem>
              </SidebarList>
            </SidebarGroup>
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter>
          <SidebarMenu>
            <SidebarGroup>
              <SidebarGroupTitle>Settings</SidebarGroupTitle>
              <SidebarList>
                <SidebarItem>
                  <SidebarItemButton>
                    <SettingsIcon />
                    General
                  </SidebarItemButton>
                </SidebarItem>
                <SidebarItem>
                  <SidebarItemButton>
                    <UserIcon />
                    Members
                  </SidebarItemButton>
                </SidebarItem>
                <SidebarItem>
                  <SidebarItemButton>
                    <ShareIcon />
                    Integrations
                  </SidebarItemButton>
                </SidebarItem>
              </SidebarList>
            </SidebarGroup>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>

      <Sidebar
        className={cn('w-72 h-full bg-card shadow-card rounded-xl')}
        size="compact"
      >
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
          <Item direction="column" className="mb-4">
            <ItemMedia>
              <IconBox variant="primary">
                <RocketIcon />
              </IconBox>
            </ItemMedia>
            <ItemContent>
              <ItemTitle>Upgrade Storage</ItemTitle>
              <ItemDescription>
                Upgrade your storage to 15GB for $10/month.
              </ItemDescription>
            </ItemContent>
            <ItemAction>
              <Button variant="primary" size="sm">
                Upgrade
                <ArrowRightIcon />
              </Button>
            </ItemAction>
          </Item>
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

      <Sidebar
        className={cn('w-72 h-full bg-card shadow-card rounded-xl')}
        size="compact"
      >
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
                <Dropdown>
                  <DropdownTrigger
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
                  <DropdownContent className="w-(--anchor-width)">
                    <DropdownItem>
                      <UserIcon />
                      Profile
                    </DropdownItem>
                    <DropdownItem>
                      <SettingsIcon />
                      Settings
                    </DropdownItem>
                    <DropdownItem>
                      <HelpCircleIcon />
                      Help
                    </DropdownItem>
                    <DropdownSeparator />
                    <DropdownGroup>
                      <DropdownGroupLabel>Switch Account</DropdownGroupLabel>
                      <DropdownRadioGroup defaultValue="rizal">
                        <DropdownRadioItem value="rizal" variant="alternate">
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
                        </DropdownRadioItem>
                        <DropdownRadioItem value="nauval" variant="alternate">
                          <Avatar size="sm">
                            <AvatarImage
                              src="https://pbs.twimg.com/profile_images/1460906228389867522/WxSzgWSs_400x400.jpg"
                              alt="Avatar"
                            />
                            <AvatarFallback>NA</AvatarFallback>
                          </Avatar>
                          <div className="flex flex-col">
                            <span className="font-medium">Nauval Azhar</span>
                            <span className="text-sm text-muted">
                              nauval@azhar.com
                            </span>
                          </div>
                        </DropdownRadioItem>
                      </DropdownRadioGroup>
                    </DropdownGroup>
                    <DropdownSeparator />
                    <DropdownItem className="text-danger *:[svg]:text-danger">
                      <LogOutIcon />
                      Log Out
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
