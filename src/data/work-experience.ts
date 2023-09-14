import {
  WorkExperienceProps,
  WorkTypeEnum
} from '@/components/shared/types/types';

export const workExperienceData: WorkExperienceProps[] = [
  {
    id: 1,
    workType: WorkTypeEnum.Corporate,
    company: 'CINFO UNMSM',
    position: 'IT Support and Helpdesk',
    logo: {
      src: '/company-logo/cinfo-unmsm.png',
      alt: 'CINFO UNMSM logo'
    },
    startDate: '01-01-2021',
    endDate: '01-01-2022',
    responsibilities: ['Function 1', 'Function 2', 'Function 3']
  },
  {
    id: 2,
    workType: WorkTypeEnum.Corporate,
    company: 'IBT Group',
    position: 'Systems Intern',
    logo: {
      src: '/company-logo/ibt-group.png',
      alt: 'IBT Group logo'
    },
    startDate: '01-01-2021',
    endDate: '01-01-2022',
    responsibilities: [
      'Perform functional configurations of applications integrated into the HR system.',
      'Provide support for applications and systems in the HR department.',
      'Develop new web applications and functionalities for HR systems.',
      'Document new implementations and updates.',
      'Conduct training sessions for users on new developments or changes.',
      'Manage the creation and access of system users.',
      'Automate user management in Moodle, creating a Node.js-based service.'
    ]
  },
  {
    id: 3,
    workType: WorkTypeEnum.Collaborative,
    company: 'Memora Date',
    position: 'Frontend Developer',
    logo: {
      src: '/company-logo/memora-date.png',
      alt: 'Memora Date logo'
    },
    startDate: '01-01-2021',
    endDate: '01-01-2022',
    responsibilities: ['Function 1', 'Function 2', 'Function 3']
  }
];
