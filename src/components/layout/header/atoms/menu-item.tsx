import { SheetClose } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import Link from 'next/link';

interface MenuItemProps {
  pathname: string;
  href: string;
  children: React.ReactNode;
  isMobile?: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({
  pathname,
  href,
  children,
  isMobile
}) => {
  const isSelected = pathname === href;

  if (isMobile) {
    return (
      <SheetClose asChild>
        <Link
          className={cn({
            'text-cd-light-blue font-semibold bg-cd-light-blue/20 p-1 rounded-md border-white/20':
              isSelected
          })}
          href={href}
        >
          {children}
        </Link>
      </SheetClose>
    );
  }

  return (
    <Link
      className={cn({
        'text-cd-light-blue bg-cd-light-blue/20 font-semibold p-1 rounded-md border-white/20':
          isSelected
      })}
      href={href}
    >
      {children}
    </Link>
  );
};

export default MenuItem;
