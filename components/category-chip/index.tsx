import { ICategory } from '../../entities';
import styles from './category-badget.module.scss';
import { useRouter } from 'next/router';

const CategoryChip = ({
  filterCategory,
  resetFilters,
}: {
  filterCategory: ICategory;
  resetFilters: () => void;
}) => {
  const router = useRouter();

  const handleChipClick = () => {
    resetFilters();
    router.push(
      {
        pathname: '/',
      },
      undefined,
      { shallow: true },
    );
  };

  return (
    <div className={styles.category_chip} onClick={handleChipClick}>
      <span>{filterCategory.name}</span>
      <div className={styles.category_chip__icon}>
        <div className={styles.category_chip__icon_1} />
        <div className={styles.category_chip__icon_2} />
      </div>
    </div>
  );
};

export default CategoryChip;
