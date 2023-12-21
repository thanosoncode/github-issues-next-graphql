export type Author = {
  login: string;
};

export type Comments = {
  totalCount: number;
};

export type OpenIssues = {
  totalCount: number;
};

export type ClosedIssues = {
  totalCount: number;
};

export type NodeItem = {
  node: {
    id: string;
    title: string;
    url: string;
    number: number;
    state: string;
    createdAt: string;
    author: Author;
    comments: Comments;
  };
};

export type IssuesQuery = {
  data: {
    repository: {
      owner: string;
      name: string;
      openIssues: OpenIssues;
      closedIssues: ClosedIssues;
      issues: {
        edges: NodeItem[];
        pageInfo: PageInfo;
      };
    };
  };
};

export type PageInfo = {
  startCursor: string;
  endCursor: string;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
};

export type SearchParams = {
  searchParams: { [key: string]: string | undefined };
};

export type Cursor = string | undefined;

export type GetQueryParams = {
  afterCursor: Cursor;
  beforeCursor: Cursor;
};

export type GetIssues = {
  owner: string;
  name: string;
  query: string;
  cursor: Cursor;
};
