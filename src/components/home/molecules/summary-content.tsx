'use client';
import PostCard from '@/components/shared/molecules/post-card';
import { Button } from '@/components/ui/button';
import { projectData } from '@/data/index';
import { cn } from '@/lib/utils';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import { allPosts } from 'contentlayer/generated';
import { useEffect, useRef, useState } from 'react';
import { TopicTagEnum } from '../atoms/types/types';
import CompactCard from './compact-card';

interface SummaryContentProps {
  type: TopicTagEnum;
}

const SummaryContent: React.FC<SummaryContentProps> = ({ type }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [canScroll, setCanScroll] = useState<{ left: boolean; right: boolean }>(
    {
      left: false,
      right: true
    }
  );

  const getCardDimensions = () => {
    const fontSize: number = 16;
    return {
      cardWidth: 16 * fontSize,
      spaceBetweenCards: 1 * fontSize
    };
  };

  const checkScroll = () => {
    const carrouselContainer = containerRef.current;
    if (carrouselContainer) {
      setCanScroll({
        left: carrouselContainer.scrollLeft > 0,
        right:
          carrouselContainer.scrollLeft <
          carrouselContainer.scrollWidth - carrouselContainer.clientWidth
      });
    }
  };

  const scrollLeft = () => {
    const carrouselContainer = containerRef.current;
    if (carrouselContainer) {
      const cardsVisible = Math.floor(
        carrouselContainer.clientWidth /
          (getCardDimensions().cardWidth +
            getCardDimensions().spaceBetweenCards)
      );

      const widthToScroll =
        (getCardDimensions().cardWidth +
          getCardDimensions().spaceBetweenCards) *
        cardsVisible;

      carrouselContainer.scrollTo({
        left: carrouselContainer.scrollLeft - widthToScroll,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    const carrouselContainer = containerRef.current;
    if (carrouselContainer) {
      const cardsVisible = Math.floor(
        carrouselContainer.clientWidth /
          (getCardDimensions().cardWidth +
            getCardDimensions().spaceBetweenCards)
      );

      const widthToScroll =
        (getCardDimensions().cardWidth +
          getCardDimensions().spaceBetweenCards) *
        cardsVisible;

      carrouselContainer.scrollTo({
        left: carrouselContainer.scrollLeft + widthToScroll,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    checkScroll();

    containerRef.current &&
      containerRef.current.addEventListener('scroll', checkScroll);
    return () => {
      containerRef.current &&
        containerRef.current.removeEventListener('scroll', checkScroll);
    };
  }, []);

  const visibleButtonClassName = {
    left: {
      visible: canScroll.left,
      invisible: !canScroll.left
    },
    right: {
      visible: canScroll.right,
      invisible: !canScroll.right
    }
  };

  if (type === TopicTagEnum.Projects)
    return (
      <div className="relative flex flex-row h-auto transition-transform duration-300 ease-in-out">
        <div className="absolute items-center hidden h-full md:flex -left-12">
          <Button
            className={cn('px-2 py-1', visibleButtonClassName.left)}
            onClick={scrollLeft}
            type="button"
            variant="icon"
          >
            <IconChevronLeft width="28" height="28" />
          </Button>
        </div>
        <div
          ref={containerRef}
          className="inline-grid w-full grid-flow-col gap-4 overflow-x-auto no-scrollbar"
        >
          {projectData
            .sort((a, b) => {
              return new Date(b.date).getTime() - new Date(a.date).getTime();
            })
            .slice(0, 4)
            .map((project) => (
              <CompactCard key={project.id} type={type} data={project} />
            ))}
        </div>
        <div className="absolute items-center hidden h-full md:flex -right-12">
          <Button
            className={cn('px-2 py-1', visibleButtonClassName.right)}
            onClick={scrollRight}
            type="button"
            variant="icon"
          >
            <IconChevronRight width="28" height="28" />
          </Button>
        </div>
      </div>
    );
  if (type === TopicTagEnum.Blog)
    return (
      <div className="flex flex-col w-full gap-3">
        {allPosts
          .sort((a, b) => {
            return new Date(b.date).getTime() - new Date(a.date).getTime();
          })
          .slice(0, 3)
          .map((post) => (
            <PostCard key={post._id} data={post} />
          ))}
      </div>
    );
};

export default SummaryContent;
