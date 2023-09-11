import ShowcaseSection from '@/components/projects/organisms/showcase.section';
import { ShowcaseTypeEnum } from '@/components/projects/organisms/types/types';

export default function ProjectsPage() {
  return (
    <div className="flex flex-row justify-center">
      <main className="w-[42%] mt-16 flex flex-col mb-16">
        <ShowcaseSection
          title="Projects"
          contentType={ShowcaseTypeEnum.Project}
        />
      </main>
    </div>
  );
}
