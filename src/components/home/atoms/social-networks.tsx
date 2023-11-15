import { SocialNetworksData } from '@/data/social-networks';
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX
} from '@tabler/icons-react';

const SocialNetWorks = () => {
  return (
    <>
      <a href={SocialNetworksData.github} target="_blank">
        <IconBrandGithub />
      </a>
      <a href={SocialNetworksData.linkedin} target="_blank">
        <IconBrandLinkedin />
      </a>
      <a href={SocialNetworksData.x} target="_blank">
        <IconBrandX />
      </a>
    </>
  );
};

export default SocialNetWorks;
