import { stackData } from '@/data';
import TechTag from '../../stack/atoms/tech-tag';

interface ShowcaseStackContentProps {
  stackType?: string;
}

const StackContent: React.FC<ShowcaseStackContentProps> = ({ stackType }) => {
  return (
    <div className="relative grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
      {stackType &&
        stackData[stackType]?.map((stack, index) => (
          <TechTag key={index} data={stack} />
        ))}
    </div>
  );
};

export default StackContent;
