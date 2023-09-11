import { Button } from '@/components/ui/button';
import React from 'react';
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTwitter
} from '@tabler/icons-react';

const PersonalInfoSection = () => {
  return (
    <section className="flex flex-col gap-4 leading-tight">
      <h3 className="text-xs font-semibold text-cd-light-blue">
        Hi there!, take a journey through my site.
      </h3>
      <h1 className="text-4xl font-extrabold tracking-tight">
        I'm{' '}
        <span className="text-transparent bg-gradient-to-r bg-clip-text from-cd-purple via-cd-light-blue to-cd-green animate-text animate-gradient">
          Carlos Tarmeno
        </span>
        , a<br />
        Front-end developer.
      </h1>
      <p className="text-sm text-cd-gray">
        I'm a Front-end developer based in Lima, Peru. I have a passion for
        creating beautiful and functional user experiences.
      </p>
      <div className="flex gap-3">
        <Button type="button" className="w-28">
          About me
        </Button>
        <div className="flex items-center gap-3">
          <a href="https://github.com/carlosdtn" target="_blank">
            <IconBrandGithub />
          </a>
          <a href="https://github.com/carlosdtn" target="_blank">
            <IconBrandLinkedin />
          </a>
          <a href="https://github.com/carlosdtn" target="_blank">
            <IconBrandTwitter />
          </a>
        </div>
      </div>
    </section>
  );
};

export default PersonalInfoSection;
