import PostCard from '@/components/shared/molecules/post-card';
import { allPosts } from 'contentlayer/generated';

const PostContent = () => {
  return (
    <div className="flex flex-col w-full gap-3">
      {allPosts.map((post) => (
        <PostCard key={post._id} data={post} />
      ))}
    </div>
  );
};

export default PostContent;
