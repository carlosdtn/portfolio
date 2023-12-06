import { formatDate } from '@/components/shared/utils/helpers';
import { Post } from 'contentlayer/generated';
import Image from 'next/image';

interface PostHeaderProps {
  post: Post;
}

const PostHeader = ({ post }: PostHeaderProps) => {
  return (
    <div className="flex flex-col w-full gap-3 pb-4 border-b border-dashed border-cd-gray/40">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold leading-8 md:leading-10 md:text-3xl">
          {post.title}
        </h1>
        <p className="text-sm font-normal leading-5 text-justify dark:text-slate-400 text-cd-gray">
          {post.description}
        </p>
      </div>
      <div className="flex items-center gap-2 text-cd-light-blue">
        <Image
          className="border-2 rounded-full w-9 h-9 border-foreground/50"
          src={post.author?.image || ''}
          alt={post.title}
          width={30}
          height={30}
        />
        <div className="flex flex-col justify-center">
          <span className="font-semibold text-foreground">
            {post.author?.name}
          </span>
          <div className="flex items-center gap-1 text-cd-light-blue">
            <span className="text-xs font-light">{formatDate(post.date)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostHeader;
