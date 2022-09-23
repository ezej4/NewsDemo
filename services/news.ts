import axios from 'axios';
import { INew, Categories, SortBy } from '../entities';
import formatDate from '../utils/formatDate';
import configs from '../configs';
const { newsUrl } = configs;

/**
 * sort news by date - newest first
 * @param news list of articles
 * @returns  list of articles sorted by date
 */
const orderNewsByDate = (news: INew[]) =>
  news.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

/**
 * sort news by amount of views - descending order
 * @param news list of articles
 * @returns list of articles sorted by views
 */
const orderNewsByViews = (news: INew[]) =>
  news.sort((a, b) => b.views - a.views);

/**
 * filter the articles by category
 * @param news list of articles
 * @param category category of articles
 * @returns list of articles filtered by category
 */
const getNewsByCategory = (news: INew[], category: Categories) =>
  news.filter((newItem) => newItem.category === category);

const applyFilters = (news: INew[], sortBy?: string, category?: Categories) => {
  let result = [...news];

  if (!sortBy || sortBy === SortBy.DATE) {
    result = orderNewsByDate(result);
  } else if (sortBy === SortBy.RATED) {
    result = orderNewsByViews(result);
  }
  if (category) {
    result = getNewsByCategory(result, category);
  }

  return result;
};

/**
 * get news from the server
 * @param sortBy sort by date or views
 * @param category category of articles
 * @returns list of articles filtered by category and sorted by date or views
 */
const getNews = async (sortBy?: SortBy, category?: Categories) => {
  const news = await axios.get(newsUrl);
  const formatedNews: INew[] = Object.values(news.data);

  return applyFilters(formatedNews, sortBy, category);
};

/**
 * get segment of the article list
 * @param news list of articles
 * @param limit number of articles to return
 * @returns list of articles limited by limit
 */
const getNewsSegment = (news: INew[], limit: number) => {
  const start = 0;
  const end = start + limit;

  return news.slice(start, end).map((newItem) => ({
    ...newItem,
    createdAt: formatDate(new Date(newItem.createdAt)),
  }));
};

/**
 * get an article by id
 * @param articleId id of the article
 * @returns article with the given id or null if not found
 */
const getArticle = async (articleId: string) => {
  const news = await axios.get(newsUrl);

  if (news.data[articleId]) {
    return {
      ...news.data[articleId],
      createdAt: formatDate(news.data[articleId].createdAt),
    };
  }

  return null;
};

export {
  getNews,
  getArticle,
  applyFilters,
  orderNewsByDate,
  orderNewsByViews,
  getNewsByCategory,
  getNewsSegment,
};
