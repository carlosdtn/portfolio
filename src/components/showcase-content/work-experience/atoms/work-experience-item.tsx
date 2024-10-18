import { WorkExperienceProps } from '@/components/shared/types/types';
import dayjs from 'dayjs';
import Image from 'next/image';
import BadgeClass from './badge-class';

interface WorkExperienceItemProps {
  data: WorkExperienceProps;
}

const WorkExperienceItem: React.FC<WorkExperienceItemProps> = ({ data }) => {
  const formattedRangeDate = (startDate: string, endDate?: string) => {
    const start = dayjs(startDate);
    const end = endDate ? dayjs(endDate) : dayjs();
    const formattedStartDate = start.format('MMMM YYYY').toLowerCase();

    const formattedEndDate = endDate
      ? end.format('MMMM YYYY').toLowerCase()
      : 'currently working';

    return `${formattedStartDate} - ${formattedEndDate}`;
  };

  return (
    <li className="relative flex gap-3 md:gap-4 group">
      <div className="absolute h-full border-l border-dashed left-[1.21rem] top-4 dark:border-white/40 border-foreground/80 group-last:border-none" />
      <span className="absolute left-0 hidden px-1 text-xs font-semibold text-black rounded-sm shadow-md top-12 group-first-of-type:block bg-amber-300 animate-pulse shadow-amber-200">
        latest
      </span>
      <div>
        <BadgeClass type={data.workType} />
      </div>
      <div className="flex flex-col items-start w-full gap-2 md:w-auto">
        <div className="flex items-center justify-center gap-2">
          <div className="flex items-center justify-center rounded-sm w-9 h-9">
            <Image
              src={data.logo.src}
              width="32"
              height="32"
              className="bg-white border rounded-sm border-slate-600"
              alt={data.logo.alt}
            />
          </div>
          <div className="flex flex-col items-start">
            <p className="flex items-center gap-0 md:gap-2 whitespace-nowrap">
              <span className="font-bold">{data.company}</span>
              <span className="hidden px-1 text-xs font-semibold border rounded-sm text-cd-lime border-cd-lime md:flex">
                {data.position}
              </span>
            </p>
            <p className="text-xs text-cd-light-blue">
              {formattedRangeDate(data.startDate, data.endDate)}
            </p>
          </div>
        </div>
        <p className="px-1 text-xs font-semibold border rounded-sm text-cd-lime border-cd-lime md:hidden">
          {data.position}
        </p>
        <ul className="flex flex-col gap-2 pl-5 text-sm list-disc list-outside text-cd-gray marker:text-cd-light-blue/40">
          {data.responsibilities.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </li>
  );
};

export default WorkExperienceItem;
