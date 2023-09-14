import ShowcaseSection from '@/components/shared/organisms/showcase.section';
import { ShowcaseTypeEnum } from '@/components/shared/types/types';
import AboutMeContent from '@/components/showcase-content/about-me/about-me-content';
import WorkExperienceContent from '@/components/showcase-content/work-experience/work-experience-content';

export default function AboutPage() {
  return (
    <div className="flex flex-row justify-center">
      <main className="w-[42%] mt-16 flex flex-col gap-16 mb-16">
        <ShowcaseSection
          title="About me"
          contentType={ShowcaseTypeEnum.Generic}
          renderContent={<AboutMeContent />}
        />
        <ShowcaseSection
          title="Work Experience"
          contentType={ShowcaseTypeEnum.Generic}
          renderContent={<WorkExperienceContent />}
        />
      </main>
    </div>
  );
}
