import { Separator } from '@/components/ui/separator';
import { workExperienceData } from '@/data';
import WorkExperienceItem from './atoms/work-experience-item';
import Legend from './molecules/legend';

const WorkExperienceContent = () => {
  return (
    <div
      id="dots"
      className="relative flex flex-col gap-3 px-3 py-5 border rounded-md select-none bg-cd-dark-gray/20 border-cd-gray/10"
    >
      <ul className="flex flex-col gap-5">
        {workExperienceData
          .slice()
          .reverse()
          .map((workExperience) => (
            <WorkExperienceItem key={workExperience.id} data={workExperience} />
          ))}
      </ul>
      <Separator orientation="horizontal" className="bg-cd-separator/10" />
      <Legend />
    </div>
  );
};

export default WorkExperienceContent;
