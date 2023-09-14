import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const AboutMeContent = () => {
  return (
    <div className="flex items-center gap-3 p-3 border rounded-md select-none bg-cd-dark-gray/20 border-cd-gray/10">
      <div className="flex flex-col gap-2">
        <Avatar className="w-16 h-16">
          <AvatarImage src="https://github.com/carlosdtn.png" />
          <AvatarFallback>CT</AvatarFallback>
        </Avatar>
        <h1 className="text-sm font-bold leading-tight text-center">
          Carlos Tarmeno
        </h1>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-sm text-cd-gray">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          repellendus, voluptatem quos, officiis, quas voluptatum dolorum
          voluptate quia doloribus ipsam doloremque. Quisquam repellendus,
          voluptatem quos, officiis, quas voluptatum dolorum voluptate quia
          doloribus ipsam doloremque.
        </p>
      </div>
    </div>
  );
};

export default AboutMeContent;
