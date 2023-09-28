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
    startDate: '06-22-2023',
    endDate: '09-04-2022',
    responsibilities: [
      'Implemented front-end form validation for registration and login forms.',
      'Designed and styled notification (toast) components.',
      'Added loading animations to form submission buttons.',
      'Integrated a navigation-enhanced sidebar with the company logo.',
      'Designed and integrated user profiles.',
      'Implemented icons to support Progressive Web App (PWA) functionality.',
      'Reviewed and refined contact schema.',
      'Enabled user profile image editing functionality.',
      "Introduced 'loading.tsx' to the 'Profile' page to enhance loading and rendering efficiency."
    ]
  }
];
