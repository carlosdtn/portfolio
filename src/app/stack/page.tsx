import ShowcaseSection from '@/components/shared/organisms/showcase.section';
import { ShowcaseTypeEnum } from '@/components/shared/types/types';
import StackContent from '@/components/showcase-content/stack/stack-content';

export default function StackPage() {
  return (
    <div className="flex flex-row justify-center">
      <main className="w-[42%] mt-16 flex flex-col gap-16 mb-16">
        <ShowcaseSection
          title="Current Expertise"
          contentType={ShowcaseTypeEnum.Stack}
          renderContent={<StackContent stackType="current" />}
        />
        <ShowcaseSection
          title="Continuous Learning"
          contentType={ShowcaseTypeEnum.Stack}
          renderContent={<StackContent stackType="learning" />}
        />
        <ShowcaseSection
          title="Future Planning"
          contentType={ShowcaseTypeEnum.Stack}
          renderContent={<StackContent stackType="planning" />}
        />
      </main>
    </div>
  );
}
