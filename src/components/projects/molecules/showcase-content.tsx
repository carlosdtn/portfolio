import { ShowcaseTypeEnum } from '../organisms/types/types';
import ShowcaseCard from './showcase-card';
import { projectData } from '@/data';

interface ShowcaseContentProps {
  contentType: ShowcaseTypeEnum;
}

const ShowcaseContent: React.FC<ShowcaseContentProps> = ({ contentType }) => {
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
  }

  return <div>GenericContent</div>;
};

export default ShowcaseContent;
