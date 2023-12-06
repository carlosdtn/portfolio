import CardTag from '@/components/shared/atoms/card-tag';
import { CardProps } from '@/components/shared/types/types';
import { defaultImages } from '@/components/shared/utils/constants';
import { formattedDate } from '@/components/shared/utils/helpers';
import Image from 'next/image';
import { getBase64 } from '../utils/helpers';
import ProjectInfo from '@/components/home/molecules/project-info';

async function ShowcaseProjectCard({ data }: { data: Partial<CardProps> }) {
  return (
    <div className="flex flex-col w-full h-[17rem] lg:h-auto gap-2 p-3 transition-all duration-300 ease-in-out border rounded-md select-none bg-cd-dark-gray/20 border-cd-gray/10 hover:border-cd-gray/40 focus-within:border-cd-gray/40">
      <Image
        className="relative object-cover w-full border rounded-md lg:h-28 border-cd-gray/10 h-[9rem]"
        width={233}
        height={112}
        placeholder="blur"
        blurDataURL={await getBase64(
          data.image?.src || defaultImages.image.src
        )}
        src={data.image?.src || defaultImages.image.src}
        alt={data.image?.src || defaultImages.image.alt}
      />
      <span className="m-1 text-xs font-semibold absolute py-[0.1rem] px-[0.3rem] rounded-sm text-cd-light-blue backdrop-blur-lg dark:bg-cd-dark-blue/60 bg-white/70 shadow-md">
        {formattedDate(data.date).year}
      </span>
      <div className="flex flex-row items-center gap-2">
        <h1 className="font-bold leading-tight line-clamp-1">{data.title}</h1>
        <ProjectInfo data={data} />
      </div>
      <p className="text-xs text-cd-gray line-clamp-2">{data.description}</p>
      <div className="flex flex-wrap gap-2">
        {data.resources?.map((resource, index) => (
          <CardTag key={index} toPath={resource.link}>
            {resource.category}
          </CardTag>
        ))}
      </div>
    </div>
  );
}

export default ShowcaseProjectCard;
