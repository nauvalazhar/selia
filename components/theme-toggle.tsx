import { Laptop2Icon, MoonIcon, SunIcon } from 'lucide-react';
import { Button } from 'components/selia/button';
import { useThemeStore } from '~/lib/theme-store';
import {
  Dropdown,
  DropdownContent,
  DropdownItem,
  DropdownTrigger,
} from 'components/selia/dropdown';

export function ThemeToggle() {
  const theme = useThemeStore((state) => state.theme);
  const setTheme = useThemeStore((state) => state.setTheme);

  let label = <Laptop2Icon />;

  if (theme === 'dark') {
    label = <MoonIcon />;
  } else if (theme === 'light') {
    label = (
      <>
        <SunIcon />
      </>
    );
  }

  return (
    <Dropdown>
      <DropdownTrigger
        render={
          <Button variant="secondary-plain" size="icon" pill>
            {label}
          </Button>
        }
      />
      <DropdownContent>
        <DropdownItem onClick={() => setTheme('light')}>
          <SunIcon /> Light
        </DropdownItem>
        <DropdownItem onClick={() => setTheme('dark')}>
          <MoonIcon /> Dark
        </DropdownItem>
        <DropdownItem onClick={() => setTheme('system')}>
          <Laptop2Icon /> System
        </DropdownItem>
      </DropdownContent>
    </Dropdown>
  );
}
