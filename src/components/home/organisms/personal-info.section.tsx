import Link from 'next/link';
import SocialNetWorks from '../atoms/social-networks';

const PersonalInfoSection = () => {
  return (
    <section className="flex flex-col gap-4 leading-tight">
      <h3 className="text-xs font-semibold text-cd-light-blue">
        Hi there!, take a journey through my site.
      </h3>
      <h1 className="text-[2.15rem] md:text-4xl font-extrabold tracking-tight">
        I'm{' '}
        <span className="text-transparent bg-gradient-to-r bg-clip-text from-cd-purple via-cd-light-blue to-cd-preview animate-text animate-gradient">
          Carlos Tarmeño
        </span>
        , a <br className="hidden md:block" />
        Front-end developer.
      </h1>
      <p className="text-sm text-cd-gray">
        I'm a Front-end developer based in Lima, Peru. I have a passion for
        creating beautiful and functional user experiences.
      </p>
      <div className="flex gap-4 md:gap-3">
        <Link
          href="/about"
          className="flex items-center justify-center py-1 text-sm font-medium rounded-sm bg-primary text-primary-foreground hover:bg-primary/90 w-28 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/20"
        >
          <span>About me</span>
        </Link>
        <div className="flex items-center gap-4 a-child-focus:rounded-sm md:gap-3 a-child-focus:outline-none a-child-focus:ring-2 a-child-focus:ring-foreground/20">
          <SocialNetWorks />
        </div>
      </div>
    </section>
  );
};

export default PersonalInfoSection;
