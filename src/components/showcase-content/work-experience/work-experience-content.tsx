import WorkExperienceItem from './atoms/work-experience-item';
import { workExperienceData } from '@/data';

const WorkExperienceContent = () => {
  return (
    <div className="flex flex-col gap-3 px-3 py-5 border rounded-md select-none bg-cd-dark-gray/20 border-cd-gray/10">
      <ul className="flex flex-col gap-5">
        {workExperienceData
          .slice()
          .reverse()
          .map((workExperience) => (
            <WorkExperienceItem key={workExperience.id} data={workExperience} />
          ))}
      </ul>
    </div>
  );
};

export default WorkExperienceContent;
