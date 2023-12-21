import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import List from '../components/issues/list/List';
import { MOCK_NODES } from '../utils/test-utils/mockData';

describe('List', () => {
  beforeEach(() => render(<List nodes={MOCK_NODES} />));

  it('should render list correctly', () => {
    const list = screen.getByTestId('list');
    expect(list).toBeInTheDocument();
  });

  it('should render correct amount of list items based on mock nodes', () => {
    const listItems = screen.getAllByTestId('list-item');
    expect(listItems).toHaveLength(MOCK_NODES.length);
  });

  it('should have correct amount of open issue icons based on mock nodes', () => {
    const icons = screen.getAllByTestId('open-issue-icon');
    expect(icons).toHaveLength(MOCK_NODES.length);
  });

  it('should have correct title in each list item based on mock nodes', () => {
    const listItems = screen.getAllByTestId('link-item-title');
    listItems.forEach((item, index) => {
      expect(item).toHaveTextContent(MOCK_NODES[index].node.title);
    });
  });

  it('should have correct count of comments based on mock nodes', () => {
    const commentCounts = screen.getAllByTestId('comment-count');
    commentCounts.forEach((item, index) => {
      expect(item).toHaveTextContent(
        MOCK_NODES[index].node.comments.totalCount.toString()
      );
    });
  });
});

it('should have correct amount of closed issue icons based on mock nodes', () => {
  render(
    <List
      nodes={[
        ...MOCK_NODES.map((item) => ({
          ...item,
          node: { ...item.node, state: 'CLOSED' },
        })),
      ]}
    />
  );
  const icons = screen.getAllByTestId('closed-issue-icon');
  expect(icons).toHaveLength(MOCK_NODES.length);
});
