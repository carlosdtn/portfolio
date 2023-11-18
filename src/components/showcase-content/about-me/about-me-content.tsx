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
          <h1 className="font-bold text-center text-white md:text-start">
            That's me, Carlos Tarmeño
          </h1>
          <p className="text-sm text-center text-cd-gray md:text-start">
            I am a student of Software Engineering at the National University of
            San Marcos, currently in my tenth semester. I am someone who seeks
            new challenges, self-motivated, proactive, responsible, and eager to
            expand my knowledge as a Front-end web developer.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMeContent;
