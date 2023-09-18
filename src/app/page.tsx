import { TopicTagEnum } from '@/components/home/atoms/types/types';
import {
  CanvasSection,
  PersonalInfoSection,
  TopicSection
} from '@/components/home/organisms';

export default function HomePage() {
  return (
    <div className="flex flex-row justify-center">
      <main className="w-[90%] md:w-[80%] lg:w-[50.15rem] flex flex-col gap-12 md:gap-16 my-12 md:my-16">
        <div className="flex flex-col w-full gap-4 md:flex-row">
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
