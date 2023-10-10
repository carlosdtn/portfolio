'use client';
import { Icon } from '@iconify/react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface TechPreviewProps {
  icons: {
    name: string;
    icon: string;
  }[];
}

const TechPreview: React.FC<TechPreviewProps> = ({ icons }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const iconShuffle: {
    name: string;
    icon: string;
  }[] = icons.sort(() => Math.random() - 0.5);

  const changeIcon = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === iconShuffle.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const minInterval = 5000;
    const maxInterval = 7000;
    const randomInterval =
      minInterval + Math.random() * (maxInterval - minInterval);

    const intervalId = setInterval(changeIcon, randomInterval);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

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
    <motion.div
      key={iconShuffle[currentIndex].icon}
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.5, opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center justify-center w-8 h-8 opacity-60 group-focus"
    >
      <Icon icon={iconShuffle[currentIndex].icon} width="26" height="26" />
    </motion.div>
  );
};

export default TechPreview;
