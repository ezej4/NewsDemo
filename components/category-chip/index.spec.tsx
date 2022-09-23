import CategoryChip from './';
import { render, screen } from '@testing-library/react';
import { mockCategory } from '../../test-utils/mocks';

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
    it('Should render the fields with the correct values', () => {
      render(
        <CategoryChip
          filterCategory={mockCategory}
          resetFilters={testCallback}
        />,
      );

      expect(screen.getByText(mockCategory.name)).toBeInTheDocument();
    });
  });
});
