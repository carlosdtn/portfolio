import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const AboutMeContent = () => {
  return (
    <div className="flex flex-col items-center gap-3 p-3 border rounded-md select-none bg-cd-dark-gray/20 border-cd-gray/10">
      <div className="flex items-center gap-2">
        <Avatar className="w-20 h-20">
          <AvatarImage src="https://github.com/carlosdtn.png" />
          <AvatarFallback>CT</AvatarFallback>
        </Avatar>
        <div>
          <h1 className="font-bold text-white">
            That's me, Carlos Tarmeno, a software engineer.
          </h1>
          <p className="text-sm text-cd-gray">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            repellendus, voluptatem quos, officiis, quas voluptatum dolorum
            voluptate quia doloribus ipsam doloremque. Quisquam repellendus,
            voluptatem quos, officiis, quas voluptatum dolorum voluptate quia
            doloribus ipsam doloremque.
          </p>
        </div>
      </div>
      <div className="flex justify-start w-full gap-2">
        <h1 className="font-bold text-white">My hobbies {'->'}</h1>
        <ul className="flex gap-3">
          <li>Item 1</li>
          <li>Item 2</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutMeContent;
