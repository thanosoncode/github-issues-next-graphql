'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import { PageInfo } from '../../../utils/types';
import Chevron from '../../svg/Chevron';

interface PaginationProps {
  pageInfo: PageInfo;
}

const Pagination: React.FC<PaginationProps> = ({ pageInfo }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const open = searchParams?.get('open');

  const { hasNextPage, hasPreviousPage, startCursor, endCursor } = pageInfo;

  const handlePreviousClick = () => {
    if (open) {
      router.push(`/?before=${startCursor}&open=${open}`);
    } else {
      router.push(`/?before=${startCursor}`);
    }
  };

  const handleNextClick = () => {
    if (open) {
      router.push(`/?after=${endCursor}&open=${open}`);
    } else {
      router.push(`/?after=${endCursor}`);
    }
  };

  return (
    <div className='flex gap-6 justify-center' data-testid='pagination'>
      <button
        data-testid='previous-button'
        onClick={handlePreviousClick}
        disabled={!hasPreviousPage}
        className={`flex gap-2 items-center py-1 px-2 rounded-md border border-transparent duration-200 ${
          hasPreviousPage
            ? 'text-blue-color hover:border-border-color hover:border'
            : 'text-secondary-color'
        }`}
      >
        <Chevron variant='left' active={hasPreviousPage} />
        Previous
      </button>
      <button
        data-testid='next-button'
        onClick={handleNextClick}
        disabled={!hasNextPage}
        className={`flex gap-2 items-center py-1 px-2 rounded-md border border-transparent duration-200 ${
          hasNextPage
            ? 'text-blue-color hover:border-border-color hover:border'
            : 'text-secondary-color'
        }`}
      >
        Next
        <Chevron variant='right' active={hasNextPage} />
      </button>
    </div>
  );
};

export default Pagination;
