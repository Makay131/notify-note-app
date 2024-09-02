import {
  BriefcaseBusiness,
  CircleArrowLeft,
  CircleArrowRight,
  Headset,
  LayoutDashboard,
  NotebookText,
  Plus,
  ScrollText,
} from 'lucide-react';
import Seperator from '../seperator/Seperator';
import { Link } from '@tanstack/react-router';

import { useState } from 'react';
import styles from './sidebar.module.css';

import { IconComponentProps } from './types';

const menuNav = [
  {
    name: 'Overview',
    icon: 'layoutDashboard',
  },
  {
    name: 'Notes',
    icon: 'scrollText',
    link: '/dashboard/notes',
  },
  {
    name: 'Tasks',
    icon: 'briefcaseBusiness',
    link: '/dashboard/tasks',
  },
  {
    name: 'Documents',
    icon: 'notebookText',
  },
  {
    name: 'Support',
    icon: 'headset',
  },
];

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

  const equivalentIcons: IconComponentProps = {
    layoutDashboard: LayoutDashboard,
    scrollText: ScrollText,
    notebookText: NotebookText,
    headset: Headset,
    briefcaseBusiness: BriefcaseBusiness,
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

  const MenuNavigationTemplate = (
    <nav className={styles['navigation-container']}>
      <ul className={styles['navigation-list']}>
        {menuNav.map((menu) => {
          const IconComponent = equivalentIcons?.[menu.icon];
          if (menu?.link)
            return (
              <li key={menu.name}>
                <Link
                  activeProps={{
                    style: {
                      borderLeftColor: 'white',
                    },
                  }}
                  className={`${styles['navigation-list-item']} ${!isOpen ? 'justify-center' : ''}`}
                  to={menu.link}
                >
                  <IconComponent />
                  <span className={`${!isOpen ? 'hidden' : ''}`}>{menu.name}</span>
                </Link>
              </li>
            );
          return (
            <li key={menu.name} className={`${styles['navigation-list-item']} ${!isOpen ? 'justify-center' : ''}`}>
              <IconComponent />
              <span className={`${!isOpen ? 'hidden' : ''}`}>{menu.name}</span>
            </li>
          );
        })}
      </ul>
    </nav>
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
      {MenuNavigationTemplate}
      <Seperator />
      {TagsTemplate}
      <Seperator />
    </div>
  );
};

export default Sidebar;
