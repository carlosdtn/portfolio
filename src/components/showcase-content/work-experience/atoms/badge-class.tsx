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
  const iconsType = {
    [WorkTypeEnum.Collaborative]: (
      <IconUsersGroup width="20" height="20" className="text-black" />
    ),
    [WorkTypeEnum.Corporate]: (
      <IconBuildingSkyscraper width="20" height="20" className="text-black" />
    ),
    [WorkTypeEnum.Freelance]: (
      <IconBriefcase width="20" height="20" className="text-black" />
    ),
    [WorkTypeEnum.Volunteer]: (
      <IconHeartCode width="20" height="20" className="text-black" />
    )
  };

  return (
    <div className="flex items-center justify-center w-10 h-10 p-1 bg-white hexagon">
      {iconsType[type]}
    </div>
  );
};

export default BadgeClass;
