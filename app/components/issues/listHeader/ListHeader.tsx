'use client';
import OpenIssueIcon from '../../svg/OpenIssueIcon';
import CheckIcon from '../../svg/CheckIcon';
import { useRouter, useSearchParams } from 'next/navigation';

interface ListHeaderProps {
  openCount: number;
  closedCount: number;
}

const ListHeader: React.FC<ListHeaderProps> = ({ openCount, closedCount }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const after = searchParams?.get('after');
  const before = searchParams?.get('before');
  const open = searchParams?.get('open') === 'false' ? false : true;

  const handleOpenClick = () => {
    if (after) {
      router.push(`/?after=${after}&open=true`);
    } else if (before) {
      router.push(`/?before=${before}&open=true`);
    } else {
      router.push(`/?open=true`);
    }
  };

  const handleClosedClick = () => {
    if (after) {
      router.push(`/?after=${after}&open=false`);
    } else if (before) {
      router.push(`/?before=${before}&open=false`);
    } else {
      router.push(`/?open=false`);
    }
  };

  return (
    <header
      className='bg-background-accent-color flex gap-4 p-4 items-center border-b border-border-color'
      data-testid='list-header'
    >
      <button className='flex gap-2 items-center' onClick={handleOpenClick}>
        <OpenIssueIcon variant='black' />{' '}
        <span
          className={`${open ? 'font-semibold' : ''}`}
          data-testid='open-count-element'
        >
          {openCount} Open
        </span>
      </button>
      <button className='flex gap-2 items-center' onClick={handleClosedClick}>
        <CheckIcon />{' '}
        <span
          className={`${!open ? 'font-semibold' : ''}`}
          data-testid='closed-count-element'
        >
          {closedCount} Closed
        </span>
      </button>
    </header>
  );
};

export default ListHeader;
