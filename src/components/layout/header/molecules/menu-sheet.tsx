import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { IconMenu2, IconSunHigh, IconWorld } from '@tabler/icons-react';
import HeaderLinkOptions from './header-link-options';
import { useTheme } from '@wits/next-themes';
import { IconMoon } from '@tabler/icons-react';

interface MenuSheetProps {
  pathname: string;
}

const MenuSheet: React.FC<MenuSheetProps> = ({ pathname }) => {
  const { setTheme, theme } = useTheme();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          type="button"
          variant="icon"
          size="icon"
          className="border border-foreground/20 hover:bg-cd-light-blue/10"
        >
          <IconMenu2 width={18} />
        </Button>
      </SheetTrigger>
      <SheetContent id="dots">
        <nav className="flex flex-col items-center justify-center w-full h-full gap-6 px-4 text-sm">
          {/* Responsive Navigation Options */}
          <HeaderLinkOptions pathname={pathname} withinMenu />
        </nav>
        {/* Page Options */}
        <div className="absolute flex flex-col gap-3 top-5 left-5 text-">
          <Button
            type="button"
            variant="icon"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            {theme === 'dark' ? (
              <IconSunHigh
                width={22}
                className="transition duration-300 ease-in-out text-cd-gray hover:text-cd-light-blue"
              />
            ) : (
              <IconMoon
                width={22}
                className="transition duration-300 ease-in-out text-cd-gray hover:text-cd-light-blue"
              />
            )}
          </Button>
          {/* <Button type="button" variant="icon" size="icon">
            <IconWorld
              size={22}
              className="transition duration-300 ease-in-out text-cd-gray hover:text-cd-light-blue"
            />
          </Button> */}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MenuSheet;
