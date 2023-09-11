import Link from 'next/link';
import Logo from '../icons/logo';

const Footer = () => {
  return (
    <footer className="sticky top-0 flex flex-col items-center justify-center w-full h-auto gap-8 pb-10">
      <div className="pt-8 min-w-[42%] border-t border-cd-gray/10 flex justify-center">
        <ul className="grid grid-cols-4 text-sm gap-x-28 gap-y-4 text-cd-gray">
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
        <p className="text-xs font-bold text-cd-gray">
          2023 · Made by{' '}
          <a
            className="text-cd-light-blue hover:underline"
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
