import ShowcaseSection from '@/components/projects/organisms/showcase.section';
import { ShowcaseTypeEnum } from '@/components/projects/organisms/types/types';

export default function StackPage() {
  return (
    <div className="flex flex-row justify-center">
      <main className="w-[42%] mt-16 flex flex-col gap-16 mb-16">
        <ShowcaseSection
          title="Current Expertise"
          contentType={ShowcaseTypeEnum.Stack}
          stackType="current"
        />
        <ShowcaseSection
          title="Continuous Learning"
          contentType={ShowcaseTypeEnum.Stack}
          stackType="learning"
        />
        <ShowcaseSection
          title="Future Planning"
          contentType={ShowcaseTypeEnum.Stack}
          stackType="planning"
        />
      </main>
    </div>
  );
}
