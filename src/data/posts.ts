import { CardProps } from '@/components/shared/types/types';

export const postsData: Omit<
  CardProps,
  'resources' | 'year' | 'image' | 'technologies'
>[] = [
  {
    id: 1,
    title: 'Test Post',
    description: 'Test post description. Lorem ipsum dolor sit amet.',
    tags: ['React', 'Next.js', 'Typescript'],
    date: '04-03-2022'
  }
];
