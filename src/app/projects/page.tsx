import ShowcaseSection from '@/components/shared/organisms/showcase.section';
import { ShowcaseTypeEnum } from '@/components/shared/types/types';
import ProjectContent from '@/components/showcase-content/projects/projects-content';

export default function ProjectsPage() {
  return (
    <div className="flex flex-row justify-center">
      <main className="w-[90%] md:w-[80%] lg:w-[50.15rem] flex my-12 md:my-16">
        <ShowcaseSection
          title="Projects"
          contentType={ShowcaseTypeEnum.Project}
          renderContent={<ProjectContent />}
        />
      </main>
    </div>
  );
}
