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
    startDate: '04-03-2022',
    endDate: '10-31-2022',
    responsibilities: [
      'Administration and maintenance of the CINFO UNMSM website, developed in WordPress.',
      'Configuration, diagnosis, and repair of computer equipment and peripherals.',
      'Monitoring of the SGD (Document Management System)',
      'Providing remote technical support to users of the Moodle',
      'Remote coordination with administrative personnel for assigned functions and tasks.',
      'Conducted training sessions on Moodle usage for both faculty and students.'
    ]
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
    startDate: '12-05-2022',
    endDate: '05-31-2023',
    responsibilities: [
      'Configuration and maintenance of HR web applications.',
      'Development of new web applications/services for HR systems.',
      'Documentation of implementations and updates.',
      'Support for HR applications and systems.',
      'Development of a service for new hires synchronization with the virtual campus (Node.JS).',
      'Development of a service for synchronization of markings in the hospital complex (.NET).'
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
    startDate: '06-22-2023',
    endDate: '09-04-2023',
    responsibilities: [
      'Implemented front-end form validation for registration and login forms.',
      'Designed and styled notification (toast) components.',
      'Integrated a navigation-enhanced sidebar.',
      'Designed and integrated user profiles.',
      'Improved Progressive Web App (PWA) functionality to enhance user experience.',
      'Reviewed and refined contact schema.',
      'Enabled user profile image editing functionality.'
    ]
  },
  {
    id: 4,
    workType: WorkTypeEnum.Freelance,
    company: 'GEVT Group',
    position: 'Frontend Developer',
    logo: {
      src: '/company-logo/gevt-group.png',
      alt: 'GEVT Group logo'
    },
    startDate: '09-11-2023',
    endDate: '11-25-2023',
    responsibilities: [
      'Visual interface and flow design in Figma.',
      'Development of a responsive website consistent with the brand identity.',
      'Implementation of an interactive form and product search section by categories.',
      'Communication with the client to capture requirements and adjust the design.',
      'Optimization of site performance.'
    ]
  },
  {
    id: 5,
    workType: WorkTypeEnum.Corporate,
    company: 'IDBI',
    position: 'Frontend Developer',
    logo: {
      src: '/company-logo/idbi.png',
      alt: 'MegaRed logo'
    },
    startDate: '12-10-2023',
    endDate: undefined,
    responsibilities: [
      'Maintenance and optimization of submodules',
      'Development and integration of new functionalities',
      'Technical documentation and version control management',
      'Optimization of application performance and user experience'
    ]
  }
];
