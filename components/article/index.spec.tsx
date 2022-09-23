import Article from '.';
import { render, screen } from '@testing-library/react';
import { mockArticle } from '../../test-utils/mocks';

jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    // eslint-disable-next-line jsx-a11y/alt-text, @next/next/no-img-element
    return <img {...props} />;
  },
}));

describe('ArticleCard', () => {
  describe('Render test', () => {
    it('Should render the fields with the correct values', () => {
      render(<Article article={mockArticle} />);
      const image = screen.getByRole('img');
      const imageUrl = mockArticle.imageUrl;

      expect(image).toHaveAttribute('src', imageUrl);
      expect(image).toHaveAttribute('alt', mockArticle.title);
      expect(screen.getByText(mockArticle.title)).toBeInTheDocument();
      expect(screen.getByText(mockArticle.subtitle)).toBeInTheDocument();
      expect(screen.getByText(mockArticle.body)).toBeInTheDocument();
      expect(screen.getByText(mockArticle.createdAt)).toBeInTheDocument();
      expect(screen.getByText(mockArticle.views)).toBeInTheDocument();
      expect(screen.getByText(mockArticle.category)).toBeInTheDocument();
    });
  });
});
