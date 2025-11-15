import { Button } from 'components/selia/button';
import { Pagination, PaginationItem } from 'components/selia/pagination';
import {
  Sidebar,
  SidebarCollapsible,
  SidebarCollapsibleTrigger,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupTitle,
  SidebarHeader,
  SidebarItem,
  SidebarList,
  SidebarLogo,
  SidebarMenu,
  SidebarSubmenu,
} from 'components/selia/sidebar';
import {
  BookIcon,
  ChartAreaIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  HelpCircleIcon,
  HomeIcon,
  LifeBuoyIcon,
  LogOutIcon,
  MessageCircleIcon,
  MoreHorizontalIcon,
  Package2Icon,
  PlusIcon,
  SettingsIcon,
  ShoppingBagIcon,
  TagsIcon,
  UserIcon,
} from 'lucide-react';
import {
  Dropdown,
  DropdownContent,
  DropdownItem,
  DropdownTrigger,
} from 'components/selia/dropdown';
import { useRef } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from 'components/selia/avatar';
import { Chip } from 'components/selia/chip';
import SidebarLineExample from 'components/examples/sidebar/line';

export default function Playground() {
  const anchorRef = useRef<HTMLAnchorElement>(null);

  return (
    <div className="flex items-center justify-center h-screen gap-4">
      <SidebarLineExample />
    </div>
  );
}
