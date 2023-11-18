import PostHeader from '@/components/posts/molecules/post-header';
import PostLayout from '@/components/posts/organisms/post-layout';
import { allPosts } from 'contentlayer/generated';
import { getMDXComponent } from 'next-contentlayer/hooks';
import Image from 'next/image';

interface PostPageProps {
  params: {
    slug: string;
  };
}

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post._raw.flattenedPath }));

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  return { title: post?.title, description: post?.description };
};

export default function PostPage({ params }: PostPageProps) {
  const post = allPosts.find((post) => post.slugAsParams === params.slug);
  let MDXContent;

  if (!post) {
    return <div>404</div>;
  } else {
    MDXContent = getMDXComponent(post.body.code);
  }

  return (
    <PostLayout>
      <PostHeader post={post} />
      <div>
        <Image
          className="w-full border rounded-lg border-foreground/20"
          src={post.image}
          alt={post.title}
          width={400}
          height={400}
        />
        <article>
          <MDXContent />
        </article>
      </div>
    </PostLayout>
  );
}
