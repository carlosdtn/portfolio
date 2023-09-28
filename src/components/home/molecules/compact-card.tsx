import { TopicTagEnum } from '@/components/home/atoms/types/types';
import TechPreview from '@/components/projects/atoms/tech-preview';
import CardTag from '@/components/shared/atoms/card-tag';
import { CardProps } from '@/components/shared/types/types';
import { formattedDate } from '@/components/shared/utils/helpers';
import { IconChevronRight } from '@tabler/icons-react';

const CompactCard: React.FC<{
  type: TopicTagEnum;
  data: Partial<CardProps>;
}> = ({ type, data }) => {
  if (type === TopicTagEnum.Projects) {
    return (
      <div className="flex flex-row w-64 gap-2 p-3 transition-all duration-300 ease-in-out border rounded-md select-none bg-cd-dark-gray/20 border-cd-gray/10 hover:border-cd-gray/40 focus-within:border-cd-gray/40">
        <div className="flex flex-col w-auto gap-3">
          <div className="flex justify-between">
            <div className="flex flex-col">
              <span className="text-xs leading-tight text-cd-light-blue">
                {formattedDate(data.date).year}
              </span>
              <h1 className="font-bold leading-tight line-clamp-1">
                {data.title}
              </h1>
            </div>
            <TechPreview icon={data.technologies ? data.technologies : []} />
          </div>
          <p className="text-xs text-cd-gray line-clamp-2">
            {data.description}
          </p>
          <div className="flex gap-2">
            {data.resources?.map((resource, index) => (
              <CardTag key={index} toPath={resource.link}>
                {resource.category}
              </CardTag>
            ))}
          </div>
        </div>
      </div>
    );
  } else if (type === TopicTagEnum.Blog) {
    return (
      <div className="flex flex-row items-center justify-between w-full p-3 border rounded-md cursor-pointer select-none group bg-cd-dark-gray/20 border-cd-gray/10">
        <div className="w-[80%] flex flex-col gap-3">
          <h1 className="font-bold leading-tight line-clamp-1">{data.title}</h1>
          <p className="text-xs text-cd-gray line-clamp-2">
            {data.description}
          </p>
          <div className="flex gap-2">
            {data.tags?.map((tech, index) => (
              <CardTag key={index} toPath="#">
                {tech}
              </CardTag>
            ))}
          </div>
        </div>
        <div className="">
          <p className="text-sm text-cd-light-blue">
            {formattedDate(data.date)?.month}{' '}
            <span className="text-white"> · </span>{' '}
            {formattedDate(data.date)?.year}
          </p>
        </div>
        <IconChevronRight className="transition-all ease-in-out group-hover:translate-x-1 duration-400" />
      </div>
    );
  }
};

export default CompactCard;
