import { NodeItem } from '../types';

export const MOCK_NODES: NodeItem[] = [
  {
    node: {
      id: 'I_kwDOBlDe9c56TmBN',
      title: 'protected',
      url: 'https://github.com/reactjs/react.dev/issues/6511',
      number: 6511,
      state: 'OPEN',
      createdAt: '2023-12-21T08:32:41Z',
      author: {
        login: 'Vikashyadaw',
      },
      comments: {
        totalCount: 3,
      },
    },
  },
  {
    node: {
      id: 'I_kwDOBlDe9c56LNsE',
      title:
        'bug: The effects displayed by CSS do not match those in the solution.',
      url: 'https://github.com/reactjs/react.dev/issues/6508',
      number: 6508,
      state: 'OPEN',
      createdAt: '2023-12-20T03:16:15Z',
      author: {
        login: 'DongHY1',
      },
      comments: {
        totalCount: 5,
      },
    },
  },
  {
    node: {
      id: 'I_kwDOBlDe9c56IZ1O',
      title: 'Outdated example for Next.js (the app router)',
      url: 'https://github.com/reactjs/react.dev/issues/6506',
      number: 6506,
      state: 'OPEN',
      createdAt: '2023-12-19T16:34:21Z',
      author: {
        login: 'smith558',
      },
      comments: {
        totalCount: 12,
      },
    },
  },
];

export const MOCK_PAGE_INFO = {
  startCursor: 'Y3Vyc29yOnYyOpK5MjAyMy0xMi0yMVQxMDozMjo0MSswMjowMM56TmBN',
  endCursor: 'Y3Vyc29yOnYyOpK5MjAyMy0xMi0wMVQxMTozNzo0MCswMjowMM54bih_',
  hasNextPage: true,
  hasPreviousPage: false,
};
