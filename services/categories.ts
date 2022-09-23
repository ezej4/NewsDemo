import configs from '../configs';
import { Categories } from '../entities';
const { newsCategories } = configs;

const getCategories = () => {
  return newsCategories;
};

const getCategory = (id: Categories) => {
  return newsCategories.find((category) => category.id === id);
};

export { getCategories, getCategory };
