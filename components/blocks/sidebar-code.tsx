import {
  Sidebar,
  SidebarCollapsible,
  SidebarCollapsiblePanel,
  SidebarCollapsibleTrigger,
  SidebarContent,
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
import { InputGroup, InputGroupAddon } from 'components/selia/input-group';
import {
  FileIcon,
  SearchIcon,
  PlusIcon,
  FolderPlusIcon,
  ChevronRightIcon,
} from 'lucide-react';
import { Input } from 'components/selia/input';
import { Kbd } from 'components/selia/kbd';

export default function SidebarCode() {
  return (
    <Sidebar
      className="w-72 bg-card shadow-card rounded-xl fixed top-4 bottom-4 left-1/2 -translate-x-1/2"
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
