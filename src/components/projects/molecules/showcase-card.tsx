import { CardProps } from '@/components/shared/types/types';
import { ShowcaseTypeEnum } from '../organisms/types/types';
import Image from 'next/image';
import { defaultImages } from '@/components/shared/constants';
import CardTag from '@/components/shared/card-tag/card-tag';

const ShowcaseCard: React.FC<{
  type: ShowcaseTypeEnum;
  data: Partial<CardProps>;
}> = ({ type, data }) => {
  if (type === ShowcaseTypeEnum.Project) {
    return (
      <div className="flex flex-col w-full gap-2 p-3 border rounded-md select-none bg-cd-dark-gray/20 border-cd-gray/10">
        <Image
          className="relative object-cover w-full border rounded-md h-28 border-cd-gray/10"
          width={90}
          height={90}
          src={data.image?.src || defaultImages.image.src}
          alt={data.image?.src || defaultImages.image.alt}
        />
        <span className="m-1 text-xs font-semibold absolute py-[0.1rem] px-[0.3rem] rounded-sm text-cd-light-blue backdrop-blur-sm bg-black/40">
          {data.year}
        </span>
        <h1 className="font-bold leading-tight line-clamp-1">{data.title}</h1>
        <p className="text-xs text-cd-gray line-clamp-2">{data.description}</p>
        <div className="flex flex-wrap gap-2">
          {data.resources?.map((resource, index) => (
            <CardTag key={index} toPath={resource.link} isExternal>
              {resource.category}
            </CardTag>
          ))}
        </div>
      </div>
    );
  } else if (type === ShowcaseTypeEnum.Blog) {
    return <div>BlogContent</div>;
  }

  return <div></div>;
};

export default ShowcaseCard;
