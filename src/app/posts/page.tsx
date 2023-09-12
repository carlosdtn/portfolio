import ShowcasePostContent from '@/components/render-content/showcase-post-content';
import ShowcaseSection from '@/components/shared/organisms/showcase.section';
import { ShowcaseTypeEnum } from '@/components/shared/types/types';

export default function PostPage() {
  return (
    <div className="flex flex-row justify-center">
      <main className="w-[42%] mt-16 flex flex-col mb-16">
        <ShowcaseSection
          title="Posts"
          contentType={ShowcaseTypeEnum.Blog}
          renderContent={<ShowcasePostContent />}
        />
      </main>
    </div>
  );
}
