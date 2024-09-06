import { CircleArrowLeft, CircleArrowRight, Plus } from 'lucide-react';
import Seperator from '../seperator/Seperator';

import { useState } from 'react';
import { NavigationMenu } from '../menu/NavigationMenu';
import { CategoriesList } from '../categoriesList/categoriesList';

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleSidebarCloseAndOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={`${isOpen ? 'w-72' : 'w-20'} h-screen duration-300 ease-in bg-notify-color-primary`}>
      <div
        className={`flex flex-col items-center justify-center font-bold text-white bg-notify-color-primary-dark ${isOpen ? 'text-xl' : 'text-sm'} p-4 text-center h-16`}
      >
        <span>NOTIFY</span>
        <div
          onClick={handleSidebarCloseAndOpen}
          className={`cursor-pointer ${isOpen ? 'w-7 h-7' : 'w-5 h-5'} text-white justify-self-end`}
        >
          {isOpen ? <CircleArrowLeft className="w-full h-full" /> : <CircleArrowRight className="w-full h-full" />}
        </div>
      </div>
      <NavigationMenu isOpen={isOpen} />
      <Seperator />
      <CategoriesList isOpen={isOpen} />
      <Seperator />
    </div>
  );
};

export default Sidebar;
