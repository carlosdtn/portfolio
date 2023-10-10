import { SheetClose } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import ContactForm from './contact-form';

interface HeaderLinkOptionsProps {
  pathname: string;
  withinMenu?: boolean;
}

const HeaderLinkOptions: React.FC<HeaderLinkOptionsProps> = ({
  pathname,
  withinMenu
}) => {
  if (withinMenu) {
    return (
      <ul className="flex flex-col w-[70%] child:py-2 child:w-full child:text-center items-center gap-4 child:border-transparent child-hover:text-cd-light-blue child:transition child:duration-300 child:ease-in-out child:border child:rounded-sm child:p-1 text-cd-gray child-focus:border-white/20 child-focus:outline-none">
        <li className="w-full">
          <SheetClose asChild>
            <Link
              className={cn({
                'text-cd-light-blue font-semibold bg-cd-light-blue/10 p-1 rounded-md border-white/20':
                  pathname === '/'
              })}
              href="/"
            >
              Home
            </Link>
          </SheetClose>
        </li>
        <li className="w-full">
          <SheetClose asChild>
            <Link
              className={cn({
                'text-cd-light-blue font-semibold bg-cd-light-blue/10 p-1 rounded-md border-white/20':
                  pathname === '/about'
              })}
              href="/about"
            >
              About
            </Link>
          </SheetClose>
        </li>
        <li className="w-full">
          <SheetClose asChild>
            <Link
              className={cn({
                'text-cd-light-blue font-semibold bg-cd-light-blue/10 p-1 rounded-md border-white/20':
                  pathname === '/projects'
              })}
              href="/projects"
            >
              Projects
            </Link>
          </SheetClose>
        </li>
        <li className="w-full">
          <SheetClose asChild>
            <Link
              className={cn({
                'text-cd-light-blue font-semibold bg-cd-light-blue/10 p-1 rounded-md border-white/20':
                  pathname === '/posts'
              })}
              href="/posts"
            >
              Blog
            </Link>
          </SheetClose>
        </li>
        <li className="w-full">
          <SheetClose asChild>
            <Link
              className={cn({
                'text-cd-light-blue font-semibold bg-cd-light-blue/10 p-1 rounded-md border-white/20':
                  pathname === '/stack'
              })}
              href="/stack"
            >
              Stack
            </Link>
          </SheetClose>
        </li>
        <li className="w-[60%] flex md:hidden">
          <ContactForm />
        </li>
      </ul>
    );
  }

  return (
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
  );
};

export default HeaderLinkOptions;
