import News from './';
import { render, screen, fireEvent } from '@testing-library/react';
import { mockNews, mockCategoriesList } from '../test-utils/mocks';

jest.mock('next/router', () => ({
  useRouter() {
    return {
      push: jest.fn(),
    };
  },
}));

describe('News', () => {
  const mockNewsCopy = [...mockNews];
  describe('Integration test', () => {
    describe('go to top rated news', () => {
      it('Should re order page by rated when clicked', () => {
        render(
          <News
            initialNews={mockNewsCopy}
            categoriesList={mockCategoriesList}
          />,
        );

        const topRatedButton = screen.getByTestId('rated');
        fireEvent.click(topRatedButton);
        const articles = screen.getAllByTestId('article-list');

        // re order news by rated
        expect(articles[0]).toHaveTextContent(mockNews[2].title);
        expect(articles[1]).toHaveTextContent(mockNews[1].title);
        expect(articles[2]).toHaveTextContent(mockNews[0].title);
      });
    });
    describe('go to recent news', () => {
      it('Should re order page by date when clicked', () => {
        render(
          <News
            initialNews={mockNewsCopy}
            categoriesList={mockCategoriesList}
          />,
        );

        const topRatedButton = screen.getByTestId('date');
        fireEvent.click(topRatedButton);
        const articles = screen.getAllByTestId('article-list');

        // re order news by date
        expect(articles[0]).toHaveTextContent(mockNews[2].title);
        expect(articles[1]).toHaveTextContent(mockNews[0].title);
        expect(articles[2]).toHaveTextContent(mockNews[1].title);
      });
    });
    describe('go to categories selector', () => {
      it('Should go to categories selector when clicked', () => {
        render(
          <News
            initialNews={mockNewsCopy}
            categoriesList={mockCategoriesList}
          />,
        );

        const categoriesButton = screen.getByTestId('categories');
        fireEvent.click(categoriesButton);

        expect(screen.getByTestId('category-list')).toBeInTheDocument();
      });
    });
  });
});
