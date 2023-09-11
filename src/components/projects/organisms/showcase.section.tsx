import { ShowcaseTypeEnum } from '@/components/projects/organisms/types/types';
import { Button } from '@/components/ui/button';
import ShowcaseContent from '../molecules/showcase-content';

interface ShowcaseSectionProps {
  contentType: ShowcaseTypeEnum;
  title: string;
  stackType?: string;
}

const ShowcaseSection: React.FC<ShowcaseSectionProps> = ({
  contentType,
  title,
  stackType
}) => {
  return (
    <section className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">{title}</h1>
        {contentType === ShowcaseTypeEnum.Project ||
          (contentType === ShowcaseTypeEnum.Blog && (
            <Button variant="text" size="text">
              Filter
            </Button>
          ))}
      </div>
      <ShowcaseContent contentType={contentType} stackType={stackType} />
    </section>
  );
};

export default ShowcaseSection;
