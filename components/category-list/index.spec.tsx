import CategoryList from './';
import { render, screen } from '@testing-library/react';
import { mockCategoriesList } from '../../test-utils/mocks';

jest.mock('next/router', () => ({
  useRouter() {
    return {
      push: jest.fn(),
    };
  },
}));

describe('CategoryChip', () => {
  const testCallback = jest.fn();

  describe('Render test', () => {
    it('Should render all the categories in the list', () => {
      render(
        <CategoryList
          categories={mockCategoriesList}
          filterByCategory={testCallback}
        />,
      );

      expect(screen.getAllByTestId('category-card')).toHaveLength(
        mockCategoriesList.length,
      );
    });
  });
});
