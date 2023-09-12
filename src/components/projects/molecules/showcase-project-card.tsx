import CardTag from '@/components/shared/atoms/card-tag';
import { CardProps } from '@/components/shared/types/types';
import { defaultImages } from '@/components/shared/utils/constants';
import Image from 'next/image';

const ShowcaseProjectCard = ({ data }: { data: Partial<CardProps> }) => {
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
};

export default ShowcaseProjectCard;