import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupTitle,
  SidebarHeader,
  SidebarItem,
  SidebarList,
  SidebarLogo,
  SidebarMenu,
} from 'components/selia/sidebar';

export default function SidebarLineExample() {
  return (
    <Sidebar className="lg:w-72" size="compact">
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
            <SidebarList line>
              <SidebarItem href="#">Introduction</SidebarItem>
              <SidebarItem href="#">Installation</SidebarItem>
              <SidebarItem href="#">Customization</SidebarItem>
              <SidebarItem href="#">Upgrade Guide</SidebarItem>
            </SidebarList>
          </SidebarGroup>
          <SidebarGroup>
            <SidebarGroupTitle>Components</SidebarGroupTitle>
            <SidebarList line>
              <SidebarItem href="#">Button</SidebarItem>
              <SidebarItem href="#">Card</SidebarItem>
              <SidebarItem href="#">Input</SidebarItem>
              <SidebarItem href="#">Select</SidebarItem>
              <SidebarItem href="#" active>
                Sidebar
              </SidebarItem>
              <SidebarItem href="#">Table</SidebarItem>
              <SidebarItem href="#">Tabs</SidebarItem>
            </SidebarList>
          </SidebarGroup>
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
}
