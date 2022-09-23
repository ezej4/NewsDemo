import { ICategory } from '../../entities';
import styles from './category-list.module.scss';
import CategoryCard from '../category-card';

const CategoryList = ({
  categories,
  filterByCategory,
}: {
  categories: ICategory[];
  filterByCategory: (selectedCategory: ICategory) => void;
}) => {
  return (
    <div className={styles.category_list} data-testid='category-list'>
      {categories.map((category) => (
        <CategoryCard
          key={category.id}
          category={category}
          filterByCategory={filterByCategory}
        />
      ))}
    </div>
  );
};

export default CategoryList;
