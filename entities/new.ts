import { Categories, ICategory } from './category';

interface INew {
  id: string;
  createdAt: string;
  imageUrl: string;
  thumbnailUrl: string;
  title: string;
  subtitle: string;
  body: string;
  views: number;
  category: Categories;
}

interface IUseNews {
  initialNews: INew[];
  categoriesList: ICategory[];
  showCategories?: boolean | '';
  category?: Categories | '';
  orderBy?: string | '';
}

enum SortBy {
  DATE = 'date',
  RATED = 'rated',
}

export { SortBy };
export type { INew, IUseNews };
