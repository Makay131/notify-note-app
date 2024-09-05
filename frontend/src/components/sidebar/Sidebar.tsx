import { CircleArrowLeft, CircleArrowRight, Plus } from 'lucide-react';
import Seperator from '../seperator/Seperator';

import { useState } from 'react';
import styles from './sidebar.module.css';
import { NavigationMenu } from '../menu/NavigationMenu';

const tags = [
  {
    name: 'Projects',
    color: '#ffcc61',
  },
  {
    name: 'Business',
    color: '#ff9745',
  },
  {
    name: 'Personel',
    color: '#47d8ff',
  },
];

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleSidebarCloseAndOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const TagsTemplate = (
    <div>
      <ul className={styles['tags-list']}>
        {tags.map((tag) => {
          return (
            <li key={tag.name} className={`${styles['tags-list-item']} ${!isOpen ? 'flex-col' : ''}`}>
              <span className={`${styles['tags-list-item-color']}`} style={{ backgroundColor: tag.color }}></span>
              <span>{tag.name}</span>
            </li>
          );
        })}
        <div className={`${styles['tags-list-item']} justify-center cursor-pointer ${!isOpen ? 'flex-col' : ''}`}>
          <Plus className="w-4 h-4" /> Add New
        </div>
      </ul>
    </div>
  );

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
      <NavigationMenu />
      <Seperator isOpen={isOpen} />
      {TagsTemplate}
      <Seperator />
    </div>
  );
};

export default Sidebar;
