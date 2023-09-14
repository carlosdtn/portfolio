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
    technologies: [
      {
        name: 'React',
        icon: 'devicon:react'
      },
      {
        name: 'Next.js',
        icon: 'logos:nextjs-icon'
      },
      {
        name: 'TypeScript',
        icon: 'devicon:typescript'
      },
      {
        name: 'Tailwind CSS',
        icon: 'vscode-icons:file-type-tailwind'
      }
    ],
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
    technologies: [
      {
        name: 'React',
        icon: 'devicon:react'
      },
      {
        name: 'Next.js',
        icon: 'logos:nextjs-icon'
      },
      {
        name: 'TypeScript',
        icon: 'devicon:typescript'
      },
      {
        name: 'Tailwind CSS',
        icon: 'vscode-icons:file-type-tailwind'
      }
    ],
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
    technologies: [
      {
        name: 'React',
        icon: 'devicon:react'
      },
      {
        name: 'Next.js',
        icon: 'logos:nextjs-icon'
      },
      {
        name: 'TypeScript',
        icon: 'devicon:typescript'
      },
      {
        name: 'Tailwind CSS',
        icon: 'vscode-icons:file-type-tailwind'
      }
    ],
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
    technologies: [],
    image: {
      src: 'https://picsum.photos/200/300',
      alt: 'Project 1'
    }
  }
];
