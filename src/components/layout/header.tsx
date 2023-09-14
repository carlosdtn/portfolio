'use client';
import Logo from '@/components/icons/logo';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { IconSunHigh, IconWorld } from '@tabler/icons-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-10 flex flex-row items-center justify-center w-full pt-3 pb-3 border-b backdrop-blur-md bg-slate-600/10 h-14 border-cd-gray/10">
      <div className="flex flex-row min-w-[42%] justify-between">
        <Link href="/" className="group">
          <Logo className="w-10 h-10 transition duration-300 ease-in-out" />
        </Link>
        <nav className="flex items-center text-sm text-cd-gray">
          <ul className="flex gap-12">
            <li>
              <Link
                className={cn(
                  'transition duration-300 ease-in-out border rounded-sm border-transparent p-1 text-cd-gray hover:text-cd-light-blue focus:border-white/20 focus:outline-none',
                  {
                    'text-cd-light-blue font-semibold bg-cd-light-blue/10 p-1 rounded-md border-white/20':
                      pathname === '/about'
                  }
                )}
                href="/about"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className={cn(
                  'transition duration-300 ease-in-out border rounded-sm border-transparent p-1 text-cd-gray hover:text-cd-light-blue focus:border-white/20  focus:outline-none',
                  {
                    'text-cd-light-blue font-semibold bg-cd-light-blue/10 p-1 rounded-md border-white/20':
                      pathname === '/projects'
                  }
                )}
                href="/projects"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                className={cn(
                  'transition duration-300 ease-in-out border rounded-sm border-transparent p-1 text-cd-gray hover:text-cd-light-blue focus:border-white/20 focus:outline-none',
                  {
                    'text-cd-light-blue font-semibold bg-cd-light-blue/10 p-1 rounded-md border-white/20':
                      pathname === '/posts'
                  }
                )}
                href="/posts"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                className={cn(
                  'transition duration-300 ease-in-out border rounded-sm border-transparent p-1 text-cd-gray hover:text-cd-light-blue focus:border-white/20 focus:outline-none',
                  {
                    'text-cd-light-blue font-semibold bg-cd-light-blue/10 p-1 rounded-md border-white/20':
                      pathname === '/stack'
                  }
                )}
                href="/stack"
              >
                Stack
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex flex-row items-center gap-2">
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
      </div>
    </header>
  );
};

export default Header;
