import styles from './category-card.module.scss';
import Image from 'next/image';
import { ICategory } from '../../entities';
import { useRouter } from 'next/router';

const CategoryCard = ({
  category,
  filterByCategory,
}: {
  category: ICategory;
  filterByCategory: (selectedCategory: ICategory) => void;
}) => {
  const router = useRouter();

  const handleClick = () => {
    filterByCategory(category);
    router.push(
      {
        pathname: '/',
        query: {
          category: category.id,
        },
      },
      undefined,
      { shallow: true },
    );
  };

  return (
    <div
      data-testid='category-card'
      className={styles.category}
      onClick={handleClick}
    >
      <figure className={styles.category__image_container}>
        <Image
          src={category.imageUrl}
          layout='fill'
          quality={100}
          objectFit='cover'
          alt={category.name}
        />
      </figure>
      <div className={styles.category__footer}>
        <span className={styles.category__name}>{category.name}</span>
      </div>
    </div>
  );
};

export default CategoryCard;
