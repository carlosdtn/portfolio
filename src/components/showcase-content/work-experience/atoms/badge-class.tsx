import {
  IconBuildingSkyscraper,
  IconUsersGroup,
  IconBriefcase,
  IconHeartCode
} from '@tabler/icons-react';
import { WorkTypeEnum } from '@/components/shared/types/types';

interface BadgeClassProps {
  type: WorkTypeEnum;
}

const BadgeClass: React.FC<BadgeClassProps> = ({ type }) => {
  return (
    <div className="flex items-center justify-center w-10 h-10 p-1 bg-foreground hexagon">
      {iconsType[type]}
    </div>
  );
};

export const iconsType = {
  [WorkTypeEnum.Collaborative]: (
    <IconUsersGroup width="20" height="20" className="text-muted" />
  ),
  [WorkTypeEnum.Corporate]: (
    <IconBuildingSkyscraper width="20" height="20" className="text-muted" />
  ),
  [WorkTypeEnum.Freelance]: (
    <IconBriefcase width="20" height="20" className="text-muted" />
  ),
  [WorkTypeEnum.Volunteer]: (
    <IconHeartCode width="20" height="20" className="text-muted" />
  )
};

export default BadgeClass;
