import {
  getNews,
  getArticle,
  orderNewsByDate,
  orderNewsByViews,
  getNewsByCategory,
  getNewsSegment,
} from './news';
import axios from 'axios';
import { mockNews } from '../test-utils/mocks';
import configs from '../configs';
import newListToObject from '../utils/arrayToObject';
import { Categories } from '../entities';
const { newsUrl } = configs;

jest.mock('axios');

describe('News service', () => {
  let copyNews = [...mockNews];

  beforeEach(() => {
    copyNews = [...mockNews];
  });

  describe('getNews', () => {
    it('should return news ordered by date', async () => {
      (axios.get as jest.Mock).mockResolvedValueOnce({
        data: newListToObject(copyNews),
      });

      const result = await getNews();

      expect(axios.get).toHaveBeenCalledWith(newsUrl);
      expect(result).toEqual([mockNews[2], mockNews[0], mockNews[1]]);
    });
  });
  describe('getArticle', () => {
    it('should return article', async () => {
      (axios.get as jest.Mock).mockResolvedValueOnce({
        data: newListToObject(copyNews),
      });

      const result = await getArticle(mockNews[0].id);

      expect(axios.get).toHaveBeenCalledWith(newsUrl);
      expect(result).toEqual(mockNews[0]);
    });
  });
  describe('orderNewsByDate', () => {
    it('should return news ordered by date', () => {
      const result = orderNewsByDate(copyNews);

      expect(result).toEqual([mockNews[2], mockNews[0], mockNews[1]]);
    });
  });
  describe('orderNewsByViews', () => {
    it('should return news ordered by views', () => {
      const result = orderNewsByViews(copyNews);

      expect(result).toEqual([mockNews[2], mockNews[1], mockNews[0]]);
    });
  });
  describe('getNewsByCategory', () => {
    it('should return news by category', () => {
      const result = getNewsByCategory(copyNews, Categories.TECHNOLOGY);

      expect(result).toEqual([mockNews[0]]);
    });
  });
  describe('getNewsSegment', () => {
    it('should return news segment', () => {
      const result = getNewsSegment(copyNews, 2);

      expect(result).toEqual([mockNews[0], mockNews[1]]);
    });
  });
});
