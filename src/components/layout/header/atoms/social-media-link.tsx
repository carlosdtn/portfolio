import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import React, { use, useState } from 'react';

interface SocialMediaLinkProps {
  href: string;
  icon: React.ReactNode;
  text: string;
  isHidden?: boolean;
}

const SocialMediaLink = ({
  href,
  icon,
  text,
  isHidden
}: SocialMediaLinkProps) => {
  const [showEmail, setShowEmail] = useState<boolean>(false);

  const handleShowEmail = () => {
    setShowEmail(true);
    isHidden = false;
  };

  return (
    <Button type="button" className="flex flex-row w-fit" asChild={showEmail}>
      {!showEmail && isHidden ? (
        <div className="flex items-center gap-1">
          {icon}
          <span className="font-medium" onClick={handleShowEmail}>
            [Click to show]
          </span>
        </div>
      ) : (
        <Link
          href={href}
          target="_blank"
          className={cn('flex flex-row items-center', isHidden && 'gap-1')}
        >
          {icon}
          <span>{text}</span>
        </Link>
      )}
    </Button>
  );
};

export default SocialMediaLink;
