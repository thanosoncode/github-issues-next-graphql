export const GET_AFTER_ISSUES = `
  query($owner: String!, $name: String!, $cursor: String) {
    repository(owner: $owner, name: $name) {
      openIssues: issues(states: OPEN) {
        totalCount
      }  
      closedIssues: issues(states: CLOSED) {
        totalCount
      }  
      issues(first: 8, states: OPEN, after: $cursor, orderBy: { field: CREATED_AT, direction: DESC }) {
        edges {
          node {
            id
            title
            url
            number
            state
            createdAt
            author {
              login
            }
            comments {
              totalCount
            }
          }
        }
        pageInfo {
          startCursor
          endCursor
          hasNextPage
          hasPreviousPage
        }
      }
    }
  }
`;

export const GET_BEFORE_ISSUES = `
  query($owner: String!, $name: String!, $cursor: String) {
    repository(owner: $owner, name: $name) {
      openIssues: issues(states: OPEN) {
        totalCount
      }
      closedIssues: issues(states: CLOSED) {
        totalCount
      }
      issues(last: 8, states: OPEN, before: $cursor, orderBy: { field: CREATED_AT, direction: DESC }) {
        edges {
          node {
            id
            title
            url
            number
            state
            createdAt
            author {
              login
            }
            comments {
              totalCount
            }
          }
        }
        pageInfo {
          startCursor
          endCursor
          hasNextPage
          hasPreviousPage
        }
      }
    }
  }
`;

export const GET_AFTER_ISSUES_CLOSED = `
  query($owner: String!, $name: String!, $cursor: String) {
    repository(owner: $owner, name: $name) {
      openIssues: issues(states: OPEN) {
        totalCount
      }  
      closedIssues: issues(states: CLOSED) {
        totalCount
      }  
      issues(first: 8, states: CLOSED, after: $cursor, orderBy: { field: CREATED_AT, direction: DESC }) {
        edges {
          node {
            id
            title
            url
            number
            state
            createdAt
            author {
              login
            }
            comments {
              totalCount
            }
          }
        }
        pageInfo {
          startCursor
          endCursor
          hasNextPage
          hasPreviousPage
        }
      }
    }
  }
`;

export const GET_BEFORE_ISSUES_CLOSED = `
  query($owner: String!, $name: String!, $cursor: String) {
    repository(owner: $owner, name: $name) {
      openIssues: issues(states: OPEN) {
        totalCount
      }
      closedIssues: issues(states: CLOSED) {
        totalCount
      }
      issues(last: 8, states: CLOSED, before: $cursor, orderBy: { field: CREATED_AT, direction: DESC }) {
        edges {
          node {
            id
            title
            url
            number
            state
            createdAt
            author {
              login
            }
            comments {
              totalCount
            }
          }
        }
        pageInfo {
          startCursor
          endCursor
          hasNextPage
          hasPreviousPage
        }
      }
    }
  }
`;
