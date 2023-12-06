import { Separator } from '@/components/ui/separator';
import { SocialNetworksData } from '@/data/social-networks';
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
  IconMail
} from '@tabler/icons-react';
import SocialMediaLink from '../atoms/social-media-link';

const ContactInformation = () => {
  return (
    <div className="flex flex-col gap-5">
      <p className="text-sm">You can contact me through my social networks:</p>
      <div className="flex flex-col items-center justify-center gap-4 text-sm md:flex-row">
        <SocialMediaLink
          href={SocialNetworksData.linkedin}
          icon={<IconBrandLinkedin size={26} />}
          text="/in/carlos-tarmeno"
        />
        <SocialMediaLink
          href={SocialNetworksData.x}
          icon={<IconBrandX size={22} />}
          text="/danielsec_"
        />
      </div>
      <Separator orientation="horizontal" className="bg-cd-separator/10" />
      <div className="flex flex-col justify-center gap-4 text-sm">
        <p>Also you can send me an email to:</p>
        <div className="flex justify-center">
          <SocialMediaLink
            href={`mailto:${SocialNetworksData.email}`}
            icon={<IconMail size={22} />}
            text={SocialNetworksData.email}
            isHidden
          />
        </div>
      </div>
      <Separator orientation="horizontal" />
      <div className="flex flex-col justify-center gap-4 text-sm">
        <p>
          If you want to see the code of this website, you can find it in my
          GitHub profile:
        </p>
        <div className="flex justify-center">
          <SocialMediaLink
            href={`${SocialNetworksData.github}/portfolio`}
            icon={<IconBrandGithub size={22} />}
            text="/carlosdtn/portfolio"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactInformation;
