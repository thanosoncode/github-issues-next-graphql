import { NodeItem } from '@/app/utils/types';
import OpenIssueIcon from '../../svg/OpenIssueIcon';
import Link from 'next/link';
import CommentIcon from '../../svg/CommentIcon';
import CloseIssueIcon from '../../svg/ClosedIssueIcon';

interface ListProps {
  nodes: NodeItem[];
}

const List: React.FC<ListProps> = ({ nodes }) => {
  return (
    <ul data-testid='list'>
      {nodes.map(({ node }, index) => {
        const isLast = index === nodes.length - 1;
        const isOpen = node.state === 'OPEN';
        return (
          <li
            data-testid='list-item'
            key={node.id}
            className={`flex justify-between py-2 px-4 hover:bg-background-accent-color ${
              isLast ? '' : 'border-b border-border-color'
            }`}
          >
            <div className='flex gap-2'>
              <div className='mt-1'>
                {isOpen ? (
                  <OpenIssueIcon variant='green' />
                ) : (
                  <CloseIssueIcon />
                )}
              </div>
              <div>
                <Link
                  data-testid='link-item-title'
                  href={node.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='font-semibold text-base cursor-pointer'
                >
                  {node.title}
                </Link>
                <p className='text-secondary-color text-xs mt-1'>
                  &#x23;{node.number} created by {node.author.login}
                </p>
              </div>
            </div>
            {node.comments.totalCount > 0 ? (
              <Link
                href={node.url}
                target='_blank'
                rel='noopener noreferrer'
                className='flex gap-1'
              >
                <span className='mt-0.5'>
                  <CommentIcon />
                </span>
                <span data-testid='comment-count'>
                  {node.comments.totalCount}
                </span>
              </Link>
            ) : null}
          </li>
        );
      })}
    </ul>
  );
};

export default List;
