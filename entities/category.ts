export enum Categories {
  TECHNOLOGY = 'technology',
  ENVIROMENT = 'environment',
  ENTERTAINMENT = 'entertainment',
  CAR = 'car',
  SCIENCE = 'science',
  FASHION = 'fashion',
  FINANCES = 'finances',
  TRAVEl = 'travel',
}

export interface ICategory {
  id: Categories;
  name: string;
  imageUrl: string;
}
