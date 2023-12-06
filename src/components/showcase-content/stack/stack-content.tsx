import { stackData } from '@/data';
import TechTag from '../../stack/atoms/tech-tag';

interface ShowcaseStackContentProps {
  stackType?: string;
}

const StackContent: React.FC<ShowcaseStackContentProps> = ({ stackType }) => {
  return (
    <div className="relative grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-5">
      {stackType &&
        stackData[stackType]?.map((stack, index) => (
          <TechTag key={index} data={stack} />
        ))}
    </div>
  );
};

export default StackContent;
