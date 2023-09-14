import ShowcaseSection from '@/components/shared/organisms/showcase.section';
import { ShowcaseTypeEnum } from '@/components/shared/types/types';
import PostContent from '@/components/showcase-content/posts/posts-content';

export default function PostPage() {
  return (
    <div className="flex flex-row justify-center">
      <main className="w-[42%] mt-16 flex flex-col mb-16">
        <ShowcaseSection
          title="Posts"
          contentType={ShowcaseTypeEnum.Blog}
          renderContent={<PostContent />}
        />
      </main>
    </div>
  );
}
