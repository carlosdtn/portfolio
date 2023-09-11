import { TopicTagEnum } from '@/components/home/atoms/types/types';
import {
  CanvasSection,
  PersonalInfoSection,
  TopicSection
} from '@/components/home/organisms';

export default function HomePage() {
  return (
    <div className="flex flex-row justify-center">
      <main className="w-[42%] mt-16 flex flex-col gap-16 mb-16">
        <div className="flex w-full gap-4">
          <PersonalInfoSection />
          <CanvasSection />
        </div>
        <TopicSection
          topic={TopicTagEnum.Projects}
          title="My recent projects"
          topicLink="/projects"
        />
        <TopicSection
          topic={TopicTagEnum.Blog}
          title="My recent posts"
          topicLink="/posts"
        />
      </main>
    </div>
  );
}
