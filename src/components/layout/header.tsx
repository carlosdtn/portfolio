'use client';
import Logo from '@/components/icons/logo';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { IconSunHigh, IconWorld, IconMenu2 } from '@tabler/icons-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-10 flex flex-row items-center justify-center w-full py-3 border-b backdrop-blur-md bg-cd-dark-blue/60 h-14 border-cd-gray/10">
      <div className="flex flex-row w-[90%] md:w-[80%] lg:w-[50.15rem] justify-between">
        <Link
          href="/"
          className="rounded-sm group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/20"
        >
          <Logo className="w-10 h-10 transition duration-300 ease-in-out" />
        </Link>
        <nav className="items-center hidden text-sm lg:flex text-cd-gray">
          <ul className="flex gap-12 child:border-transparent child-hover:text-cd-light-blue child:transition child:duration-300 child:ease-in-out child:border child:rounded-sm child:p-1 text-cd-gray child-focus:border-white/20 child-focus:outline-none">
            <li>
              <Link
                className={cn({
                  'text-cd-light-blue font-semibold bg-cd-light-blue/10 p-1 rounded-md border-white/20':
                    pathname === '/about'
                })}
                href="/about"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className={cn({
                  'text-cd-light-blue font-semibold bg-cd-light-blue/10 p-1 rounded-md border-white/20':
                    pathname === '/projects'
                })}
                href="/projects"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                className={cn({
                  'text-cd-light-blue font-semibold bg-cd-light-blue/10 p-1 rounded-md border-white/20':
                    pathname === '/posts'
                })}
                href="/posts"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                className={cn({
                  'text-cd-light-blue font-semibold bg-cd-light-blue/10 p-1 rounded-md border-white/20':
                    pathname === '/stack'
                })}
                href="/stack"
              >
                Stack
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex items-center gap-2">
          <div className="flex-row items-center hidden gap-2 md:flex">
            <Button type="button" variant="icon" size="icon">
              <IconSunHigh width={18} />
            </Button>
            <Button type="button" variant="icon" size="icon">
              <IconWorld width={18} />
            </Button>
            <Button type="button" variant="default" size="default">
              Contact
            </Button>
          </div>
          <div className="flex transition duration-300 ease-in-out border rounded-md lg:hidden border-white/20">
            <Button type="button" variant="icon" size="icon">
              <IconMenu2 width={18} />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
