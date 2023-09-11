import { TopicTagEnum } from './types/types';

const TopicTag = ({ topic }: { topic: TopicTagEnum }) => {
  return (
    <span className="w-fit px-3 py-[0.15rem] text-xs font-semibold rounded-full select-none bg-gradient-to-r from-cd-purple to-cd-light-blue">
      {topic}
    </span>
  );
};

export default TopicTag;
