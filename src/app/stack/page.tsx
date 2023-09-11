import ShowcaseSection from '@/components/projects/organisms/showcase.section';
import { ShowcaseTypeEnum } from '@/components/projects/organisms/types/types';

export default function StackPage() {
  return (
    <div className="flex flex-row justify-center">
      <main className="w-[42%] mt-16 flex flex-col gap-16 mb-16">
        <ShowcaseSection
          title="My Stack"
          contentType={ShowcaseTypeEnum.Generic}
        />
        <ShowcaseSection
          title="In learning process"
          contentType={ShowcaseTypeEnum.Generic}
        />
        <ShowcaseSection
          title="In planning"
          contentType={ShowcaseTypeEnum.Generic}
        />
      </main>
    </div>
  );
}
