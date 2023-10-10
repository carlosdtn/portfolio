import MenuItem from '../atoms/menu-item';
import ContactForm from './contact-form';
import { motion } from 'framer-motion';

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
          <MenuItem href="/" pathname={pathname} isMobile>
            Home
          </MenuItem>
        </li>
        {navigateOptions.map((option, index) => (
          <li className="w-full" key={index}>
            <MenuItem href={option.href} pathname={pathname} isMobile>
              {option.name}
            </MenuItem>
          </li>
        ))}
        <li className="w-[60%] flex md:hidden">
          <ContactForm />
        </li>
      </ul>
    );
  }

  return (
    <ul className="relative flex gap-12 child:border-transparent child-hover:text-cd-light-blue child:transition child:duration-300 child:ease-in-out child:border child:rounded-sm child:p-1 text-cd-gray child-focus:border-white/20 child-focus:outline-none">
      {navigateOptions.map((option, index) => (
        <li key={index}>
          <MenuItem href={option.href} pathname={pathname}>
            {option.name}
          </MenuItem>
        </li>
      ))}
    </ul>
  );
};

const navigateOptions = [
  {
    name: 'About',
    href: '/about'
  },
  {
    name: 'Projects',
    href: '/projects'
  },
  {
    name: 'Blog',
    href: '/posts'
  },
  {
    name: 'Stack',
    href: '/stack'
  }
];

export default HeaderLinkOptions;
