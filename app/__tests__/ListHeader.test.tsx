import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import ListHeader from '../components/issues/listHeader/ListHeader';
import { AppRouterContextProviderMock } from '../utils/test-utils/mockAppProvider';

describe('ListHeader', () => {
  const OPEN_COUNT = 220;
  const CLOSED_COUNT = 345;

  const push = jest.fn();

  beforeEach(() =>
    render(
      <AppRouterContextProviderMock router={{ push }}>
        <ListHeader openCount={OPEN_COUNT} closedCount={CLOSED_COUNT} />
      </AppRouterContextProviderMock>
    )
  );

  it('should render correctly', () => {
    const listHeader = screen.getByTestId('list-header');
    expect(listHeader).toBeInTheDocument();
  });

  it('should have correct open and closed count', () => {
    const open = screen.getByTestId('open-count-element');
    expect(open).toHaveTextContent(`${OPEN_COUNT} Open`);
    const closed = screen.getByTestId('closed-count-element');
    expect(closed).toHaveTextContent(`${CLOSED_COUNT} Closed`);
  });
});
