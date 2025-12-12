import { Laptop2Icon, MoonIcon, SunIcon } from 'lucide-react';
import { Button } from 'components/selia/button';
import { useThemeStore } from '~/lib/theme-store';
import { Menu, MenuPopup, MenuItem, MenuTrigger } from 'components/selia/menu';

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
    <Menu>
      <MenuTrigger
        render={
          <Button variant="plain" size="icon" pill>
            {label}
          </Button>
        }
      />
      <MenuPopup>
        <MenuItem onClick={() => setTheme('light')}>
          <SunIcon /> Light
        </MenuItem>
        <MenuItem onClick={() => setTheme('dark')}>
          <MoonIcon /> Dark
        </MenuItem>
        <MenuItem onClick={() => setTheme('system')}>
          <Laptop2Icon /> System
        </MenuItem>
      </MenuPopup>
    </Menu>
  );
}
