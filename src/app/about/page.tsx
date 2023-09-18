import ShowcaseSection from '@/components/shared/organisms/showcase.section';
import { ShowcaseTypeEnum } from '@/components/shared/types/types';
import AboutMeContent from '@/components/showcase-content/about-me/about-me-content';
import WorkExperienceContent from '@/components/showcase-content/work-experience/work-experience-content';

export default function AboutPage() {
  return (
    <div className="flex flex-row justify-center">
      <main className="w-[90%] md:w-[80%] lg:w-[50.15rem] flex flex-col gap-12 md:gap-16 my-12 md:my-16">
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
