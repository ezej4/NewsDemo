import Image from 'next/image';
import { INew } from '../../entities';
import styles from './article.module.scss';
import Icon from '../icon';

const IconRow = ({ icon, text }: { icon: string; text: string | number }) => (
  <div className={styles.article__info_row}>
    <Icon name={icon} />
    <span>{text}</span>
  </div>
);

const Article = ({ article }: { article: INew }) => {
  const { title, subtitle, imageUrl, body, createdAt, views, category } =
    article;

  return (
    <article className={styles.article}>
      <h1 className={styles.article__title}>{title}</h1>
      <div className={styles.article__icon_container}>
        <IconRow icon='calendar' text={createdAt} />
        <IconRow icon='eye' text={views} />
        <IconRow icon='signal' text={category} />
      </div>
      <figure className={styles.article__image_container}>
        <Image
          src={imageUrl}
          layout='responsive'
          width={600}
          height={300}
          quality={100}
          objectFit='cover'
          alt={title}
        />
      </figure>
      <div className={styles.article__content}>
        <h3 className={styles.article__subtitle}>{subtitle}</h3>
        <p className={styles.article__text}>{body}</p>
      </div>
    </article>
  );
};

export default Article;
