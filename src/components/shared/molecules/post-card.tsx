import { CardProps } from '@/components/shared/types/types';
import { Separator } from '@/components/ui/separator';
import { IconChevronRight } from '@tabler/icons-react';
import Link from 'next/link';
import CardTag from '../atoms/card-tag';
import { formattedDate } from '../utils/helpers';

const PostCard: React.FC<{
  data: Partial<CardProps>;
}> = ({ data }) => {
  return (
    <div className="flex flex-row items-center justify-between w-full gap-2 p-3 transition-all duration-300 ease-in-out border rounded-md select-none group bg-cd-dark-gray/20 border-cd-gray/10 hover:border-cd-gray/40 focus-within:border-cd-gray/40">
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
        className="flex items-center h-auto text-sm font-semibold group text-cd-light-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/20 focus-visible:rounded-sm"
      >
        <span className="hidden md:block">Read More</span>
        <IconChevronRight className="transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
      </Link>
    </div>
  );
};

export default PostCard;
