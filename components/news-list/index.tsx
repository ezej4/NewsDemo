import { INew } from '../../entities';
import styles from './news-list.module.scss';
import NewsCard from '../news-card';
import InfiniteScroll from 'react-infinite-scroll-component';

const NewsList = ({
  news,
  loadMoreNews,
  totalNews,
}: {
  news: INew[];
  loadMoreNews: () => void;
  totalNews: number;
}) => {
  return (
    <div>
      <InfiniteScroll
        className={styles.card_list}
        dataLength={news.length}
        next={loadMoreNews}
        hasMore={news.length < totalNews}
        loader={<span>Loading...</span>
      }
      >
        {news.map((article, index) => (
          <NewsCard key={article.id + index} article={article} />
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default NewsList;
