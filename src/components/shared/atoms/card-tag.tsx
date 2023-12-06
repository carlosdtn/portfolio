import { IconExternalLink } from '@tabler/icons-react';
import Link from 'next/link';

interface CardTagProps {
  children: React.ReactNode;
  toPath: string;
}

const CardTag: React.FC<CardTagProps> = ({
  children,
  toPath = '#',
  ...rest
}) => {
  const externalPath = toPath?.includes('http');

  if (!externalPath) {
    return (
      <Link
        href={toPath}
        className="dark:hover:bg-foreground/80 dark:hover:text-cd-dark-blue hover:text-white hover:bg-stone-900/90 focus:outline-none dark:focus:bg-white/80 focus:bg-foreground/80 dark:focus:text-cd-dark-blue focus:text-white transition duration-300 ease-in-out text-xs font-medium border-2 rounded-sm py-[0.1rem] px-[0.3rem] border-cd-gray/10 bg-cd-midnight-blue flex items-center gap-1"
        {...rest}
      >
        {children}
      </Link>
    );
  }

  return (
    <a
      href={toPath}
      target="_blank"
      rel="noopener noreferrer"
      className="dark:hover:bg-foreground/80 dark:hover:text-cd-dark-blue hover:text-white hover:bg-stone-900/90 focus:outline-none dark:focus:bg-white/80 focus:bg-foreground/80 dark:focus:text-cd-dark-blue focus:text-white transition duration-300 ease-in-out text-xs font-medium border-2 rounded-sm py-[0.1rem] px-[0.3rem] dark:border-cd-gray/10 border-cd-dark-gray/40 dark:bg-cd-midnight-blue flex flex-row-reverse items-center gap-1"
      {...rest}
    >
      {<IconExternalLink width={12} height={12} />}
      {children}
    </a>
  );
};

export default CardTag;
