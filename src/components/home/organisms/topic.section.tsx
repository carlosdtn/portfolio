import Link from 'next/link';
import TopicTag from '../atoms/topic-tag';
import { TopicTagEnum } from '../atoms/types/types';
import SummaryContent from '../molecules/summary-content';

interface TopicSectionProps {
  topic: TopicTagEnum;
  title: string;
  topicLink: string;
}

const TopicSection: React.FC<TopicSectionProps> = ({
  topic,
  title,
  topicLink
}) => {
  return (
    <section className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <TopicTag topic={topic} />
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">{title}</h1>
          <Link
            href={topicLink}
            className="px-1 font-semibold underline border border-transparent rounded text-cd-light-blue hover:bg-cd-light-blue/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/20"
          >
            Show all
          </Link>
        </div>
      </div>
      <SummaryContent type={topic} />
    </section>
  );
};

export default TopicSection;
