import { Separator } from '@/components/ui/separator';
import { IconCalendar, IconChevronRight, IconClock } from '@tabler/icons-react';
import { Post } from 'contentlayer/generated';
import { format } from 'date-fns';
import Link from 'next/link';

const PostCard: React.FC<{
  data: Post;
}> = ({ data }) => {
  return (
    <div className="flex flex-row items-center justify-between w-full gap-2 p-3 transition-all duration-300 ease-in-out border rounded-md select-none group bg-cd-dark-gray/20 border-cd-gray/10 hover:border-cd-gray/40 focus-within:border-cd-gray/40">
      <div className="flex flex-col gap-1 w-[85%]">
        <h1 className="font-bold leading-tight line-clamp-1">{data.title}</h1>
        <p className="text-xs text-cd-gray line-clamp-2">{data.description}</p>
        <div className="flex items-center h-6 gap-2 text-xs">
          <div className="flex items-center gap-1 text-cd-light-blue">
            <IconCalendar size={14} />
            <p>{format(new Date(data.date || ''), 'MMM dd, yyyy')}</p>
          </div>
          <Separator orientation="vertical" className="bg-cd-gray/10" />
          <div className="flex items-center gap-1 text-slate-400">
            <IconClock size={14} />
            <p>{data.readingTime?.text || '1 min'}</p>
          </div>
          <Separator orientation="vertical" className="bg-cd-gray/10" />
          <div className="flex items-center">
            <span className="px-2 font-semibold text-black uppercase rounded-sm bg-cd-green/80">
              {data.lang}
            </span>
          </div>
        </div>
      </div>
      <Link
        href={`/posts/${data.slugAsParams}`}
        className="flex items-center h-auto text-sm font-semibold group text-cd-light-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/20 focus-visible:rounded-sm"
      >
        <span className="hidden md:block">Read More</span>
        <IconChevronRight className="transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
      </Link>
    </div>
  );
};

export default PostCard;
