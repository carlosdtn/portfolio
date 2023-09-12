import PostCard from '@/components/shared/molecules/post-card';
import { postsData } from '@/data';

const ShowcasePostContent = () => {
  return (
    <div className="flex flex-col w-full gap-3">
      {postsData.map((post) => (
        <PostCard key={post.id} data={post} />
      ))}
    </div>
  );
};

export default ShowcasePostContent;
