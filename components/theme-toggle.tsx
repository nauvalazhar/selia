import { Laptop2Icon, MoonIcon, SunIcon } from 'lucide-react';
import { Button } from 'components/selia/button';
import { useThemeStore } from '~/lib/theme-store';
import {
  Dropdown,
  DropdownContent,
  DropdownItem,
  DropdownTrigger,
} from 'components/selia/dropdown';
import { useEffect } from 'react';

export function ThemeToggle() {
  const theme = useThemeStore((state) => state.theme);
  const setTheme = useThemeStore((state) => state.setTheme);

  useEffect(() => {
    document.documentElement.classList.toggle(
      'dark',
      theme === 'dark' ||
        (theme === 'system' &&
          window.matchMedia('(prefers-color-scheme: dark)').matches),
    );
  }, [theme]);

  let label = null;

  if (theme === 'dark') {
    label = <MoonIcon />;
  } else if (theme === 'light') {
    label = (
      <>
        <SunIcon />
      </>
    );
  } else if (theme === 'system') {
    label = <Laptop2Icon />;
  }

  if (!label) return null;

  return (
    <Dropdown>
      <DropdownTrigger
        render={
          <Button
            variant="secondary-plain"
            size="icon"
            pill
            className="max-lg:hidden"
          >
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
