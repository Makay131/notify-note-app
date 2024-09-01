import { CircleArrowLeft, CircleArrowRight } from 'lucide-react';
import { useState } from 'react';

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSidebarCloseAndOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={`${isOpen ? 'w-72' : 'w-20'} h-screen duration-300 ease-in bg-notify-color-primary relative`}>
      <div onClick={handleSidebarCloseAndOpen} className="absolute cursor-pointer -right-3 top-9 w-7 h-7 text-red-800">
        {isOpen ? <CircleArrowLeft className="w-full h-full" /> : <CircleArrowRight className="w-full h-full" />}
      </div>
    </div>
  );
};

export default Sidebar;
