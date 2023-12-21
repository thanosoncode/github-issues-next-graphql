import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { AppRouterContextProviderMock } from '../utils/test-utils/mockAppProvider';
import Pagination from '../components/issues/pagination/Pagination';
import { MOCK_PAGE_INFO } from '../utils/test-utils/mockData';

describe('Pagination', () => {
  const push = jest.fn();

  beforeEach(() =>
    render(
      <AppRouterContextProviderMock router={{ push }}>
        <Pagination pageInfo={MOCK_PAGE_INFO} />
      </AppRouterContextProviderMock>
    )
  );

  it('should render correctly', () => {
    const pagination = screen.getByTestId('pagination');
    expect(pagination).toBeInTheDocument();
  });

  it('should have buttons correctly disabled and not based on mock page info', () => {
    const previous = screen.getByTestId('previous-button');
    const next = screen.getByTestId('next-button');
    expect(previous).toBeDisabled();
    expect(next).not.toBeDisabled();
  });
});
