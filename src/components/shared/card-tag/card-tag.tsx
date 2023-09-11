import { IconExternalLink } from '@tabler/icons-react';
import Link from 'next/link';

interface CardTagProps {
  children: React.ReactNode;
  isExternal?: boolean;
  toPath: string;
}

const CardTag: React.FC<CardTagProps> = ({
  children,
  isExternal = false,
  toPath = '#',
  ...rest
}) => {
  const externalPath = toPath?.includes('http');

  if (!isExternal) {
    return (
      <Link
        href={toPath}
        className="text-xs font-medium border-2 rounded-sm py-[0.1rem] px-[0.3rem] border-cd-gray/10 bg-cd-midnight-blue flex flex-row-reverse items-center gap-1"
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
      className="text-xs font-medium border-2 rounded-sm py-[0.1rem] px-[0.3rem] border-cd-gray/10 bg-cd-midnight-blue flex flex-row-reverse items-center gap-1"
      {...rest}
    >
      {externalPath && <IconExternalLink width={12} height={12} />}
      {children}
    </a>
  );
};

export default CardTag;
