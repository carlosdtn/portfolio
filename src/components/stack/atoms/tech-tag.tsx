'use client';
import { Icon } from '@iconify/react';

interface TechTagProps {
  data: {
    name: string;
    icon: string;
  };
}

const TechTag: React.FC<TechTagProps> = ({ data }) => {
  return (
    <div className="flex flex-col items-center gap-2 p-2 text-sm transition-all duration-300 ease-in-out border rounded-sm select-none bg-cd-dark-gray/20 border-cd-gray/10 hover:border-cd-gray/40">
      <Icon icon={data.icon} width="28" height="28" />
      <span>{data.name}</span>
    </div>
  );
};

export default TechTag;
