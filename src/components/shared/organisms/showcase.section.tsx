import { ShowcaseTypeEnum } from '@/components/shared/types/types';
import { Button } from '@/components/ui/button';

interface ShowcaseSectionProps {
  contentType: ShowcaseTypeEnum;
  title: string;
  renderContent?: JSX.Element;
}

const ShowcaseSection: React.FC<ShowcaseSectionProps> = ({
  contentType,
  title,
  renderContent
}) => {
  return (
    <section className="flex flex-col w-full gap-4">
      <div className="flex items-center justify-between rounded">
        <h1 className="text-2xl font-bold leading-tight">{title}</h1>
        {/* {(contentType === ShowcaseTypeEnum.Project ||
          contentType === ShowcaseTypeEnum.Blog) && (
          <Button
            variant="text"
            size="text"
            className="px-2 hover:bg-cd-light-blue/10"
          >
            Filter
          </Button>
        )} */}
      </div>
      {renderContent && renderContent}
    </section>
  );
};

export default ShowcaseSection;
