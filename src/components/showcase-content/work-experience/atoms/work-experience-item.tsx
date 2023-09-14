import { WorkExperienceProps } from '@/components/shared/types/types';
import BadgeClass from './badge-class';

interface WorkExperienceItemProps {
  data: WorkExperienceProps;
}

const WorkExperienceItem: React.FC<WorkExperienceItemProps> = ({ data }) => {
  const formattedRangeDate = (startDate: string, endDate: string) => {
    const start: Date = new Date(startDate);
    const end: Date = new Date(endDate);
    const startMonth: string = start
      .toLocaleDateString('en-US', {
        month: 'long'
      })
      .toLowerCase();
    const endMonth: string = end
      .toLocaleDateString('en-US', {
        month: 'long'
      })
      .toLowerCase();
    const startYear: number = start.getFullYear();
    const endYear: number = end.getFullYear();
    const formattedStartDate: string = `${startMonth} ${startYear}`;
    const formattedEndDate: string = `${endMonth} ${endYear}`;
    return `${formattedStartDate} - ${formattedEndDate}`;
  };

  return (
    <li className="relative flex gap-4 group">
      <div className="absolute h-full border-l border-dashed left-[1.21rem] top-4 border-white/40 group-last:border-none" />
      <BadgeClass type={data.workType} />
      <div className="flex flex-col items-start gap-2">
        <div className="flex items-center justify-center gap-2">
          <div className="flex items-center justify-center w-8 h-8 border rounded-sm border-cd-gray/30">
            <img
              src={data.logo.src}
              className="bg-white rounded-sm"
              alt={data.logo.alt}
            />
          </div>
          <div className="flex flex-col items-start">
            <span className="font-bold">
              {data.company} · {data.position}
            </span>
            <p className="text-xs text-cd-light-blue">
              {formattedRangeDate(data.startDate, data.endDate)}
            </p>
          </div>
        </div>
        <ul className="flex flex-col gap-2 text-sm list-disc list-inside text-cd-gray marker:text-cd-light-blue/40">
          {data.responsibilities.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </li>
  );
};

export default WorkExperienceItem;
