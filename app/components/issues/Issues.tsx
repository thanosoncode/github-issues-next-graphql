import {
  GET_AFTER_ISSUES,
  GET_AFTER_ISSUES_CLOSED,
  GET_BEFORE_ISSUES,
  GET_BEFORE_ISSUES_CLOSED,
} from '@/app/graphql/queries';
import { BASE_URL, REPO_OWNER, REPO_NAME } from '@/app/utils/constants';
import {
  GetIssues,
  GetQueryParams,
  IssuesQuery,
  SearchParams,
} from '@/app/utils/types';
import List from './list/List';
import Pagination from './pagination/Pagination';
import ListHeader from './listHeader/ListHeader';

const getIssues = async ({ owner, name, query, cursor }: GetIssues) => {
  try {
    const response = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.GH_TOKEN}`,
      },
      body: JSON.stringify({
        query: query,
        variables: {
          owner,
          name,
          cursor,
        },
      }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export type IssuesProps = {
  open: boolean;
  searchParams: SearchParams;
};

const Issues: React.FC<IssuesProps> = async ({
  searchParams: { searchParams },
  open,
}) => {
  const { after: afterCursor, before: beforeCursor } = searchParams;

  const getQuery = ({ afterCursor, beforeCursor }: GetQueryParams) => {
    if (beforeCursor && !open) {
      return GET_BEFORE_ISSUES_CLOSED;
    }
    if (beforeCursor) {
      return GET_BEFORE_ISSUES;
    }
    if (!open) {
      return GET_AFTER_ISSUES_CLOSED;
    }
    return GET_AFTER_ISSUES;
  };

  const query = getQuery({ afterCursor, beforeCursor });

  const { data } = (await getIssues({
    owner: REPO_OWNER,
    name: REPO_NAME,
    query: query,
    cursor: afterCursor || beforeCursor,
  })) as IssuesQuery;

  if (!data || !data.repository) {
    return <div className='ml-8 mt-12'>Something went wrong</div>;
  }

  return (
    <main className='mx-auto w-full max-w-[1200px] px-8 text-sm'>
      <div className='rounded-md border border-border-color w-full mb-6'>
        <ListHeader
          openCount={data.repository.openIssues.totalCount}
          closedCount={data.repository.closedIssues.totalCount}
        />
        <List nodes={data.repository.issues.edges} />
      </div>
      <Pagination pageInfo={data.repository.issues.pageInfo} />
    </main>
  );
};

export default Issues;
