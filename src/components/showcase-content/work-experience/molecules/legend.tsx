import { WorkTypeEnum } from '@/components/shared/types/types';
import { iconsType } from '../atoms/badge-class';

const Legend = () => {
  return (
    <div className="flex flex-col items-center gap-5">
      <span className="font-bold underline">Legend</span>
      <ul className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 place-items-center">
        {Object.keys(iconsType).map((key) => (
          <div className="flex flex-col items-center justify-center gap-2">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-foreground">
              {iconsType[key as WorkTypeEnum]}
            </div>
            <p className="text-sm break-all text-cd-gray">{key}</p>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Legend;
