import { CardProps } from '@/components/shared/types/types';

export const postsData: Omit<
  CardProps,
  'resources' | 'year' | 'image' | 'logo'
>[] = [
  {
    id: 1,
    title: 'Post 1',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    tags: ['tag1', 'tag2', 'tag3'],
    date: '2021-01-01'
  },
  {
    id: 2,
    title: 'Post 2',
    description:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    tags: ['tag1', 'tag2', 'tag3'],
    date: '2021-01-01'
  },
  {
    id: 3,
    title: 'Post 3',
    description:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    tags: ['tag1', 'tag2', 'tag3'],
    date: '2021-01-01'
  }
];
