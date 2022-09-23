import { INew, Categories, ICategory } from '../entities';
import formatDate from '../utils/formatDate';

const mockNews: INew[] = [
  {
    id: 'test-id-1',
    createdAt: formatDate(new Date('2022-01-07T08:28:26.217Z')),
    imageUrl: 'https://via.placeholder.com/600x400',
    thumbnailUrl: 'https://via.placeholder.com/150x100',
    title: 'Test title 1',
    subtitle: 'Test subtitle 1',
    body: 'Test body 1',
    views: 1,
    category: Categories.TECHNOLOGY,
  },
  {
    id: 'test-id-2',
    createdAt: formatDate(new Date('2022-01-06T08:28:26.217Z')),
    imageUrl: 'https://via.placeholder.com/600x400',
    thumbnailUrl: 'https://via.placeholder.com/150x100',
    title: 'Test title 2',
    subtitle: 'Test subtitle 2',
    body: 'Test body 2',
    views: 2,
    category: Categories.ENTERTAINMENT,
  },
  {
    id: 'test-id-3',
    createdAt: formatDate(new Date('2022-01-08T08:28:26.217Z')),
    imageUrl: 'https://via.placeholder.com/600x400',
    thumbnailUrl: 'https://via.placeholder.com/150x100',
    title: 'Test title 3',
    subtitle: 'Test subtitle 3',
    body: 'Test body 3',
    views: 3,
    category: Categories.SCIENCE,
  },
];

const mockArticle = mockNews[0];

const mockCategoriesList: ICategory[] = [
  {
    id: Categories.TECHNOLOGY,
    name: 'Technology',
    imageUrl: 'https://via.placeholder.com/600x400',
  },
  {
    id: Categories.ENTERTAINMENT,
    name: 'Entertainment',
    imageUrl: 'https://via.placeholder.com/600x400',
  },
  {
    id: Categories.SCIENCE,
    name: 'Science',
    imageUrl: 'https://via.placeholder.com/600x400',
  },
];

const mockCategory = mockCategoriesList[0];

export { mockNews, mockArticle, mockCategory, mockCategoriesList };
