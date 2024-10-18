export enum ShowcaseTypeEnum {
  Project = 'Project',
  Blog = 'Blog',
  Stack = 'Stack',
  Generic = 'Generic'
}

export enum WorkTypeEnum {
  Corporate = 'Corporate Employment',
  Freelance = 'Freelance Work',
  Volunteer = 'Volunteer Work',
  Collaborative = 'Collaborative Projects'
}

export type ResourceType = {
  category: string;
  link: string;
};

export interface CardProps {
  id: number;
  title: string;
  description: string;
  resources: ResourceType[];
  tags: string[];
  date: string;
  technologies: {
    name: string;
    icon: string;
  }[];
  image: {
    src: string;
    alt: string;
  };
}

export interface stackProps {
  [key: string]: {
    name: string;
    icon: string;
  }[];
}

export interface WorkExperienceProps {
  id: number;
  workType: WorkTypeEnum;
  company: string;
  position: string;
  logo: {
    src: string;
    alt: string;
  };
  startDate: string;
  endDate: string | undefined;
  responsibilities: string[];
}
