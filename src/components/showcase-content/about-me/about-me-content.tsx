import { getBase64 } from '@/components/projects/utils/helpers';
import Image from 'next/image';
import { PHOTO_DATA } from '@/data/utils/constants';

async function AboutMeContent() {
  return (
    <div
      id="dots"
      className="relative flex flex-col items-center gap-3 p-3 border rounded-md select-none bg-cd-dark-gray/20 border-cd-gray/10"
    >
      <div className="top-0 flex flex-col items-center gap-2 md:flex-row">
        <Image
          src={PHOTO_DATA.url}
          alt={PHOTO_DATA.avatar}
          width={80}
          height={80}
          placeholder="blur"
          blurDataURL={await getBase64(PHOTO_DATA.url)}
          className="w-20 h-20 border-4 rounded-full border-cd-dark-gray"
        />
        <div>
          <h1 className="font-bold text-center text-foreground md:text-start">
            That's me, Carlos Tarmeño
          </h1>
          <p className="text-sm text-center text-cd-gray md:text-start">
            Graduate in Software Engineering with 1 year of experience in web
            development, specializing in React, seeking opportunities to apply
            my expertise in creating engaging and functional user interfaces.
            Committed to continuous improvement and adaptability.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMeContent;
