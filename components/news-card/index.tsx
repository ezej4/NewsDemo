import Image from 'next/image';
import { INew } from '../../entities';
import Icon from '../icon';
import styles from './news-card.module.scss';
import configs from '../../configs';
const { baseUrl } = configs;

const NewsCard = ({ article }: { article: INew }) => {
  const { id, title, thumbnailUrl, category, views, createdAt } = article;

  return (
    <article className={styles.card} data-testid='article-list'>
      <figure className={styles.card__image_container}>
        <Image
          src={thumbnailUrl}
          layout='fill'
          quality={100}
          objectFit='cover'
          alt={title}
        />
      </figure>
      <div className={styles.card__content}>
        <h2 className={styles.card__title}>{title}</h2>
        <div className={styles.card__info}>
          <div className={styles.card__info_left}>
            <Icon name='signal' />
            <span>{category}</span>
          </div>
          <div className={styles.card__info_right}>
            <Icon name='eye' />
            <span>{views}</span>
          </div>
        </div>
      </div>
      <div className={styles.card__footer}>
        <div className={styles.card__date_container}>
          <Icon name='calendar' />
          <span className={styles.card__date}>{createdAt}</span>
        </div>
        <a
          className={styles.card__button}
          href={`${baseUrl}/articles/${id}`}
        >
          Read more
        </a>
      </div>
    </article>
  );
};

export default NewsCard;
