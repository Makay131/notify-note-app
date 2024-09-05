import { BriefcaseBusiness, Headset, LayoutDashboard, NotebookText, ScrollText } from 'lucide-react';
import { IconComponentProps } from '../sidebar/types';
import styles from './navigationMenu.module.css';
import { Link } from '@tanstack/react-router';

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

type NavigationMenuProps = {
    isOpen: boolean;
}

export const NavigationMenu = ({isOpen}: NavigationMenuProps) => {
  const equivalentIcons: IconComponentProps = {
    layoutDashboard: LayoutDashboard,
    scrollText: ScrollText,
    notebookText: NotebookText,
    headset: Headset,
    briefcaseBusiness: BriefcaseBusiness,
  };
  return (
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
};
