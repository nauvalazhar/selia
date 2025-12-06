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
  ShareIcon,
  SettingsIcon,
  UserIcon,
  GitBranchIcon,
  GitCommitIcon,
  AlertCircleIcon,
  GitPullRequestIcon,
  TagIcon,
  CodeIcon,
  BookIcon,
  WorkflowIcon,
  PackageIcon,
  RocketIcon,
} from 'lucide-react';
import { Badge } from 'components/selia/badge';

export default function SidebarGit() {
  return (
    <Sidebar className="w-72 bg-card shadow-card rounded-xl fixed top-4 bottom-4 left-1/2 -translate-x-1/2">
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
  );
}
