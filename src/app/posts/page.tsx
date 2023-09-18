import ShowcaseSection from '@/components/shared/organisms/showcase.section';
import { ShowcaseTypeEnum } from '@/components/shared/types/types';
import PostContent from '@/components/showcase-content/posts/posts-content';

export default function PostPage() {
  return (
    <div className="flex flex-row justify-center">
      <main className="w-[90%] md:w-[80%] lg:w-[50.15rem] flex flex-col my-12 md:my-16">
        <ShowcaseSection
          title="Posts"
          contentType={ShowcaseTypeEnum.Blog}
          renderContent={<PostContent />}
        />
      </main>
    </div>
  );
}
