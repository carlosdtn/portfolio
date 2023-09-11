import { CardProps } from '@/components/shared/types/types';
import { ResourceTypeEnum } from '@/data/types/types';

export const projectData: Omit<CardProps, 'tags' | 'date'>[] = [
  {
    id: 1,
    year: 2019,
    title: 'Project 1',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    resources: [
      {
        category: ResourceTypeEnum.Article,
        link: '/articles/1'
      },
      {
        category: ResourceTypeEnum.Demo,
        link: 'https://next-quote-generator.vercel.app/'
      },
      {
        category: ResourceTypeEnum.Source,
        link: 'https://github.com/carlosdtn/NextQuoteGenerator.git'
      }
    ],
    logo: {
      src: '',
      alt: 'Project logo'
    },
    image: {
      src: '',
      alt: 'Project 1'
    }
  },
  {
    id: 2,
    year: 2018,
    title: 'Project 2',
    description:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    resources: [
      {
        category: ResourceTypeEnum.Article,
        link: 'URL_del_artículo'
      },
      {
        category: ResourceTypeEnum.Demo,
        link: 'https://next-quote-generator.vercel.app/'
      },
      {
        category: ResourceTypeEnum.Source,
        link: 'https://github.com/carlosdtn/NextQuoteGenerator.git'
      }
    ],
    logo: {
      src: '',
      alt: 'Project logo'
    },
    image: {
      src: 'https://picsum.photos/200/300',
      alt: 'Project 1'
    }
  },
  {
    id: 3,
    year: 2017,
    title: 'Project 3',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    resources: [
      {
        category: ResourceTypeEnum.Article,
        link: 'URL_del_artículo'
      },
      {
        category: ResourceTypeEnum.Demo,
        link: 'https://next-quote-generator.vercel.app/'
      },
      {
        category: ResourceTypeEnum.Source,
        link: 'https://github.com/carlosdtn/NextQuoteGenerator.git'
      }
    ],
    logo: {
      src: 'https://picsum.photos/200',
      alt: 'Project logo'
    },
    image: {
      src: 'https://picsum.photos/200/300',
      alt: 'Project 1'
    }
  },
  {
    id: 4,
    year: 2016,
    title: 'Project 4',
    description:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    resources: [
      {
        category: ResourceTypeEnum.Article,
        link: 'URL_del_artículo'
      },
      {
        category: ResourceTypeEnum.Demo,
        link: 'https://next-quote-generator.vercel.app/'
      },
      {
        category: ResourceTypeEnum.Source,
        link: 'https://github.com/carlosdtn/NextQuoteGenerator.git'
      }
    ],
    logo: {
      src: 'https://picsum.photos/200',
      alt: 'Project logo'
    },
    image: {
      src: 'https://picsum.photos/200/300',
      alt: 'Project 1'
    }
  }
];
