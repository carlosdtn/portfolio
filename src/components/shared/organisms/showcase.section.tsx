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
    <section className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">{title}</h1>
        {(contentType === ShowcaseTypeEnum.Project ||
          contentType === ShowcaseTypeEnum.Blog) && (
          <Button variant="text" size="text">
            Filter
          </Button>
        )}
      </div>
      {renderContent && renderContent}
    </section>
  );
};

export default ShowcaseSection;
