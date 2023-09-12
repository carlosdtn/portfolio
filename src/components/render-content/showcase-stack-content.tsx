import { StackData } from '@/data';
import TechTag from '../stack/atoms/tech-tag';

interface ShowcaseStackContentProps {
  stackType?: string;
}

const ShowcaseStackContent: React.FC<ShowcaseStackContentProps> = ({
  stackType
}) => {
  return (
    <div className="grid grid-cols-4 gap-3">
      {stackType &&
        StackData[stackType]?.map((stack, index) => (
          <TechTag key={index} data={stack} />
        ))}
    </div>
  );
};

export default ShowcaseStackContent;
