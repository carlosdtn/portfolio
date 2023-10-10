import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { IconMenu2, IconSunHigh, IconWorld } from '@tabler/icons-react';
import HeaderLinkOptions from './header-link-options';

interface MenuSheetProps {
  pathname: string;
}

const MenuSheet: React.FC<MenuSheetProps> = ({ pathname }) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          type="button"
          variant="icon"
          size="icon"
          className="border border-white/20 hover:bg-cd-light-blue/10"
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
          <Button type="button" variant="icon" size="icon">
            <IconSunHigh size={22} />
          </Button>
          <Button type="button" variant="icon" size="icon">
            <IconWorld size={22} />
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MenuSheet;
