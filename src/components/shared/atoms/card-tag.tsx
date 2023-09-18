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
        className="hover:bg-white/80 hover:text-cd-dark-blue focus:outline-none focus:bg-white/80 focus:text-cd-dark-blue transition duration-300 ease-in-out text-xs font-medium border-2 rounded-sm py-[0.1rem] px-[0.3rem] border-cd-gray/10 bg-cd-midnight-blue flex flex-row-reverse items-center gap-1"
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
      className="hover:bg-white/80 hover:text-cd-dark-blue focus:outline-none focus:bg-white/80 focus:text-cd-dark-blue transition duration-300 ease-in-out text-xs font-medium border-2 rounded-sm py-[0.1rem] px-[0.3rem] border-cd-gray/10 bg-cd-midnight-blue flex flex-row-reverse items-center gap-1"
      {...rest}
    >
      {<IconExternalLink width={12} height={12} />}
      {children}
    </a>
  );
};

export default CardTag;
