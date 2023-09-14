'use client';
import { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface TechPreviewProps {
  icon: {
    name: string;
    icon: string;
  }[];
}

const TechPreview: React.FC<TechPreviewProps> = ({ icon }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isFocused, setIsFocused] = useState(false);

  const iconShuffle: {
    name: string;
    icon: string;
  }[] = icon.sort(() => Math.random() - 0.5);

  const changeIcon = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === iconShuffle.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const intervalId = setInterval(changeIcon, 4000 + Math.random() * 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const handleMouseEnter = () => {
    setIsFocused(true);
  };

  const handleMouseLeave = () => {
    setIsFocused(false);
  };

  if (!iconShuffle || iconShuffle.length === 0) {
    return (
      <div className="flex items-center justify-center w-8 opacity-60 group-focus">
        <Image
          src="/porfolio-logo.png"
          width={26}
          height={26}
          alt="porfolio logo"
        />
      </div>
    );
  }

  return (
    <div
      className="flex items-center justify-center w-8 opacity-60 group-focus"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Icon icon={iconShuffle[currentIndex].icon} width="26" height="26" />
    </div>
  );
};

export default TechPreview;
