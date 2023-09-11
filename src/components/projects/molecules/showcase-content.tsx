import TechTag from '@/components/stack/atoms/tech-tag';
import { ShowcaseTypeEnum } from '../organisms/types/types';
import ShowcaseCard from './showcase-card';
import { projectData, StackData } from '@/data';

interface ShowcaseContentProps {
  contentType: ShowcaseTypeEnum;
  stackType?: string;
}

const ShowcaseContent: React.FC<ShowcaseContentProps> = ({
  contentType,
  stackType
}) => {
  if (contentType === ShowcaseTypeEnum.Project) {
    return (
      <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
        {projectData.map((project) => (
          <ShowcaseCard key={project.id} type={contentType} data={project} />
        ))}
      </div>
    );
  } else if (contentType === ShowcaseTypeEnum.Blog) {
    return <div>BlogContent</div>;
  } else if (contentType === ShowcaseTypeEnum.Stack) {
    return (
      <div className="grid grid-cols-4 gap-3">
        {stackType &&
          StackData[stackType]?.map((stack, index) => (
            <TechTag key={index} data={stack} />
          ))}
      </div>
    );
  } else if (contentType === ShowcaseTypeEnum.Generic) {
    return <div>GenericContent</div>;
  }
};

export default ShowcaseContent;
