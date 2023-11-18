import { CardProps } from '@/components/shared/types/types';
import { ResourceTypeEnum } from '@/data/utils/types';

export const projectData: Omit<CardProps, 'tags'>[] = [
  {
    id: 1,
    date: '02-01-2022',
    title: 'Quote Generator',
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
        name: 'Tailwind',
        icon: 'vscode-icons:file-type-tailwind'
      }
    ],
    image: {
      src: 'https://res.cloudinary.com/ddwtkjumq/image/upload/v1695952306/projects-image/fvjyrnvcmbl11cm8g8mf.png',
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
        category: ResourceTypeEnum.Demo,
        link: 'https://country-quiz-ts.vercel.app/'
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
        name: 'Vite',
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
      src: 'https://res.cloudinary.com/ddwtkjumq/image/upload/v1695952306/projects-image/ikqyqzvrabxowoccwm1t.png',
      alt: 'Country Quiz'
    }
  },
  {
    id: 3,
    date: '05-02-2023',
    title: 'Next Query',
    description: 'SQL Server employee query system with Next.js and Sequelize.',
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
        name: 'Tailwind',
        icon: 'vscode-icons:file-type-tailwind'
      },
      {
        name: 'Sequelize',
        icon: 'logos:sequelize'
      }
    ],
    image: {
      src: 'https://res.cloudinary.com/ddwtkjumq/image/upload/v1695952306/projects-image/yw892glutxb0vkjcnwjf.png',
      alt: 'Next Query'
    }
  },
  {
    id: 4,
    date: '07-22-2023',
    title: 'Memora Date',
    description:
      'A web-based reminder-setting tool that sends notifications via messages or email.',
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
        name: 'Tailwind',
        icon: 'vscode-icons:file-type-tailwind'
      }
    ],
    image: {
      src: 'https://res.cloudinary.com/ddwtkjumq/image/upload/v1695952306/projects-image/q3perdbygmgrwfkexvdl.png',
      alt: 'Memora Date'
    }
  },
  {
    id: 5,
    date: '10-08-2023',
    title: 'Movie Insights',
    description:
      'A prototype frontend for movie details, ratings, and reviews.',
    resources: [
      {
        category: ResourceTypeEnum.Demo,
        link: 'https://movie-insights.vercel.app/'
      },
      {
        category: ResourceTypeEnum.Source,
        link: 'https://github.com/carlosdtn/movie-insights'
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
        name: 'Redux',
        icon: 'logos:redux'
      },
      {
        name: 'Tailwind',
        icon: 'vscode-icons:file-type-tailwind'
      }
    ],
    image: {
      src: 'https://res.cloudinary.com/ddwtkjumq/image/upload/v1698673846/projects-image/pxfxmb2hai9jyiwpd1sp.png',
      alt: 'Movie Insights'
    }
  },
  {
    id: 6,
    date: '09-23-2023',
    title: 'SmarTerrario',
    description:
      'A React Native app for animal environment monitoring with Firebase.',
    resources: [
      {
        category: ResourceTypeEnum.Source,
        link: 'https://github.com/carlosdtn/smarterrario'
      }
    ],
    technologies: [
      {
        name: 'React Native',
        icon: 'devicon:react'
      },
      {
        name: 'Expo',
        icon: 'cib:expo'
      },
      {
        name: 'TypeScript',
        icon: 'devicon:typescript'
      },
      {
        name: 'Firebase',
        icon: 'vscode-icons:file-type-firebase'
      }
    ],
    image: {
      src: 'https://res.cloudinary.com/ddwtkjumq/image/upload/v1700029456/projects-image/ccrjgecxwgpz1pp6wjmm.png',
      alt: 'SmarTerrario'
    }
  }
];
