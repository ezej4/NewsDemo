import { Categories, ICategory } from './entities';
const DEFAULT_BASE_URL = 'http://localhost:3000';
const baseUrl = process.env.NEXT_PUBLIC_HOST || DEFAULT_BASE_URL;
const newsCategories: ICategory[] = [
  {
    name: 'Cart',
    id: Categories.CAR,
    imageUrl: `${baseUrl}/assets/images/category_cart.png`,
  },
  {
    name: 'Entertainment',
    id: Categories.ENTERTAINMENT,
    imageUrl: `${baseUrl}/assets/images/category_entertainment.png`,
  },
  {
    name: 'Environment',
    id: Categories.ENVIROMENT,
    imageUrl: `${baseUrl}/assets/images/category_environment.png`,
  },
  {
    name: 'Fashion',
    id: Categories.FASHION,
    imageUrl: `${baseUrl}/assets/images/category_fashion.png`,
  },
  {
    name: 'Finance',
    id: Categories.FINANCES,
    imageUrl: `${baseUrl}/assets/images/category_finance.png`,
  },
  {
    name: 'Science',
    id: Categories.SCIENCE,
    imageUrl: `${baseUrl}/assets/images/category_science.png`,
  },
  {
    name: 'Technology',
    id: Categories.TECHNOLOGY,
    imageUrl: `${baseUrl}/assets/images/category_technology.png`,
  },
  {
    name: 'Travel',
    id: Categories.TRAVEl,
    imageUrl: `${baseUrl}/assets/images/category_travel.png`,
  },
];

const configs = {
  baseUrl,
  newsUrl:
    'https://firebasestorage.googleapis.com/v0/b/interview-498d3.appspot.com/o/news.json?alt=media&token=63f227b0-7774-4016-b7fe-42507315ac9e',
  newsByPage: 20,
  newsCategories,
};

export default configs;
