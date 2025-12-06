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
  ChevronsUpDownIcon,
  CodeIcon,
  FolderIcon,
  LogOutIcon,
  MessageSquareIcon,
  PlusIcon,
  SettingsIcon,
  SparklesIcon,
  UserIcon,
} from 'lucide-react';
import {
  Dropdown,
  DropdownContent,
  DropdownItem,
  DropdownTrigger,
} from 'components/selia/dropdown';
import { Avatar, AvatarFallback, AvatarImage } from 'components/selia/avatar';

export default function SidebarChatbotExample() {
  return (
    <Sidebar className="lg:w-72" size="compact">
      <SidebarHeader>
        <SidebarLogo>
          <div className="size-8 rounded-lg bg-primary flex items-center justify-center">
            <SparklesIcon className="size-5 text-primary-foreground" />
          </div>
          <span className="font-semibold text-lg">Aura</span>
        </SidebarLogo>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          <SidebarGroup>
            <SidebarList>
              <SidebarItem>
                <SidebarItemButton>
                  <PlusIcon />
                  New chat
                </SidebarItemButton>
              </SidebarItem>
              <SidebarItem>
                <SidebarItemButton>
                  <MessageSquareIcon />
                  Conversations
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
                  <CodeIcon />
                  Code
                </SidebarItemButton>
              </SidebarItem>
            </SidebarList>
          </SidebarGroup>
          <SidebarGroup>
            <SidebarGroupTitle>Starred</SidebarGroupTitle>
            <SidebarList>
              {starredChats.map((chat, index) => (
                <SidebarItem key={index}>
                  <SidebarItemButton>
                    <span className="truncate flex-1">{chat}</span>
                  </SidebarItemButton>
                </SidebarItem>
              ))}
            </SidebarList>
          </SidebarGroup>
          <SidebarGroup>
            <SidebarGroupTitle>Recent</SidebarGroupTitle>
            <SidebarList>
              {recentChats.map((chat, index) => (
                <SidebarItem key={index}>
                  <SidebarItemButton active={index === 0}>
                    <span className="truncate flex-1 text-left">
                      {chat.title}
                    </span>
                  </SidebarItemButton>
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
                        <AvatarFallback>NA</AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col">
                        <span className="font-medium">Nauval</span>
                        <span className="text-sm text-muted">Free plan</span>
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

const starredChats = [
  "Front-End Engineer's UX Design Principles",
  'Benefits of Learning C as a First Language',
  'Differences Between Infrastructure Components',
];

const recentChats = [
  { title: 'Checking parent conditions in CSS' },
  { title: 'Extensible drag and drop form builder implementation' },
  { title: 'Hover state management untuk komponen interaktif' },
  { title: 'Darurat bencana banjir bandang di daerah pedesaan' },
  { title: 'Bencana alam sebagai perspektif perubahan iklim' },
  { title: 'Media sosial dan perubahan perilaku masyarakat' },
  { title: 'Ritual versus praktik agama komparatif' },
  { title: 'Nginx routing Laravel dan React deployment' },
  { title: 'Naming a label-value pair component' },
  { title: 'Design token naming and structure guidelines' },
  { title: 'Streaming dengan Suspense di React Server Components' },
  { title: 'Excluding components from dark mode styling' },
  { title: 'Mengatasi hydration error pada Next.js' },
];

