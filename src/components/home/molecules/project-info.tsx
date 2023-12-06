'use client';
import { CardProps } from '@/components/shared/types/types';
import { Button } from '@/components/ui/button';
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent
} from '@/components/ui/hover-card';
import { Icon } from '@iconify/react';
import { IconDots } from '@tabler/icons-react';

interface ProjectInfoProps {
  data: Partial<CardProps>;
  isCompact?: boolean;
}

const ProjectInfo: React.FC<ProjectInfoProps> = ({ data, isCompact }) => {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button
          type="button"
          variant="icon"
          className="w-auto h-auto p-0 transition-colors duration-500 hover:bg-cd-preview/20"
        >
          <IconDots className="text-cd-preview" size={18} />
        </Button>
      </HoverCardTrigger>
      <HoverCardContent
        className="grid w-auto grid-cols-4 gap-2 bg-cd-dark-gray/20 -top-20 sm:grid-flow-col-dense"
        sideOffset={isCompact ? 40 : 143}
        side="top"
      >
        {data.technologies?.map((icon, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center gap-1"
          >
            <Icon icon={icon.icon} width="20" height="20" />
            <span className="text-xs">{icon.name}</span>
          </div>
        ))}
      </HoverCardContent>
    </HoverCard>
  );
};

export default ProjectInfo;
