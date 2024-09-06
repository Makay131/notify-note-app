import { Plus } from 'lucide-react';
import styles from './categoriesList.module.css';
import { useUserCategories } from '../../service/auth/queries';

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

type CategoriesListProps = {
  isOpen: boolean;
};

type Category = {
  _id: string;
  name: string;
  color: string;
};

export const CategoriesList = ({ isOpen }: CategoriesListProps) => {
  const userCategories = useUserCategories();

  if (userCategories.isPending) return <span>Loading...</span>;
  if (userCategories.isError) return <span>There is an error</span>;
  const categories = userCategories.data.data.user.categories;
  return (
    <div>
      <ul className={styles['tags-list']}>
        {categories.map((tag: Category) => {
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
};
