import { TopicTagEnum } from '@/components/home/atoms/types/types';
import { CardProps } from '@/components/shared/types/types';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import CardTag from '@/components/shared/atoms/card-tag';
import { IconChevronRight } from '@tabler/icons-react';
import { defaultImages } from '@/components/shared/utils/constants';
import { formattedDate } from '@/components/shared/utils/helpers';

const CompactCard: React.FC<{
  type: TopicTagEnum;
  data: Partial<CardProps>;
}> = ({ type, data }) => {
  const imageClassName = {
    'opacity-100': data.logo?.src
  };
  // En lugar del logo colocar una transición de las tecnologías usadas, estas deben estar cómo imagenes

  if (type === TopicTagEnum.Projects) {
    return (
      <div className="flex flex-row w-64 gap-2 p-3 border rounded-md select-none bg-cd-dark-gray/20 border-cd-gray/10">
        <div className="flex flex-col w-auto gap-3">
          <div className="flex justify-between">
            <div className="flex flex-col">
              <span className="text-xs leading-tight text-cd-light-blue">
                {data.year}
              </span>
              <h1 className="font-bold leading-tight line-clamp-1">
                {data.title}
              </h1>
            </div>
            <div
              className={cn(
                'flex items-center justify-center opacity-30',
                imageClassName
              )}
            >
              <Image
                width={30}
                height={30}
                src={data.logo?.src || defaultImages.logo.src}
                alt={data.logo?.alt || defaultImages.logo.alt}
              />
            </div>
          </div>
          <p className="text-xs text-cd-gray line-clamp-2">
            {data.description}
          </p>
          <div className="flex gap-2">
            {data.resources?.map((resource, index) => (
              <CardTag key={index} toPath={resource.link} isExternal>
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
