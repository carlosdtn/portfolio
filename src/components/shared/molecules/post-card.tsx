import { CardProps } from '@/components/shared/types/types';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { IconChevronRight } from '@tabler/icons-react';
import CardTag from '../atoms/card-tag';
import { formattedDate } from '../utils/helpers';
import Link from 'next/link';

const PostCard: React.FC<{
  data: Partial<CardProps>;
}> = ({ data }) => {
  return (
    <div className="flex flex-row items-center justify-between w-full p-3 border rounded-md cursor-pointer select-none group bg-cd-dark-gray/20 border-cd-gray/10">
      <div className="flex flex-col gap-1">
        <h1 className="font-bold leading-tight line-clamp-1">{data.title}</h1>
        <p className="text-xs text-cd-gray line-clamp-2">{data.description}</p>
        <div className="flex items-center h-6 gap-2">
          <p className="text-xs text-cd-light-blue">
            {formattedDate(data.date)?.month}{' '}
            <span className="text-white"> · </span>{' '}
            {formattedDate(data.date)?.year}
          </p>
          <Separator orientation="vertical" className="bg-cd-gray/10" />
          <div className="flex flex-wrap gap-2">
            {data.tags?.map((tech, index) => (
              <CardTag key={index} toPath="#">
                {tech}
              </CardTag>
            ))}
          </div>
        </div>
      </div>
      <Link
        href="#"
        className="flex items-center h-auto text-sm font-semibold group text-cd-light-blue"
      >
        Read More
        <IconChevronRight className="transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
      </Link>
    </div>
  );
};

export default PostCard;
