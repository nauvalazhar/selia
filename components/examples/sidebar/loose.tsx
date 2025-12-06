import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupTitle,
  SidebarHeader,
  SidebarItem,
  SidebarItemButton,
  SidebarList,
  SidebarLogo,
  SidebarMenu,
} from 'components/selia/sidebar';

export default function SidebarLooseExample() {
  return (
    <Sidebar className="lg:w-72 rounded-2xl border border-border" size="loose">
      <SidebarHeader>
        <SidebarLogo>
          <img src="/selia.png" alt="Selia" className="size-8" />
          <span className="font-semibold">Documentation</span>
        </SidebarLogo>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          <SidebarGroup>
            <SidebarGroupTitle>Prologue</SidebarGroupTitle>
            <SidebarList>
              <SidebarItem>
                <SidebarItemButton>Introduction</SidebarItemButton>
              </SidebarItem>
              <SidebarItem>
                <SidebarItemButton>Installation</SidebarItemButton>
              </SidebarItem>
              <SidebarItem>
                <SidebarItemButton>Customization</SidebarItemButton>
              </SidebarItem>
              <SidebarItem>
                <SidebarItemButton>Upgrade Guide</SidebarItemButton>
              </SidebarItem>
            </SidebarList>
          </SidebarGroup>
          <SidebarGroup>
            <SidebarGroupTitle>Components</SidebarGroupTitle>
            <SidebarList>
              <SidebarItem>
                <SidebarItemButton>Button</SidebarItemButton>
              </SidebarItem>
              <SidebarItem>
                <SidebarItemButton>Card</SidebarItemButton>
              </SidebarItem>
              <SidebarItem>
                <SidebarItemButton>Input</SidebarItemButton>
              </SidebarItem>
              <SidebarItem>
                <SidebarItemButton>Select</SidebarItemButton>
              </SidebarItem>
              <SidebarItem>
                <SidebarItemButton>Table</SidebarItemButton>
              </SidebarItem>
              <SidebarItem>
                <SidebarItemButton>Tabs</SidebarItemButton>
              </SidebarItem>
            </SidebarList>
          </SidebarGroup>
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
}
