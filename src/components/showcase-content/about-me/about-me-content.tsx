import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const AboutMeContent = () => {
  return (
    <div className="flex flex-col items-center gap-3 p-3 border rounded-md select-none bg-cd-dark-gray/20 border-cd-gray/10">
      <div className="flex flex-col items-center gap-2 md:flex-row">
        <Avatar className="w-20 h-20 md:w-14 md:h-14">
          <AvatarImage src="https://github.com/carlosdtn.png" />
          <AvatarFallback>CT</AvatarFallback>
        </Avatar>
        <div>
          <h1 className="font-bold text-white">That's me, Carlos Tarmeno</h1>
          <p className="text-sm text-cd-gray">
            I am a student of Software Engineering at the National University of
            San Marcos, currently in my tenth semester. I am someone who seeks
            new challenges, self-motivated, proactive, responsible, and eager to
            expand my knowledge as a Front-end web developer.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMeContent;
