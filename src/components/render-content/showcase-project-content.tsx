import { projectData } from '@/data';
import ShowcaseProjectCard from '../projects/molecules/showcase-project-card';

const ShowcaseProjectContent = () => {
  return (
    <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
      {projectData.map((project) => (
        <ShowcaseProjectCard key={project.id} data={project} />
      ))}
    </div>
  );
};

export default ShowcaseProjectContent;
