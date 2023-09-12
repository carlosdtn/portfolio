import ShowcaseProjectContent from '@/components/render-content/showcase-project-content';
import ShowcaseSection from '@/components/shared/organisms/showcase.section';
import { ShowcaseTypeEnum } from '@/components/shared/types/types';

export default function ProjectsPage() {
  return (
    <div className="flex flex-row justify-center">
      <main className="w-[42%] mt-16 flex flex-col mb-16">
        <ShowcaseSection
          title="Projects"
          contentType={ShowcaseTypeEnum.Project}
          renderContent={<ShowcaseProjectContent />}
        />
      </main>
    </div>
  );
}
