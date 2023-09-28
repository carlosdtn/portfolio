import { CardProps } from '@/components/shared/types/types';
import { ResourceTypeEnum } from '@/data/types/types';

export const projectData: Omit<CardProps, 'tags'>[] = [
  {
    id: 1,
    date: '02-01-2022',
    title: 'Next Quote Generator',
    description:
      'A quote generator was developed, interfacing with the Quote Garden API.',
    resources: [
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
        name: 'Javascript',
        icon: 'devicon:javascript'
      },
      {
        name: 'Tailwind CSS',
        icon: 'vscode-icons:file-type-tailwind'
      }
    ],
    image: {
      src: '/images/projects/next-quote-generator.png',
      alt: 'Next Quote Generator'
    }
  },
  {
    id: 2,
    date: '10-15-2022',
    title: 'Country Quiz',
    description:
      'Using the Rest Country API to create a knowledge quiz about countries.',
    resources: [
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
        name: 'Vite.js',
        icon: 'vscode-icons:file-type-vite'
      },
      {
        name: 'TypeScript',
        icon: 'devicon:typescript'
      },
      {
        name: 'Less',
        icon: 'logos:less'
      }
    ],
    image: {
      src: '/images/projects/country-quiz-ts.png',
      alt: 'Country Quiz'
    }
  },
  {
    id: 3,
    date: '05-02-2023',
    title: 'Next Query',
    description: 'SQL Server employee query system development project',
    resources: [
      {
        category: ResourceTypeEnum.Source,
        link: 'https://github.com/carlosdtn/next-query'
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
        name: 'SQL Server',
        icon: 'simple-icons:microsoftsqlserver'
      },
      {
        name: 'Tailwind CSS',
        icon: 'vscode-icons:file-type-tailwind'
      },
      {
        name: 'Sequelize',
        icon: 'logos:sequelize'
      }
    ],
    image: {
      src: '/images/projects/next-query.png',
      alt: 'Next Query'
    }
  },
  {
    id: 4,
    date: '07-22-2023',
    title: 'Memora Date',
    description:
      'A collaborative effort with peers to create a web-based reminder-setting tool that sends notifications via messages or email.',
    resources: [
      {
        category: ResourceTypeEnum.Demo,
        link: 'https://memora-date.vercel.app/'
      },
      {
        category: ResourceTypeEnum.Source,
        link: 'https://github.com/Railly/memora-date'
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
        name: 'Supabase',
        icon: 'devicon:supabase'
      },
      {
        name: 'Tailwind CSS',
        icon: 'vscode-icons:file-type-tailwind'
      }
    ],
    image: {
      src: '/images/projects/memora-date.png',
      alt: 'Memora Date'
    }
  }
];
