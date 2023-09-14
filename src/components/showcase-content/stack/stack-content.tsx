import { stackData } from '@/data';
import TechTag from '../../stack/atoms/tech-tag';

interface ShowcaseStackContentProps {
  stackType?: string;
}

const StackContent: React.FC<ShowcaseStackContentProps> = ({ stackType }) => {
  return (
    <div className="grid grid-cols-4 gap-3">
      {stackType &&
        stackData[stackType]?.map((stack, index) => (
          <TechTag key={index} data={stack} />
        ))}
    </div>
  );
};

export default StackContent;
