import { useState, useEffect, useRef } from 'react';
import { INew, Categories, SortBy, ICategory } from '../entities';
import * as newsService from '../services/news';
import * as categoryService from '../services/categories';
import configs from '../configs';
const { newsByPage } = configs;

interface IUseNews {
  initialNews: INew[];
  category?: Categories | '';
  orderBy?: string;
}

/**
 * Hook to get news from the server and filter them by category and sort them by date or views also you can get the data by segments
 * @param param0
 * @returns
 */
const useNews = ({ initialNews, category, orderBy }: IUseNews) => {
  const [newsList, setNewsList] = useState(initialNews);
  const [news, setNews] = useState<INew[]>([]);
  const limit = useRef(newsByPage);
  const [filterCategory, setFilterCategory] = useState<ICategory | ''>('');

  const filterByCategory = (selectedCategory: ICategory) => {
    const filteredNews = newsService.getNewsByCategory(
      initialNews,
      selectedCategory.id,
    );
    const newsSegment = newsService.getNewsSegment(filteredNews, limit.current);
    setNewsList(filteredNews);
    setNews(newsSegment);
    setFilterCategory(selectedCategory);
  };

  const orderNewsByDate = () => {
    const orderderNews = newsService.orderNewsByDate(initialNews);
    const newsSegment = newsService.getNewsSegment(orderderNews, limit.current);
    setNewsList(orderderNews);
    setNews(newsSegment);
    setFilterCategory('');
  };

  const orderNewsByViews = () => {
    const orderderNews = newsService.orderNewsByViews(initialNews);
    const newsSegment = newsService.getNewsSegment(orderderNews, limit.current);
    setNewsList(orderderNews);
    setNews(newsSegment);
    setFilterCategory('');
  };

  const loadMoreNews = () => {
    limit.current += newsByPage;
    const newsSegment = newsService.getNewsSegment(newsList, limit.current);
    setNews(newsSegment);
  };

  const resetFilters = () => {
    setNewsList(initialNews);
    setNews([]);
    setFilterCategory('');
    limit.current = newsByPage;
    orderNewsByDate();
  };

  useEffect(() => {
    if (category) {
      const selectedCategory = categoryService.getCategory(category);
      if (selectedCategory) {
        return filterByCategory(selectedCategory);
      }
    }
    if (orderBy === SortBy.DATE) {
      return orderNewsByDate();
    }
    if (orderBy === SortBy.RATED) {
      return orderNewsByViews();
    }
    const newsSegment = newsService.getNewsSegment(initialNews, limit.current);
    setNews(newsSegment);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    news,
    amountOfNews: newsList.length,
    filterCategory,
    totalOfItems: initialNews.length,
    filterByCategory,
    orderNewsByDate,
    orderNewsByViews,
    loadMoreNews,
    resetFilters,
  };
};

export default useNews;
