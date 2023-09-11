'use client';
import { Icon } from '@iconify/react';

interface TechTagProps {
  category?: string;
  data: {
    name: string;
    icon: string;
  };
}

const TechTag: React.FC<TechTagProps> = ({ category, data }) => {
  return (
    <div className="flex items-center gap-2 p-2 text-sm border rounded-sm bg-cd-dark-gray/20 border-cd-gray/10">
      <Icon icon={data.icon} width="18" height="18" />
      {data.name}
    </div>
  );
};

export default TechTag;
