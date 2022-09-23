import { useState } from 'react';
import Head from 'next/head';
import * as newsService from '../services/news';
import * as categoriesService from '../services/categories';
import { INew, Categories, SortBy, IUseNews, ICategory } from '../entities';
import useNews from '../hooks/useNews';
import { NewsList, HeaderNews } from '../components';
import styles from './styles.module.scss';
import { Content } from '../entities/content';
import CategoryList from '../components/category-list';
import CategoryChip from '../components/category-chip';

interface SSRProps {
  query: { category?: Categories; orderBy?: SortBy; showCategories?: boolean };
}

export async function getServerSideProps({ query }: SSRProps) {
  const { category, orderBy, showCategories } = query;

  try {
    const initialNews: INew[] = await newsService.getNews();
    const categoriesList: ICategory[] = categoriesService.getCategories();
    const props: IUseNews = {
      initialNews,
      categoriesList,
      // this is a hack to avoid the error: SerializableError from nextJS"
      showCategories: showCategories || '',
      category: category || '',
      orderBy: orderBy || '',
    };

    return {
      props,
    };
  } catch (error) {
    console.log('error has append', error);

    return {
      redirect: {
        permanent: true,
        destination: '/error',
      },
    };
  }
}

const News = ({
  initialNews,
  categoriesList,
  category,
  orderBy,
  showCategories,
}: IUseNews) => {
  const defaultContent = showCategories ? Content.CATEGORIES : Content.DATE;
  const [activeSection, setActiveSection] = useState<Content>(defaultContent);

  const {
    news,
    filterCategory,
    amountOfNews,
    filterByCategory,
    orderNewsByDate,
    orderNewsByViews,
    loadMoreNews,
    resetFilters,
  } = useNews({
    initialNews,
    category,
    orderBy,
  });

  const filterAndChangeContent = (selectedCategory: ICategory) => {
    filterByCategory(selectedCategory);
    setActiveSection(Content.DATE);
  };

  const showList =
    activeSection === Content.DATE || activeSection === Content.RATED;
  const showCategoryList = activeSection === Content.CATEGORIES;

  return (
    <div className={styles.container}>
      <Head>
        <title>News web page</title>
        <meta name='description' content='Your news in one page' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <HeaderNews
        orderNewsByDate={orderNewsByDate}
        orderNewsByViews={orderNewsByViews}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <main className={styles.main}>
        {filterCategory && (
          <CategoryChip
            filterCategory={filterCategory}
            resetFilters={resetFilters}
          />
        )}
        {showList && (
          <NewsList
            news={news}
            loadMoreNews={loadMoreNews}
            totalNews={amountOfNews}
          />
        )}
        {showCategoryList && (
          <CategoryList
            categories={categoriesList}
            filterByCategory={filterAndChangeContent}
          />
        )}
      </main>
    </div>
  );
};

export default News;
