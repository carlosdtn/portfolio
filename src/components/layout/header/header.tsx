'use client';
import SocialNetWorks from '@/components/home/atoms/social-networks';
import Logo from '@/components/icons/logo';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { IconMenu2, IconSunHigh, IconWorld } from '@tabler/icons-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ContactForm from './molecules/contact-form';
import HeaderLinkOptions from './molecules/header-link-options';

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-10 flex flex-row items-center justify-center w-full py-3 border-b backdrop-blur-md bg-cd-dark-blue/60 h-14 border-cd-gray/20">
      <div className="flex flex-row w-[90%] md:w-[80%] lg:w-[50.15rem] justify-between">
        <Link
          href="/"
          className="rounded-sm group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/20"
        >
          <Logo className="w-10 h-10 transition duration-300 ease-in-out" />
        </Link>
        {/* Desktop Navigation Options */}
        <nav className="items-center hidden text-sm lg:flex text-cd-gray">
          <HeaderLinkOptions pathname={pathname} />
        </nav>
        <div className="flex items-center gap-2">
          {/* Options & Contact Button */}
          <div className="flex-row items-center hidden gap-2 md:flex">
            <Button type="button" variant="icon" size="icon">
              <IconSunHigh width={18} />
            </Button>
            <Button type="button" variant="icon" size="icon">
              <IconWorld width={18} />
            </Button>
            <ContactForm />
          </div>
          {/* Responsive Menu */}
          <div className="flex transition duration-300 ease-in-out rounded-md lg:hidden">
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
                  <ContactForm />
                </nav>
                {/* My Social Networks */}
                <div className="absolute flex flex-col gap-3 top-5 left-5 text-">
                  <Button type="button" variant="icon" size="icon">
                    <IconSunHigh size={22} />
                  </Button>
                  <Button type="button" variant="icon" size="icon">
                    <IconWorld size={22} />
                  </Button>
                </div>
                <div className="absolute flex flex-col gap-4 bottom-5 left-6">
                  <SocialNetWorks />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
