import CategoryCard from '.';
import { render, screen } from '@testing-library/react';
import { mockCategory } from '../../test-utils/mocks';

jest.mock('next/router', () => ({
  useRouter() {
    return {
      push: jest.fn(),
    };
  },
}));

jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    // eslint-disable-next-line jsx-a11y/alt-text, @next/next/no-img-element
    return <img {...props} />;
  },
}));

describe('CategoryCard', () => {
  const testCallback = jest.fn();
  describe('Render test', () => {
    it('Should render the fields with the correct values', () => {
      render(
        <CategoryCard category={mockCategory} filterByCategory={testCallback} />,
      );

      const image = screen.getByRole('img');
      const imageUrl = mockCategory.imageUrl;

      expect(image).toHaveAttribute('src', imageUrl);
      expect(image).toHaveAttribute('alt', mockCategory.name);
      expect(screen.getByText(mockCategory.name)).toBeInTheDocument();
    });
  });

  describe('Callback test', () => {
    it('Should call the callback function when clicked', () => {
      render(
        <CategoryCard category={mockCategory} filterByCategory={testCallback} />,
      );

      const categoryCard = screen.getByTestId('category-card');
      categoryCard.click();

      expect(testCallback).toHaveBeenCalledWith(mockCategory);
    });
  });
});
