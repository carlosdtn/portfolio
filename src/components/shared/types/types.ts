export type ResourceType = {
  category: string;
  link: string;
};

export interface CardProps {
  id: number;
  year: number;
  title: string;
  description: string;
  resources: ResourceType[];
  tags: string[];
  date: string;
  logo: {
    src: string;
    alt: string;
  };
  image: {
    src: string;
    alt: string;
  };
}

export interface StackProps {
  [key: string]: {
    name: string;
    icon: string;
  }[];
}
