import Link from 'next/link';
import Logo from '../icons/logo';

const Footer = () => {
  return (
    <footer className="sticky top-0 flex flex-col items-center justify-center w-full h-auto gap-8 pb-10">
      <div className="pt-8 w-[90%] md:w-[80%] lg:w-[50.15rem] border-t border-cd-gray/10 flex justify-center">
        <ul className="grid grid-cols-3 text-sm child:p-1 place-items-center md:grid-cols-4 gap-x-14 md:gap-x-28 gap-y-4 text-cd-gray child:transition child:duration-300 child:ease-in-out child:border child:border-transparent child:rounded-sm child-hover:text-cd-light-blue child-focus:border-white/20 child-focus:outline-none">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/posts">Blog</Link>
          </li>
          <li>
            <Link href="/stack">Stack</Link>
          </li>
          <li>
            <a href="">GitHub</a>
          </li>
          <li>
            <a href="">LinkedIn</a>
          </li>
          <li>
            <a href="">Twitter</a>
          </li>
        </ul>
      </div>
      <div className="flex items-center">
        <Logo className="w-5 h-5 mx-1" />
        <p className="text-xs font-semibold text-cd-gray">
          2023 · Made by{' '}
          <a
            className="transition duration-300 ease-in-out hover:underline hover:text-cd-light-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/20 focus-visible:rounded-sm"
            target="_blank"
            href="https://github.com/carlosdtn"
          >
            carlosdtn
          </a>{' '}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
